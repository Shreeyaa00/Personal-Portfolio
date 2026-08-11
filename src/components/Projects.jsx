import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0b1120] text-white py-32 px-6 md:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="mb-20">
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
            Projects
          </p>

          <h2 className="text-5xl font-semibold">
            Selected Work
          </h2>

          <div className="w-20 h-[2px] bg-white mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group bg-[#111827]/80 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden
                         hover:border-white/30 transition duration-300 shadow-xl"
            >

              {/* Project Image */}
              <div className="relative w-full h-64 overflow-hidden bg-[#0f172a]">

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition duration-500"
                />

                {/* Image Overlay */}
                <div
                  className="absolute inset-0 bg-black/20
                             group-hover:bg-black/5 transition duration-300"
                ></div>
              </div>

              {/* Project Content */}
              <div className="p-8">

                {/* Title */}
                <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-sm mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 text-xs border border-white/15
                                 rounded-lg text-gray-300
                                 hover:border-white/40 hover:text-white
                                 transition duration-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* GitHub / Project Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-300
                             hover:text-white transition duration-300"
                >
                  View Project
                  <span className="text-lg">↗</span>
                </a>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}