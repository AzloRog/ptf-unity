import TechCard from "./ui/TechCard";
import technologies from "../constants/technologies";
import { motion, Variants } from "framer-motion";

const listVariant: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
const itemVariant: Variants = {
  initial: { opacity: 0, y: -200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {},
  },
};
const Experience = () => {
  return (
    <section className="container" id="experience">
      <h2 className=" text-2xl sm:text-5xl text-center pt-10" id="experience">
        Мои навыки
      </h2>
      <motion.ul
        initial="initial"
        whileInView="visible"
        variants={listVariant}
        className="mt-16 md:mt-36 grid justify-center  grid-cols-[repeat(auto-fit,_minmax(40px,_210px))]  gap-x-10 gap-y-16"
      >
        {technologies.map((item) => (
          <motion.li key={item.id} variants={itemVariant} className="h-full">
            <TechCard
              id={item.id}
              image={item.image}
              title={item.title}
              color={item.color}
            />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Experience;
