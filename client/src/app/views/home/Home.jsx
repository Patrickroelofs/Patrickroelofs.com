/* eslint-disable max-len */
import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../../../components/contact/Contact';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import PostIt from '../../../components/postit/PostIt';
import SkillsAndTools from '../../../components/skillsAndTools/SkillsAndTools';
import emoji from '../../../helpers/emojiHelper';

function Home() {
  const constraintsRef = useRef(null);
  const [mask, setMask] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const wearMask = () => {
    if (mask) { return '/profile_tempMaskOn.png'; }
    return '/profile_temp.png';
  };

  return (
    <motion.div exit={{ opacity: 0 }}>
      <main ref={constraintsRef} className="min-h-screen overflow-hidden">
        <Header constraint={constraintsRef} />
      </main>

      <section className="relative w-full max-w-xl pt-16 m-auto">
        <PostIt />
        <img
          className="m-auto mb-8 text-center transition-all ease-in-out transform cursor-pointer md:ml-0 hover:scale-125"
          style={{ maxWidth: '200px' }}
          src={wearMask()}
          alt="profile"
          onClick={() => { setMask(!mask); }}
          aria-hidden="true"
        />
        <p className="relative z-10 block px-2 text-xl leading-normal md:text-2xl font-headers">
          Hi, I’m Patrick Roelofs a student web developer in The Netherlands
          {emoji.checkPlatform('🇳🇱')}
          . I am currently spending my time studying webdevelopment
          {emoji.checkPlatform('👨🏼‍💻')}
          .
        </p>
        <p className="relative z-10 block px-2 pt-8 text-xl leading-normal font-headers">
          Previously I studied Interaction Design, which means I now have the know-how and creative skills to design and develop websites, like this one!
        </p>
      </section>

      <SkillsAndTools />

      <section className="relative w-full pt-16 m-auto">
        <h1 className="font-black text-center text-black uppercase font-headers" style={{ fontSize: '12vw' }}>
          My work
          <span className="font-black text-themeRed font-headers">.</span>
        </h1>

        {/* Start project */}
        <div className="h-auto my-16">
          <Link to="/projects/laterlezer" className="flex flex-col m-auto cursor-pointer md:flex-row max-w-7xl group">

            <div className="order-last md:order-first">
              <div className="px-6 py-12">
                <h3 className="pb-6 text-5xl font-black text-black transition-all duration-200 ease-in-out group-hover:text-themeRed font-headers">
                  Laterlezer
                  <span className="text-themeRed">.</span>
                </h3>
                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias libero iusto quia, placeat minus distinctio obcaecati, repellat quidem ad quod dolores suscipit porro!</p>
              </div>
            </div>

            <div className="mx-4">
              <img className="duration-200 ease-in-out transform shadow-lg group-hover:scale-90" src="/projects/laterlezer_laptop.png" alt="laterlezer" />
            </div>

          </Link>
        </div>
        {/* end project */}

        {/* Start project */}
        <div className="h-auto my-16">
          <div className="flex flex-col m-auto cursor-pointer md:flex-row max-w-7xl group">

            <div className="order-last md:order-last">
              <div className="px-6 py-12">
                <h3 className="pb-6 text-5xl font-black text-black transition-all duration-200 ease-in-out group-hover:text-themeRed font-headers">
                  Quizzer
                  <span className="text-themeRed">.</span>
                </h3>
                <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium alias libero iusto quia, placeat minus distinctio obcaecati, repellat quidem ad quod dolores suscipit porro!</p>
              </div>
            </div>

            <div className="order-first mx-4 md:order-first">
              <img className="duration-200 ease-in-out transform shadow-lg group-hover:scale-90" src="/projects/quizzer_laptop.png" alt="quizzer" />
            </div>

          </div>
        </div>
        {/* end project */}

      </section>

      <Contact />

      <Footer />

    </motion.div>
  );
}

export default Home;
