import React from "react";

const FeaturedProject = ({ index, tile }) => {
  console.log("🚀  tile", tile);
  const isOdd = index % 2 === 0;
  const projectDirection = isOdd
    ? "project-content-left"
    : "project-content-right";
  const imageDirection = isOdd ? "project-img-right" : "project-img-left";
  console.log("🚀  index", "project-img", imageDirection);

  const { title, description, tags, github, link } = tile;
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
          <div className="tile_header_right">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tile_icons"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tile_icons"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
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
