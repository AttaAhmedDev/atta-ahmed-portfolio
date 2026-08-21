import { ArrowDown } from 'lucide-react'
import { hero, profile } from '../../data/site'
import { LinkButton } from '../ui/Button'
import { Container } from '../ui/Container'
import { SocialLinks } from '../ui/SocialLinks'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid min-w-0 items-center gap-10 py-12 sm:gap-12 sm:py-16 md:py-24 xl:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)] xl:gap-16 xl:py-28">
        <div className="min-w-0">
          <p
            className="rise font-mono text-[10px] leading-relaxed tracking-[0.14em] text-brass uppercase sm:text-[11px] sm:tracking-[0.22em]"
            style={{ animationDelay: '60ms' }}
          >
            {profile.role}
          </p>
          <p
            className="rise mt-5 text-sm text-muted sm:mt-6 sm:text-base"
            style={{ animationDelay: '140ms' }}
          >
            {hero.greeting}
          </p>
          <h1
            className="rise mt-3 max-w-3xl font-serif text-[clamp(1.7rem,7.4vw,3.35rem)] leading-[1.15] text-balance text-cream"
            style={{ animationDelay: '220ms' }}
          >
            {hero.title}
          </h1>
          <p
            className="rise mt-5 max-w-xl text-[0.95rem] leading-relaxed text-pretty text-muted sm:mt-6 sm:text-lg"
            style={{ animationDelay: '300ms' }}
          >
            {hero.body}
          </p>
          <div
            className="rise mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
            style={{ animationDelay: '380ms' }}
          >
            <LinkButton href={hero.primaryCta.href} className="w-full sm:w-auto">
              {hero.primaryCta.label}
            </LinkButton>
            <LinkButton
              href={hero.secondaryCta.href}
              variant="secondary"
              download
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </LinkButton>
          </div>
          <div className="rise mt-7 sm:mt-8" style={{ animationDelay: '460ms' }}>
            <SocialLinks />
          </div>
        </div>

        <div className="rise min-w-0" style={{ animationDelay: '320ms' }}>
          <ArchitectureVisual />
        </div>
      </Container>

      <Container className="relative pb-8 sm:pb-10">
        <a
          href="#about"
          className="inline-flex min-h-11 items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted uppercase transition-colors hover:text-brass"
        >
          Scroll
          <ArrowDown size={12} />
        </a>
      </Container>
    </section>
  )
}

function ArchitectureVisual() {
  const nodes = hero.stack

  return (
    <aside
      className="border border-line bg-surface/80 p-4 sm:p-6 lg:p-7"
      aria-label="Simplified full-stack architecture"
    >
      <div className="mb-6 flex items-end justify-between gap-3 border-b border-line pb-4">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-brass uppercase sm:text-[11px]">
            Request path
          </p>
          <p className="mt-1 text-sm text-muted">How a request moves through the stack</p>
        </div>
        <p className="hidden font-mono text-[10px] text-muted sm:block">full-stack</p>
      </div>

      <ol className="relative">
        <span
          className="absolute top-3 bottom-3 left-[5px] w-px bg-line-strong"
          aria-hidden="true"
        />
        {nodes.map((node, index) => (
          <li key={node.name} className="relative flex gap-4 pb-5 last:pb-0">
            <span
              className="relative z-10 mt-3.5 h-2.5 w-2.5 shrink-0 rounded-full border border-brass bg-ink shadow-[0_0_0_4px_#11141a]"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1 border border-line bg-ink px-3.5 py-3 transition-colors duration-200 hover:border-brass/40 sm:px-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[10px] text-muted">0{index + 1}</span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-brass uppercase">
                  {node.via}
                </span>
              </div>
              <p className="mt-1.5 font-serif text-lg leading-tight text-cream sm:text-xl">
                {node.name}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.18em] text-muted uppercase">
                {node.layer}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-5 border-t border-line pt-4 font-mono text-[10px] tracking-[0.14em] text-muted uppercase">
        Client <span className="text-brass">→</span> Server <span className="text-brass">→</span> Data
      </p>
    </aside>
  )
}
