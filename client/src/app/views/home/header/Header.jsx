import { motion } from 'framer-motion';
import React from 'react';

function Header() {
  return (
    <header className="relative w-screen h-screen">
      <div className="absolute top-1/2 w-screen" style={{ transform: 'translateY(-50%)' }}>
        <motion.button
          drag
          dragMomentum={false}
          style={{
            fontSize: '23vw', left: '51vw', top: '-42%', transform: 'matrix(0.92, -0.14, 0.46, 0.99, 0, 0)',
          }}
          className="text-themeRed font-black font-headers absolute z-50 leading-none"
        >
          .
        </motion.button>
        <span style={{ transform: 'rotate(-8deg)' }} className="inline-block">
          <h1 style={{ fontSize: '23vw', transform: 'skew(25deg, 0)' }} className="font-headers font-black uppercase leading-none">Patrick</h1>
        </span>
        <span style={{ transform: 'rotate(-8deg)' }} className="inline-block">
          <h1 style={{ fontSize: '22vw', transform: 'skew(25deg, 0)' }} className="font-headers font-black uppercase -top-8 relative leading-none">Roelofs</h1>
        </span>
      </div>
    </header>
  );
}

export default Header;
