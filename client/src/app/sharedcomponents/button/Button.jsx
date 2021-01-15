import React from 'react';
import { Link } from 'react-router-dom';

function Button({ url, text }) {
  return (
    <Link
      to={url}
      className="text-themeWhite bg-themeRed font-headers font-bold uppercase text-1xl px-4 py-2 mt-6 inline-block"
    >
      {text}
    </Link>
  );
}

export default Button;
