export const personalInfo = {
  name: "Nguyễn Hồng Quân",
  role: "Senior Fullstack Developer (Strong FE)",
  location: "Ha Noi, Viet Nam",
  email: "nguyenhongquan1921@gmail.com",
  phone: "+84-946-657-509",
  linkedin: "https://linkedin.com/in/nguyenhongquan1921",
  github: "https://github.com/kukuakuan",
  objective: "Fullstack Software Engineer with 4+ years of experience building production-grade web applications. Specialized in modern frontend architecture with React and Next.js, and backend systems using Node.js, NestJS, and FastAPI.",
};

export const skills = {
  frontend: {
    title: "Frontend Engineering",
    level: "Expert",
    skills: ["Next.js", "React", "TypeScript", "Vite", "Tailwind"],
    description: "Architecting and delivering production-grade web applications with strong focus on performance, scalability, and user experience."
  },
  backend: {
    title: "Backend & APIs",
    level: "Advanced",
    skills: ["NestJS", "Node.js", "FastAPI", "Django"],
    description: "Designing scalable backend systems, REST APIs, authentication layers, and service orchestration."
  },
  ai: {
    title: "AI & Intelligent Systems",
    level: "Advanced",
    skills: ["AI Agents", "RAG", "LangChain", "OpenAI API"],
    description: "Building multi-datasource AI agents and LLM-powered applications integrated into real business products."
  },
  cloud: {
    title: "Cloud & DevOps",
    level: "Proficient",
    skills: ["Docker", "AWS", "Supabase", "Xano", "WeWeb"],
    description: "Containerized deployments, cloud services, and rapid product infrastructure."
  },
};

export const experiences = [
  {
    id: 1,
    company: "Sotatek - APAC",
    role: "Senior Fullstack Developer (Strong FE)",
    period: "04/2025 - Present",
    location: "Remote",
    current: true,
    description: "Leading frontend development and AI integration teams across multiple high-impact projects with focus on modern web technologies and AI-powered solutions.",
    achievements: [
      "Lead FE and Lead AI team on AI2Bee Agent - Professional AI Assistant",
      "Lead FE developer managing 3 frontend developers on HappyHappy platform",
      "Lead developer managing 4 developers on 3D Furniture Generator",
      "Delivered multiple enterprise-level AI-powered applications",
    ],
    technologies: ["Next.js", "NestJS", "Vite", "Python", "FastAPI", "AI/ML"],
    projects: [
      "AI2Bee Agent",
      "Synapticare",
      "VaticAI",
      "HappyHappy",
      "3D Furniture Generator",
    ],
  },
  {
    id: 2,
    company: "5GL - Young IT Technology JSC",
    role: "Fullstack Developer",
    period: "03/2023 - 04/2025",
    location: "Ha Noi",
    current: false,
    description: "Developed multiple web applications and conducted AI research for patrimony product.",
    achievements: [
      "AI research and implementation for patrimony product",
      "Delivered 4+ major projects including SNDQ, Syndic, Struqta, and Nuvoni",
      "Fullstack development across diverse tech stacks",
    ],
    technologies: ["ReactJS", "VueJS", "NextJS", "NodeJS", "NestJS"],
    projects: ["SNDQ", "Syndic", "Struqta", "Nuvoni"],
  },
  {
    id: 3,
    company: "FPTIS",
    role: "Fullstack Developer (Strong FE)",
    period: "06/2022 - 03/2023",
    location: "Ha Noi",
    description: "Focused on frontend development with React and TypeScript, working on enterprise applications.",
    achievements: [
      "Strong frontend expertise",
      "Delivered multiple enterprise solutions",
    ],
    technologies: ["ReactTS", "C#", "NodeJS"],
    projects: ["Construction", "MDM", "Purchase", "Advanced Payment"],
  },
  {
    id: 4,
    company: "Institute of Geophysics",
    role: "Web Developer",
    period: "12/2020 - 06/2022",
    location: "Ha Noi",
    description: "Developed web applications, tools, and AI solutions for geophysics research.",
    achievements: [
      "Built department management systems",
      "Developed AI tools for research",
    ],
    technologies: ["ReactTS", "Python", "NextJS", "NodeJS"],
    projects: ["Department Management System", "Research Tools"],
  },
  {
    id: 5,
    company: "Teky Holdings",
    role: "Lecturer",
    period: "04/2020 - 12/2020",
    location: "Ha Noi",
    description: "Taught Python and web programming to students.",
    achievements: [
      "Educated students in programming",
      "Developed curriculum materials",
    ],
    technologies: ["Python", "Web Technologies"],
    projects: ["Educational Programs"],
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Furniture Generator",
    description: "Lead developer for 3D floor layout and furniture placement system with AI-powered furniture suggestions.",
    role: "Lead Developer",
    teamSize: 4,
    technologies: ["Vite", "Python", "FastAPI"],
    features: [
      "3D floor layout visualization",
      "AI-powered furniture suggestions",
      "Interactive furniture placement",
    ],
    image: "/projects/3d-furniture.png",
    links: {
      demo: "",
      github: "",
    },
  },
  {
    id: 2,
    title: "HappyHappy Gaming Platform",
    description: "Mobile-first web application for gamers with modern UI/UX and real-time features.",
    role: "Lead FE Developer",
    teamSize: 3,
    technologies: ["Next.js", "TypeScript"],
    features: [
      "Mobile-first design",
      "Real-time updates",
      "Gaming community features",
    ],
    image: "/projects/happyhappy.png",
    links: {
      demo: "",
      github: "",
    },
  },
  {
    id: 3,
    title: "Synapticare & VaticAI",
    description: "Healthcare and AI applications built with modern fullstack technologies.",
    role: "Fullstack Developer",
    teamSize: 4,
    technologies: ["Next.js", "NestJS", "Python"],
    features: [
      "Healthcare management",
      "AI-powered features",
      "Secure data handling",
    ],
    image: "/projects/synapticare.png",
    links: {
      demo: "",
      github: "",
    },
  },
  {
    id: 4,
    title: "AI Contact Management (Patrimony)",
    description: "Small AI system for contact management with research and implementation focus.",
    role: "Fullstack Developer",
    teamSize: 2,
    technologies: ["NextJS", "NestJS", "AI/ML"],
    features: [
      "AI-powered contact management",
      "Smart categorization",
      "Research implementation",
    ],
    image: "/projects/patrimony.png",
    links: {
      demo: "",
      github: "",
    },
  },
  {
    id: 5,
    title: "Institute of Geophysics System",
    description: "Department and system management platform for geophysics research institute.",
    role: "Fullstack Developer",
    teamSize: 3,
    technologies: ["ReactTS", "Python", "NextJS", "NodeJS"],
    features: [
      "Department management",
      "Research data management",
      "System administration",
    ],
    image: "/projects/geophysics.png",
    links: {
      demo: "",
      github: "",
    },
  },
];

