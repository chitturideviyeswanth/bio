import React from "react";
import { BIO } from "../constants";
import { UserCheck } from "lucide-react";

const Bio = () => {
  return (
    <div className="w-full h-full rounded-3xl border border-stone-800 bg-stone-900/80 p-6 md:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between" id="bio">
      <div>
        <div className="flex items-center gap-3 mb-6 border-b border-stone-800 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <UserCheck className="h-5 w-5" />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Who am I?
          </h2>
        </div>

        <div className="space-y-4 text-stone-300 leading-relaxed">
          {BIO.map((paragraph, index) => (
            <p key={index} className="text-base text-stone-300">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bio;
