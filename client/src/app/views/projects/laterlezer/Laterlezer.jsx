import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Footer from '../../../../components/footer/Footer';

function Laterlezer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <header className="py-8">
        <div className="flex max-w-5xl m-auto mt-16 text-center">
          <div className="relative w-full top-6">
            <Link
              to="/"
              className="font-black text-center text-black uppercase text-8xl font-headers"
            >
              Patrick Roelofs
              <span className="text-themeRed">.</span>
            </Link>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl m-auto">
          <LazyLoadImage effect="blur" className="shadow-xl" src="/projects/laterlezer/laterlezervideo.gif" alt="video" />
        </div>
      </header>

      <article className="max-w-3xl m-auto mb-48">
        <h2 className="text-6xl font-black text-black font-headers">
          Laterlezer
          <span className="text-themeRed">.</span>
        </h2>
      </article>

      <Footer />
    </motion.div>
  );
}

export default Laterlezer;
