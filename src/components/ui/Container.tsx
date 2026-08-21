import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-6xl pl-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] sm:pl-[max(2rem,env(safe-area-inset-left))] sm:pr-[max(2rem,env(safe-area-inset-right))] lg:pl-[max(2.5rem,env(safe-area-inset-left))] lg:pr-[max(2.5rem,env(safe-area-inset-right))]',
        className,
      )}
    >
      {children}
    </div>
  )
}
