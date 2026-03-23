import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { blogPosts } from '@/data/blogPosts'

export function BlogPreview() {
  const preview = blogPosts.slice(0, 3)

  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <SectionHeading
            title="From the Export Desk"
            subtitle="Industry insights, sourcing guides, and trade knowledge for wig manufacturers and B2B hair buyers."
            align="left"
          />
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-medium text-[var(--navy)] hover:text-[var(--navy-muted)] transition-colors duration-150"
          >
            View all articles <ArrowRight size={15} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  quality={85}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-[var(--navy)] text-white text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-bold text-[var(--navy)] font-heading text-base leading-snug mb-3 group-hover:text-[var(--navy-muted)] transition-colors duration-150">
                  {post.title}
                </h3>

                <p className="text-sm text-[var(--text-muted)] leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium text-[var(--text-muted)] border border-[var(--border)] rounded-full px-2.5 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-[var(--border)] flex items-center justify-between">
                  <span className="text-xs text-[var(--text-muted)]">{post.author}</span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--navy)] group-hover:gap-2 transition-all duration-150">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
