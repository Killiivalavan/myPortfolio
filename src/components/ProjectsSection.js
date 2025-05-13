import React from 'react';

const projects = [
  {
    id: "1",
    title: "D.A.I.S.Y",
    description: "DAISY is an offline AI voice assistant built with Python, using LLaMA 3.2 and RAG for smart, voice-based interactions.",
    techStack: [ "Flask", "JavaScript", "HTML/CSS"],
    githubLink: "https://github.com/Killiivalavan/DAISY",
  },
  {
    id: "2",
    title: "Summarizer using LLM",
    description: "A Python summarizer that converts PDFs and audio to concise text and audio summaries.",
    techStack: ["Python"],
    githubLink: "https://github.com/Killiivalavan/Summarizer-using-LLM",
  },
  {
    id: "3",
    title: "Expense Tracker",
    description: "A comprehensive expense tracking application with authentication, interactive dashboards, and data visualization capabilities.",
    techStack: [ "Flask", "JavaScript", "HTML/CSS"],
    githubLink: "https://github.com/Killiivalavan/Expense-Tracker",
  },
  {
    id: "4",
    title: "AI Conspiracy Theorist",
    description: "An offline AI character powered by a local language model, designed to simulate a conspiracy theorist by generating coherent and imaginative theories through prompt engineering.",
    techStack: [ "Flask", "JavaScript", "HTML/CSS"],
    githubLink: "https://github.com/Killiivalavan/AI-conspiracy-theorist",
  },
  {
    id: "5",
    title: "Interactive Story Generator",
    description: "An offline AI-powered story generator that uses a local language model to create dynamic, branching narratives based on user input in real time.",
    techStack: [ "Flask", "JavaScript", "HTML/CSS"],
    githubLink: "https://github.com/Killiivalavan/Story-Genarator",
  },
  {
    id: "6",
    title: "AI Game Code Iterator",
    description: "An AI tool that iteratively reviews, improves, and refactors code using a local language model, streamlining the development process using Groq API and Ollama as fallback.",
    techStack: [ "Flask", "JavaScript", "HTML/CSS"],
    githubLink: "https://github.com/Killiivalavan/code-iterator-AI",
  },

];

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-[#1E1E1E] font-mono">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <span className="text-[#FF79C6]">function</span>
          <h2 className="text-3xl font-mono ml-2 text-[#82AAFF]">myProjects</h2>
          <span className="text-white ml-2">() {"{ }"}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#2D2B55] rounded-lg shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300 border border-[#454368] group"
            >
              <div className="bg-[#191A21] px-4 py-2 flex items-center border-b border-[#454368]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-[#F8F8F2] opacity-70 text-sm">{project.title}.js</span>
              </div>
              <div className="p-8 flex flex-col h-full">
                <div className="flex-grow">
                  <div className="flex items-center mb-4">
                    <span className="text-[#FF79C6] text-lg">const</span>
                    <h3 className="text-2xl ml-3 text-[#82AAFF] font-semibold truncate">{project.title}</h3>
                    <span className="text-white ml-3 text-lg">=</span>
                  </div>
                  <p className="text-[#F8F8F2] mb-6 pl-4 border-l-2 border-[#454368] group-hover:border-[#B392F0] transition-colors duration-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div>
                  <div className="mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-[#191A21] text-[#B392F0] px-4 py-2 rounded-md text-sm mr-3 mb-3 border border-[#454368] hover:border-[#B392F0] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4 mt-2">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center bg-[#191A21] text-[#F8F8F2] px-6 py-3 rounded-md hover:bg-[#2D2B55] transition-all duration-300 border border-[#454368] hover:border-[#B392F0] hover:transform hover:scale-105"
                    >
                      <span className="text-[#FF79C6] mr-2 font-semibold">git</span> clone
                    </a>
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center bg-[#191A21] text-[#F8F8F2] px-6 py-3 rounded-md hover:bg-[#2D2B55] transition-all duration-300 border border-[#454368] hover:border-[#B392F0] hover:transform hover:scale-105"
                      >
                        <span className="text-[#82AAFF] mr-2 font-semibold">npm</span> start
                      </a>
                    )}
                  </div>
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

