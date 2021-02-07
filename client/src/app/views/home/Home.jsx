/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/header/Header';
import SkillsAndTools from '../../../components/skillsAndTools/SkillsAndTools';
import Contact from '../../../components/contact/Contact';
import emoji from '../../../helpers/emojiHelper';
import icons from '../../../components/icons/icons';
import Button from '../../../components/button/Button';

function Home() {
  const constraintsRef = useRef(null);
  const [mask, setMask] = useState(false);
  const wearMask = () => {
    if (mask) { return '/profile_tempMaskOn.png'; }
    return '/profile_temp.png';
  };

  return (
    <>
      <main ref={constraintsRef} className="overflow-hidden min-h-screen">
        <Header constraint={constraintsRef} />
      </main>

      <section className="w-full max-w-xl m-auto pt-16 relative">
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

      <section className="w-full min-h-screen m-auto pt-16 relative">
        <h1 className="relative font-headers text-black font-black text-center top-0 lg:top-20 uppercase" style={{ fontSize: '12vw' }}>
          My work
          <span className="text-themeRed font-headers font-black">.</span>
        </h1>

        <div
          className="relative z-10 w-full"
          style={{ background: 'linear-gradient(90deg, #84FAB0 0%, #8FD3F4 100%)', minHeight: '12vh' }}
        >
          <div className="max-w-6xl m-auto py-16 grid grid-cols-1 md:grid-cols-2">

            <div className="px-6">
              <div className="pb-6">
                <div className="w-full">
                  <h3 className="font-headers text-black font-bold text-5xl inline-block">Laterlezer</h3>
                  <div className="pl-4 inline-block">
                    <div className="group inline-block w-12 px-1 py-2 text-center hover:bg-white transition-all ease-in-out transform duration-200 hover:scale-125 rounded-md hover:shadow-lg cursor-default">
                      <span className="">{icons.react()}</span>
                      <span className="text-xs text-center opacity-0 group-hover:opacity-100">React</span>
                    </div>
                  </div>
                </div>
                <sub className="font-headers font-medium text-sm text-gray-800">School Project</sub>
              </div>
              <p className="font-headers">Laterlezer is an article reader app it allows users to parse articles and read them at a later point. The parser cleans articles by removing unnecessary content like advertising and sometimes circumventing pay/cookie walls.</p>
              <Button className="mt-6" text="View Project" goto="/projects/laterlezer/" />
            </div>

            <div className="text-right font-headers mx-8 mt-6 md:mt-0">
              <img className="inline-block w-full shadow-2xl rounded-sm" src="/projects/laterlezer_laptop.png" alt="hello" />
            </div>

          </div>
        </div>

        <div
          className="relative z-10 w-full"
          style={{ background: 'linear-gradient(90deg, #FFBCBB 0%, #9DA5FF 100%)', minHeight: '12vh' }}
        >
          <div className="max-w-6xl m-auto py-16 grid grid-cols-1 md:grid-cols-2">

            <div className="px-6">
              <div className="pb-6">
                <div className="w-full">
                  <h3 className="font-headers text-black font-bold text-5xl inline-block">Quizzer</h3>
                  <div className="pl-4 inline-block">
                    <div className="group inline-block w-12 px-1 py-2 text-center hover:bg-white transition-all ease-in-out transform duration-200 hover:scale-125 rounded-md hover:shadow-lg cursor-default">
                      <span className="">{icons.react()}</span>
                      <span className="text-xs text-center opacity-0 group-hover:opacity-100">React</span>
                    </div>
                  </div>
                </div>
                <sub className="font-headers font-medium text-sm text-gray-800">School Project</sub>
              </div>
              <p className="font-headers">Quizzer is a pub-quiz app that through Websockets connects a master, player(s) and a scoreboard together. The master chooses questions and the player answers, the scoreboard keeps the result and presents the winner at the end of the game.</p>
            </div>

            <div className="text-right font-headers mx-8 mt-6 md:mt-0">
              <img className="inline-block w-full shadow-2xl rounded-sm" src="/projects/quizzer_laptop.png" alt="hello" />
            </div>

          </div>
        </div>

      </section>

      <Contact />

      <Footer />

    </>
  );
}

export default Home;
