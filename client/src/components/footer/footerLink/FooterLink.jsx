import React from 'react';

const FooterLink = ({ url, name }) => (
  <span className="hover:bg-themeRed transition-colors inline-block mx-16">
    <a target="_blank" rel="noreferrer" className="text-themeWhite font-headers font-black text-4xl px-4 py-2 inline-block" href={url}>{name}</a>
  </span>
);

export default FooterLink;
