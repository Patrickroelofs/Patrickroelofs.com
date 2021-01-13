import React from 'react';

function App() {
  return (
    <main className="bg-theme 100vw min-h-screen">
      <header className="relative overflow-hidden w-screen h-screen">
        <div className="absolute top-1/2 w-screen" style={{ transform: 'translateY(-50%)' }}>
          <h1 style={{ fontSize: '23vw', transform: 'skew(25deg, 0)' }} className="font-headers font-black uppercase leading-none">Patrick</h1>
          <h1 style={{ fontSize: '22vw', transform: 'skew(25deg, 0)' }} className="font-headers font-black uppercase -top-8 relative leading-none">Roelofs</h1>
        </div>
      </header>
    </main>
  );
}

export default App;
