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
        <div className="projects_container">
          {projects.map((tile, i) => (
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
