import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 bg-gray-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                className="text-indigo-400 hover:text-indigo-300 font-medium"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
