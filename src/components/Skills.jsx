import { motion } from "framer-motion";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#0b1120] text-white py-32 px-6 md:px-20 overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="mb-24">
          <p className="uppercase tracking-widest text-sm text-gray-400 mb-4">
            Skills
          </p>
          <h2 className="text-5xl font-semibold">
            Technical Expertise
          </h2>
          <div className="w-20 h-[2px] bg-white mt-6"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#111827]/80 backdrop-blur-lg border border-white/10 p-10 rounded-2xl 
                       hover:border-white/30 transition duration-300 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-8 text-gray-200">
              Core Tools & Technologies
            </h3>

            <div className="flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 text-sm border border-white/20 rounded-lg 
                             text-gray-300 hover:border-white hover:text-white 
                             transition duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Secondary Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#111827]/80 backdrop-blur-lg border border-white/10 p-10 rounded-2xl 
                       hover:border-white/30 transition duration-300 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-6 text-gray-200">
              Focus Areas
            </h3>

            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>Data Analysis & Visualization</li>
              <li>Machine Learning & Predictive Modeling</li>
              <li>SQL & Database Query Optimization</li>
              <li>Dashboard Development & KPI Reporting</li>
              <li>AI-Driven Application Integration</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
