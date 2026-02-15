export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white text-xl font-bold tracking-wide">
          Shreeya
        </h1>

      <ul className="hidden md:flex gap-8 text-gray-300">
  <a href="#about" className="hover:text-white">About</a>
  <a href="#experience" className="hover:text-indigo-400 transition">
  Experience
</a>

  <a href="#skills" className="hover:text-white">Skills</a>
  <a href="#projects" className="hover:text-white">Projects</a>
  <a href="#contact" className="hover:text-white">Contact</a>
</ul>

      </div>
    </nav>
  );
}
