import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  showAccentBar?: boolean
  className?: string
  tag?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  light = false,
  showAccentBar = true,
  className,
  tag: Tag = 'h2',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {showAccentBar && (
        <div className="w-10 h-[3px] bg-[var(--accent)] mb-4 rounded-full" />
      )}
      <Tag
        className={cn(
          'text-3xl md:text-4xl font-bold tracking-tight font-heading leading-tight',
          light ? 'text-white' : 'text-[var(--navy)]'
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={cn(
            'text-lg mt-3 leading-relaxed',
            align === 'center' ? 'max-w-2xl' : 'max-w-xl',
            light ? 'text-white/70' : 'text-[var(--text-muted)]'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
