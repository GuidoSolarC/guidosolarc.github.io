/**
 * Tipos de datos para el portafolio de Guido Solar Cabrera
 */

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  linkedin: string;
  linkedinUrl: string;
  github: string;
  githubUrl: string;
  summary: string;
  avatarUrl: string;
  languages: {
    language: string;
    note?: string;
  }[];
}

export type ExperienceCategory = 'all' | 'frontend' | 'fullstack' | 'ai-modernization';

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  modality: 'Remoto' | 'Presencial' | 'Híbrido';
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  category: ExperienceCategory;
  description: string[];
  skills: string[];
  impactHighlight?: string;
}

export type SkillCategory = 'all' | 'frontend' | 'backend' | 'ai-tools' | 'db' | 'devops' | 'management' | 'other';

export interface SkillItem {
  name: string;
  category: SkillCategory;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  technologies: string[];
  role: string;
  companyContext: string;
  category: 'web' | 'fintech' | 'health' | 'ai';
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface CertificationItem {
  title: string;
  platform: string;
  date: string;
}
