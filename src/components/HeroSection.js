import React from 'react';

function HeroSection() {
  return (
    <section className="bg-gray-50 dark:bg-black py-20 md:py-32">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I'm Killiivalavan
          </h1>
          <p className="text-xl mb-6 text-gray-700 dark:text-gray-200">
            A passionate web developer creating amazing digital experiences
          </p>
          <a
            href={process.env.PUBLIC_URL + '/resume 5.pdf'}
            download
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          >
            Download my <span className="font-bold">Resume</span>
          </a>
          <br />
          <br />
          <br />
          <br />
          <a
            href="#projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            View My Projects
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src={process.env.PUBLIC_URL + '/myphoto.jpg'}
            alt="Killiivalavan"
            className="rounded-full mx-auto w-80 h-80 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

