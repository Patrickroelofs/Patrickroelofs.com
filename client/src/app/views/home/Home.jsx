import React from 'react';
import Footer from '../../sharedcomponents/footer/Footer';
import Header from './header/Header';
import Contact from './contact/Contact';
import Description from './description/Description';

function Home() {
  return (
    <>
      <div className="bg-themeWhite 100vw min-h-screen">
        <main className="overflow-hidden min-h-screen 100vw">
          <Header />
        </main>

        <section className="min-h-screen">
          <Description />
        </section>

        <section>
          <Contact />
        </section>

        <Footer />
      </div>

    </>
  );
}

export default Home;
