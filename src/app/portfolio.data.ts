export interface Project {
  title: string;
  category: string;
  icon: string;
  description: string;
  stack: string[];
  github: string;
  demo: string;
}

export interface Competency {
  label: string;
  level: number;
}

export interface TechSkill {
  name: string;
  level: number;
}

export interface TechCategory {
  key: string;
  label: string;
  icon: string;
  skills: TechSkill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  environment: string[];
  featured: boolean;
}

export interface NavLink {
  label: string;
  target: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Contact', target: 'contact' },
];

export const COMPETENCIES: Competency[] = [
  { label: 'Frontend Development', level: 92 },
  { label: 'Architecture Management', level: 85 },
  { label: 'Scalable Design', level: 88 },
  { label: 'Full Stack Development', level: 80 },
];

export const PROJECTS: Project[] = [
  {
    title: 'Nexus Dashboard',
    category: 'Web App',
    icon: 'bi-grid-1x2',
    description:
      'A real-time analytics dashboard with modular widgets, role-based access, and live data streams for monitoring system health.',
    stack: ['Angular', '.NET', 'SignalR', 'SQL Server'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Vault API Gateway',
    category: 'Backend',
    icon: 'bi-shield-lock',
    description:
      'A centralized API gateway handling authentication, rate limiting, and request routing across a fleet of microservices.',
    stack: ['.NET', 'Redis', 'Docker', 'JWT'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Pulse Design System',
    category: 'UI Library',
    icon: 'bi-palette',
    description:
      'A component library and design token system shipping accessible, themeable Angular components across product teams.',
    stack: ['Angular', 'Tailwind CSS', 'Storybook'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Orbit Task Flow',
    category: 'Productivity',
    icon: 'bi-list-check',
    description:
      'A collaborative task manager with drag-and-drop boards, real-time sync, and offline-first persistence.',
    stack: ['Angular', 'Supabase', 'TypeScript'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Insight Reports',
    category: 'Data Viz',
    icon: 'bi-bar-chart-line',
    description:
      'An automated reporting engine that transforms raw query output into branded, exportable PDF and Excel deliverables.',
    stack: ['Angular', '.NET', 'SQL', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Echo Chat',
    category: 'Realtime',
    icon: 'bi-chat-dots',
    description:
      'A low-latency messaging platform with presence, typing indicators, and end-to-end encrypted direct channels.',
    stack: ['Angular', '.NET', 'WebSockets', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
];

export const TECH_CATEGORIES: TechCategory[] = [
  {
    key: 'frontend',
    label: 'Frontend',
    icon: 'bi-window-stack',
    skills: [
      { name: 'Angular', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 88 },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    icon: 'bi-hdd-stack',
    skills: [
      { name: '.NET / C#', level: 88 },
      { name: 'Node.js', level: 78 },
      { name: 'REST APIs', level: 90 },
      { name: 'SignalR', level: 80 },
      { name: 'Authentication', level: 82 },
    ],
  },
  {
    key: 'data',
    label: 'Databases & Tools',
    icon: 'bi-database',
    skills: [
      { name: 'SQL Server', level: 88 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'Redis', level: 75 },
      { name: 'Git', level: 92 },
      { name: 'Docker', level: 78 },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Frontend Design Intern',
    company: 'Nexora Technologies',
    period: 'Jun 2024 — Dec 2024',
    location: 'Remote',
    summary:
      'Built and refined Angular-based UI components for a client-facing analytics platform, partnering closely with design and backend teams.',
    highlights: [
      'Developed 20+ reusable Angular components following a strict design token system, improving cross-team consistency.',
      'Reduced initial bundle size by 18% through lazy loading and tree-shaking unused dependencies.',
      'Collaborated with designers to translate Figma mockups into pixel-accurate, accessible interfaces.',
      'Wrote unit and integration tests raising frontend coverage from 54% to 81%.',
    ],
    environment: ['Angular', 'TypeScript', 'Tailwind CSS', 'Figma', 'Jest'],
    featured: true,
  },
  {
    role: 'Full Stack Developer (Freelance)',
    company: 'Independent',
    period: 'Jan 2023 — May 2024',
    location: 'Remote',
    summary:
      'Delivered end-to-end web applications for small businesses, owning architecture, implementation, and deployment.',
    highlights: [
      'Shipped 6 production applications spanning dashboards, landing pages, and internal tools.',
      'Designed RESTful APIs in .NET and integrated them with Angular frontends.',
      'Set up CI/CD pipelines and containerized deployments using Docker.',
    ],
    environment: ['Angular', '.NET', 'SQL Server', 'Docker'],
    featured: false,
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Community',
    period: '2022 — Present',
    location: 'Remote',
    summary:
      'Active contributor to Angular UI libraries and developer tooling, with a focus on accessibility and DX.',
    highlights: [
      'Merged 30+ pull requests across component libraries and CLI tooling.',
      'Triaged community issues and reviewed contributions from new contributors.',
    ],
    environment: ['Angular', 'TypeScript', 'GitHub Actions'],
    featured: false,
  },
];

export const ABOUT_BIO =
  'I am a software engineer focused on building clean, maintainable interfaces and the scalable systems behind them. I work primarily across Angular and .NET, and I care deeply about accessibility, performance, and the small details that make a product feel deliberate.';

export const ABOUT_TAGS = [
  'Angular',
  'TypeScript',
  '.NET / C#',
  'Tailwind CSS',
  'SQL Server',
  'REST APIs',
  'Docker',
  'Accessibility',
];
