import { Card } from "./ui/Card"
import { projects } from "@/data"

export const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) =>(
                    <Card 
                        key={project.id}
                        title={project.title}
                        description={project.des}
                        imageSource={project.img}
                        link={project.link}
                    />
                ))}
            </div>
            
        </section>
        
    )
}