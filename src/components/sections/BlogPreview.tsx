import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { BlogCard } from '@/components/ui/BlogCard'
import { Button } from '@/components/ui/Button'
import { blogPosts } from '@/data/blogPosts'

export function BlogPreview() {
  const previewPosts = blogPosts.slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeading
            title="Industry Insights & Export Guides"
            subtitle="Educational resources for wig manufacturers and hair extension brands sourcing from India."
            align="left"
          />
          <div className="flex-shrink-0">
            <Button variant="ghost" size="sm" href="/blog">
              View all articles <ArrowRight size={14} />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
