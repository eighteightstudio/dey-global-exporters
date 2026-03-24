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
    .replace(/^# (.+)$/gm, '<h1 class="text-3xl md:text-4xl font-bold text-[var(--navy)] font-heading mt-10 mb-4 leading-tight">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl md:text-2xl font-bold text-[var(--navy)] font-heading mt-10 mb-3 leading-tight">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold text-[var(--navy)] font-heading mt-7 mb-2">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-[var(--navy)]">$1</strong>')
    .replace(/(\|.+\|\n)+/g, (table) => {
      const rows = table.trim().split('\n').filter((r) => !r.match(/^\|[-|:\s]+\|$/))
      const html = rows.map((row, i) => {
        const cells = row.split('|').filter((c) => c.trim() !== '')
        const tag = i === 0 ? 'th' : 'td'
        const cellClass = i === 0
          ? 'px-4 py-3 text-left text-xs font-semibold text-[var(--navy)] uppercase tracking-wide'
          : 'px-4 py-3 text-sm text-[var(--text-muted)]'
        return `<tr class="${i % 2 === 0 && i > 0 ? 'bg-[var(--surface)]' : 'bg-white'}">${cells.map((c) => `<${tag} class="${cellClass}">${c.trim()}</${tag}>`).join('')}</tr>`
      })
      return `<div class="overflow-x-auto my-6 rounded-xl border border-[var(--border)]"><table class="w-full">${html.join('')}</table></div>`
    })
    .replace(/(^- .+\n?)+/gm, (block) => {
      const items = block.trim().split('\n').map((l) =>
        `<li class="flex gap-2 text-sm text-[var(--text-muted)] leading-relaxed"><span class="text-[var(--accent)] mt-1 flex-shrink-0">●</span><span>${l.replace(/^- /, '')}</span></li>`
      ).join('')
      return `<ul class="space-y-2 my-4">${items}</ul>`
    })
    .replace(/(^\d+\. .+\n?)+/gm, (block) => {
      const items = block.trim().split('\n').map((l, i) =>
        `<li class="flex gap-3 text-sm text-[var(--text-muted)] leading-relaxed"><span class="font-bold text-[var(--navy)] flex-shrink-0 w-5">${i + 1}.</span><span>${l.replace(/^\d+\. /, '')}</span></li>`
      ).join('')
      return `<ol class="space-y-2 my-4">${items}</ol>`
    })
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-[var(--accent)] pl-4 py-1 my-4 text-sm text-[var(--text-muted)] italic">$1</blockquote>')
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

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'DEY GLOBAL EXPORTERS' },
    publisher: {
      '@type': 'Organization',
      name: 'DEY GLOBAL EXPORTERS',
      logo: { '@type': 'ImageObject', url: 'https://www.deyglobalexporters.com/og-image.jpg' },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

<div className="bg-white">
  <div className="max-w-4xl mx-auto px-6 pt-10">
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{ height: '420px' }}
    >
      <img
        src={post.image}
        alt={post.title}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(10,22,40,0.7) 0%, rgba(10,22,40,0.2) 60%, transparent 100%)',
        }}
      />
    </div>
  </div>
</div>

      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--navy)] transition-colors mb-8"
          >
            <ArrowLeft size={13} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge variant="navy">{post.category}</Badge>
            <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
            <span className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
              <Clock size={12} />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[var(--navy)] font-heading leading-tight mb-4">
            {post.title}
          </h1>

          <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8 border-l-4 border-[var(--accent)] pl-4">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 py-4 border-y border-[var(--border)] mb-8">
            <div className="w-9 h-9 rounded-full bg-[var(--navy)] flex items-center justify-center text-white font-bold text-sm font-heading">
              D
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--navy)]">{post.author}</p>
              <p className="text-xs text-[var(--text-muted)]">DEY GLOBAL EXPORTERS, Kolkata</p>
            </div>
          </div>

          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          <div className="mt-10 pt-6 border-t border-[var(--border)]">
            <div className="flex flex-wrap items-center gap-2">
              <Tag size={14} className="text-[var(--text-muted)]" />
              {post.tags.map((tag) => (
                <Badge key={tag} variant="default">{tag}</Badge>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-[var(--navy)] rounded-2xl p-7 text-center">
            <p className="text-white font-bold font-heading text-xl mb-2">
              Need a Reliable Raw Hair Supplier?
            </p>
            <p className="text-white/60 text-sm mb-5">
              Contact DEY GLOBAL EXPORTERS for pricing, sample requests, and export documentation.
            </p>
            <Button variant="accent" size="md" href="/contact">
              Request a Price List
            </Button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-16 bg-[var(--surface)] border-t border-[var(--border)]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-6">
              Related Articles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
