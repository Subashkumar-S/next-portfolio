import { Card } from "./ui/Card";
import { projects } from "@/data";

export const Projects = () => {
  return (
    <section id="projects">
      <h1 className="heading">
        A small selection of  <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.des}
            imageSource={project.img}
            link={project.link}
            iconLists={project.iconLists}
          />
        ))}
      </div>
    </section>
  );
};
