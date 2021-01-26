import { motion } from 'framer-motion';
import React from 'react';

function ProjectPreviewImage({ url }) {
  const transition = {
    type: 'spring',
    duration: 0.75,
  };

  return (
    <motion.img
      className="w-full rounded-md relative hover:z-50 hover:shadow-2xl"
      whileHover={{ scale: 1.5 }}
      transition={transition}
      key={url}
      src={url}
    />
  );
}

export default ProjectPreviewImage;
