import colorGeneratorImage from "../assets/projects/color-generator.png";
import cocktailsImage from "../assets/projects/cocktails.png";
import hooBankImage from "../assets/projects/hoo-bank.png";
import sliderImage from "../assets/projects/slider.png";
import menuImage from "../assets/projects/menu.png";
import quizProjectImage from "../assets/projects/quiz-project.png";
import socialApp from "../assets/projects/social-app.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  githubPagesLink: string;
}

const projects: Project[] = [
  {
    id: 0,
    title: "Social App",
    description:
      "Мой последний проект, социальная сеть, подробнее о проекте написано в нем же в первом посте.",
    image: socialApp,
    githubLink: "https://github.com/AzloRog/sls-app",
    githubPagesLink: "https://azlorog.github.io/sls-app/",
  },
  {
    id: 1,
    title: "Quiz project",
    description: `В данном проекте реализован полноценный конструктор-вопросник с возможностью гибкой настройки любой из карточек-вопросов, 
    а также сам тест на основе сгенерированных пользователем карточек.
    `,
    image: quizProjectImage,
    githubLink: "https://github.com/AzloRog/quiz-project",
    githubPagesLink: "https://azlorog.github.io/quiz-project/",
  },
  {
    id: 2,
    title: "Color generator",
    description: `Проект реализован с использованием стороннего API, предоставляет возможность пользователю ввести искомый цвет в виде
    hex кода либо самим названием цвета на латинице, также можно менять шаг выводимых плиток для удобства.`,
    image: colorGeneratorImage,
    githubLink: "https://github.com/AzloRog/color-generator",
    githubPagesLink: "https://azlorog.github.io/color-generator/",
  },
  {
    id: 3,
    title: "Cocktails",
    description: `Обычный проект показывающий навыки имплементации данных из стороннего API с react-router-dom библиотекой`,
    image: cocktailsImage,
    githubLink: "https://github.com/AzloRog/cocktails",
    githubPagesLink: "https://azlorog.github.io/cocktails/",
  },
  {
    id: 4,
    title: "Hoo bank",
    description: `Проект показывающий навыки верстки с использованием tailwindcss`,
    image: hooBankImage,
    githubLink: "https://github.com/AzloRog/hoo-bank",
    githubPagesLink: "https://azlorog.github.io/hoo-bank/",
  },
  {
    id: 5,
    title: "Slider",
    description: `Слайдер реализованный на ванильном React`,
    image: sliderImage,
    githubLink: "https://github.com/AzloRog/slider",
    githubPagesLink: "https://azlorog.github.io/slider/",
  },
  {
    id: 6,
    title: "Menu",
    description: `Базовый React сайт с выводом информации из стороннего API`,
    image: menuImage,
    githubLink: "https://github.com/AzloRog/menu-app",
    githubPagesLink: "https://azlorog.github.io/menu-app/",
  },
];

export default projects;
