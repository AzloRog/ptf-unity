import { Project } from "../../constants/projects";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: { duration: 1.2 },
  },
};
interface Props extends Project {}

const ProjectCard = ({ title, description, image }: Props) => {
  return (
    <motion.div
      variants={variants}
      initial={"initial"}
      whileInView="whileInView"
      className="flex max-md:flex-col gap-8 items-center text-xl max-xl:items-center"
    >
      <div className="md:w-[32%] image-shadow">
        <img src={image} />
      </div>
      <div className="flex-1 ">
        <h3 className="text-3xl">{title}</h3>
        <p className="mt-3 text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
