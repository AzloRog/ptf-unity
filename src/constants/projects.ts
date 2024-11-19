import CookingMaster from "../assets/projects/CookingMaster1.jpg"
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;

}

const projects: Project[] = [
  {
    id: 0,
    title: "Cooking Master",
    description: `
    Данный проект затрагивает аспекты написания чистого когда, продумывание фундамента проекта и создания 
    максимально переиспользуемого кода используя все преимущества ООП. Cooking Master это простая инди игра
    в которой игроку необходимо готовить бургеры по заказу из доступных составляющих, в игре отлично организован код что
    позволяет её с легкостью расширять. [Находится в разработке] 
    `,
    image: CookingMaster,
  },
];

export default projects;
