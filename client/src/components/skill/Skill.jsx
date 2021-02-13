import React from 'react';

function Skill({ text, icon }) {
  return (
    <div className="p-4 m-4 text-center transition-all duration-200 ease-in-out transform bg-white rounded-lg shadow-xl cursor-default hover:shadow-2xl hover:scale-125">
      <span className="block w-16 h-16 m-auto">{icon}</span>
      <p className="pt-4 text-xs font-headers">{text}</p>
    </div>
  );
}

export default Skill;
