import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

export function Navbar() {
  return (
    <nav className="bg-[#111111] border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <img src="/drago.svg" alt="DRAGO" className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold text-white">DRAGO DEX</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <a href="#" className="text-white hover:text-orange-500">Swap</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">Pools</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">Stake</a>
              <a href="#" className="text-gray-400 hover:text-orange-500">Portfolio</a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <TonConnectButton />
          </div>
        </div>
      </div>
    </nav>
  );
}