import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '../../../components/button/Button';

function LaterLezer() {
  const history = useHistory();

  return (
    <>
      <main className="max-w-4xl grid md:grid-cols-2 py-8 mx-4 md:m-auto">

        <div className="self-center">
          <button
            type="button"
            onClick={() => history.push('/')}
            className="font-headers text-black text-2xl md:text-4xl font-black"
          >
            Patrick Roelofs
            <span className="text-themeRed">.</span>
          </button>
        </div>

        <div className="self-center justify-self-start md:justify-self-end">
          <Button goto="/" text="Return home" />
        </div>
      </main>

      <header className="max-w-4xl m-auto mt-16 font-headers font-bold">
        <img className="shadow-2xl" alt="projectgif" src="/projects/laterlezer/laterlezervideo.gif" />
        <h1 className="text-6xl py-12 font-black">Laterlezer</h1>
      </header>
    </>
  );
}

export default LaterLezer;
