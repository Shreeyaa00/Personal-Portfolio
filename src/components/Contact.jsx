export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-gray-300">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Get In Touch
        </h2>

        <p className="text-lg mb-10">
          I’m open to internships, full-time roles, and exciting collaborations.
          Let’s build something great together.
        </p>

        <div className="flex justify-center gap-6">
          <a
            href="mailto:shreeyavanka88@gmail.com"
            className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition font-semibold"
          >
            Email Me
          </a>

          <a
            href="https://github.com/Shreeyaa00"
            target="_blank"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/shreeya-vanka"
            target="_blank"
            className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-white hover:text-black transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
