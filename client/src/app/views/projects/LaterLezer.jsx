import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/button/Button';

function LaterLezer() {
  const history = useHistory();

  return (
    <>
      <main className="grid max-w-4xl py-8 mx-4 md:grid-cols-2 md:m-auto">

        <div className="self-center">
          <button
            type="button"
            onClick={() => history.push('/')}
            className="text-2xl font-black text-black font-headers md:text-4xl"
          >
            Patrick Roelofs
            <span className="text-themeRed">.</span>
          </button>
        </div>

        <div className="self-center justify-self-start md:justify-self-end">
          <Button goto="/" text="Return home" />
        </div>
      </main>

      <header className="max-w-4xl m-auto mt-16 font-bold font-headers">
        <LazyLoadImage
          effect="blur"
          className="shadow-2xl"
          alt="projectgif"
          src="/projects/laterlezer/laterlezervideo.gif"
        />
        <h1 className="py-12 text-6xl font-black">Laterlezer</h1>
      </header>
    </>
  );
}

export default LaterLezer;
