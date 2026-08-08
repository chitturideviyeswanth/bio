import React, { useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Code2 } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-3 left-0 right-0 z-50 px-4">
      {/* Desktop Menu */}
      <div className="mx-auto hidden max-w-4xl items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-3 backdrop-blur-xl shadow-2xl lg:flex">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30">
            <Code2 className="h-5 w-5" />
          </div>
          <span>Yeswanth<span className="text-blue-500">.</span></span>
        </a>

        <ul className="flex items-center gap-8">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a
                className="text-sm font-medium text-stone-300 transition-all hover:text-blue-400 hover:scale-105"
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Header */}
      <div className="mx-auto flex max-w-md items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-4 py-3 backdrop-blur-xl lg:hidden">
        <a href="#" className="flex items-center gap-2 text-lg font-bold text-white">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
            <Code2 className="h-4 w-4" />
          </div>
          <span>Yeswanth<span className="text-blue-500">.</span></span>
        </a>
        <button
          className="p-2 text-stone-300 hover:text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FaTimes className="h-6 w-6 text-blue-400" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="mx-auto mt-2 max-w-md rounded-2xl border border-white/10 bg-black/90 p-4 backdrop-blur-2xl lg:hidden shadow-2xl">
          <ul className="flex flex-col gap-3">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-base font-medium text-stone-200 hover:bg-blue-600/20 hover:text-blue-400 transition-colors"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
