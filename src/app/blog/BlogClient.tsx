'use client'

import { useState } from 'react'
import { BlogCard } from '@/components/ui/BlogCard'
import { blogPosts } from '@/data/blogPosts'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  'All',
  'Quality & Sourcing',
  'Industry Education',
  'Export & Compliance',
  'Sourcing Story',
  'Logistics & Trade',
]

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  const featured = filteredPosts[0]
  const rest = filteredPosts.slice(1)

  return (
    <>
      {/* Category pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
              activeCategory === cat
                ? 'bg-[var(--navy)] text-white border-[var(--navy)]'
                : 'bg-white text-[var(--text-muted)] border-[var(--border)] hover:bg-[var(--surface)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured */}
      {featured && (
        <div className="mb-12">
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">
            Featured Article
          </p>

          <div className="border rounded-2xl overflow-hidden bg-white">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[260px]">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" />
              </div>

              <div className="p-8">
                <h2 className="font-bold text-2xl text-[var(--navy)] mb-3">
                  {featured.title}
                </h2>

                <p className="text-sm text-[var(--text-muted)] mb-5">
                  {featured.excerpt}
                </p>

                <Link href={`/blog/${featured.slug}`}>
                  Read Full Article →
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rest */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </>
  )
}
