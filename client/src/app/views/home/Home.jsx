/* eslint-disable max-len */
import React from 'react';
import Button from '../../../components/button/Button';
import Footer from '../../../components/footer/Footer';
import Header from '../../../components/home/header/Header';
import emoji from '../../../helpers/emojiHelper';

function Home() {
  return (
    <>
      <div className="bg-themeWhite 100vw min-h-screen">
        <main className="overflow-hidden min-h-screen 100vw">
          <Header />
        </main>

        <section className="w-screen min-h-screen max-w-xl m-auto py-16 relative">
          <img
            className="rounded-full mb-8 shadow-xl text-center m-auto md:ml-0"
            style={{ maxWidth: '200px' }}
            src="https://picsum.photos/500"
            alt="profile"
          />
          <p className="block text-xl md:text-2xl font-headers leading-normal relative z-10 px-2">
            Hi, I’m&nbsp;
            <span className="hover:underline cursor-pointer font-medium">Patrick</span>
            &nbsp;a student web developer in&nbsp;
            <span className="hover:underline cursor-pointer">The Netherlands</span>
            {emoji.checkPlatform('🇳🇱')}
            . I am currently spending my time studying&nbsp;
            <span className="hover:underline cursor-pointer">webdevelopment</span>
            👨🏼‍💻.
          </p>
          <p className="block text-xl font-headers pt-8 leading-normal relative z-10 px-2">
            Previously I studied Interaction Design, which means I now have the know-how and creative 👨🏼‍🎨 skills to design and develop websites, like this one!
            <Button text="More about me." goto="/" />
          </p>
        </section>

        <Footer />
      </div>

    </>
  );
}

export default Home;
