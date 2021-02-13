/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import SkillsAndTools from '../../../components/skillsAndTools/SkillsAndTools';
import emoji from '../../../helpers/emojiHelper';

function Home() {
  const constraintsRef = useRef(null);
  const [mask, setMask] = useState(false);
  const wearMask = () => {
    if (mask) { return '/profile_tempMaskOn.png'; }
    return '/profile_temp.png';
  };

  return (
    <>
      <main ref={constraintsRef} className="min-h-screen overflow-hidden">
        <Header constraint={constraintsRef} />
      </main>

      <section className="relative w-full max-w-xl pt-16 m-auto">
        <img
          className="m-auto mb-8 text-center transition-all ease-in-out transform cursor-pointer md:ml-0 hover:scale-125"
          style={{ maxWidth: '200px' }}
          src={wearMask()}
          alt="profile"
          onClick={() => { setMask(!mask); }}
          aria-hidden="true"
        />
        <p className="relative z-10 block px-2 text-xl leading-normal md:text-2xl font-headers">
          Hi, I’m&nbsp;
          <span className="font-medium">Patrick</span>
            &nbsp;a student web developer in The Netherlands
          {emoji.checkPlatform('🇳🇱')}
          . I am currently spending my time studying webdevelopment
          {emoji.checkPlatform('👨🏼‍💻')}
          .
        </p>
        <p className="relative z-10 block px-2 pt-8 text-xl leading-normal font-headers">
          Previously I studied Interaction Design, which means I now have the know-how and creative
          {emoji.checkPlatform('👨🏼‍🎨')}
          &nbsp;skills to design and develop websites, like this one!
        </p>
      </section>

      <SkillsAndTools />

      <section className="relative w-full min-h-screen pt-16 m-auto">
        <h1 className="font-black text-center text-black uppercase font-headers" style={{ fontSize: '12vw' }}>
          My work
          <span className="font-black text-themeRed font-headers">.</span>
        </h1>

      </section>

      <Footer />

    </>
  );
}

export default Home;
