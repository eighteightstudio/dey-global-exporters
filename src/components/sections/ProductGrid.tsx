"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const products = [
  {
    id: 'raw-virgin-hair-ball-combo',
    badge: 'Best Seller',
    category: 'Raw Bulk Hair',
    name: 'Raw Virgin Hair Ball Combo',
    grade: 'A1 Quality',
    image: 'https://picsum.photos/seed/hair1/600/480',
    alt: 'Raw Virgin Hair Ball Combo A1 — temple sourced bulk hair India',
    description: 'Unprocessed raw virgin hair sourced directly from temples and verified household networks. Natural cuticle alignment intact, no chemical treatment of any kind.',
    highlights: [
      'Available in 50 kg sacks',
      'Mixed sizes, untangled',
      'Sourced from temples and households',
    ],
  },
  {
    id: 'white-hair-ball',
    badge: 'Premium',
    category: 'Raw Bulk Hair',
    name: 'White Hair Ball',
    grade: 'A1 Quality',
    image: 'https://picsum.photos/seed/hair2/600/480',
    alt: 'White Hair Ball A1 — paka chul natural white hair India',
    description: 'Premium natural white hair known as "paka chul". Same ethical temple and household sourcing as our virgin hair. High demand globally for white and grey wig production.',
    highlights: [
      'Premium "paka chul" natural white hair',
      'Same A1 sourcing quality as virgin hair',
      'Temple and household sourced',
    ],
  },
  {
    id: 'single-drawn-hair',
    badge: null,
    category: 'Drawn Hair',
    name: 'Single Drawn Hair',
    grade: 'A1 Quality',
    image: 'https://picsum.photos/seed/hair3/600/480',
    alt: 'Single Drawn Hair A1 — 12 to 42 inch wholesale export India',
    description: 'Natural mix of lengths within each bundle for full, voluminous output. Sourced from verified donor networks across India. Competitive wholesale FOB pricing.',
    highlights: [
      'Length: 12 inch to 42 inch',
      'Natural volume and fullness',
      'Verified donor network sourced',
    ],
  },
]

export function ProductGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionHeading
            title="Our Export Product Range"
            subtitle="From raw temple hair to precisely drawn bundles — every product A1 graded and export-ready with full documentation."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {products.map((product) => (
            <div key={product.id} className="border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-[var(--accent)] text-[var(--navy)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">{product.category}</p>
                <h3 className="text-lg font-bold text-[var(--navy)] font-heading mb-1">{product.name}</h3>
                <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide mb-3">{product.grade}</p>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">{product.description}</p>
                <ul className="space-y-1.5 mb-6">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-[var(--navy)]">
                      <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <Link
                    href="/contact"
                    className="block w-full text-center bg-[var(--navy)] text-white text-sm font-semibold rounded-xl px-5 py-3 hover:bg-[var(--navy-muted)] transition-colors duration-200"
                  >
                    Request a Quote
                  </Link>
                </div>
              </div>
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
