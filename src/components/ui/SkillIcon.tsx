import { useState } from 'react'
import {
  Boxes,
  Braces,
  Bug,
  Code2,
  Database,
  FileCode2,
  Layers,
  Network,
  Server,
  Shield,
  TestTube2,
  Workflow,
} from 'lucide-react'
import { cn } from '../../lib/cn'

const brandSlugs: Record<string, string> = {
  Python: 'python',
  JavaScript: 'javascript',
  'JavaScript (ES6+)': 'javascript',
  TypeScript: 'typescript',
  PHP: 'php',
  React: 'react',
  Vite: 'vite',
  'React Router': 'reactrouter',
  HTML: 'html5',
  HTML5: 'html5',
  CSS3: 'css',
  Bootstrap: 'bootstrap',
  'Chart.js': 'chartdotjs',
  'Chart.js / react-chartjs-2': 'chartdotjs',
  Flask: 'flask',
  Django: 'django',
  'Django REST Framework': 'django',
  Celery: 'celery',
  'JWT Authentication': 'jsonwebtokens',
  SQLAlchemy: 'sqlalchemy',
  PostgreSQL: 'postgresql',
  MySQL: 'mysql',
  Redis: 'redis',
  RabbitMQ: 'rabbitmq',
  Git: 'git',
  GitHub: 'github',
  Postman: 'postman',
  pytest: 'pytest',
  'pytest-django': 'pytest',
  Railway: 'railway',
  Cloudflare: 'cloudflare',
  Vercel: 'vercel',
  Gunicorn: 'gunicorn',
  Docker: 'docker',
  'Docker Compose': 'docker',
  Kubernetes: 'kubernetes',
  Linux: 'linux',
  npm: 'npm',
  'GitHub Actions': 'githubactions',
}

const lucideIcons: Record<string, typeof Code2> = {
  CSS: FileCode2,
  CSS3: FileCode2,
  SQL: Database,
  'REST APIs': Network,
  'API Integration': Network,
  RBAC: Shield,
  'Role-Based Access Control (RBAC)': Shield,
  'API Design': Layers,
  ORM: Database,
  'CRUD Operations': Server,
  MVC: Layers,
  MVT: Layers,
  'Background Jobs': Workflow,
  'Asynchronous Task Queues': Workflow,
  'State Management': Boxes,
  'Component-Based Architecture': Layers,
  'Responsive Design': FileCode2,
  'Unit Testing': TestTube2,
  'factory-boy': TestTube2,
  unittest: TestTube2,
  'OpenAPI (drf-spectacular)': Network,
  'Code Review': Bug,
  'Object-Oriented Programming (OOP)': Braces,
  Agile: Workflow,
  'Software Development Life Cycle (SDLC)': Workflow,
  'Database Design': Database,
  'Query Optimization': Workflow,
  Transactions: Server,
  'ACID Concepts': Boxes,
  OOP: Braces,
  Debugging: Bug,
  Testing: TestTube2,
}

type Props = {
  name: string
  className?: string
  size?: number
}

export function SkillIcon({ name, className, size = 16 }: Props) {
  const slug = brandSlugs[name]
  const [failed, setFailed] = useState(false)
  const Icon = lucideIcons[name] ?? Code2

  if (slug && !failed) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}/c4a574`}
        alt=""
        width={size}
        height={size}
        aria-hidden="true"
        className={cn('shrink-0', className)}
        onError={() => setFailed(true)}
      />
    )
  }

  return <Icon size={size} strokeWidth={1.75} className={cn('shrink-0', className)} aria-hidden="true" />
}
