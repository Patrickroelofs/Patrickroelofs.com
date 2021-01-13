import React from 'react';

function Header() {
  return (
    <header className="relative w-screen h-screen">
      <div className="absolute top-1/2 w-screen" style={{ transform: 'translateY(-50%)' }}>
        <span style={{ transform: 'skew(15deg, 0) rotate(-8deg)' }} className="inline-block">
          <h1 style={{ fontSize: '23vw', transform: 'skew(25deg, 0)' }} className="font-headers font-black uppercase leading-none">Patrick</h1>
        </span>
        <span style={{ transform: 'skew(15deg, 0) rotate(-8deg)' }} className="inline-block">
          <h1 style={{ fontSize: '22vw', transform: 'skew(25deg, 0)' }} className="font-headers font-black uppercase -top-8 relative leading-none">Roelofs</h1>
        </span>
      </div>
    </header>
  );
}

export default Header;
