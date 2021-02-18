/* eslint-disable max-len */
import React, { useState } from 'react';
import parse from 'html-react-parser';
import icons from '../icons/icons';

function PostIt() {
  const randomizedSentences = [
    'My terrible code was included in Githubs Arctic Code Vault...<br> The future of humanity is in my hands.',
    'Pizza, thats my favorite food.',
    "My <a target='_blank' rel='noreferrer' class='underline' href='https://github.com/Patrickroelofs'>Github</a> has a bunch of cool (mostly school) projects.",
    'This website has seen about 40 iterations... (thats not a joke, i really like to remake this)',
  ];
  const [random, setRandom] = useState(Math.floor(Math.random() * randomizedSentences.length));

  return (
    <div
      className="absolute hidden h-full -top-48 w-72 lg:block"
      style={{
        right: '-22vw',
        background: "url('/postit.png') no-repeat",
        backgroundSize: '100%',
      }}
    >
      <div className="relative">
        <p className="pt-16 pl-4 pr-8 text-center transform opacity-65" style={{ transform: 'rotate(-3deg)' }}>
          {parse(randomizedSentences[random])}
        </p>
        <div className="absolute top-72">
          <button
            onClick={() => { setRandom(Math.floor(Math.random() * randomizedSentences.length)); }}
            type="button"
            className="absolute block w-4 h-4 transition-all duration-200 ease-in-out left-8 bottom-5 hover:animate-spin"
          >
            {icons.refresh()}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostIt;
