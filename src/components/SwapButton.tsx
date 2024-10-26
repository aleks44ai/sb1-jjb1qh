import React from 'react';

interface SwapButtonProps {
  connected: boolean;
  onClick: () => void;
  fromAmount: string;
  fromToken: string;
  toToken: string;
}

export function SwapButton({
  connected,
  onClick,
  fromAmount,
  fromToken,
  toToken
}: SwapButtonProps) {
  const isValid = connected && parseFloat(fromAmount) > 0;

  return (
    <button
      onClick={onClick}
      disabled={!isValid}
      className={`
        w-full mt-4 py-4 px-6 rounded-xl font-semibold
        ${isValid 
          ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white' 
          : 'bg-gray-800 text-gray-400 cursor-not-allowed'}
      `}
    >
      {!connected ? 'Connect Wallet' 
        : !fromAmount ? 'Enter an amount'
        : `Swap ${fromToken} for ${toToken}`}
    </button>
  );
}