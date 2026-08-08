import React from "react";
import { PROJECTS } from "../constants";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section className="py-16 w-full max-w-6xl mx-auto px-4" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Projects I've Built
        </h2>
        <div className="mt-2 h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/90 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-blue-500/10"
          >
            {/* Project Image Box */}
            <div className="relative h-56 w-full overflow-hidden bg-stone-950 flex items-center justify-center p-4">
              <img
                src={project.image}
                alt={project.name}
                className="max-h-full max-w-full object-contain transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80"></div>
            </div>

            {/* Content Container */}
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="mb-4 text-sm text-stone-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Badges */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-blue-950/60 px-2.5 py-1 text-xs font-medium text-blue-300 border border-blue-800/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub / Demo Link */}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-stone-800 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span>View Project</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
