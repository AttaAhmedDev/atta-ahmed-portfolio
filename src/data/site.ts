/**
 * Portfolio content — edit this file to update the website.
 *
 * Fields wrapped in [brackets] are placeholders.
 * Replace them with real information before sending to recruiters.
 * Set isPlaceholder to false once an entry is real.
 */

export const profile = {
  name: 'Atta Ahmed',
  firstName: 'Atta',
  role: 'Software Engineer | Full-Stack & Backend Development | Python, TypeScript, React, REST APIs',
  headline: 'I ship production systems end to end, from APIs and databases to live deployments.',
  focus:
    'Software Engineer shipping production backend systems and full-stack features in Python, TypeScript, and React.',
  email: 'ataahmad17122000@gmail.com',
  github: 'https://github.com/AttaAhmedDev',
  linkedin: 'https://www.linkedin.com/in/atta-ahmed-9966a3403',
  resumeUrl: '/resume.pdf',
  photo: '/atta-ahmed.jpg',
  location: 'Cairo, Egypt',
  phone: '+20 111 213 6852',
  /**
   * Optional: Formspree, Web3Forms, or any JSON endpoint.
   * Leave empty to send messages through WhatsApp as a fallback.
   * Example: 'https://formspree.io/f/xxxxxxxx'
   */
  formEndpoint: '',
}

export function phoneDigits(phone: string = profile.phone): string {
  return phone.replace(/\D/g, '')
}

export function whatsappUrl(text?: string, phone: string = profile.phone): string {
  const base = `https://wa.me/${phoneDigits(phone)}`
  const message = text?.trim()
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
] as const

export const sectionIds = nav.map((item) => item.id)

export const hero = {
  greeting: "Hi, I'm Atta Ahmed.",
  title: 'Software Engineer shipping full-stack and backend systems with Python, TypeScript, and React.',
  body: 'I design databases and REST APIs, build React interfaces, run background job queues, and put working features in front of real users.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Download Resume', href: '/resume.pdf' },
  stack: [
    { name: 'React', layer: 'Interface', via: 'HTTPS' },
    { name: 'API', layer: 'Contract', via: 'JSON' },
    { name: 'Python', layer: 'Application', via: 'Logic' },
    { name: 'Database', layer: 'Persistence', via: 'SQL' },
  ],
}

export const about = {
  kicker: '01',
  title: 'About Me',
  paragraphs: [
    'Software Engineer with hands-on experience shipping production backend systems and full-stack features in Python (Flask/Django), JavaScript/TypeScript, and React.',
    'I own work end to end, from database design and REST APIs with JWT authentication and role-based access control to background job queues and live deployments, for remote and international clients.',
    'I focus on getting working features in front of real users quickly and refining them, with strong attention to clean architecture, test coverage, and code quality. I am comfortable working autonomously, learning new stacks fast, and collaborating with senior engineers on debugging, code review, and iterative delivery.',
  ],
  focus: [
    'Production backend systems in Python (Flask/Django)',
    'Full-stack features with React and TypeScript',
    'REST APIs with JWT and role-based access control',
    'PostgreSQL and MySQL database design',
    'Background jobs with Celery, RabbitMQ, and Redis',
    'Testing, clean architecture, and live deployments',
  ],
}

