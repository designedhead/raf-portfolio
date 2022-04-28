import Image from "next/image";
import ResortsImage from "../../public/img/resorts.jpg";
import LuxImage from "../../public/img/lux.jpg";
import TippingImage from "../../public/img/tipping.jpg";
import AirbnbImage from "../../public/img/airbnb.jpg";
import AmazonImage from "../../public/img/amazon.jpg";

function Projects() {
  return (
    <main className="projects" id="projects">
      <div className="title">
        <h2 className="">{"Projects I've built"}</h2>
        <div className="horizontal_divider" />
      </div>
      <ul>
        <li>
          <div className="project-container">
            <div className="project">
              <div className="project-content">
                <div className="project-label">Skill Assessment</div>
                <h4 className="project-title">Amazon Replicated</h4>
                <div className="project-details">
                  <p>
                    As a skill assessment project, I re-created the Amazon
                    website, a user is able to log in with google, add items to
                    the basket and pay for them. Once successfully paid they are
                    shown on the orders page.
                  </p>
                  <ul>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Redux</li>
                    <li>NextAuth</li>
                  </ul>
                  <ul>
                    <li>Stripe.js</li>
                    <li>Stripe.js</li>
                    <li>Firebase</li>
                  </ul>
                  <div
                    className="project-links"
                    style={{ flexDirection: "row" }}
                  >
                    <a
                      href="https://amazon-opal-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/designedhead/amazon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <a
                className="project-img"
                href="https://amazon-opal-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={AmazonImage} alt="" />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="project-container">
            <div className="project">
              <div
                className="project-content"
                style={{ gridColumn: "7 / -1", textAlign: "right" }}
              >
                <div className="project-label">Skill Assessment</div>
                <h4 className="project-title">Airbnb Replicated</h4>
                <div className="project-details">
                  <p>
                    As a skill assessment project, I re-created the AirBnB
                    website including responsive design, search functionality,
                    calendar day picker, map integration, server-side rendered
                    pages and more.
                  </p>
                  <ul style={{ justifyContent: "flex-end" }}>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>Sanity.io</li>
                    <li>GROQ</li>
                  </ul>
                  <div className="project-links">
                    <a
                      href="https://airbnbreplicate.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/designedhead/airbnbreplicate"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <a
                className="project-img"
                style={{ gridColumn: "1 / 8 " }}
                href="https://airbnbreplicate.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={AirbnbImage}
                  alt=""
                  objectFit="contain"
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="project-container">
            <div className="project">
              <div className="project-content">
                <div className="project-label">Live Project</div>
                <h4 className="project-title">Selected Tipping</h4>
                <div className="project-details">
                  <p>
                    Built end-user tipping app allowing customers to pay for a
                    percentage based fee or a custom amount with stripe.
                  </p>
                  <ul>
                    <li>React.js</li>
                    <li>Tailwind css</li>
                    <li>Stripe.js</li>
                  </ul>
                  <div
                    className="project-links"
                    style={{ flexDirection: "row" }}
                  >
                    <a
                      href="https://amazon-opal-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/designedhead/amazon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <a
                className="project-img"
                href="https://amazon-opal-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={TippingImage}
                  alt=""
                  objectFit="contain"
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="project-container">
            <div className="project">
              <div
                className="project-content"
                style={{ gridColumn: "7 / -1", textAlign: "right" }}
              >
                <div className="project-label">Live Project</div>
                <h4 className="project-title">Lux Heating</h4>
                <div className="project-details">
                  <p>
                    Company website with a custom quote requesting system built
                    with react hook forms.
                  </p>
                  <ul style={{ justifyContent: "flex-end" }}>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>React Hooks</li>
                  </ul>
                  <div className="project-links">
                    <a
                      href="https://luxheating.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/designedhead/Lux-Website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <a
                className="project-img"
                style={{ gridColumn: "1 / 8 " }}
                href="https://luxheating.co.uk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={LuxImage}
                  alt=""
                  objectFit="contain"
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="project-container">
            <div className="project">
              <div className="project-content">
                <div className="project-label">Live Project</div>
                <h4 className="project-title">Resorts Website</h4>
                <div className="project-details">
                  <p>
                    Company website created with Internationalization built to
                    detect browser language and adjust accordingly.
                  </p>
                  <ul>
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>i18n</li>
                  </ul>
                  <div
                    className="project-links"
                    style={{ flexDirection: "row" }}
                  >
                    <a
                      href="https://amazon-opal-one.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/designedhead/amazon"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
                        className="links_icon"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://amazon-opal-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-img"
              >
                <Image
                  src={ResortsImage}
                  alt=""
                  objectFit="contain"
                  layout="responsive"
                />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
}

export default Projects;
