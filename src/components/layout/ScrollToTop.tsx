import { ArrowUp } from 'lucide-react'
import { useScrollY } from '../../hooks/useScrollY'
import { cn } from '../../lib/cn'

export function ScrollToTop() {
  const y = useScrollY()
  const visible = y > 480

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={cn(
        'fixed z-30 inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line bg-surface text-cream shadow-lg transition-all duration-300 hover:border-brass hover:text-brass right-[max(1.25rem,env(safe-area-inset-right))] bottom-[max(1.25rem,env(safe-area-inset-bottom))] md:right-8 md:bottom-8',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <ArrowUp size={16} />
    </a>
  )
}
