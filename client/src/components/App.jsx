import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Contact from './homepage/contact/Contact';
import Description from './homepage/description/Description';

function App() {
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

export default App;
