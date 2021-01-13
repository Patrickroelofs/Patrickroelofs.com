import React from 'react';
import { Link } from 'react-router-dom';

const FooterLink = ({ url, name }) => (
  <span className="hover:bg-themeRed transition-colors inline-block mx-16">
    <Link className="text-themeWhite font-headers font-black text-4xl px-4 py-2 inline-block" to={url}>{name}</Link>
  </span>
);

export default FooterLink;
