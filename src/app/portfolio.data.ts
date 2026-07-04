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
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  { label: 'Projects', target: 'projects' },
  { label: 'Education', target: 'education' },
  { label: 'Certifications', target: 'certifications' },
  { label: 'Contact', target: 'contact' },
];

export const COMPETENCIES: Competency[] = [
  { label: 'Software Development', level: 80 },
  { label: 'Web Application Development', level: 86 },
  { label: 'Frontend Development', level: 70 },
  { label: 'Backend Development', level: 90 },
  { label: 'Full Stack Development', level: 80 },
];

export const PROJECTS: Project[] = [
  {
    title: 'Movies Management Platform',
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
      { name: 'Angular', level: 80 },
      { name: 'TypeScript', level: 82 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 70 },
      { name: 'Bootstrap', level: 84 },
    ],
  },
  {
    key: 'backend',
    label: 'Backend',
    icon: 'bi-hdd-stack',
    skills: [
      { name: '.NET / C#', level: 74 },
      { name: 'Node.js', level: 72 },
      { name: 'REST APIs', level: 90 },
      { name: 'PHP', level: 70 },
      { name: 'Python', level: 52 },
    ],
  },
  {
    key: 'data',
    label: 'Databases & Tools',
    icon: 'bi-database',
    skills: [
      { name: 'SQL Server', level: 76 },
      { name: 'MongoDB', level: 70 },
      { name: 'MySQL', level: 72 },
      { name: 'Git', level: 80 },
      { name: 'Azure DevOps', level: 70 },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Trainee Software Engineer',
    company: 'CureMD, Pakistan',
    period: 'Jan 2026 — June 2026',
    location: 'Onsite',
    summary:
      'Worked on web-based applications using JavaScript, Angular, C# and .NET. ',
    highlights: [
      'Developed .NET Web APIs using database first approach utilizing .NET Core with Angular Frontend.',
      'Contributed to the development and enhancement of CureMD application’s features and functionalities.',
      'Gained hands-on experience with database operations, debugging, and improving application performance.',
      'Worked in agile development environment and directly communicated with team members and Project Manager',

    ],
    environment: ['Angular', 'TypeScript','.NET', 'SQL Server', 'GitHub Actions'],
    featured: true,
  },
  {
    role: 'PHP Bckend Developer (Intern)',
    company: 'The Next Code',
    period: 'August 2025 — November 2025',
    location: 'Onsite',
    summary:
      'Developed secure back-end logic, CRUD operations, and database configurations using PHP and MySQL databases.',
    highlights: [
      'Managed database tables and implemented using admin panel with backend PHP architecture.',
      'Utilized AdminLTE framework for creating responsive admin dashboards.',
      'Set up version control using Git & GitHub.',
    ],
    environment: ['PHP', 'JavaScript', 'MySQL', 'Filezilla', 'WordPress', 'Bootstrap'],
    featured: false,
  },
  {
    role: 'Frontend Design Intern',
    company: 'Adroit Light Solutions',
    period: 'Jan 2025 — April 2025',
    location: 'Onsite',
    summary:
      'Built clean UI components using HTML & vanilla CSS for elegant designs.',
    highlights: [
      'Got to know about the fundamentals and basics of Web development.',
      'Gain hands on experience with HTML & CSS for website design.',
      'Worked under direct supervision of senior developers.',
    ],
    environment: ['HTML5', 'CSS3', 'JavaScript'],
    featured: false,
  }
];

export const ABOUT_BIO =
  'Software engineer with hands on experience building clean interfaces and the scalable systems behind them. I work primarily across Angular and .NET, and I focus on efficient debugging, high performance, and improved user experience.';

export const ABOUT_TAGS = [
  'JavaScript',
  'Angular',
  'TypeScript',
  'Json',
  '.NET / C#',
  'Bootstrap',
  'SQL Server',
  'REST APIs',
  'Azure DevOps',
];
