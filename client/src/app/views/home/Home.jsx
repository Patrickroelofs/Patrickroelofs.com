/* eslint-disable max-len */
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import InProgress from '../../../components/inProgress/InProgress';
import emoji from '../../../helpers/emojiHelper';

function Home() {
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1.90]);

  return (
    <>
      { process.env.NODE_ENV === 'development'
        ? null
        : <InProgress /> }

      <main className="overflow-hidden min-h-screen 100vw">
        <Header />
      </main>

      <section className="w-screen min-h-screen max-w-xl m-auto py-16 relative">
        <motion.img
          className="rounded-full mb-8 shadow-xl text-center m-auto md:ml-0"
          style={{ maxWidth: '200px', opacity }}
          src="https://picsum.photos/500"
          alt="profile"
        />
        <p className="block text-xl md:text-2xl font-headers leading-normal relative z-10 px-2">
          Hi, I’m&nbsp;
          <span className="font-medium">Patrick</span>
            &nbsp;a student web developer in The Netherlands
          {emoji.checkPlatform('🇳🇱')}
          . I am currently spending my time studying webdevelopment
          👨🏼‍💻.
        </p>
        <p className="block text-xl font-headers pt-8 leading-normal relative z-10 px-2">
          Previously I studied Interaction Design, which means I now have the know-how and creative 👨🏼‍🎨 skills to design and develop websites, like this one!
          <Button text="More about me." goto="/about" />
        </p>
      </section>

      <Footer />

    </>
  );
}

export default Home;
