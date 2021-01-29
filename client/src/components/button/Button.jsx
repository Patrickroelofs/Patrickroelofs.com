import { motion } from 'framer-motion';
import React from 'react';

function Button({ text }) {
  return (
    <motion.button
      className="mt-6 block font-medium"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.4 }}
      transition={{ ease: 'anticipate' }}
    >
      {text}
      &nbsp;👉
    </motion.button>
  );
}

export default Button;
