import React from 'react';

function AboutSection() {
  const points = [
    "Versatile Web Developer with expertise in multiple programming languages and building dynamic, responsive, and user-focused web applications.",
    "Proficient in frontend and backend development, database management, and AI integrations for intelligent systems.",
    "Combines strong technical skills with a creative edge, bringing a unique perspective to projects through multimedia and design.",
    "Quick Learner with the ability to swiftly adapt to new tools, technologies, and frameworks to solve complex challenges."
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">About Me</h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full">
            <ul className="list-disc list-inside space-y-3 text-lg">
              {points.map((point, index) => (
                <li key={index} className="text-gray-800 dark:text-gray-200">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