export const education = [
  {
    id: 1,
    degree: "Master's Degree",
    field: "Computer Science",
    period: "2024 - NOW",
    institution: "University of Engineering and Technology - VNU",
    location: "Ha Noi",
    gpa: null,
  },
  {
    id: 2,
    degree: "Bachelor's Degree",
    field: "Computer Science",
    period: "2019 - 2023",
    institution: "University of Engineering and Technology - VNU",
    location: "Ha Noi",
    gpa: "3.26",
  },
  {
    id: 3,
    degree: "High School",
    field: "IT Specialization",
    period: "2016 - 2019",
    institution: "Hung Vuong High School for The Gifted Student",
    location: "Ha Noi",
    gpa: null,
  },
];

export const quickFacts = [
  {
    icon: "📍",
    label: "Location",
    value: "Cau Giay, Ha Noi",
  },
  {
    icon: "🎓",
    label: "Education",
    value: "Master student in Computer Science",
  },
  {
    icon: "💼",
    label: "Experience",
    value: "4+ years professional experience",
  },
  {
    icon: "🌐",
    label: "English",
    value: "B2 (APTIS ESOL)",
  },
];

export const references = [
  {
    name: "Mr. Nguyen Quang Minh",
    role: "Reference",
    company: "",
  },
  {
    name: "Mr. Le Duc Thang",
    role: "Reference",
    company: "",
  },
  {
    name: "Mr. Le Quang Anh",
    role: "Reference",
    company: "",
  },
];

// Featured Projects for Hero Section
export const featuredProjects = [
  {
    id: 'ai2bee-agent',
    title: 'AI2Bee Agent',
    subtitle: 'Professional AI Assistant with Multi-Datasource Support',
    role: 'Lead FE & Lead AI Team',
    company: 'Sotatek - APAC',
    period: '04/2025 - Present',
    status: 'Active Development',
    description: 'Leading both frontend and AI teams in developing a professional-grade AI agent capable of supporting multiple datasources.',
    technologies: ['Next.js', 'TypeScript', 'Python', 'Node.js', 'AI/ML'],
    teamSize: 'Multiple teams',
    impact: 'Enterprise-level AI solution',
    featured: true,
    highlightColor: 'purple',
  },
  {
    id: 'sndq',
    title: 'SNDQ',
    subtitle: 'Advanced Web Application',
    role: 'Fullstack Developer',
    company: '5GL - Young IT Technology JSC',
    period: '2023 - 2025',
    status: 'Completed',
    description: 'Full-stack web application built with modern technologies.',
    technologies: ['Next.js', 'React', 'Node.js', 'NestJS'],
    teamSize: '3-4 developers',
    impact: 'Successful delivery',
    featured: true,
    highlightColor: 'blue',
  },
];

// Leadership & Team Management Metrics
export const leadershipMetrics = {
  teamsLed: 3,
  totalDevsManaged: 11,
  projectsAsLead: 3,
  techStacksLed: ['Frontend (Next.js, React)', 'AI/ML Integration', 'Fullstack'],
  yearsLeading: '2024 - Present',
  highlights: [
    'Dual leadership role (FE + AI teams)',
    'Cross-functional team coordination',
    'Enterprise-level project delivery',
  ],
};
