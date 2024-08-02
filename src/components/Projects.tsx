import { useEffect } from "react";
import projects from "../constants/projects";
import ProjectCard from "./ui/ProjectCard";

const Projects = () => {
  return (
    <section className="container mt-24 mb-60 md:mt-48 pt-10" id="projects">
      <h2 className="text-5xl text-center">Мои проекты</h2>
      <ul className="mt-20 flex flex-col gap-20 lg:gap-36">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
