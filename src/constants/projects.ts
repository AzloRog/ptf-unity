import socialApp from "../assets/projects/social-app.png";
import pizzaMaker from "../assets/projects/pizza-maker.png";
import bankingApp from "../assets/projects/banking-app.png"
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Array<string>;
  image: string;
  githubLink: string;
  githubPagesLink: string;
}

const projects: Project[] = [
  {
    id: 0,
    title: "Banking App",
    description: `
    Данный pet проект предназначен для мониторинга счетов и транзакций банковских счетов пользователя, на данный момент
    в активной разработке, решается вопрос с банком о возможности предоставления API для подключения т.е. финальная реализация
    возможна в виде подключения к банку в случае одобрения банком, либо в виде ручного ввода пользователем информации о своих счетах
    `,
    githubLink: "https://github.com/AzloRog/banking-app.git",
    githubPagesLink: "https://banking-app-two-rho.vercel.app/",
    image: bankingApp,
    technologies: ["Next.js", "tailwindcss", "shadcn", "e.t.c"]
  },
  {
    id: 1,
    title: "Pizza website",
    description: `
    Pizza Maker, это веб сайт по заказу пиццы, изначально планировалось как fullstack (MERN) приложение, 
    но из-за большого объема работы пришлось сжать итоговый результат до frontend приложения, 
    backend часть находится в процессе реализации, плейсхолдеры в виде инфо о каждой пицце и других больших данных брались в 
    англоязычном формате и не переводились мной по причине большого времени-затратства.`,
    technologies: ["Webpack", "React", "React-router-dom", "e.t.c"],
    image: pizzaMaker,
    githubLink: "https://github.com/AzloRog/pz-mk.git",
    githubPagesLink: "https://azlorog.github.io/pz-mk/",
  },

  {
    id: 2,
    title: "Social App",
    description: `Социальная сеть, в качестве backend-a 
       используется PostgreSQL - Supabase, активно развиваю и добавляю новую логику,
       занимаюсю активно рефакторингом, укреплением фундамента проекта для дальнейшего добавления фич,
       проделана большая работа с redux toolkit и rtk query, также с настройкой бэкенда. В настоящее время
       активно разрабатывается ленивая загрузка при изменении, infinite scroll переведен на более современный Intersection Observer`,
    technologies: [
      "Vite",
      "React",
      "Redux toolkit",
      "RTK Query",
      "Typescript",
      "React-router-dom",
      "Tailwindcss",
      "MaterialUI",
      "Supabase",
    ],
    image: socialApp,
    githubLink: "https://github.com/AzloRog/sls-app",
    githubPagesLink: "https://azlorog.github.io/sls-app/",
  },
];

export default projects;
