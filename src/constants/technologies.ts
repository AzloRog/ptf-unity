import Unity from "../assets/exprerienceIcons/Unity.png"
import Sharp from "../assets/exprerienceIcons/sharp.png"
import Github from "../assets/exprerienceIcons/Github.png"

export interface technology {
  id: number;
  title: string;
  image: string;
  color: string;
}
const technologies: technology[] = [
  {
    id: 0,
    title: "Unity",
    image: Unity,
    color: "#4962a0",
  },
  {
    id: 1,
    title: "C#",
    image: Sharp,
    color: "#ab91ec",
  },
  {
    id: 2,
    title: "Github",
    image: Github,
    color: "#b958eb",
  },


];

export default technologies;
