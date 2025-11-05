import { useState } from "react";

function Experience() {
  const [experience, setExperience] = useState(0);
  return (
    <main className="experience" id="experience">
      <a className="anchor" id="experience_" />
      <div className="title">
        <h2>{"Where I've Worked"}</h2>
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
                Senior Full Stack Engineer
              </span>
            </div>
            <div
              className="tabs_options_container"
              onClick={() => setExperience(1)}
            >
              <span className={experience === 1 ? "tab_options_selected" : ""}>
                Full Stack Developer
              </span>
            </div>
            <div
              className="tabs_options_container"
              onClick={() => setExperience(2)}
            >
              <span className={experience === 2 ? "tab_options_selected" : ""}>
                Technical Business & Product Manager
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
              Senior Full Stack Engineer <a className="animate">@ Lush</a>
            </span>
            <p>2023 - 2025</p>
            <p>
              Designed and optimised high-traffic systems handling 300+ requests
              per second, implementing advanced caching strategies and load
              balancing techniques.
            </p>
            <ul>
              <li>
                Implemented solutions leading to annual cost savings exceeding
                £250k.
              </li>
              <li>
                Led a team of 3 engineers providing technical guidance,
                overseeing daily operations, conducting 1-on-1 sessions, and
                performance reviews.
              </li>
              <li>
                Developed and deployed scalable web applications using React,
                TypeScript, and Next.js with internationalisation support.
              </li>
              <li>
                Built complex UI components with Radix UI primitives and
                Tailwind CSS, creating accessible, responsive, and visually
                consistent interfaces.
              </li>
              <li>
                Built AI-powered recommendation systems leveraging machine
                learning models to increase user engagement.
              </li>
              <li>
                Architected GraphQL supergraphs with Apollo Federation, enabling
                modular and scalable API design.
              </li>
              <li>
                Developed native mobile applications using React Native with
                TypeScript for cross-platform compatibility.
              </li>
              <li>
                Created robust backend services with Node.js, Express, Hono and
                Bun for improved performance.
              </li>
              <li>
                Implemented real-time data communication using GraphQL
                subscriptions with WebSockets and SSE for live updates in
                critical applications.
              </li>
              <li>
                Worked on Kubernetes clusters on GCP with autoscaling
                capabilities.
              </li>
              <li>
                Implemented infrastructure as code using Terraform to manage AWS
                and GCP resources, ensuring consistent environments across
                development and production.
              </li>
              <li>
                Set up multi-region deployments on AWS ECS and GCP GKE for
                improved global latency.
              </li>
              <li>
                Built and improved CI/CD pipelines using GitLab and Docker for
                automated testing and deployment.
              </li>
              <li>
                Built native QA macOS tooling for internal testing processes.
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
              Full Stack Developer <a className="animate">@ Lush</a>
            </span>
            <p>2022 - 2023</p>
            <p>
              Built responsive web applications using Next.js with both Pages
              and App Router, React 18, and TypeScript for type safety.
            </p>
            <ul>
              <li>
                Implemented component-driven UI architecture using Chakra UI,
                Radix UI primitives for accessibility and Tailwind CSS for
                styling.
              </li>
              <li>
                Developed shop management tools that streamlined day-to-day
                operations and improved efficiency.
              </li>
              <li>
                Created Edge workers for Lush.com URL redirecting, enhancing
                site performance and SEO.
              </li>
              <li>
                Implemented internationalisation support for global markets.
              </li>
              <li>
                Collaborated with UX/UI designers to implement pixel-perfect
                interfaces following brand guidelines.
              </li>
              <li>
                Established Jest testing patterns for React components with
                React Testing Library for high test coverage.
              </li>
              <li>
                Mentored junior developers on React best practices and component
                composition patterns.
              </li>
              <li>
                Participated in Agile development processes, including daily
                stand-ups, sprint planning, and retrospectives.
              </li>
            </ul>
          </div>
          <div
            className={
              experience === 2
                ? "block animated animatedFadeInUp fadeInUp"
                : "hidden"
            }
          >
            <span>
              Technical Business & Product Manager{" "}
              <a className="animate">@ Selected Group</a>
            </span>
            <p>2019 - 2022</p>
            <p>
              Led a team of 15 engineers, revamping processes by implementing
              weekly code sprints, agile methodologies, and code reviews.
            </p>
            <ul>
              <li>
                Created cross-platform connections that resulted in a 285%
                increase in B2B sales.
              </li>
              <li>
                Built and managed a team of UX/UX Designers, resulting in
                tangible improvements in sprint delivery speeds.
              </li>
              <li>
                Collaborated with the CEO and potential customers to develop
                product concepts and roadmaps.
              </li>
              <li>
                Conducted customer interviews and demos to identify pain points
                and transform them into software solutions.
              </li>
              <li>
                Transformed decision-making processes by implementing key metric
                tracking tools.
              </li>
              <li>
                Managed a portfolio of 11 products within the hospitality
                industry.
              </li>
              <li>
                Developed and executed product strategy for Selected EPOS system
                for retail and hospitality businesses.
              </li>
              <li>
                Created and implemented standardized documentation practices
                across all products.
              </li>
              <li>
                Established OKRs and KPIs for product teams, increasing
                accountability and performance tracking.
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
              Wedsite.ai <a className="animate">@ Personal Project</a>
            </span>
            <p>2024 - 2025</p>
            <p>Full-stack AI-powered website builder platform</p>
            <ul>
              <li>
                Designed and implemented the entire platform from scratch,
                including infrastructure, frontend, backend, and deployment
                pipelines.
              </li>
              <li>
                Built a drag-and-drop website editor with React, TypeScript and
                custom UI components for intuitive site creation.
              </li>
              <li>
                Developed automated subdomain and custom domain publishing
                system with SSL certificate provisioning.
              </li>
              <li>
                Created a guest editor feature allowing event hosts to send RSVP
                requests and collect responses via email.
              </li>
              <li>
                Implemented password-protected sites with secure authentication
                and visitor management.
              </li>
              <li>
                Integrated AI-powered onboarding tools to help users create
                websites faster with natural language prompts.
              </li>
              <li>
                Architected the system as a scalable system with automatic CI/CD
                pipelines for continuous deployment.
              </li>
              <li>
                Built a responsive design system with Tailwind CSS that adapts
                to all device sizes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Experience;
