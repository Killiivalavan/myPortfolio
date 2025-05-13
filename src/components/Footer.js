import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#191A21] py-8 font-mono border-t border-[#454368]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-[#F8F8F2]">
            <div className="flex items-center space-x-2">
              <span className="text-[#FF79C6]">const</span>
              <span className="text-[#82AAFF]">copyright</span>
              <span className="text-white">=</span>
              <span className="text-[#F8F8F2]">
                "© {new Date().getFullYear()} Killiivalavan. All rights reserved.";
              </span>
            </div>
          </div>
          <nav className="flex space-x-4 text-[#F8F8F2]">
            <a href="#about" className="bg-[#2D2B55] px-4 py-2 rounded-md hover:bg-[#454368] transition-all duration-300 border border-[#454368] hover:border-[#B392F0]">
              <span className="text-[#FF79C6]">import</span> About
            </a>
            <a href="#projects" className="bg-[#2D2B55] px-4 py-2 rounded-md hover:bg-[#454368] transition-all duration-300 border border-[#454368] hover:border-[#B392F0]">
              <span className="text-[#82AAFF]">view</span> Projects
            </a>
            <a href="#contact" className="bg-[#2D2B55] px-4 py-2 rounded-md hover:bg-[#454368] transition-all duration-300 border border-[#454368] hover:border-[#B392F0]">
              <span className="text-[#FF79C6]">await</span> Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

