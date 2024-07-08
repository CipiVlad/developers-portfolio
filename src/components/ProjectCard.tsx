
const ProjectCard = ({ project }: any) => {
    return (
        <div className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-text">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="overlay">
                    <a href={project.link} target="_blank" rel="noreferrer">View</a>
                    <a href={project.gitlink} target="_blank" rel="noreferrer">Github</a>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard

/**
 * 
 * 
 *
<div class="container">
  <img src="img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
 * 
 */