import { cn } from '../../lib/cn'

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
}: {
  kicker: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <header className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className="font-mono text-[10px] tracking-[0.18em] text-brass uppercase sm:text-[11px] sm:tracking-[0.28em]">
        {kicker}
      </p>
      <h2 className="mt-3 font-serif text-[1.75rem] leading-tight text-balance text-cream sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-[0.95rem] leading-relaxed text-pretty text-muted sm:mt-4 sm:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </header>
  )
}
