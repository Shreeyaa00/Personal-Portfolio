import { motion } from "framer-motion";
import profile from "/about.jpeg";

export default function About() {
  return (
    <section className="relative bg-[#0b1120] text-white py-32 px-6 md:px-20 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

{/* LEFT — IMAGE */}
<div className="relative flex justify-center md:justify-start">

  {/* Back panel (depth layer) */}
  <div className="absolute top-10 left-10 w-[380px] h-[500px] bg-white/5 rounded-xl hidden md:block"></div>

  {/* Main Image */}
  <motion.img
    src={profile}
    alt="Shreeya"
    className="relative w-[380px] h-[500px] object-cover object-[50%_30%] 
               rounded-xl shadow-2xl border border-white/10"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  />

</div>


        {/* RIGHT — CONTENT */}
        <div className="space-y-12">

          {/* Section Header */}
          <div className="flex items-start gap-6">
            <div className="w-1 h-20 bg-white"></div>

            <div>
              <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
                About
              </p>

              <h2 className="text-5xl md:text-6xl font-semibold leading-tight">
                Data-Driven <br /> Strategic Thinker
              </h2>
            </div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-300 text-lg leading-relaxed space-y-6 max-w-xl"
          >
            <p>
              I’m Shreeya, a Master’s student in Data Science at Northeastern University, Boston. My academic journey has strengthened my analytical rigor and structured problem-solving approach.
            </p>

            <p>
              I focus on data analysis, translating complex datasets into actionable, evidence-based decisions. I enjoy uncovering patterns, building models, and transforming raw data into strategic insights.
            </p>

            <p>
              With a strong interest in Data Science, AI, and Machine Learning, I aim to bridge technical depth with business impact. My background in dance and art reinforces discipline, precision, and creative thinking, the qualities I integrate into analytical work.
            </p>
          </motion.div>

          {/* METRICS SECTION */}
          <div className="grid grid-cols-3 gap-10 pt-6 border-t border-white/10">

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold">1+</h3>
              <p className="text-gray-400 text-sm mt-2">
                Years in Data Science
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-gray-400 text-sm mt-2">
                Academic Projects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <h3 className="text-3xl font-bold">AI/ML</h3>
              <p className="text-gray-400 text-sm mt-2">
                Core Focus Area
              </p>
            </motion.div>

          </div>

          {/* Buttons */}
          <div className="flex gap-6 pt-8">
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition duration-300"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="px-8 py-3 border border-white/30 rounded-md font-semibold hover:border-white transition duration-300"
            >
              Contact
            </a>
          </div>

        </div>
      </div>

      {/* Subtle divider */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-white/10"></div>
    </section>
  );
}
