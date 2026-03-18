import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'navy' | 'accent' | 'outline-white' | 'success'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-[var(--surface)] border border-[var(--border)] text-[var(--navy)]',
  navy: 'bg-[var(--navy)] text-white',
  accent: 'bg-[var(--accent)] text-[var(--navy)]',
  'outline-white': 'border border-white/40 text-white bg-transparent',
  success: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
