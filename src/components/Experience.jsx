import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="relative bg-[#0b1120] text-white py-32 px-6 md:px-20 overflow-hidden">
      
      {/* Subtle Spotlight Glow */}
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Section Header */}
        <div className="flex items-center gap-6 mb-28">
          <div className="w-1 h-20 bg-white"></div>
          <div>
            <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
              Experience
            </p>
            <h2 className="text-5xl font-semibold">
              Professional Journey
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 space-y-24 pl-14">

          {/* EY Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[18px] top-8 w-6 h-6 bg-white rounded-full shadow-xl"></div>

            {/* Card */}
            <div className="bg-[#111827]/80 backdrop-blur-lg border border-white/10 p-12 rounded-2xl 
                            hover:border-white/30 hover:-translate-y-2 
                            transition duration-300 shadow-xl">

              {/* Header */}
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Ernst & Young (EY)
                  </h3>
                  <p className="text-gray-400 mt-2 text-sm tracking-wide">
                    Analyst • Aug 2025 – Dec 2025
                  </p>
                </div>

                
              </div>

              {/* Content */}
              <ul className="mt-10 text-gray-300 space-y-5 leading-relaxed">
                <li>
                  Built a React-based web application as a Consulting Developer for Dell Technologies.
                </li>
                <li>
                  Developed a Factory Monitoring Dashboard to visualize and analyze operational metrics.
                </li>
                <li>
                  Integrated an AI chatbot to analyze trends, answer data-driven queries, and enhance system functionality.
                </li>
                <li>
                  Utilized Python, SQL, and Power BI to generate executive-ready insights and reporting dashboards.
                </li>
              </ul>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-3 mt-10">
                {["React", "Python", "SQL", "Power BI", "AI Integration"].map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-4 py-2 text-sm border border-white/20 rounded-lg text-gray-300 
                               hover:border-white hover:text-white transition duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
