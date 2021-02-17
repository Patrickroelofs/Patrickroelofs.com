/* eslint-disable no-restricted-globals */
import { motion } from 'framer-motion';
import React from 'react';

function Header({ constraint }) {
  return (
    <header className="relative w-screen h-screen">
      <div className="absolute top-1/2 w-screen" style={{ transform: 'translateY(-50%)' }}>
        <motion.button
          drag
          dragConstraints={constraint}
          dragElastic={1}
          dragTransition={{
            bounceStiffness: 100, bounceDamping: 6, min: 0, max: 500,
          }}
          style={{
            fontSize: '23vw', left: '54vw', top: '-42%', zIndex: 999,
          }}
          className="text-themeRed font-black font-headers absolute leading-none"
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
