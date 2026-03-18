import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BlogCard } from '@/components/ui/BlogCard'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { blogPosts } from '@/data/blogPosts'

export const metadata: Metadata = {
  title: 'Blog — Raw Hair Export Guides & Industry Insights',
  description:
    'Educational articles for wig manufacturers and hair extension brands: HS code guides, Remy vs non-Remy explained, temple hair sourcing, India export compliance, shipping lead times, and more.',
  openGraph: {
    title: 'Raw Hair Export Blog | DEY GLOBAL EXPORTERS India',
    description:
      'Industry guides for B2B buyers: temple hair identification, HS 0501 compliance, import lead times, and sourcing best practices from Kolkata, India.',
  },
}

const categories = [
  'All',
  'Quality & Sourcing',
  'Industry Education',
  'Export & Compliance',
  'Sourcing Story',
  'Logistics & Trade',
]

const topicTags = [
  'HS Code 0501', 'Remy Hair', 'Temple Hair', 'Export Compliance',
  'Lead Times', 'Shipping India', 'DGFT', 'Cuticle Alignment',
  'Wig Manufacturing', 'B2B Sourcing',
]

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5">
              Industry Insights &amp; Export Guides
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Practical knowledge for wig manufacturers, extension brands, and distributors sourcing
              raw Indian hair — written by our export team based on real trade experience.
            </p>
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border ${
                  cat === 'All'
                    ? 'bg-[var(--navy)] text-white border-[var(--navy)]'
                    : 'bg-white text-[var(--text-muted)] border-[var(--border)]'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Featured post */}
          <div className="mb-12">
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              Featured Article
            </p>
            <div className="border border-[var(--border)] rounded-2xl overflow-hidden bg-white group hover:-translate-y-1 transition-transform duration-200">
              <div className="grid md:grid-cols-2">
                <div className="relative min-h-[260px] bg-[var(--surface)] overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-[var(--navy)] text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {featured.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-[var(--text-muted)] mb-3">
                    <span>
                      {new Date(featured.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <h2 className="font-bold text-2xl text-[var(--navy)] font-heading leading-snug mb-3">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                    {featured.excerpt}
                  </p>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--navy)] hover:text-[var(--navy-muted)] transition-colors"
                  >
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining posts */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
              More Articles
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Topic tags */}
      <section className="py-16 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeading
            title="Stay Ahead in Raw Hair Sourcing"
            subtitle="Our articles cover everything a professional B2B buyer needs: HS code compliance, quality testing, lead time planning, INCOTERMS, and the sourcing geography of Indian temple hair."
            align="center"
          />
          <div className="mt-8 flex flex-wrap gap-2 justify-center">
            {topicTags.map((tag) => (
              <span
                key={tag}
                className="bg-white border border-[var(--border)] text-[var(--text-muted)] text-xs px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
