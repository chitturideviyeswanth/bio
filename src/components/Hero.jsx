import React from "react";
import { HERO } from "../constants";
import { ArrowRight, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center items-start pt-28 pb-12 w-full max-w-4xl mx-auto px-4">
      <p className="px-2 text-lg md:text-xl font-semibold tracking-wide text-blue-400">
        {HERO.greet}
      </p>

      <h1 className="my-4 px-2 text-4xl font-extrabold text-white md:text-6xl lg:text-7xl tracking-tight leading-tight">
        {HERO.name}
      </h1>

      <p className="mb-8 px-2 text-base text-stone-300 md:text-xl leading-relaxed max-w-2xl">
        {HERO.description}
      </p>

      <div className="p-2 flex flex-wrap gap-4 items-center">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:scale-105"
        >
          <span>Explore Projects</span>
          <ArrowRight className="h-4 w-4" />
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-xl border border-stone-800 bg-stone-900/80 px-6 py-3.5 text-sm font-semibold text-stone-200 hover:border-stone-700 hover:bg-stone-800 transition-all duration-200 shadow-md hover:scale-105"
        >
          <Mail className="h-4 w-4 text-blue-400" />
          <span>Get In Touch</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
