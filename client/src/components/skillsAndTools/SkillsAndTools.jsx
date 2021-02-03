import React from 'react';
import icons from '../icons/icons';

function SkillsAndTools() {
  return (
    <div className="w-screen max-w-6xl m-auto pt-36 pb-24 text-center">
      <h4 className="font-headers text-black font-black text-6xl">
        Skills & Tools
        <span className="text-themeRed">.</span>
      </h4>
      <p className="font-headers text-black font-medium text-2xl my-6">Things i&apos;ve used over the years.</p>
      <div className="flex flex-wrap items-center justify-center">
        <div className="p-4 m-4 rounded-lg bg-white shadow-xl text-center hover:shadow-2xl hover:scale-125 transform ease-in-out duration-200 transition-all cursor-default">
          {icons.react()}
          <p className="pt-4 font-headers">React</p>
        </div>

        <div className="p-4 m-4 rounded-lg bg-white shadow-xl text-center hover:shadow-2xl hover:scale-125 transform ease-in-out duration-200 transition-all cursor-default">
          {icons.nodejs()}
          <p className="pt-4 font-headers">NodeJS</p>
        </div>

        <div className="p-4 m-4 rounded-lg bg-white shadow-xl text-center hover:shadow-2xl hover:scale-125 transform ease-in-out duration-200 transition-all cursor-default">
          {icons.sass()}
          <p className="pt-4 font-headers">Sass</p>
        </div>

        <div className="p-4 m-4 rounded-lg bg-white shadow-xl text-center hover:shadow-2xl hover:scale-125 transform ease-in-out duration-200 transition-all cursor-default">
          {icons.figma()}
          <p className="pt-4 font-headers">Figma</p>
        </div>

        <div className="p-4 m-4 rounded-lg bg-white shadow-xl text-center hover:shadow-2xl hover:scale-125 transform ease-in-out duration-200 transition-all cursor-default">
          {icons.sketch()}
          <p className="pt-4 font-headers">Sketch</p>
        </div>

        <div className="p-4 m-4 rounded-lg bg-white shadow-xl text-center hover:shadow-2xl hover:scale-125 transform ease-in-out duration-200 transition-all cursor-default">
          {icons.java()}
          <p className="pt-4 font-headers">Java</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsAndTools;
