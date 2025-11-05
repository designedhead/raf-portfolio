import React from "react";
import skills from "../assets/SkillSetList";

function Skills() {
  React.useEffect(() => {
    document.getElementById("skills_grid").onmousemove = (e) => {
      for (const card of document.getElementsByClassName("skill_container")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  });

  return (
    <main className="skills_main" id="skillset">
      <a className="anchor" id="skillset_" />
      <div className="title">
        <h2>{"My Skillset"}</h2>
        <div className="horizontal_divider" />
      </div>

      <div className="skills_grid" id="skills_grid">
        {skills.map((skill) => {
          return (
            <div key={skill.name} className="skill_container">
              <div className="skill_content">
                <div>{skill.icon}</div>
                <h4 className="skill_title">{skill.name}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Skills;
