import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Section({
  id,
  children,
  className,
  ariaLabel,
}: {
  id: string
  children: ReactNode
  className?: string
  ariaLabel?: string
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn('scroll-mt-24 py-16 sm:py-20 md:py-28 lg:py-32', className)}
    >
      {children}
    </section>
  )
}
