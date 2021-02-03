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
      <main ref={constraintsRef} className="overflow-hidden min-h-screen 100vw">
        <Header constraint={constraintsRef} />
      </main>

      <section className="w-screen max-w-xl m-auto pt-16 relative">
        <img
          className="mb-8 text-center m-auto md:ml-0 cursor-pointer transform hover:scale-125 ease-in-out transition-all"
          style={{ maxWidth: '200px' }}
          src={wearMask()}
          alt="profile"
          onClick={() => { setMask(!mask); }}
          aria-hidden="true"
        />
        <p className="block text-xl md:text-2xl font-headers leading-normal relative z-10 px-2">
          Hi, I’m&nbsp;
          <span className="font-medium">Patrick</span>
            &nbsp;a student web developer in The Netherlands
          {emoji.checkPlatform('🇳🇱')}
          . I am currently spending my time studying webdevelopment
          {emoji.checkPlatform('👨🏼‍💻')}
          .
        </p>
        <p className="block text-xl font-headers pt-8 leading-normal relative z-10 px-2">
          Previously I studied Interaction Design, which means I now have the know-how and creative
          {emoji.checkPlatform('👨🏼‍🎨')}
          &nbsp;skills to design and develop websites, like this one!
        </p>
      </section>

      <SkillsAndTools />

      <section className="w-screen min-h-screen m-auto py-16 relative">
        <h1 className="relative font-headers text-black font-black text-center" style={{ fontSize: '12vw' }}>
          My work
          <span className="text-themeRed font-headers font-black">.</span>
        </h1>
      </section>
      <Footer />

    </>
  );
}

export default Home;
