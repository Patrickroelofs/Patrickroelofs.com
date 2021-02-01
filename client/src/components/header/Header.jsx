/* eslint-disable no-restricted-globals */
import { motion } from 'framer-motion';
import React from 'react';

function Header({ text }) {
  if (location.pathname === '/') {
    return (
      <header className="relative w-screen h-screen">
        <div className="absolute top-1/2 w-screen" style={{ transform: 'translateY(-50%)' }}>
          <motion.button
            drag
            dragConstraints={{
              top: 25, right: 25, bottom: 25, left: 25,
            }}
            style={{
              fontSize: '23vw', left: '54vw', top: '-42%',
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

  return (
    <header className="relative w-screen">
      <h1
        style={{ fontSize: '12vw' }}
        className="font-headers font-black uppercase -top-8 relative leading-none text-center"
      >
        { text }
      </h1>
    </header>
  );
}

export default Header;
