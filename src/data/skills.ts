import type { Skill } from './types';
import type { IconName } from '../types/icons';

// Curated list of high-impact skills for senior software engineer
// Ordered by importance and relevance
export const skills: Array<Omit<Skill, 'icon'> & { icon: IconName }> = [
  // Core Languages
  { name: "TypeScript", icon: "typescript" },

  // Frontend Frameworks
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },

  // Backend & Runtime
  { name: "Node.js", icon: "nodedotjs" },
  { name: "GraphQL", icon: "graphql" },
  { name: "PostgreSQL", icon: "postgresql" },

  // DevOps & Cloud
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Terraform", icon: "terraform" },

  // Testing & Tools
  { name: "Jest", icon: "jest" },
  { name: "Git", icon: "git" },
  { name: "CI/CD", icon: "githubactions" },
  { name: "Redis", icon: "redis" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
];
