import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { MdEmail } from "react-icons/md";
import { IoExitOutline } from "react-icons/io5";

const Header = () => {
  const [scope, animate] = useAnimate();
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.style.overflow = "hidden";
      animate(scope.current, { opacity: 1, top: 0 });
    } else {
      document.body.style.overflow = "visible";
      animate(scope.current, { opacity: 0, top: "-200px" });
    }
  }, [isBurgerOpen]);
  return (
    <header className="flex justify-between items-center py-4 container    ">
      <p className="font-bold text-lg md:text-4xl">React developer</p>
      <nav>
        <ul className="max-md:hidden  flex gap-8 text-xl">
          <li>
            <motion.a
              className="block"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.09 }}
              href="#"
            >
              Обо мне
            </motion.a>
          </li>
          <li>
            <motion.a
              className="block"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.09 }}
              href="#experience"
            >
              Навыки
            </motion.a>
          </li>
          <li>
            <motion.a
              className="block"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.09 }}
              href="#projects"
            >
              Проекты
            </motion.a>
          </li>
          <li>
            <ul className="flex gap-4">
              <li className="flex items-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.09 }}
                  href="mailto:EmailCorp@yandex.ru?subject=React developer резюме"
                  className="block"
                  target="_blank"
                >
                  <MdEmail className="pt-[1px]" size={25} />
                </motion.a>
              </li>
              <li className="flex items-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.09 }}
                  href="https://hh.ru/resume/ee86daa6ff0d4f09500039ed1f557276444c34"
                  target="_blank"
                  className="block"
                >
                  Hh
                </motion.a>
              </li>
            </ul>
          </li>
        </ul>
        <div
          className="burger md:hidden"
          onClick={() => setIsBurgerOpen(!isBurgerOpen)}
        >
          <span></span>
        </div>
        <div
          ref={scope}
          className={isBurgerOpen ? "burger-list" : "burger-list invisible"}
        >
          <span
            onClick={() => setIsBurgerOpen(false)}
            className="absolute top-5 right-5 text-2xl"
          >
            <IoExitOutline />
          </span>
          <ul>
            <li>
              <a href="#" onClick={() => setIsBurgerOpen(false)}>
                Обо мне
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setIsBurgerOpen(false)}>
                Навыки
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsBurgerOpen(false)}>
                Проекты
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