export const skillGroups = [
  {
    id: 'languages',
    title: 'Programming Languages',
    items: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'PHP', 'SQL'],
  },
  {
    id: 'backend',
    title: 'Backend Development',
    items: [
      'Django',
      'Django REST Framework',
      'Flask',
      'REST APIs',
      'API Integration',
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
      'SQLAlchemy',
      'ORM',
      'CRUD Operations',
      'MVC',
      'MVT',
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Queues',
    items: [
      'PostgreSQL',
      'MySQL',
      'Redis',
      'RabbitMQ',
      'Celery',
      'Database Design',
      'Query Optimization',
      'Background Jobs',
      'Asynchronous Task Queues',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    items: [
      'React',
      'Vite',
      'React Router',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Chart.js / react-chartjs-2',
      'State Management',
      'Component-Based Architecture',
      'Responsive Design',
    ],
  },
  {
    id: 'testing',
    title: 'Testing & Quality',
    items: [
      'Unit Testing',
      'pytest',
      'pytest-django',
      'factory-boy',
      'unittest',
      'OpenAPI (drf-spectacular)',
      'Code Review',
      'Object-Oriented Programming (OOP)',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    items: [
      'Git',
      'GitHub Actions',
      'Docker',
      'Docker Compose',
      'Kubernetes',
      'Railway',
      'Cloudflare',
      'Vercel',
      'Gunicorn',
      'Linux',
      'npm',
      'Postman',
      'Agile',
      'Software Development Life Cycle (SDLC)',
    ],
  },
] as const

export const architectureLayers = [
  {
    id: 'frontend',
    name: 'React Frontend',
    layer: 'Interface',
    summary:
      'The part users see and interact with. I build responsive React interfaces that talk to the backend through a clear API contract.',
  },
  {
    id: 'api',
    name: 'REST API',
    layer: 'Contract',
    summary:
      'The boundary between client and server. I design endpoints that are predictable, resource-oriented, and straightforward to consume.',
  },
  {
    id: 'backend',
    name: 'Python Backend',
    layer: 'Application',
    summary:
      'The server that handles requests. I use Python to validate input, manage authentication, and orchestrate application behavior.',
  },
  {
    id: 'logic',
    name: 'Business Logic',
    layer: 'Domain',
    summary:
      'The rules of the product. I keep domain logic explicit and separate from transport and persistence so the system stays maintainable.',
  },
  {
    id: 'database',
    name: 'PostgreSQL Database',
    layer: 'Persistence',
    summary:
      'The source of truth. I design schemas, think about transactions and integrity, and store data in a way the rest of the stack can trust.',
  },
] as const

export type Project = {
  id: string
  isPlaceholder: boolean
  name: string
  scope: string
  description: string
  problem: string
  solution: string
  contribution: string
  stack: string[]
  features: string[]
  github: string
  live: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 'corexion',
    isPlaceholder: false,
    name: 'COREXION',
    scope: 'Full-stack',
    description:
      'A production Django marketing site with server-rendered pages, clean URLs, and a PostgreSQL CMS for headings, copy, and photos.',
    problem:
      'The company needed a public site where copy and photos could be edited without touching templates, while keeping crawlable pages on clean URLs.',
    solution:
      'Django renders each page from templates. A private CMS stores sections in PostgreSQL; photos go to object storage. A rate-limited read API and automated tests cover content and image cleanup.',
    contribution:
      'I built and shipped the site end to end, including the CMS, tests, and the live Railway + Cloudflare deployment at corexion.uk.',
    stack: ['Python', 'Django', 'PostgreSQL', 'Railway', 'Cloudflare'],
    features: [
      'Server-rendered marketing pages with clean URLs',
      'Private CMS for headings, copy, and photos',
      'PostgreSQL content model with image cleanup',
      'Live production site',
    ],
    github: 'https://github.com/AttaAhmedDev/COREXION',
    live: 'https://corexion.uk/',
    image: '/projects/corexion.png',
  },
  {
    id: 'flowdesk',
    isPlaceholder: false,
    name: 'FlowDesk',
    scope: 'Full-stack',
    description:
      'A multi-tenant SaaS dashboard where companies sign up and see only their own analytics — revenue, orders, and team members.',
    problem:
      'Businesses need a shared product with strict data isolation, so one company can never view another company\'s revenue, orders, or users.',
    solution:
      'A Flask JSON API with JWT auth, role-based access control, and PostgreSQL tenancy, paired with a Vite + React SPA for the dashboard.',
    contribution:
      'I designed and built the full stack: data models, REST endpoints, RBAC, migrations, and the React interface for auth, analytics, orders, and team management.',
    stack: ['Python', 'Flask', 'PostgreSQL', 'React', 'JWT', 'SQLAlchemy'],
    features: [
      'Multi-tenant company isolation',
      'JWT register, login, and invites',
      'RBAC with owner, admin, manager, and specialist roles',
      'Revenue charts, order tracking, and team administration',
    ],
    github: 'https://github.com/AttaAhmedDev/saas-dashboard',
    live: 'https://saas-dashboard-atta14.vercel.app/',
    image: '/projects/flowdesk.png',
  },
  {
    id: 'albushra',
    isPlaceholder: false,
    name: 'Online Learning Platform',
    scope: 'Full-stack',
    description:
      'A live e-learning platform for browsing courses and learning materials, with an admin dashboard for content management.',
    problem:
      'Students and teachers needed a single place to access organized English and Math resources — worksheets, presentations, games, and flashcards.',
    solution:
      'A React SPA talks to a JSON API for auth, content CRUD, and settings. The production site is routed so /api goes to the backend and everything else serves the React app.',
    contribution:
      'I built the React frontend, API integration, admin content workflows, and the live deployment at albushraedu.com.',
    stack: ['React', 'JavaScript', 'PHP', 'REST APIs', 'MySQL'],
    features: [
      'Course and material browsing',
      'Worksheets, presentations, games, and flashcards',
      'Student register/login and admin dashboard',
      'Live production site',
    ],
    github: 'https://github.com/AttaAhmedDev/albushraedu_website',
    live: 'https://albushraedu.com',
    image: '/projects/albushra.png',
  },
  {
    id: 'ecommerce-api',
    isPlaceholder: false,
    name: 'E-Commerce Backend',
    scope: 'Backend',
    description:
      'A production-grade Django REST Framework e-commerce backend on PostgreSQL, built feature by feature with each step fully tested before the next.',
    problem:
      'An e-commerce backend needs authentication, profiles, and a product catalog that can grow safely, with tests in place before each new feature.',
    solution:
      'A structured 13-step build on Django REST Framework. JWT with token blacklisting (SimpleJWT) and profile and password flows are in place. The product catalog — category and brand models — is in progress.',
    contribution:
      'I am building the API step by step, with JWT auth, profile management, OpenAPI docs via drf-spectacular, django-filter, and pytest-django + factory-boy coverage that stays green.',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'pytest'],
    features: [
      'JWT authentication with token blacklisting (SimpleJWT)',
      'Profile and password management',
      'Product catalog in progress (category and brand models)',
      'OpenAPI docs and pytest-django + factory-boy tests',
    ],
    github: 'https://github.com/AttaAhmedDev/E-commerce',
    live: '',
  },
  {
    id: 'task-queues',
    isPlaceholder: false,
    name: 'Task Queues',
    scope: 'Backend',
    description:
      'A Django movie queue where submitting a title enqueues a Celery job; a worker fills in details from a local list.',
    problem:
      'A web request should not wait on slow lookup work. Movie details need to be filled in the background so the page stays responsive.',
    solution:
      'Django saves a pending Movie row, then Celery picks up the job from RabbitMQ. Redis stores task results. Docker Compose runs the web app, worker, broker, and result backend together.',
    contribution:
      'I designed the queue flow, Celery task, Django models and views, and the Docker Compose stack for RabbitMQ, Redis, the web process, and the worker.',
    stack: ['Python', 'Django', 'Celery', 'RabbitMQ', 'Redis', 'Docker'],
    features: [
      'Enqueue a title; worker updates the row asynchronously',
      'RabbitMQ broker and Redis result backend',
      'Docker Compose for web, worker, RabbitMQ, and Redis',
      'Status tracking from pending to done',
    ],
    github: 'https://github.com/AttaAhmedDev/Task-Queues',
    live: '',
    image: '/projects/task-queues.png',
  },
  {
    id: 'movie-app',
    isPlaceholder: false,
    name: 'Movie App',
    scope: 'Frontend',
    description:
      'A React movie browser powered by The Movie Database (TMDB). Browse popular films, search titles, save favorites, and open detailed pages.',
    problem:
      'People need a simple way to discover films and keep a personal list without a heavy, account-based movie site.',
    solution:
      'A Vite + React app with React Router consumes the TMDB API to list, search, and detail movies, including cast and trailers, and stores favorites on the client.',
    contribution:
      'I built the React UI, routing, TMDB integration, search, favorites, and movie detail views.',
    stack: ['React', 'JavaScript', 'Vite', 'React Router', 'TMDB API', 'CSS'],
    features: [
      'Browse popular films',
      'Search by title',
      'Save favorites',
      'Detail pages with cast and trailers',
    ],
    github: 'https://github.com/AttaAhmedDev/movie-app',
    live: 'https://movie-app-atta14.vercel.app',
    image: '/projects/movie-app.png',
  },
]

