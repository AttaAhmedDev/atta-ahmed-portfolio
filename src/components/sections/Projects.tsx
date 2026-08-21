import type { ReactNode } from 'react'
import { ExternalLink } from 'lucide-react'
import { isPlaceholderHref, projects, type Project } from '../../data/site'
import { GitHubIcon } from '../ui/SocialIcons'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { cn } from '../../lib/cn'

export function Projects() {
  return (
    <Section id="projects" ariaLabel="Featured projects" className="border-y border-line bg-ink-2">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="04 / Work"
            title="Featured Projects"
            description="Selected work from GitHub — Python APIs, React interfaces, and full-stack products."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 80} className="min-w-0">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const githubLive = !isPlaceholderHref(project.github)
  const demoLive = !isPlaceholderHref(project.live)

  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden border border-line bg-ink transition-[border-color,transform] duration-300 hover:border-line-strong motion-safe:hover:-translate-y-0.5">
      {project.image ? (
        <div className="overflow-hidden border-b border-line bg-ink-2">
          <img
            src={project.image}
            alt={`${project.name} screenshot`}
            className="aspect-[16/10] h-auto w-full object-cover object-top"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="flex min-h-0 flex-1 flex-col p-5 sm:p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] tracking-[0.2em] text-brass uppercase">{project.scope}</p>
        {project.isPlaceholder ? (
          <span className="border border-line px-2 py-0.5 font-mono text-[10px] tracking-wide text-muted uppercase">
            Placeholder — edit me
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 font-serif text-xl text-pretty text-cream sm:text-2xl md:text-[1.75rem]">
        {project.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-pretty break-words text-muted">
        {project.description}
      </p>

      <dl className="mt-6 space-y-3 text-sm">
        <Meta label="Problem" value={project.problem} />
        <Meta label="Solution" value={project.solution} />
        <Meta label="My contribution" value={project.contribution} />
      </dl>

      <div className="mt-6">
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">Stack</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="border border-line px-2 py-1 font-mono text-[11px] text-cream/80"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <p className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">Key features</p>
        <ul className="mt-2 space-y-1.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2 text-sm text-pretty break-words text-muted">
              <span className="text-brass" aria-hidden="true">
                –
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <ProjectLink
          href={project.github}
          live={githubLive}
          label="GitHub"
          icon={<GitHubIcon size={14} />}
        />
        {demoLive ? (
          <ProjectLink
            href={project.live}
            live
            label="Live Demo"
            icon={<ExternalLink size={14} />}
          />
        ) : null}
      </div>
      </div>
    </article>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[11px] tracking-wide text-brass">{label}</dt>
      <dd className="mt-1 text-pretty break-words text-cream/85">{value}</dd>
    </div>
  )
}

function ProjectLink({
  href,
  live,
  label,
  icon,
}: {
  href: string
  live: boolean
  label: string
  icon: ReactNode
}) {
  const classes = cn(
    'inline-flex min-h-11 w-full items-center justify-center gap-2 border px-3 py-2 text-xs tracking-wide sm:w-auto',
    live
      ? 'border-line text-cream hover:border-brass hover:text-brass'
      : 'cursor-not-allowed border-line text-muted',
  )

  if (!live) {
    return (
      <span className={classes}>
        {icon}
        {label}
      </span>
    )
  }

  return (
    <a href={href} className={classes} target="_blank" rel="noreferrer noopener">
      {icon}
      {label}
    </a>
  )
}
