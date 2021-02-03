import React from 'react';

function Skill({ text, icon }) {
  return (
    <div className="p-4 m-4 rounded-lg bg-white shadow-xl text-center hover:shadow-2xl hover:scale-125 transform ease-in-out duration-200 transition-all cursor-default">
      {icon}
      <p className="pt-4 font-headers">{text}</p>
    </div>
  );
}

export default Skill;