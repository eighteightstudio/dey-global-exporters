"use client"

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProductCard } from '@/components/ui/ProductCard'
import { Button } from '@/components/ui/Button'
import { useFadeUp } from '@/hooks/useFadeUp'
import { products, productCategories, type ProductCategory } from '@/data/products'
import { cn } from '@/lib/utils'

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All')
  const { ref, visible } = useFadeUp()

  const filtered =
    activeCategory === 'All'
      ? products
      : products.filter((p) => p.category === activeCategory)

  const displayProducts = filtered.slice(0, 3)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={cn(
            'text-center mb-12',
            visible ? 'animate-fade-up' : 'opacity-0-initial'
          )}
        >
          <SectionHeading
            title="Our Export Product Range"
            subtitle="From raw temple hair to precision-wefted bundles — every product export-ready with full documentation."
            align="center"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 border',
                activeCategory === cat
                  ? 'bg-[var(--navy)] text-white border-[var(--navy)]'
                  : 'bg-white text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--navy)] hover:text-[var(--navy)]'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayProducts.map((product, idx) => (
            <div
              key={product.id}
              className={cn(
                visible ? `animate-fade-up delay-${idx * 100}` : 'opacity-0-initial'
              )}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="md" href="/products">
            View All Products <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
