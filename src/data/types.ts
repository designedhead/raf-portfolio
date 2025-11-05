export interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  link?: string;
  image?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}
