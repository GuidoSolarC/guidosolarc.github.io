import {
  PersonalInfo,
  WorkExperience,
  SkillItem,
  ProjectItem,
  EducationItem,
  CertificationItem,
} from '../types/portfolio';
import avatarImg from '../assets/images/dev_profile.jpg';

export const personalInfo: PersonalInfo = {
  name: 'Guido Solar Cabrera',
  title: 'Desarrollador de Software',
  subtitle: 'Vue.js · React · Node.js · TypeScript · IA Orquestada',
  location: 'Chile (Remoto)',
  email: 'guido.solar.c@gmail.com',
  linkedin: 'guidosolar',
  linkedinUrl: 'https://www.linkedin.com/in/guidosolar',
  github: 'GuidoSolarC',
  githubUrl: 'https://github.com/GuidoSolarC',
  summary:
    'Ingeniero en Informática con sólida experiencia en desarrollo de software para áreas de finanzas, salud y publicidad. Especializado en arquitectura de interfaces con Vue.js y React, servicios backend con Node.js y modernización de sistemas existentes, complementando el flujo de trabajo con herramientas y agentes de IA (Claude Code, GitHub Copilot y Gemini).',
  avatarUrl: avatarImg,
  languages: [
    { language: 'Español', note: 'Nativo' },
    { language: 'Inglés', note: 'Avanzado' },
  ],
};

