import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'accent'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  target?: string
  rel?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[var(--navy)] text-white hover:bg-[var(--navy-muted)] border-2 border-[var(--navy)] hover:border-[var(--navy-muted)]',
  outline:
    'border-2 border-[var(--navy)] text-[var(--navy)] bg-transparent hover:bg-[var(--navy)] hover:text-white',
  ghost:
    'bg-transparent text-[var(--text-muted)] hover:text-[var(--navy)] border-2 border-transparent',
  accent:
    'bg-[var(--accent)] text-[var(--navy)] font-semibold hover:bg-[var(--accent-hover)] border-2 border-[var(--accent)] hover:border-[var(--accent-hover)]',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className,
  type = 'button',
  disabled = false,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer',
    variantStyles[variant],
    sizeStyles[size],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  )
}
