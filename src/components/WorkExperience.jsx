import React from "react";
import { EXPERIENCES } from "../constants";
import { Briefcase } from "lucide-react";

const WorkExperience = () => {
  return (
    <div className="w-full h-full rounded-3xl border border-stone-800 bg-stone-900/80 p-6 md:p-8 backdrop-blur-xl shadow-xl" id="work">
      <div className="flex items-center gap-3 mb-6 border-b border-stone-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
          <Briefcase className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Leadership &amp; Roles
        </h2>
      </div>

      <div className="space-y-6">
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="bg-stone-950/70 border border-stone-800 rounded-2xl p-6 transition-all hover:border-blue-500/40 hover:shadow-lg"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400">
                {experience.title}
              </h3>
              <span className="text-xs font-semibold px-3 py-1 bg-blue-950 text-blue-300 rounded-full border border-blue-800/40 self-start sm:self-auto mt-1 sm:mt-0">
                {experience.duration}
              </span>
            </div>
            <h4 className="text-sm font-medium text-blue-400 mb-3">
              {experience.company}
            </h4>
            <ul className="space-y-2 text-stone-300 text-sm">
              {experience.description.map((desc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
