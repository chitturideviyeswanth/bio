import React from "react";
import { ACHIVEMENTS } from "../constants";
import { Award } from "lucide-react";

const Achievements = () => {
  return (
    <div className="w-full h-full rounded-3xl border border-stone-800 bg-stone-900/80 p-6 md:p-8 backdrop-blur-xl shadow-xl">
      <div className="flex items-center gap-3 mb-6 border-b border-stone-800 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
          <Award className="h-5 w-5" />
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Achievements &amp; Certifications
        </h2>
      </div>

      {ACHIVEMENTS.map((item) => (
        <div
          key={item.id}
          className="bg-stone-950/70 border border-stone-800 rounded-2xl p-5"
        >
          <ul className="space-y-3 text-stone-300 text-sm">
            {item.description.map((point, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-[10px] text-blue-400 mt-0.5">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
