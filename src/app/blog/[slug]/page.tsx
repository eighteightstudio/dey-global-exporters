import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { BlogCard } from '@/components/ui/BlogCard'
import { blogPosts } from '@/data/blogPosts'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Article Not Found' }
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | DEY GLOBAL EXPORTERS Blog`,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630 }],
    },
  }
}

function renderMarkdown(content: string): string {
  return content
    .trim()
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl md:text-4xl font-bold text-[var(--navy)] font-heading mt-10 mb-4">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl md:text-2xl font-bold text-[var(--navy)] font-heading mt-10 mb-3">$1</h2>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^(?!<[a-z]).+$/gm, (line) => {
      if (line.trim() === '') return ''
      return `<p class="text-sm md:text-base text-[var(--text-muted)] leading-relaxed my-3">${line}</p>`
    })
}

export default function BlogArticlePage({ params }: PageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.tags.some((t) => post.tags.includes(t))))
    .slice(0, 3)

  return (
    <>
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12">

          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--navy)] mb-8"
          >
            <ArrowLeft size={13} />
            Back to Blog
          </Link>

          {/* ✅ IMAGE (same working pattern as /blog page) */}
          <div className="relative w-full h-[300px] mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="navy">{post.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy)] font-heading mb-4">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-lg text-[var(--text-muted)] mb-8 border-l-4 border-[var(--accent)] pl-4">
            {post.excerpt}
          </p>

          {/* Content */}
          <div
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-[var(--border)]">
            <div className="flex flex-wrap items-center gap-2">
              <Tag size={14} />
              {post.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-[var(--navy)] rounded-2xl p-7 text-center">
            <p className="text-white font-bold text-xl mb-2">
              Need a Reliable Raw Hair Supplier?
            </p>
            <Button variant="accent" href="/contact">
              Request a Price List
            </Button>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16 bg-[var(--surface)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
