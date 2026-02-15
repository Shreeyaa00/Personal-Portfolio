import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = [
    "AI & Machine Learning",
    "Data Analytics",
    "Strategic Decision Intelligence",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-[#0b1120]">

      {/* Floating background glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse"></div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-10"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full border border-indigo-500/30 scale-110"></div>

            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-indigo-500/40 shadow-[0_0_60px_rgba(99,102,241,0.4)]">
              <img
                src="/profile.jpeg"
                alt="Shreeya"
                className="w-full h-full object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </motion.div>

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Shreeya Vanka
          </span>
        </motion.h1>

        {/* ROTATING ROLE */}
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-gray-400"
        >
          {roles[index]}
        </motion.p>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto"
        >
          Master’s in Data Science • Northeastern University, Boston  
          Turning complex data into strategic, real-world impact.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md font-semibold transition shadow-lg"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border border-white/30 rounded-md font-semibold hover:bg-white hover:text-black transition"
          >
            Download Resume
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500">
        <div className="w-[2px] h-10 bg-gray-500 animate-pulse"></div>
      </div>

    </section>
  );
}
