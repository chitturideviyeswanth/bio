import React from "react";
import { EDUCATION } from "../constants";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <div className="w-full h-full rounded-3xl border border-stone-800 bg-stone-900/80 p-6 md:p-8 backdrop-blur-xl shadow-xl" id="education">
      <div className="flex items-center gap-3 mb-6 border-b border-stone-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
          <GraduationCap className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Education
        </h2>
      </div>

      <div className="space-y-4">
        {EDUCATION.map((edu, index) => (
          <div
            key={index}
            className="bg-stone-950/70 border border-stone-800 rounded-2xl p-5 transition-all hover:border-blue-500/40"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
              <h3 className="text-base font-bold text-white">
                {edu.degree}
              </h3>
              <span className="text-xs font-medium text-stone-400 mt-0.5 sm:mt-0">
                {edu.duration}
              </span>
            </div>
            <p className="text-xs text-blue-400 font-medium">{edu.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
