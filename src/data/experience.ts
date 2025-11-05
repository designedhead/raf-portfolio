import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    id: 0,
    role: "Senior Full Stack Engineer",
    company: "Lush",
    period: "2023 - 2025",
    description:
      "Designed and optimised high-traffic systems handling 300+ requests per second, implementing advanced caching strategies and load balancing techniques.",
    responsibilities: [
      "Implemented solutions leading to annual cost savings exceeding £250k.",
      "Led a team of 3 engineers providing technical guidance, overseeing daily operations, conducting 1-on-1 sessions, and performance reviews.",
      "Developed and deployed scalable web applications using React, TypeScript, and Next.js with internationalisation support.",
      "Built complex UI components with Radix UI primitives and Tailwind CSS, creating accessible, responsive, and visually consistent interfaces.",
      "Built AI-powered recommendation systems leveraging machine learning models to increase user engagement.",
      "Architected GraphQL supergraphs with Apollo Federation, enabling modular and scalable API design.",
      "Developed native mobile applications using React Native with TypeScript for cross-platform compatibility.",
      "Created robust backend services with Node.js, Express, Hono and Bun for improved performance.",
      "Implemented real-time data communication using GraphQL subscriptions with WebSockets and SSE for live updates in critical applications.",
      "Worked on Kubernetes clusters on GCP with autoscaling capabilities.",
      "Implemented infrastructure as code using Terraform to manage AWS and GCP resources, ensuring consistent environments across development and production.",
      "Set up multi-region deployments on AWS ECS and GCP GKE for improved global latency.",
      "Built and improved CI/CD pipelines using GitLab and Docker for automated testing and deployment.",
      "Built native QA macOS tooling for internal testing processes.",
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    company: "Lush",
    period: "2022 - 2023",
    description:
      "Built responsive web applications using Next.js with both Pages and App Router, React 18, and TypeScript for type safety.",
    responsibilities: [
      "Implemented component-driven UI architecture using Chakra UI, Radix UI primitives for accessibility and Tailwind CSS for styling.",
      "Developed shop management tools that streamlined day-to-day operations and improved efficiency.",
      "Created Edge workers for Lush.com URL redirecting, enhancing site performance and SEO.",
      "Implemented internationalisation support for global markets.",
      "Collaborated with UX/UI designers to implement pixel-perfect interfaces following brand guidelines.",
      "Established Jest testing patterns for React components with React Testing Library for high test coverage.",
      "Mentored junior developers on React best practices and component composition patterns.",
      "Participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives.",
    ],
  },
  {
    id: 2,
    role: "Technical Business & Product Manager",
    company: "Selected Group",
    period: "2019 - 2022",
    description:
      "Led a team of 15 engineers, revamping processes by implementing weekly code sprints, agile methodologies, and code reviews.",
    responsibilities: [
      "Created cross-platform connections that resulted in a 285% increase in B2B sales.",
      "Built and managed a team of UX/UX Designers, resulting in tangible improvements in sprint delivery speeds.",
      "Collaborated with the CEO and potential customers to develop product concepts and roadmaps.",
      "Conducted customer interviews and demos to identify pain points and transform them into software solutions.",
      "Transformed decision-making processes by implementing key metric tracking tools.",
      "Managed a portfolio of 11 products within the hospitality industry.",
      "Developed and executed product strategy for Selected EPOS system for retail and hospitality businesses.",
      "Created and implemented standardized documentation practices across all products.",
      "Established OKRs and KPIs for product teams, increasing accountability and performance tracking.",
    ],
  },
];
