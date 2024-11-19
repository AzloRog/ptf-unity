import { technology } from "../../constants/technologies";
import { motion } from "framer-motion";
interface Props extends technology {}

const TechCard = ({ title, image, color }: Props) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      className="w-full py-8 px-2 border inline-flex flex-col items-center gap-8 text-2xl rounded-md cursor-pointer h-full"
      style={{
        borderColor: color,
        boxShadow: `inset 0px 0px 10px ${color}, 0px 0px 40px ${color}`,
      }}
    >
      <div>
        <img src={image} />
      </div>
      <div>{title}</div>
    </motion.div>
  );
};

export default TechCard;
