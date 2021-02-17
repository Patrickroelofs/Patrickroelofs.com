import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Footer from '../../../../components/footer/Footer';
import OnGithub from '../../../../components/onGithub/OnGithub';

function Laterlezer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <header className="py-8">
        <div className="flex max-w-5xl m-auto mt-16 text-center">
          <div className="relative top-0 w-full md:top-6">
            <Link
              to="/"
              className="text-5xl font-black text-center text-black uppercase md:text-8xl font-headers"
            >
              Patrick Roelofs
              <span className="text-themeRed">.</span>
            </Link>
          </div>
        </div>
        <div className="relative z-10 max-w-5xl m-auto">
          <div className="mx-4">
            <LazyLoadImage effect="blur" className="shadow-xl" src="/projects/laterlezer/laterlezervideo.gif" alt="video" />
          </div>
        </div>
      </header>

      <article className="px-4 mb-48">
        <div className="max-w-xl m-auto">
          <h2 className="mb-12 text-5xl font-black text-center text-black md:text-left md:text-6xl font-headers">
            Laterlezer
            <span className="text-themeRed">.</span>
          </h2>

          <div className="leading-normal font-headers">
            <p className="text-lg font-bold">Laterlezer is an article reader app written it allows users to parse articles and read them at a later point. The parser clean articles by removing unnecessary content like advertising and sometimes circumventing pay/cookie walls.</p>
          </div>
        </div>
      </article>

      <OnGithub link="https://github.com/Patrickroelofs/HANICA-DWA-Laterlezer" />

      <Footer />
    </motion.div>
  );
}

export default Laterlezer;
