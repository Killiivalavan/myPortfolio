import React from 'react';

function AboutSection() {
  const skills = {
    developer: "Versatile Web Developer with expertise in multiple programming languages and building dynamic, responsive, and user-focused web applications.",
    fullstack: "Proficient in frontend and backend development, database management, and AI integrations for intelligent systems.",
    creative: "Combines strong technical skills with a creative edge, bringing a unique perspective to projects through multimedia and design.",
    learner: "Quick Learner with the ability to swiftly adapt to new tools, technologies, and frameworks to solve complex challenges."
  };

  return (
    <section id="about" className="py-20 bg-[#1E1E1E] font-mono">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <span className="text-[#FF79C6]">class</span>
          <h2 className="text-3xl font-mono ml-2 text-[#82AAFF]">AboutMe</h2>
          <span className="text-white ml-2">{"{ }"}</span>
        </div>
        <div className="bg-[#2D2B55] rounded-lg overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300 border border-[#454368]">
          <div className="bg-[#191A21] px-4 py-2 flex items-center border-b border-[#454368]">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-[#F8F8F2] opacity-70 text-sm">AboutMe.js</span>
          </div>
          <div className="p-6 space-y-6">
            {Object.entries(skills).map(([key, value], index) => (
              <div key={index} className="group bg-[#191A21] rounded-md p-4 border border-[#454368] hover:border-[#B392F0] transition-all duration-300">
                <div className="flex items-start space-x-2">
                  <span className="text-[#FF79C6]">const</span>
                  <span className="text-[#82AAFF] font-semibold">{key}</span>
                  <span className="text-white">=</span>
                  <div className="flex-1">
                    <span className="text-[#F8F8F2] group-hover:text-[#B392F0] transition-colors duration-300">
                      "{value}";
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

