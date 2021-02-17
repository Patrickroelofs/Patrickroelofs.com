/* eslint-disable max-len */
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Footer from '../../../../components/footer/Footer';
import OnGithub from '../../../../components/onGithub/OnGithub';

function Quizzer() {
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
            <LazyLoadImage effect="blur" className="shadow-xl" src="/projects/quizzer_laptop.png" alt="video" />
          </div>
        </div>
      </header>

      <article className="px-4 mb-48">
        <div className="max-w-xl m-auto">
          <h2 className="mb-12 text-5xl font-black text-center text-black md:text-left md:text-6xl font-headers">
            Quizzer
            <span className="text-themeRed">.</span>
          </h2>

          <div className="leading-normal font-headers">
            <p className="text-lg font-bold">Quizzer is a pub-quiz app that through Websockets connects a master, player(s) and a scoreboard together. The master chooses questions and the player answers, the scoreboard keeps the result and presents the winner at the end of the game.</p>
            <p className="mt-12">Written in Javascript using Node.js and MongoDB as a backend and React as frontend. Quizzer was made as a final assignment during my “Develop Web Applications” (DWA) Course at school. This assignment got us an 8 (out of 10), that’s pretty good!</p>
            <p className="mt-6">Below I have included some images and videos from the application.</p>
          </div>
        </div>

        <div className="max-w-3xl m-auto my-12">
          <LazyLoadImage className="shadow-lg" effect="blur" src="/projects/quizzer/quizscoreboard_winner.png" />
          <LazyLoadImage className="shadow-lg" effect="blur" src="/projects/quizzer/quizzerteam_join.png" />
          <LazyLoadImage className="shadow-lg" effect="blur" src="/projects/quizzer/quizzerchoosequestion.png" />
          <LazyLoadImage className="shadow-lg" effect="blur" src="/projects/quizzer/quizzeracceptquestion.png" />
        </div>
      </article>

      <OnGithub link="https://github.com/Patrickroelofs/HANICA-DWA-Quizzer" />

      <Footer />
    </motion.div>
  );
}

export default Quizzer;
