import React from 'react';
import FooterLink from './footerLink/FooterLink';

function Footer() {
  return (
    <footer className="w-full h-96 bg-black text-center">
      <h6 style={{ fontSize: '18vw', top: '-120px', lineHeight: '0.6' }} className="text-themeWhite font-black font-headers">
        <span style={{ fontSize: '19vw' }}>T</span>
        <span>hanks.</span>
      </h6>
      <div className="pt-16">
        <FooterLink url="/" name="Linkedin" />
        <FooterLink url="/" name="Github" />
        <FooterLink url="/" name="Twitter" />
      </div>
    </footer>
  );
}

export default Footer;
