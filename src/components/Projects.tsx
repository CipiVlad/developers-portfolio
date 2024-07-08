import { useState } from "react";
import ProjectCard from "./ProjectCard";

import data from "../project-data/data";
const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>
            <div className="project-grid">
                {
                    data.map((project) => {
                        return <ProjectCard key={project.id} project={project} />
                    })
                }
            </div>
        </section>
    )
}
export default Projects