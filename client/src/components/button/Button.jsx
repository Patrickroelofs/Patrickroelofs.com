import React from 'react';
import { useHistory } from 'react-router-dom';

function Button({ text, goto, className }) {
  const history = useHistory();

  return (
    <button
      className={`${className || ''} block font-medium transition-all ease-in-out transform duration-200`}
      onClick={() => { history.push(goto); }}
      type="button"
    >
      {text}
      &nbsp;👉
    </button>
  );
}

export default Button;
