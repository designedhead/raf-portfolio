import type { Project } from './types';

export const projects: Project[] = [
  {
    title: "GraphQL Query Toolkit",
    description:
      "A comprehensive GraphQL integration package that provides tRPC-like developer experience with type-safe cache management, multi-endpoint support, and React Query integration.",
    github: "https://www.npmjs.com/package/graphql-query-toolkit",
    tags: ["GraphQL", "TypeScript", "React Query", "tRPC-like", "package"],
  },
  {
    title: "React Focus Point",
    description:
      "A React component that enables dynamic focal point positioning for responsive images, ensuring the main subject remains visible across different screen sizes and aspect ratios.",
    github: "https://github.com/designedhead/react-focus-point",
    tags: ["React", "TypeScript", "package", "Image Handling"],
  },
  {
    title: "Wedsite.ai",
    description:
      "Full-stack AI-powered website builder platform with drag-and-drop editor, automated subdomain system, and AI-powered onboarding tools.",
    link: "https://wedsite.ai",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "AI"],
  },
  {
    title: "SAM - Lush",
    description:
      "Business Tool to help manage day to day in the retail stores, tracking stock, customer orders, deliveries, wastage and more.",
    link: "https://lush.com",
    tags: ["React.js", "Next.js", "Apollo", "Chakra UI", "Auth0"],
    image: "/projects/sam.png",
  },
  {
    title: "SAM - Native",
    description:
      "Native counterpart of a web application build with React Native, made with a focus on performance and speed.",
    tags: ["React Native", "Expo", "Apollo", "Tailwind"],
  },
  {
    title: "Lush AI",
    description:
      "AI Powered chatbot able to advice and answer questions on any Lush Product, built for customers and staff training.",
    link: "https://lush.com",
    tags: ["Typescript", "Bun", "Vectors", "AI"],
  },
  {
    title: "Lush Chat Order Tracking System",
    description:
      "Backend to connect front-end chatbot with Lush's internal systems to track orders and customer queries.",
    link: "https://lush.com",
    tags: ["Typescript", "Express.js", "GraphQL", "AWS"],
  },
  {
    title: "Video Template Library",
    description:
      "Built for a Video Marketing Company, to share in-house built templates across the company effectively.",
    link: "https://library.rafaelmendes.co.uk/",
    tags: [
      "Typescript",
      "Next.js",
      "TRPC",
      "Prisma",
      "NextAuth",
      "Cloudinary",
      "Chakra UI",
      "Google Drive Api",
    ],
    image: "/projects/video-library.jpg",
  },
  {
    title: "Lush.com - Redirector Edge Worker",
    description:
      "Backoffice & Cloud worker to manage redirects. Edge Redirection, Bulk upload, url validation for uniqueness, valid response, etc",
    link: "https://lush.com",
    tags: ["React.js", "Next.js", "Apollo", "Chakra UI", "Auth0"],
  },
  {
    title: "See other Projects",
    description: "See other projects I was involved with...",
    link: "https://github.com/designedhead",
    tags: [],
  },
];
