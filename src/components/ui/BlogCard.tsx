import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Play } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { BlogPost } from '@/data/blogPosts'
import { cn } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  className?: string
}

export function BlogCard({ post, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        'border border-[var(--border)] rounded-2xl overflow-hidden bg-white group hover:-translate-y-1 transition-transform duration-200 flex flex-col',
        className
      )}
    >
      {/* Thumbnail */}
      <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden bg-[var(--surface)]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {post.youtubeId && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg">
              <Play size={20} className="text-[var(--navy)] ml-1" fill="currentColor" />
            </div>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <Badge variant="navy">{post.category}</Badge>
        </div>
      </Link>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        <Link href={`/blog/${post.slug}`} className="flex-1">
          <h3 className="font-bold text-base text-[var(--navy)] font-heading leading-snug mb-2 group-hover:text-[var(--navy-muted)] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
        </Link>

        <div className="mt-4 pt-4 border-t border-[var(--border)] flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="default" className="text-[10px]">{tag}</Badge>
            ))}
          </div>
          <Link
            href={`/blog/${post.slug}`}
            className="text-xs font-semibold text-[var(--navy)] hover:text-[var(--accent-hover)] transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}
