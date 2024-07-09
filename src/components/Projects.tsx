import { useState } from "react";
import ProjectCard from "./ProjectCard";

import data from "../project-data/data";
const Projects = () => {

    const [loadMore, setLoadMore] = useState(false);

    const handleLoadMore = () => {
        setLoadMore(true);
    }

    return (
        <section id="projects">
            <div className="projects-flex-headline">
                <h2>Projects</h2>
                <div>
                    <a href="#contact">
                        Get in touch
                    </a>
                </div>
            </div>
            <div className="project-grid">
                {
                    data.map((project) => {
                        return <ProjectCard key={project.id} project={project} />
                    }).slice(0, 4)
                }
                {
                    loadMore && data.map((project) => {
                        return <ProjectCard key={project.id} project={project} />
                    }).slice(4, 8)
                }
            </div>
            <div className="show-more-container">
                <button
                    type="button"
                    onClick={handleLoadMore}
                    className="show-more-btn"
                >
                    {loadMore ? "" : "Show more"}
                </button>
            </div>
        </section>
    )
}
export default Projects