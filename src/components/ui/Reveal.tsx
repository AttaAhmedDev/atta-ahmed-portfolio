import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cn } from '../../lib/cn'

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const { ref, visible } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn('reveal min-w-0', visible && 'is-visible', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
