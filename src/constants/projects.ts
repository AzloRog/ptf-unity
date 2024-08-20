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
    description: `Социальная сеть, мой первый pet проект, в качестве backend-a 
       используется Supabase, активно развиваю и добавляю новую логику,
       в дальнейшем планирую перевести backend на Nest js. Необходимо зарегистрироватся, email верификация не требуется - 
       можно вводить любой email`,
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
