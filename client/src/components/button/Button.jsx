import { motion } from 'framer-motion';
import React from 'react';
import { useHistory } from 'react-router-dom';

function Button({ text, goto, className }) {
  const history = useHistory();

  return (
    <motion.button
      className={`${className || ''} block font-medium`}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.4 }}
      transition={{ ease: 'anticipate' }}
      onClick={() => { history.push(goto); }}
    >
      {text}
      &nbsp;👉
    </motion.button>
  );
}

export default Button;
