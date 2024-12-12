import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

function Header({ darkMode, toggleDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white dark:bg-black shadow-md z-10 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Full-Stack developer
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex space-x-4">
            <a href="#about" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400">
              Contact
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
        <nav className="md:hidden bg-white dark:bg-black px-4 py-2">
          <a
            href="#about"
            className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#projects"
            className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block py-2 text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;

