import React from 'react';
import icons from '../icons/icons';
import Skill from '../skill/Skill';

function SkillsAndTools() {
  return (
    <div className="w-screen max-w-6xl m-auto pt-36 pb-32 text-center">
      <h4 className="font-headers text-black font-black text-6xl">
        Skills & Tools
        <span className="text-themeRed">.</span>
      </h4>
      <p className="font-headers text-black font-medium text-2xl my-6">Things i&apos;ve used over the years.</p>
      <div className="flex flex-wrap items-center justify-center">
        { Skill({ text: 'React', icon: icons.react() }) }
        { Skill({ text: 'NodeJS', icon: icons.nodejs() }) }
        { Skill({ text: 'Sass', icon: icons.sass() }) }
        { Skill({ text: 'Java', icon: icons.java() })}
        { Skill({ text: 'Figma', icon: icons.figma() })}
        { Skill({ text: 'Sketch', icon: icons.sketch() }) }
      </div>
    </div>
  );
}

export default SkillsAndTools;
