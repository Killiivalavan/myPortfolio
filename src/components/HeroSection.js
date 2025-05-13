import React, { useState, useEffect } from 'react';

function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'killiivalavan.is()';
  const typingSpeed = 100;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-[#1E1E1E] py-20 md:py-32 font-mono">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <div className="mb-4 flex items-center">
            <span className="text-gray-500 dark:text-gray-400">const </span>
            <h1 className="text-4xl md:text-5xl font-mono inline-flex items-center">
              <span className="text-[#9B6BFF] dark:text-[#B392F0]">{text}</span>
              <span className="w-[2px] h-8 bg-gray-400 dark:bg-gray-200 ml-1 animate-pulse"></span>
            </h1>
          </div>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-300 pl-4 border-l-2 border-[#9B6BFF] dark:border-[#B392F0]">
            A passionate web developer creating amazing digital experiences
          </p>
          <div className="space-y-4">
            <a
              href={process.env.PUBLIC_URL + '/resume 7.pdf'}
              download
              className="inline-block px-4 py-2 bg-[#2D2B55] text-white rounded-md hover:bg-[#454368] transition duration-300 font-mono text-sm"
            >
              <span className="text-[#FF79C6]">const</span>{' '}
              <span className="text-[#82AAFF]">resume</span> = 
              <span className="text-[#F8F8F2]">downloadCV()</span>
            </a>
            <br />
            <a
              href="#projects"
              className="inline-block px-4 py-2 bg-[#2D2B55] text-white rounded-md hover:bg-[#454368] transition duration-300 font-mono text-sm"
            >
              <span className="text-[#FF79C6]">await</span>{' '}
              <span className="text-[#82AAFF]">viewProjects()</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative group h-[500px] md:h-[600px] overflow-hidden">
            {/* Tech-themed decorative elements */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#9B6BFF] to-[#B392F0] rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="absolute inset-0 bg-[#9B6BFF] dark:bg-[#B392F0] opacity-10 rounded-lg transform -rotate-6 group-hover:rotate-3 transition-transform duration-700"></div>
            <img
              src={process.env.PUBLIC_URL + '/myphotobgremoved.png'}
              alt="Killiivalavan"
              className="rounded-lg w-full h-full object-contain relative z-10 transform transition-all duration-700 group-hover:scale-105 group-hover:rotate-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

