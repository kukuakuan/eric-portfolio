// Type definitions for portfolio data

export interface Skill {
  name: string;
  level: number;
  highlight?: boolean;
}

export interface SkillCategory {
  languages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  role: string;
  teamSize: number;
  technologies: readonly string[];
  features: readonly string[];
  image: string;
  links: {
    demo?: string;
    github?: string;
  };
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: readonly string[];
  technologies: readonly string[];
  projects: readonly string[];
}

export interface Education {
  id: number;
  degree: string;
  field: string;
  period: string;
  institution: string;
  location: string;
  gpa: string | null;
}

export interface PersonalInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  objective: string;
}

export interface QuickFact {
  icon: string;
  label: string;
  value: string;
}

export interface Reference {
  name: string;
  role: string;
  company: string;
}
