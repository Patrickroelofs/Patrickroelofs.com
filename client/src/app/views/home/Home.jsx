/* eslint-disable max-len */
import React, { useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
        <h1 className="relative top-0 font-black text-center text-black uppercase font-headers lg:top-20" style={{ fontSize: '12vw' }}>
          My work
          <span className="font-black text-themeRed font-headers">.</span>
        </h1>

        <div
          className="relative z-10 w-full"
          style={{ background: 'linear-gradient(90deg, #84FAB0 0%, #8FD3F4 100%)', minHeight: '12vh' }}
        >
          <div className="grid max-w-6xl grid-cols-1 py-16 m-auto md:grid-cols-2">

            <div className="px-6">
              <div className="pb-6">
                <div className="w-full">
                  <h3 className="inline-block text-5xl font-bold text-black font-headers">Laterlezer</h3>
                  <div className="inline-block pl-4">
                    <div className="inline-block w-12 px-1 py-2 text-center transition-all duration-200 ease-in-out transform rounded-md cursor-default group hover:bg-white hover:scale-125 hover:shadow-lg">
                      <span className="">{icons.react()}</span>
                      <span className="text-xs text-center opacity-0 group-hover:opacity-100">React</span>
                    </div>
                  </div>
                </div>
                <sub className="text-sm font-medium text-gray-800 font-headers">School Project</sub>
              </div>
              <p className="font-headers">Laterlezer is an article reader app it allows users to parse articles and read them at a later point. The parser cleans articles by removing unnecessary content like advertising and sometimes circumventing pay/cookie walls.</p>
              <Button className="mt-6" text="View Project" goto="/projects/laterlezer/" />
            </div>

            <div className="mx-8 mt-6 text-right font-headers md:mt-0">
              <LazyLoadImage
                effect="blur"
                className="inline-block w-full rounded-sm shadow-2xl"
                src="/projects/laterlezer_laptop.png"
                alt="hello"
              />
            </div>

          </div>
        </div>

        <div
          className="relative z-10 w-full"
          style={{ background: 'linear-gradient(90deg, #FFBCBB 0%, #9DA5FF 100%)', minHeight: '12vh' }}
        >
          <div className="grid max-w-6xl grid-cols-1 py-16 m-auto md:grid-cols-2">

            <div className="px-6">
              <div className="pb-6">
                <div className="w-full">
                  <h3 className="inline-block text-5xl font-bold text-black font-headers">Quizzer</h3>
                  <div className="inline-block pl-4">
                    <div className="inline-block w-12 px-1 py-2 text-center transition-all duration-200 ease-in-out transform rounded-md cursor-default group hover:bg-white hover:scale-125 hover:shadow-lg">
                      <span className="">{icons.react()}</span>
                      <span className="text-xs text-center opacity-0 group-hover:opacity-100">React</span>
                    </div>
                  </div>
                </div>
                <sub className="text-sm font-medium text-gray-800 font-headers">School Project</sub>
              </div>
              <p className="font-headers">Quizzer is a pub-quiz app that through Websockets connects a master, player(s) and a scoreboard together. The master chooses questions and the player answers, the scoreboard keeps the result and presents the winner at the end of the game.</p>
            </div>

            <div className="mx-8 mt-6 text-right font-headers md:mt-0">
              <LazyLoadImage
                effect="blur"
                className="inline-block w-full rounded-sm shadow-2xl"
                src="/projects/quizzer_laptop.png"
                alt="hello"
              />
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
