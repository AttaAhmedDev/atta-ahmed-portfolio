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
  TypeScript: 'typescript',
  PHP: 'php',
  React: 'react',
  Vite: 'vite',
  'React Router': 'reactrouter',
  HTML: 'html5',
  'Tailwind CSS': 'tailwindcss',
  Bootstrap: 'bootstrap',
  'Chart.js': 'chartdotjs',
  Flask: 'flask',
  Django: 'django',
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
  Railway: 'railway',
  Vercel: 'vercel',
  Gunicorn: 'gunicorn',
  Docker: 'docker',
  Kubernetes: 'kubernetes',
  Linux: 'linux',
  'GitHub Actions': 'githubactions',
}

const lucideIcons: Record<string, typeof Code2> = {
  CSS: FileCode2,
  SQL: Database,
  'REST APIs': Network,
  RBAC: Shield,
  'API Design': Layers,
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
