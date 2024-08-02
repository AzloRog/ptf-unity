import { technology } from "../../constants/technologies";
import { motion } from "framer-motion";
interface Props extends technology {}

const pathVariant = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    transition: {
      duration: 10,
    },
  },
};
const TechCard = ({ title, svg, color }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="w-full py-8 px-2 border inline-flex flex-col items-center gap-8 text-2xl rounded-md cursor-pointer"
      style={{
        borderColor: color,
        boxShadow: `inset 0px 0px 10px ${color}, 0px 0px 40px ${color}`,
      }}
    >
      <div>
        <motion.svg
          viewBox={svg.viewBox.join(" ")}
          xmlns="http://www.w3.org/2000/svg"
          className="svg"
          strokeWidth={svg.strokeWidth}
        >
          <motion.path
            stroke={color}
            variants={pathVariant}
            initial="hidden"
            strokeWidth={svg.strokeWidth}
            whileInView="visible"
            d={svg.path}
          ></motion.path>
        </motion.svg>
      </div>
      <div>{title}</div>
    </motion.div>
  );
};

export default TechCard;
