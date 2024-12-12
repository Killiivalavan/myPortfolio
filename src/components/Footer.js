import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-gray-700 dark:text-white">
            <p>&copy; {new Date().getFullYear()} Killiivalavan. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4 text-gray-700 dark:text-white">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

