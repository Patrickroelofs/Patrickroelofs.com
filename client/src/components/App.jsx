import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import Contact from './homepage/contact/Contact';

function App() {
  return (
    <>
      <div className="bg-themeWhite 100vw min-h-screen">
        <main className="overflow-hidden min-h-screen 100vw">
          <Header />
        </main>

        <section>
          <Contact />
        </section>

        <Footer />
      </div>

    </>
  );
}

export default App;
