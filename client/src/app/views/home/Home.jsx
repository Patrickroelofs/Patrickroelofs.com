import React from 'react';
import Footer from '../../footer/Footer';
import Header from './header/Header';

function Home() {
  return (
    <>
      <div className="bg-themeWhite 100vw min-h-screen">
        <main className="overflow-hidden min-h-screen 100vw">
          <Header />
        </main>

        <Footer />
      </div>

    </>
  );
}

export default Home;
