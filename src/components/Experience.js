import { useState } from "react";

function Experience() {
  const [experience, setExperience] = useState(0);
  return (
    <main className="experience" id="experience">
      <a className="anchor" id="experience_" />
      <div className="title">
        <h2 className="">{"Where I've Worked"}</h2>
        <div className="horizontal_divider" />
      </div>
      <div className="experience_content">
        <div className="experience_tabs">
          <div className="tabs_vertical">
            <div
              className="tabs_vertical_selector"
              style={{
                transform: `translateY(calc(${experience} * var(--tab_height)))`,
              }}
            />
          </div>
          <div className="tabs_options">
            <div
              className="tabs_options_container"
              onClick={() => setExperience(0)}
            >
              <span className={experience === 0 ? "tab_options_selected" : ""}>
                Lush
              </span>
            </div>
            <div
              className="tabs_options_container"
              onClick={() => setExperience(1)}
            >
              <span className={experience === 1 ? "tab_options_selected" : ""}>
                Selected Group
              </span>
            </div>
            <div
              className="tabs_options_container"
              onClick={() => setExperience(2)}
            >
              <span className={experience === 2 ? "tab_options_selected" : ""}>
                Selected Resorts
              </span>
            </div>
            <div
              className="tabs_options_container"
              onClick={() => setExperience(3)}
            >
              <span className={experience === 3 ? "tab_options_selected" : ""}>
                Selected Media
              </span>
            </div>
            <div
              className="tabs_options_container"
              onClick={() => setExperience(4)}
            >
              <span className={experience === 4 ? "tab_options_selected" : ""}>
                Diliviri.com
              </span>
            </div>
            <a
              className="tabs_options_container animate"
              style={{ color: "#ffffffa6", fontFamily: "Roboto Mono" }}
              href="https://www.linkedin.com/in/mrrafaelmendes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>More on LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="experience_text_content" id="experience_text_content">
          <div
            className={
              experience === 0
                ? "block animated animatedFadeInUp fadeInUp"
                : "hidden"
            }
          >
            <span>
              Web Engineer - Midweight <a className="animate">@ Lush</a>
            </span>
            <p>May 2022 - Present</p>
            <p>
              {
                "Building Business Tools to help nearly 1000 shops around the world. Using NextJS, Apollo to build scalable, internationalised webapps."
              }
            </p>
            <ul>
              <li>Planned, built, and oversaw the launch of full features.</li>
              <li>Set sprint velocity records while completing tickets.</li>
              <li>
                {" Trained & Supported Junior Engineers with their day to day."}
              </li>
              <li>
                Built a Redirector worker for production links alongside a full
                back office dashboard to manage it.
              </li>
              <li>
                {
                  "Created end of Sprint Videos to display work completed to 100's of coworkers."
                }
              </li>
              <li>
                {
                  "Worked closely with BA & PL to research new feature requirements and plan sprints."
                }
              </li>
            </ul>
          </div>
          <div
            className={
              experience === 1
                ? "block animated animatedFadeInUp fadeInUp"
                : "hidden"
            }
          >
            <span>
              Business &amp; Product Manager{" "}
              <a className="animate">@ Selected Group</a>
            </span>
            <p>May 2019 - May 2022</p>
            <p>
              {
                " Selected is a software company, operating mostly within the hospitality industry with a wide portfolio of solutions available internationally."
              }
            </p>
            <ul>
              <li>
                Was Hands-on with coding front-end to a few tools alongside an
                engineering team.
              </li>
              <li>
                Helped create the concepts by liaising with the CEO &amp;
                potential customers.
              </li>
              <li>
                Lead a team of 15 engineers and revamped the processes by
                implementing weekly code sprints, agile methodologies and code
                reviews.
              </li>
              <li>
                Created a cross-platform connection that resulted in an increase
                in our B2B sales by 285%
              </li>
              <li>
                Created, employed and trained a team of UI/UX Designers to
                result in tangible improvements in sprint delivery speeds.
              </li>
              <li>
                Ran customer interviews and demos to pinpoint pain points and
                transformed them into software solutions.
              </li>
              <li>
                Transformed our decision-making process by implementing key
                metric tracking tools.
              </li>
            </ul>
            <p className="fancy">Product Portfolio Included 11 products.</p>
          </div>
          <div
            className={
              experience === 2
                ? "block animated animatedFadeInUp fadeInUp"
                : "hidden"
            }
          >
            <span>
              Product Manager <a className="animate">@ Selected Resorts</a>
            </span>
            <p>August 2019 - May 2022</p>
            <p>
              Revolutionising Residential Communities with an ecosystem of Apps
              &amp; Services.
            </p>
            <ul>
              <li>Fixed 80+ issues in the back office front-end backlog.</li>
              <li>
                Took over the product that had been stagnant for months and
                renewed it by setting its north start, creating user personas
                and building a team from our pool of engineers.
              </li>
              <li>
                Created a suite of tools based on residents problems and revived
                the app.
              </li>
              <li>
                Improved user activity by 420% and increased weekly users
                sessions from 1 to 3.9.
              </li>
              <li>
                Lead a team of 6 Engineers and 1 UI/UX, helped fill gaps in both
                departments when needed.
              </li>
              <li>
                Implemented weekly sprints, agile and shape-up methodologies.
              </li>
              <li>
                Built extra tools within the ecosystem to increase revenue
                streams.
              </li>
            </ul>
          </div>
          <div
            className={
              experience === 3
                ? "block animated animatedFadeInUp fadeInUp"
                : "hidden"
            }
          >
            <span>
              Media Project Manager <a className="animate">@ Selected Group</a>
            </span>
            <p>Feb 2019 - July 2020</p>
            <p>
              Media Production studio built parallel to other projects while at
              Selected to improve revenue streams.
            </p>
            <ul>
              <li>Fixed 80+ issues in the back office front-end backlog.</li>
              <li>
                Created and coached a team of animators, video editors and
                camera operators.
              </li>
              <li>
                Built a sprint methodology to increase speed and quality of
                deliverables
              </li>
              <li>Built a whole new Revenue Stream for the company.</li>
            </ul>
          </div>
          <div
            className={
              experience === 3
                ? "block animated animatedFadeInUp fadeInUp"
                : "hidden"
            }
          >
            <span>
              Business Development Manager{" "}
              <a className="animate">@Diliviri.com</a>
            </span>
            <p>July 2018 - November 2019</p>
            <p>
              Fleet software and service built to provide control back to food
              &amp; retail companies trapped by titan solutions such as
              Deliveroo and Uber.
            </p>
            <ul>
              <li>
                Employed, managed and lead a team of engineers, sales &amp;
                fleet drivers.
              </li>
              <li>
                Signed up 25+ Businesses locally to launch our original
                projects.
              </li>
              <li>
                {
                  "Redirected the company's focus from physical services to purely working on the Dispatching software."
                }
              </li>
              <li>
                Improved Driver Drops per trip by 45% while also identifying and
                improving other key metrics.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Experience;
