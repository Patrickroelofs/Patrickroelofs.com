import { motion } from 'framer-motion';
import React from 'react';

function ProjectPreviewImage({ url }) {
  const transition = {
    type: 'spring',
    duration: 1,
  };

  return (
    <motion.img
      className="w-full rounded-md relative hover:z-10 hover:shadow-2xl cursor-pointer"
      whileHover={{ scale: 1.5 }}
      whileTap={{ scale: 1.2 }}
      transition={transition}
      key={url}
      src={url}
    />
  );
}

export default ProjectPreviewImage;
