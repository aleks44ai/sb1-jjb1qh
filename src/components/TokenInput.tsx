import React from 'react';

interface TokenInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  token: string;
  balance: string;
  disabled?: boolean;
}

export function TokenInput({
  label,
  value,
  onChange,
  token,
  balance,
  disabled = false
}: TokenInputProps) {
  return (
    <div className="swap-input">
      <div className="flex justify-between mb-2">
        <label className="text-sm text-gray-400">{label}</label>
        <span className="text-sm text-gray-400">Balance: {balance} {token}</span>
      </div>
      
      <div className="flex items-center gap-4">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          className="bg-transparent text-2xl w-full focus:outline-none"
          placeholder="0.0"
        />
        
        <div className="flex items-center gap-2 bg-[#2A2A2A] px-3 py-2 rounded-xl">
          <img src={`/${token.toLowerCase()}.svg`} alt={token} className="w-6 h-6" />
          <span className="font-medium">{token}</span>
        </div>
      </div>
    </div>
  );
}