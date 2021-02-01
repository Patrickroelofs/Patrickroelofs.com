import React from 'react';

function Footer() {
  const FooterLink = ({ url, name }) => (
    <span className="transition-all inline-block mx-16 transform hover:scale-125 ease-in-out group">
      <a target="_blank" rel="noreferrer" className="text-themeWhite font-headers font-black text-4xl px-4 py-2 inline-block" href={url}>
        {name}
        <span className="group-hover:text-themeRed group-hover:opacity-100 opacity-0 ease-in-out transition-all duration-200">.</span>
      </a>
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
