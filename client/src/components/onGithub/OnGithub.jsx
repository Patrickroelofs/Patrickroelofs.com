/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function OnGithub({ link }) {
  return (
    <div className="max-w-5xl m-auto mb-48">
      <a
        target="_blank"
        href={link}
        className="block text-xl text-center transition-all duration-200 ease-in-out transform md:text-4xl hover:scale-125 font-headers"
      >
        View this project on Github
        <span className="text-themeRed">.</span>
      </a>
    </div>
  );
}

export default OnGithub;
