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
  role: 'Software Engineer | Full-Stack Python & React Developer',
  headline: 'I build modern, reliable software from backend to frontend.',
  focus:
    'Software Engineer focused on building scalable backend systems with Python and intuitive web applications with React.',
  email: 'ataahmad17122000@gmail.com',
  github: 'https://github.com/AttaAhmedDev',
  linkedin: 'https://www.linkedin.com/in/atta-ahmed-9966a3403',
  resumeUrl: '/resume.pdf',
  location: 'Cairo, Egypt',
  phone: '+20 111 213 6852',
  /**
   * Optional: Formspree, Web3Forms, or any JSON endpoint.
   * Leave empty to send messages with mailto as a fallback.
   * Example: 'https://formspree.io/f/xxxxxxxx'
   */
  formEndpoint: '',
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
  title: 'Software Engineer building full-stack applications with Python & React.',
  body: 'I design backend systems, build REST APIs, work with databases, and create modern frontend experiences with React.',
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
    'Software Engineer with hands-on experience building backend systems and REST APIs in Python (Flask/Django), with additional full-stack delivery across React front ends. I focus on clean architecture, test coverage, and code quality.',
    'My work covers database design, authentication and authorization, and end-to-end feature ownership — from a multi-tenant SaaS dashboard to a live educational platform.',
    'I am comfortable working in structured development processes: collaborating on debugging, code review, and iterative delivery.',
  ],
  focus: [
    'Backend systems and REST APIs in Python',
    'Full-stack delivery with React',
    'PostgreSQL and MySQL design',
    'JWT authentication and role-based access control',
    'Testing, Git workflows, and clean architecture',
  ],
}

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'PHP', 'SQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    items: ['React', 'Vite', 'React Router', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'Chart.js'],
  },
  {
    id: 'backend',
    title: 'Backend',
    items: [
      'Flask',
      'Django',
      'REST APIs',
      'JWT Authentication',
      'RBAC',
      'SQLAlchemy',
      'API Design',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'Database Design', 'Query Optimization', 'Transactions', 'ACID Concepts'],
  },
  {
    id: 'tools',
    title: 'Tools & Engineering',
    items: [
      'Git',
      'GitHub',
      'Postman',
      'pytest',
      'OOP',
      'Debugging',
      'Testing',
    ],
  },
  {
    id: 'deployment',
    title: 'Deployment',
    items: ['Railway', 'Gunicorn', 'Docker', 'Linux', 'GitHub Actions'],
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
}

export const projects: Project[] = [
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
    live: '',
  },
  {
    id: 'albushra',
    isPlaceholder: false,
    name: 'Albushra Education',
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
  },
  {
    id: 'ecommerce-api',
    isPlaceholder: false,
    name: 'E-commerce API',
    scope: 'Backend',
    description:
      'A Django REST API for an e-commerce catalog, authentication, and cart — with JWT, filtering, and automated tests.',
    problem:
      'A storefront needs a reliable backend for products, variants, inventory, and carts, including both guest shoppers and authenticated users.',
    solution:
      'Django REST Framework exposes versioned endpoints. Price and stock live on product variants; guest and user carts merge on login. Catalog reads are public; writes require an admin role.',
    contribution:
      'I implemented the API, PostgreSQL models, JWT auth with token blacklisting, product search/filter/sort, cart merge logic, OpenAPI docs, and pytest coverage.',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'JWT', 'pytest'],
    features: [
      'Email-based JWT auth with rotating refresh tokens',
      'Hierarchical categories, brands, products, and variants',
      'Guest and authenticated carts that merge on login',
      'Swagger docs and pytest + factory-boy tests',
    ],
    github: 'https://github.com/AttaAhmedDev/E-commerce',
    live: '',
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
    live: '',
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
    id: 'exp-flowdesk',
    isPlaceholder: false,
    title: 'Full-Stack Developer',
    organization: 'Freelance Client',
    period: 'May 2026 – June 2026',
    location: 'Cairo, Egypt',
    category: 'Full-Stack Development',
    bullets: [
      'Designed and built the backend for FlowDesk, a multi-tenant SaaS analytics dashboard, using Flask and PostgreSQL, with JWT authentication and RBAC across 20+ REST endpoints for 7 user roles.',
      'Built the React (Vite) SPA with React Router, protected role-based navigation, token storage, and auth guards.',
      'Modeled the PostgreSQL schema and built reusable React components (tables, forms, modals) across api, auth, components, and pages modules.',
      'Built dashboards for revenue, order statistics, and team activity with react-chartjs-2, and deployed the stack to Railway.',
    ],
  },
  {
    id: 'exp-albushra',
    isPlaceholder: false,
    title: 'Full-Stack Developer',
    organization: 'Freelance Client',
    period: 'October 2025 – December 2025',
    location: 'Remote — Beirut, Lebanon',
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
      'Worked under senior engineer supervision developing and maintaining backend services in Python, designing and optimizing REST APIs for web applications.',
      'Wrote and optimized SQL queries against relational databases and enforced CRUD operations integrated with frontend applications.',
      'Collaborated with senior developers in an Agile environment; participated in code reviews, debugging, and testing.',
      'Used Git and GitHub for version control in a collaborative development workflow.',
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
