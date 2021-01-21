import React from 'react';
import { Link } from 'react-router-dom';

function Button({ url, text }) {
  return (
    <Link
      to={url}
      className="inline-block mt-6 align-middle font-medium hover:bg-white transform hover:scale-150 hover:shadow-2xl pt-1 pb-2 px-4 z-40 hover:z-50 rounded-md ease-in-out transition-all duration-500"
    >
      <span className="pr-2 relative -top-0.5">👉</span>
      {text}
    </Link>
  );
}

export default Button;
