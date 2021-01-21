import { motion } from 'framer-motion';
import React from 'react';

function Button({ text }) {
  const transition = {
    type: 'spring',
    duration: 0.75,
  };

  return (
    <motion.button
      whileTap={{ scale: 1.25 }}
      whileHover={{ scale: 1.5 }}
      transition={transition}
      className="outline-none focus:outline-none inline-block mt-6 px-2 pt-1.5 pb-2 rounded-md align-middle font-medium"
    >
      {text}
      <span className="pl-2 relative -top-0.5">👉</span>
    </motion.button>
  );
}

export default Button;