export const experiences: WorkExperience[] = [
  {
    id: 'afex-av-software-developer',
    role: 'Desarrollador de Software',
    company: 'AFEX Agencia de Valores',
    location: 'Santiago, Chile',
    modality: 'Remoto',
    startDate: 'Sept 2026',
    endDate: 'Actualidad',
    isCurrent: true,
    category: 'ai-modernization',
    description: [
      'Implementación de soluciones para optimización de procesos de negocio.',
      'Desarrollo impulsado con orquestación de agentes IA (Claude, Copilot, Gemini, entre otros).',
    ],
    skills: ['C#', 'Azure', '.NET', 'Angular', 'Claude Code', 'Gemini', 'Copilot', 'SQL'],
  },
  {
    id: 'afex-software-developer',
    role: 'Desarrollador de Software',
    company: 'AFEX CHILE',
    location: 'Santiago, Chile',
    modality: 'Remoto',
    startDate: 'Nov 2023',
    endDate: 'Ago 2026',
    isCurrent: false,
    category: 'fullstack',
    description: [
      'Implementación de soluciones para optimización de procesos de negocio.',
      'Modernización de proyectos legacy hacia arquitecturas modulares.',
      'Desarrollo impulsado con orquestación de agentes IA (Claude, Copilot, Gemini, entre otros).',
    ],
    skills: ['Vue.js', 'Node.js', 'Claude Code', 'Gemini', 'Copilot', 'TypeScript', 'SQL'],
  },
  {
    id: 'afex-vuejs-frontend',
    role: 'Vue.js Front End Developer',
    company: 'AFEX CHILE',
    location: 'Santiago, Chile',
    modality: 'Remoto',
    startDate: 'Sep 2022',
    endDate: 'Nov 2023',
    category: 'frontend',
    description: [
      'Participación en el proyecto de modernización para las operaciones en el frente de caja.',
      'Implementación de vistas realizadas por el equipo de UX/UI con Vue.js y conexión a servicios REST.',
    ],
    skills: ['Vue.js', 'JavaScript', 'REST APIs', 'UX/UI', 'HTML / CSS'],
  },
  {
    id: 'auxilia-fullstack',
    role: 'Full Stack Developer',
    company: 'Auxilia Chile',
    location: 'Santiago, Chile',
    modality: 'Remoto',
    startDate: 'Abr 2022',
    endDate: 'Sep 2022',
    category: 'fullstack',
    description: [
      'Mejoras continuas del producto interno para la gestión y colaboración con aseguradoras.',
      'Resolución de incidencias e integración de servicios internos.',
    ],
    skills: ['Node.js', 'JavaScript', 'SQL', 'REST APIs', 'Git'],
  },
  {
    id: 'nuevo-capital-fullstack',
    role: 'Full Stack Developer',
    company: 'Nuevo Capital',
    location: 'Santiago, Chile',
    modality: 'Remoto',
    startDate: 'Ene 2020',
    endDate: 'Feb 2022',
    category: 'fullstack',
    description: [
      'Desarrollo de soluciones de software que soportaron operaciones financieras clave.',
      'Modernización de sistemas legacy a nuevas arquitecturas, mejorando la escalabilidad, seguridad y eficiencia operativa.',
    ],
    skills: ['Node.js', 'SQL / PostgreSQL', 'Clean Code', 'Git', 'Arquitectura de Software'],
  },
  {
    id: 'isapre-consalud-analista',
    role: 'Analista / Desarrollador',
    company: 'Isapre Consalud',
    location: 'Santiago, Chile',
    modality: 'Presencial',
    startDate: 'Ago 2018',
    endDate: 'Ene 2020',
    category: 'fullstack',
    description: [
      'Análisis y desarrollo de soluciones que mejoraron la gestión de datos clínicos.',
      'Optimización de procesos que redujeron tiempos de respuesta en sistemas internos.',
      'Colaboración con equipos técnicos para implementar mejoras continuas.',
      'Participación en documentación y pruebas de software para asegurar calidad.',
      'Gestión y coordinación de desarrollos con empresas externas.',
    ],
    skills: ['SQL', 'Gestión de Datos', 'Control de Calidad', 'Documentación Técnica'],
  },
  {
    id: 'uno-publicidad-webdev',
    role: 'Desarrollador Web',
    company: 'Uno Publicidad',
    location: 'Los Ángeles, Chile',
    modality: 'Presencial',
    startDate: 'Oct 2015',
    endDate: 'Mar 2018',
    category: 'frontend',
    description: [
      'Desarrollo de páginas web impulsando conceptos como mobile-first y responsive design.',
      'Configuración e implementación de SEO.',
      'Colaboración y orientación sobre tecnologías a equipos de diseño.',
    ],
    skills: ['Mobile-First', 'Responsive Design', 'SEO', 'JavaScript', 'HTML5 / CSS3'],
  },
  {
    id: 'comes-webdev',
    role: 'Desarrollador Web',
    company: 'ComeS',
    location: 'Los Ángeles, Chile',
    modality: 'Presencial',
    startDate: 'Mar 2017',
    endDate: 'Ene 2018',
    category: 'frontend',
    description: [
      'Encargado de planificar y ejecutar el desarrollo de la fase inicial del proyecto ComeS para conectar pequeños productores con clientes locales.',
      'Solución web de trazabilidad donde se identifica el origen del producto y sus productores.',
    ],
    skills: ['E-Commerce', 'Frontend', 'JavaScript', 'REST APIs'],
  },
];

