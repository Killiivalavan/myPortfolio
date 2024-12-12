import React from 'react';

const projects = [
  {
    id: "1",
    title: "Expense Tracker",
    description: "A comprehensive expense tracking application with authentication, interactive dashboards, and data visualization capabilities.",
    techStack: [ "Flask", "JavaScript", "HTML/CSS"],
    githubLink: "https://github.com/Killiivalavan/Expense-Tracker",
    imageUrl: process.env.PUBLIC_URL + '/exptrc.png',
  },
  {
    id: "2",
    title: "Summarizer using LLM",
    description: "A Python summarizer that converts PDFs and audio to concise text and audio summaries.",
    techStack: ["Python"],
    githubLink: "https://github.com/Killiivalavan/Summarizer-using-LLM",
    imageUrl:  process.env.PUBLIC_URL + '/pysummarizer.png',
  },

];

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-colors duration-300"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full text-sm mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 dark:bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-700 transition duration-300"
                  >
                    GitHub
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;

