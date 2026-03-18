"use client"

import { useState } from 'react'
import { ProductCard } from '@/components/ui/ProductCard'
import { products, productCategories, type ProductCategory } from '@/data/products'
import { cn } from '@/lib/utils'

export function ProductsClientPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('All')
  const [activeTexture, setActiveTexture] = useState<string>('All')

  const allTextures = ['All', 'Straight', 'Body Wave', 'Deep Wave', 'Curly', 'Kinky']

  const filtered = products.filter((p) => {
    const catMatch = activeCategory === 'All' || p.category === activeCategory
    const texMatch =
      activeTexture === 'All' || p.textures.some((t) => t.toLowerCase().includes(activeTexture.toLowerCase()))
    return catMatch && texMatch
  })

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Filters */}
        <div className="mb-10 space-y-4">
          {/* Category filter */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
              Product Type
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

          {/* Texture filter */}
          <div>
            <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
              Texture
            </p>
            <div className="flex flex-wrap gap-2">
              {allTextures.map((tex) => (
                <button
                  key={tex}
                  onClick={() => setActiveTexture(tex)}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 border',
                    activeTexture === tex
                      ? 'bg-[var(--accent)] text-[var(--navy)] border-[var(--accent)]'
                      : 'bg-white text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--navy)] hover:text-[var(--navy)]'
                  )}
                >
                  {tex}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Result count */}
        <p className="text-sm text-[var(--text-muted)] mb-6">
          Showing {filtered.length} product{filtered.length !== 1 ? 's' : ''}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[var(--text-muted)] text-lg">
              No products match this filter combination.
            </p>
            <button
              onClick={() => { setActiveCategory('All'); setActiveTexture('All') }}
              className="mt-4 text-sm text-[var(--navy)] underline underline-offset-2"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
