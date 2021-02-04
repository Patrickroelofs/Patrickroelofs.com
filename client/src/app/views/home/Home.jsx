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

      <section className="w-screen min-h-screen m-auto pt-16 relative">
        <h1 className="relative font-headers text-black font-black text-center top-20 uppercase" style={{ fontSize: '12vw' }}>
          My work
          <span className="text-themeRed font-headers font-black">.</span>
        </h1>

        <div
          className="relative z-10 w-screen"
          style={{ background: 'linear-gradient(90deg, #84FAB0 0%, #8FD3F4 100%)', minHeight: '12vh' }}
        >
          <div className="max-w-6xl m-auto py-16 grid grid-cols-2">

            <div>
              <div className="pb-6">
                <h3 className="font-headers text-black font-bold text-5xl">Laterlezer</h3>
                <sub className="font-headers font-medium text-sm text-gray-800">School Project</sub>
              </div>
              <p className="font-headers">Laterlezer is an article reader app written it allows users to parse articles and read them at a later point. The parser clean articles by removing unnecessary content like advertising and sometimes circumventing pay/cookie walls.</p>
            </div>

            <div className="text-right font-headers">
              <img className="inline-block w-full shadow-2xl mx-8 rounded-sm" src="/projects/laterlezer_laptop.png" alt="hello" />
            </div>

          </div>
        </div>

        <div
          className="relative z-10 w-screen"
          style={{ background: 'linear-gradient(90deg, #FFBCBB 0%, #9DA5FF 100%)', minHeight: '12vh' }}
        >
          <div className="max-w-6xl m-auto py-16 grid grid-cols-2">

            <div>
              <div className="pb-6">
                <h3 className="font-headers text-black font-bold text-5xl">Quizzer</h3>
                <sub className="font-headers font-medium text-sm text-gray-800">School Project</sub>
              </div>
              <p className="font-headers">Quizzer is a pub-quiz app that through Websockets connects a master, player(s) and a scoreboard together. The master chooses questions and the player answers, the scoreboard keeps the result and presents the winner at the end of the game.</p>
            </div>

            <div className="text-right font-headers">
              <img className="inline-block w-full shadow-2xl mx-8 rounded-sm" src="/projects/quizzer_laptop.png" alt="hello" />
            </div>

          </div>
        </div>
      </section>

      <Footer />

    </>
  );
}

export default Home;
