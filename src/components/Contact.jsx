import React from "react";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import { Mail, Heart } from "lucide-react";

const Contact = () => {
  return (
    <footer className="w-full border-t border-stone-800/80 bg-black/70 py-12 px-4 text-center backdrop-blur-xl mt-16" id="contact">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/20 text-blue-400 border border-blue-500/30 mb-4">
          <Mail className="h-6 w-6" />
        </div>

        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
          Get In Touch
        </h2>
        <p className="text-stone-400 max-w-md text-sm mb-6 leading-relaxed">
          I am currently open to internship, full-stack, and hardware-software engineering opportunities. Feel free to reach out directly!
        </p>

        {/* Social Icons Bar */}
        <div className="flex justify-center items-center gap-5 mb-6">
          {SOCIAL_MEDIA_LINKS.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:border-blue-500/50 hover:bg-blue-600/20 hover:text-blue-400 transition-all duration-300 shadow-md hover:scale-110"
              aria-label={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Direct Email Display */}
        <div className="mb-8">
          <a
            href="mailto:chitturideviyeswanth@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-all duration-200 shadow-lg shadow-blue-600/30 hover:scale-105"
          >
            <Mail className="h-4 w-4" />
            <span>Say Hello &mdash; chitturideviyeswanth@gmail.com</span>
          </a>
        </div>

        {/* Footer Credit */}
        <p className="text-xs text-stone-500 flex items-center justify-center gap-1 font-light">
          <span>Designed &amp; Built with precision for</span>
          <span className="font-semibold text-stone-300">Chitturi Devi Yeswanth</span>
        </p>
        <p className="text-[11px] text-stone-600 mt-1">
          &copy; {new Date().getFullYear()} Chitturi Devi Yeswanth. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
