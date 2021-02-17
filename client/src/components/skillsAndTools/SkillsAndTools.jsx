import React from 'react';
import icons from '../icons/icons';
import Skill from '../skill/Skill';

function SkillsAndTools() {
  return (
    <div className="w-full max-w-6xl pb-32 m-auto text-center pt-36">
      <h4 className="text-6xl font-black text-black font-headers">
        Skills & Tools
        <span className="text-themeRed">.</span>
      </h4>
      <p className="my-6 text-2xl font-medium text-black font-headers">Things i&apos;ve used over the years.</p>
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