export const skillsList: SkillItem[] = [
  // AI & Development Tools
  { name: 'Claude Code', category: 'ai-tools' },
  { name: 'Github Copilot', category: 'ai-tools' },
  { name: 'Google Gemini', category: 'ai-tools' },
  { name: 'Orquestación de Agentes IA', category: 'ai-tools' },

  // Frontend
  { name: 'Vue.js', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript (ES6+)', category: 'frontend' },
  { name: 'Ant Vue', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'HTML5 / CSS3', category: 'frontend' },

  // Backend  
  { name: 'C#', category: 'backend' },  
  { name: '.NET', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Patrones de diseño', category: 'backend' },

  // Cloud & Databases  
  { name: 'Azure', category: 'devops' },
  { name: 'AWS', category: 'devops' },
  { name: 'Git', category: 'devops' },

  // Databases
  { name: 'SQL Server', category: 'db' },
  { name: 'MySQL', category: 'db' },
  { name: 'PostgreSQL', category: 'db' },
  { name: 'Oracle', category: 'db' },

  // Management & Methodologies
  { name: 'Scrum', category: 'management' },
  { name: 'Kanban', category: 'management' }
];

export const projects: ProjectItem[] = [
  {
    id: 'afex-modern-pos',
    title: 'Modernización Operativa Frente de Caja',
    subtitle: 'AFEX Chile · Vue.js · REST APIs',
    description:
      'Renovación del sistema de punto de venta para la red de sucursales, optimizando tiempos de respuesta e integrando servicios mediante componentes reutilizables con Vue.js.',
    impact: 'Mejora en la fluidez transaccional y estandarización del diseño.',
    technologies: ['Vue.js', 'Node.js', 'REST APIs', 'SQL'],
    role: 'Desarrollador de Software',
    companyContext: 'Operaciones Financieras y Remesas',
    category: 'fintech',
  },
  {
    id: 'financial-core-migration',
    title: 'Modernización de Sistemas Transaccionales',
    subtitle: 'Nuevo Capital · Node.js · SQL',
    description:
      'Transición de arquitecturas legacy a nuevos esquemas de servicios para soportar operaciones financieras clave con mayor estabilidad y mantenibilidad.',
    impact: 'Optimización de procesos operativos y robustez en la gestión de datos.',
    technologies: ['Node.js', 'SQL', 'Arquitectura Modular', 'Git'],
    role: 'Full Stack Developer',
    companyContext: 'Fintech & Factoring',
    category: 'fintech',
  },
  {
    id: 'clinical-data-engine',
    title: 'Gestión y Optimización de Datos Clínicos',
    subtitle: 'Isapre Consalud · SQL · Procesos Internos',
    description:
      'Análisis y desarrollo de soluciones para la gestión de datos médicos, reduciendo tiempos de consulta en plataformas internas.',
    impact: 'Menor tiempo de respuesta y mayor confiabilidad en las consultas.',
    technologies: ['SQL', 'Testing', 'Documentación Técnica'],
    role: 'Analista / Desarrollador',
    companyContext: 'Salud',
    category: 'health',
  },
  {
    id: 'comes-community-marketplace',
    title: 'Plataforma Web ComeS',
    subtitle: 'ComeS · Fase Inicial',
    description:
      'Desarrollo de la primera versión de la plataforma comunitaria que conecta productores agropecuarios con consumidores locales.',
    impact: 'Base técnica que permitió la expansión del proyecto.',
    technologies: ['Mobile-First', 'JavaScript', 'HTML5/CSS3'],
    role: 'Desarrollador Web',
    companyContext: 'E-Commerce Comunitario',
    category: 'web',
  },
];

export const educationList: EducationItem[] = [
  {
    degree: 'Ingeniería en Informática',
    institution: 'INACAP',
    location: 'Los Ángeles, Chile',
    period: 'Mar 2012 — Mar 2017',
    description:
      'Carrera profesional enfocada en desarrollo de sistemas, bases de datos, redes y arquitectura de software.',
  },
];

export const certificationsList: CertificationItem[] = [  
  {
    title: 'EF SET English Certificate 64/100 (C1 Advanced)',
    platform: 'EF SET',
    date: 'Jul 2026',
  },
  {
    title: 'Curso de Backend con Node.js: API REST con Express.js',
    platform: 'Platzi',
    date: 'Jul 2022',
  },
  {
    title: 'Patrones de diseño en Javascript y Node JS',
    platform: 'Udemy',
    date: 'Mar 2021',
  },
  {
    title: 'Introducción a la programación con Python',
    platform: 'Coursera',
    date: 'Nov 2020',
  },
  {
    title: 'Scrum Foundation Professional Certificate (SFPC)',
    platform: 'CertiProf',
    date: 'Jun 2020',
  },
  {
    title: 'Curso Intensivo Angular 8',
    platform: 'Programadores Chile',
    date: 'Feb 2020',
  },
];
