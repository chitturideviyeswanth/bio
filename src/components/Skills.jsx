import React from "react";
import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <div className="w-full h-full rounded-3xl border border-stone-800 bg-stone-900/80 p-6 md:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between" id="skills">
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-6 border-b border-stone-800 pb-4 tracking-tight">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {SKILLS.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-stone-950/70 border border-stone-800/80 rounded-2xl shadow-md hover:border-blue-500/50 hover:shadow-blue-500/20 transform hover:-translate-y-1 transition duration-300 cursor-pointer group"
            >
              <div className="mb-2 p-2 rounded-xl bg-stone-900 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <p className="text-sm font-semibold tracking-wide text-stone-200 group-hover:text-blue-400 transition-colors text-center">
                {skill.name}
              </p>
              <span className="text-[10px] uppercase font-bold text-stone-500 mt-1">
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
