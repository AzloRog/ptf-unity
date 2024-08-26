import socialApp from "../assets/projects/social-app.png";

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
    title: "Social App",
    description: `Социальная сеть, в качестве backend-a 
       используется PostgreSQL - Supabase, активно развиваю и добавляю новую логику,
       занимаюсю активно рефакторингом, укреплением фундамента проекта для дальнейшего добавления фич,
       проделана большая работа с redux toolkit и rtk query, также с настройкой бэкенда. В настоящее время
       активно разрабатывается ленивая загрузка, infinite scroll переведен на более современный Intersection Observer`,
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
