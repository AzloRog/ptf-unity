import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ x: "-50px", opacity: 0 }}
      whileInView={{ x: "0px", opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <section className="container xl:h-[100vh] pt-[15%] xl:pl-[160px]">
        <h1 className="text-2xl sm:text-6xl text-center sm:text-left">
          Добро пожаловать <br /> в мое персональное портфолио
        </h1>
        <p className="text-gray-400 mt-8 max-w-[720px] text-md sm:text-xl max-sm:text-center">
          Здравствуйте, меня зовут Даниил, я являюсь React разработчиком. У меня
          на вооружении достаточное количество знаний различных вспомогательных
          библиотек для уверенной работы с React.
        </p>
        <motion.a
          animate={{
            borderImage: [
              "linear-gradient(to right, #821ed3 0%, #3acfd5 100%)1",
              "linear-gradient(to right, #3a4ed5 0%, #a5c729 100%)1",
              "linear-gradient(to right, #a5c729 0%, #821ed3 100%)1",
              "linear-gradient(to right, #821ed3 0%, #3acfd5 100%)1",
            ],
          }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="inline-block mt-12 py-2 px-4 linear-border"
          href="#experience"
        >
          Узнать больше
        </motion.a>
      </section>
    </motion.div>
  );
};

export default Hero;
