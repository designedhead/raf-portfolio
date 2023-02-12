import React from "react";

const FeaturedProject = ({ index, tile }) => {
  console.log("🚀  tile", tile);
  const isOdd = index % 2 === 0;
  const projectDirection = isOdd
    ? "project-content-left"
    : "project-content-right";
  const imageDirection = isOdd ? "project-img-right" : "project-img-left";
  console.log("🚀  index", "project-img", imageDirection);

  const { title, description, tags, github } = tile;
  return (
    <div className="project-container">
      <div className="project">
        <div className={`project-content ${projectDirection}`}>
          {/* <div className="project-label">{title}</div> */}
          <h4 className="project-title">{title}</h4>
          <div
            className={`project-details ${!isOdd && "project-details-right"}`}
          >
            <p className={!isOdd && "align_right"}>{description}</p>
            <ul className={!isOdd && "align_right"}>
              {tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`project-img ${imageDirection}`}>
          <img className="project-image" src={tile.image} alt={tile.title} />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProject;
