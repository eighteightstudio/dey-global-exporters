"use client"

import { useState } from 'react'
import { ProductCard } from '@/components/ui/ProductCard'
import { products, productCategories } from '@/data/products'
import type { ProductCategory } from '@/data/products'
import { cn } from '@/lib/utils'

export function ProductsClientPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All')

  const filtered = products.filter((p) => {
    return activeCategory === 'All' || p.category === activeCategory
  })

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10">
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
            Filter by Product Type
          </p>
          <div className="flex flex-wrap gap-2">
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
        </div>

        <p className="text-sm text-[var(--text-muted)] mb-6">
          Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[var(--text-muted)] text-lg">
              No products match this filter.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 text-sm text-[var(--navy)] underline underline-offset-2"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
