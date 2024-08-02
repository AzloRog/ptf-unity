import { motion } from "framer-motion";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="absolute w-full z-10">
        <Header />
      </div>

      <Hero />
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.5 }}
        href="#"
        className="hidden xl:inline-block sticky left-32 top-20  p-4 border rounded-full border-gray-300 text-2xl cursor-pointer"
      >
        ^
      </motion.a>

      <Experience />
      <Projects />
    </>
  );
}

export default App;
