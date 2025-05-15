import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

      return (
    <header className="fixed w-full bg-[#191A21] shadow-lg z-50 font-mono border-b border-[#454368] py-3">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-mono text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300 flex items-center gap-2">
          <span className="text-[#FF79C6]">const</span>
          <span className="text-[#82AAFF]">developer</span>
          <span className="text-[#F8F8F2]">=</span>
          <span>"Full-Stack";</span>
        </Link>
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300">
              <span className="text-[#FF79C6]">import</span> About
            </a>
            <a href="#projects" className="text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300">
              <span className="text-[#82AAFF]">view</span> Projects
            </a>
            <a href="#contact" className="text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300">
              <span className="text-[#FF79C6]">await</span> Contact
            </a>    
          </nav>
          <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-[#191A21] px-4 py-2 border-t border-[#454368]">
          <a
            href="#about"
            className="block py-2 text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-[#FF79C6]">import</span> About
          </a>
          <a
            href="#projects"
            className="block py-2 text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-[#82AAFF]">view</span> Projects
          </a>
          <a
            href="#contact"
            className="block py-2 text-[#F8F8F2] hover:text-[#B392F0] transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="text-[#FF79C6]">await</span> Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;

