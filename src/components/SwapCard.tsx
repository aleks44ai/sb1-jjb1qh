import React, { useState } from 'react';
import { TokenInput } from './TokenInput';
import { SwapButton } from './SwapButton';

interface SwapCardProps {
  connected: boolean;
}

export function SwapCard({ connected }: SwapCardProps) {
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const handleSwap = () => {
    // Implement swap logic
    console.log('Swap:', fromAmount, 'TON for', toAmount, 'DRAGO');
  };

  const calculateToAmount = (value: string) => {
    const numValue = parseFloat(value) || 0;
    return (numValue * 100).toString(); // 1 TON = 100 DRAGO
  };

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value);
    setToAmount(calculateToAmount(value));
  };

  return (
    <div className="max-w-lg mx-auto">
      <TokenInput
        label="From"
        value={fromAmount}
        onChange={handleFromAmountChange}
        token="TON"
        balance="10.5"
      />

      <div className="flex justify-center my-4">
        <button className="bg-[#1A1A1A] p-2 rounded-full border border-gray-800">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>

      <TokenInput
        label="To"
        value={toAmount}
        onChange={() => {}}
        token="DRAGO"
        balance="1000.0"
        disabled
      />

      <SwapButton
        connected={connected}
        onClick={handleSwap}
        fromAmount={fromAmount}
        fromToken="TON"
        toToken="DRAGO"
      />
    </div>
  );
}