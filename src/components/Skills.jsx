import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Data Analytics & Programming",
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "SQL",
        "Excel",
      ],
    },
    {
      title: "BI & Visualization",
      skills: [
        "Power BI",
        "DAX",
        "Power Query",
        "Data Visualization",
      ],
    },
    {
      title: "Databases & Data Engineering",
      skills: [
        "PostgreSQL",
        "ETL",
        "Data Cleaning",
        "Data Validation",
        "Data Modeling",
      ],
    },
    {
      title: "Machine Learning & Statistics",
      skills: [
        "scikit-learn",
        "Machine Learning",
        "Predictive Modeling",
        "Statistical Analysis",
      ],
    },
  ];

  const focusAreas = [
    "Data Analysis & Exploratory Data Analysis",
    "Business Intelligence & KPI Reporting",
    "Data Cleaning, ETL & Data Validation",
    "SQL & Relational Data Modeling",
    "Statistical Analysis & Predictive Modeling",
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#0b1120] text-white py-32 px-6 md:px-20 overflow-hidden"
    >
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

          {/* Core Tools Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#111827]/80 backdrop-blur-lg border border-white/10 p-10 rounded-2xl 
                       hover:border-white/30 transition duration-300 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-8 text-gray-200">
              Core Tools & Technologies
            </h3>

            <div className="space-y-8">
              {skillCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: categoryIndex * 0.1,
                  }}
                >
                  {/* Category Title */}
                  <h4 className="text-sm font-medium text-gray-400 mb-3">
                    {category.title}
                  </h4>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay:
                            categoryIndex * 0.1 +
                            skillIndex * 0.04,
                        }}
                        className="px-4 py-2 text-sm border border-white/20 rounded-lg 
                                   text-gray-300 hover:border-white hover:text-white 
                                   transition duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Focus Areas Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#111827]/80 backdrop-blur-lg border border-white/10 p-10 rounded-2xl 
                       hover:border-white/30 transition duration-300 shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-8 text-gray-200">
              Focus Areas
            </h3>

            <ul className="space-y-6">
              {focusAreas.map((area, index) => (
                <motion.li
                  key={area}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-start gap-4 text-gray-300 leading-relaxed"
                >
                  {/* Minimal Indicator */}
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>

                  <span>{area}</span>
                </motion.li>
              ))}
            </ul>

            {/* Analyst Positioning Statement */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 leading-relaxed">
                Turning raw data into actionable insights through
                analysis, visualization, and data-driven storytelling.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}