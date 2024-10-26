import React from 'react';
import { TonConnectButton, useTonConnect } from '@tonconnect/ui-react';
import { Navbar } from './components/Navbar';
import { SwapCard } from './components/SwapCard';
import { Pools } from './components/Pools';
import { Stake } from './components/Stake';
import { Portfolio } from './components/Portfolio';

function App() {
  const { connected } = useTonConnect();

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {/* Swap Section */}
          <section className="rounded-2xl bg-[#111111] p-8">
            <h1 className="text-3xl font-bold mb-2">Swap</h1>
            <p className="text-gray-400 mb-8">Buy, sell, and explore tokens on TON</p>
            <SwapCard connected={connected} />
          </section>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Pools />
            <Stake />
            <Portfolio />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;