export const approach = [
  {
    id: '01',
    title: 'Understand',
    body: 'Understand the requirements and identify the real problem.',
  },
  {
    id: '02',
    title: 'Design',
    body: 'Break the problem into components and choose an appropriate architecture.',
  },
  {
    id: '03',
    title: 'Build',
    body: 'Implement clean, maintainable and testable code.',
  },
  {
    id: '04',
    title: 'Improve',
    body: 'Test, debug, monitor and continuously improve the solution.',
  },
] as const

export type ExperienceEntry = {
  id: string
  isPlaceholder: boolean
  title: string
  organization: string
  period: string
  location: string
  category: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    id: 'exp-corexion',
    isPlaceholder: false,
    title: 'Full-Stack Developer',
    organization: 'Freelance Client — COREXION',
    period: 'August 2026 – Present',
    location: 'Remote — United Kingdom',
    category: 'Full-Stack Development',
    bullets: [
      'Built and shipped the production Django marketing site at corexion.uk end to end, with server-rendered pages, clean URLs, and PostgreSQL-backed copy and photos.',
      'Implemented a private CMS so editors can update page sections without changing templates, with image uploads to object storage.',
      'Added a rate-limited read API and automated tests for content and cleanup, and deployed the live stack on Railway with Cloudflare.',
    ],
  },
  {
    id: 'exp-nilecode',
    isPlaceholder: false,
    title: 'Full-Stack Engineer Intern',
    organization: 'Nilecode',
    period: 'July 2026 – September 2026',
    location: 'El Maadi, Cairo, Egypt',
    category: 'Internship',
    bullets: [
      'Worked on a full-stack e-commerce platform built with React and Django, building reusable frontend components and integrating REST APIs.',
      'Developed backend features for order management and inventory on the platform.',
      'Worked with PostgreSQL, Docker, and Railway during deployment and maintenance.',
    ],
  },
  {
    id: 'exp-flowdesk',
    isPlaceholder: false,
    title: 'Full-Stack Developer',
    organization: 'Freelance Client',
    period: 'May 2026 – June 2026',
    location: 'Cairo, Egypt',
    category: 'Full-Stack Development',
    bullets: [
      'Designed and built the backend for FlowDesk, a multi-tenant SaaS analytics dashboard, using Flask and PostgreSQL, with JWT authentication and RBAC-driven authorization across 20+ REST endpoints for 7 user roles.',
      'Modeled the PostgreSQL schema and built the React (Vite) single-page front end, with React Router for protected, role-based navigation, token storage, and auth guards across all 7 roles.',
      'Built reusable React components (tables, forms, modals) in a component-based structure spanning api, auth, components, and pages modules.',
      'Built dashboards visualizing revenue, order statistics, and team activity with react-chartjs-2, and deployed the full stack to Railway.',
    ],
  },
  {
    id: 'exp-albushra',
    isPlaceholder: false,
    title: 'Full-Stack Developer',
    organization: 'Freelance Client',
    period: 'October 2025 – December 2025',
    location: 'Beirut, Lebanon',
    category: 'Full-Stack Development',
    bullets: [
      'Designed and built the PHP JSON API and React (Vite) front end for an English/Math learning platform, collaborating remotely with an international client through requirements, delivery, and deployment.',
      'Built an admin dashboard in React for worksheets, presentations, games, and flashcards, including secure content uploads.',
      'Built CRUD REST endpoints for auth, worksheets, presentations, and games, plus responsive desktop and mobile interfaces.',
    ],
  },
  {
    id: 'exp-xware',
    isPlaceholder: false,
    title: 'Backend Developer Intern',
    organization: 'x. ware',
    period: 'June 2022 – August 2022',
    location: '',
    category: 'Internship',
    bullets: [
      'Developed and maintained backend services in Python under senior engineer supervision, designing and optimizing RESTful APIs for web applications.',
      'Wrote and optimized SQL queries against relational databases and implemented CRUD operations integrated with front-end applications.',
      'Collaborated with senior developers in an Agile environment; participated in code reviews, debugging, and testing. Used Git and GitHub for version control.',
    ],
  },
  {
    id: 'exp-iti',
    isPlaceholder: false,
    title: 'Front-End Developer Intern',
    organization: 'Information Technology Institute (ITI)',
    period: 'June 2021 – August 2021',
    location: 'Assiut, Egypt',
    category: 'Internship',
    bullets: [
      'Completed intensive hands-on training in modern front-end web development practices.',
      'Built responsive web pages and interfaces using HTML, CSS, and JavaScript.',
      'Applied object-oriented programming, Git version control, and collaborative workflows across the software development life cycle.',
    ],
  },
]

export const education = {
  isPlaceholder: false,
  degree: 'Bachelor of Information Systems',
  university: 'Assiut University, Assiut, Egypt',
  year: 'April 2019 – April 2023',
  coursework: [] as string[],
  achievements: ['GPA: 3.41', 'English — Upper-Intermediate'],
  certifications: [
    'Django Application Development with SQL and Databases — IBM',
    'Developing AI Applications with Python and Flask — IBM',
    'Introduction to Containers w/ Docker, Kubernetes & OpenShift — IBM',
    'Introduction to Information Technology and AWS Cloud — Amazon Web Services (AWS)',
    'JavaScript — Mahara-Tech',
    'Web Development — Information Technology Institute (ITI)',
  ],
}

export const contact = {
  title: "Let's build something together.",
  body: "I'm open to software engineering opportunities, full-stack projects, and interesting technical challenges.",
}

export const footer = {
  note: '© 2026 Atta Ahmed. Built with React & TypeScript.',
}

export function isPlaceholderHref(href: string): boolean {
  const value = href.trim()
  return (
    !value ||
    value.startsWith('[') ||
    value.includes('your-username') ||
    value.includes('example.com')
  )
}
