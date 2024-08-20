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

const ProjectCard = ({
  title,
  description,
  technologies,
  image,
  githubLink,
  githubPagesLink,
}: Props) => {
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
        <ul className="mt-2 flex gap-3 flex-wrap text-slate-200 text-[18px] font-medium">
          {technologies.map((item, index) => (
            <li
              className="px-3 py-0.5 border border-slate-400 rounded-md leading-none "
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-4 text-sm">
          <motion.a
            href={githubLink}
            target="_blank"
            className="py-1 px-6 border border-gray-400 rounded-sm"
            whileHover={{
              scale: 1.05,
              borderColor: "#fff",
            }}
            whileTap={{ scale: 1.2 }}
          >
            Github
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, borderColor: "#fff" }}
            whileTap={{ scale: 1.2 }}
            href={githubPagesLink}
            target="_blank"
            className="py-1 px-6 border border-gray-400 rounded-sm"
          >
            Github Pages
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
