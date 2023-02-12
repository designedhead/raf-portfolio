import ProjectTile from "./ProjectTile";
import { projects } from "../data/projects";
import FeaturedProject from "./FeaturedProject";

function Projects() {
  return (
    <>
      <main className="projects" id="projects">
        <a className="anchor" id="work_" />
        <div className="title">
          <h2>{"Projects I've built"}</h2>
          <div className="horizontal_divider" />
        </div>
        <div className="featured-projects-containter">
          {projects.slice(0, 3).map((tile, i) => (
            <FeaturedProject key={i} tile={tile} index={i} />
          ))}
        </div>
        <h5 className="featured_h5">Other Noteworthy Projects</h5>
        <div className="projects_container">
          {projects.slice(3).map((tile, i) => (
            <ProjectTile
              key={i}
              title={tile.title}
              description={tile.description}
              tags={tile.tags}
              github={tile.github}
              link={tile.link}
            />
          ))}
        </div>
      </main>
    </>
  );
}
export default Projects;
