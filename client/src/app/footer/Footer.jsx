import React from 'react';

function Footer() {
  const FooterLink = ({ url, name }) => (
    <span className="hover:bg-themeRed transition-colors inline-block mx-16">
      <a target="_blank" rel="noreferrer" className="text-themeWhite font-headers font-black text-4xl px-4 py-2 inline-block" href={url}>{name}</a>
    </span>
  );

  return (
    <footer className="w-full h-96 bg-black text-center">
      <h6 style={{ fontSize: '18vw', top: '-120px', lineHeight: '0.6' }} className="text-themeWhite font-black font-headers">
        <span style={{ fontSize: '19vw' }}>T</span>
        <span>hanks.</span>
      </h6>
      <div className="pt-16">
        <FooterLink url="https://www.linkedin.com/in/patrick-roelofs/" name="Linkedin" />
        <FooterLink url="https://github.com/Patrickroelofs" name="Github" />
        <FooterLink url="https://twitter.com/Downmetpatrick" name="Twitter" />
      </div>
    </footer>
  );
}

export default Footer;
