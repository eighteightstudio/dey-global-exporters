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
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/Product%20Page%20Files/product_raw_blackball.png',
    alt: 'Raw Virgin Hair Ball Combo A1 Quality — temple sourced bulk hair India',
    description: 'Unprocessed raw virgin hair sourced directly from South Indian temples and verified household donor networks. Natural cuticle alignment intact — no chemical treatment, no washing, no processing of any kind.',
    highlights: [
      'Available in 50 kg sacks',
      'Untangled and loose-packed',
      'Sourced from temples and households',
    ],
  },
  {
    id: 'white-hair-ball',
    badge: 'Premium',
    category: 'Raw Bulk Hair',
    name: 'White Hair Ball',
    grade: 'A1 Quality',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/Product%20Page%20Files/product_raw_whiteball.png',
    alt: 'White Hair Ball A1 Quality — paka chul premium natural white hair India',
    description: 'Premium natural white human hair — known as "paka chul" — sourced from the same temple and household networks as our virgin hair. Highly sought after by wig manufacturers for white and grey wig production.',
    highlights: [
      'Premium "paka chul" natural white hair',
      'Temple and household sourced',
      'Rare and high-demand product category',
    ],
  },
  {
    id: 'single-drawn-hair',
    badge: null,
    category: 'Drawn Hair',
    name: 'Single Drawn Hair',
    grade: 'A1 Quality',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/Product%20Page%20Files/product_single_drawn.png',
    alt: 'Single Drawn Hair A1 Quality — 12 to 42 inch wholesale export India',
    description: 'Single drawn hair retains the natural variation of a collected lot — a mix of lengths within each bundle. Ideal for buyers who require a full, voluminous look at a wholesale price point.',
    highlights: [
      'Length: 12 inch to 42 inch',
      'Natural volume and fullness',
      'Competitive wholesale FOB pricing',
    ],
  },
  {
    id: 'double-drawn-hair',
    badge: 'Premium',
    category: 'Drawn Hair',
    name: 'Double Drawn Hair',
    grade: 'A1 Quality',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/Product%20Page%20Files/product_double%20drawn.png',
    alt: 'Double Drawn Hair A1 Quality — 12 to 42 inch premium uniform hair India',
    description: 'Double drawn hair is sorted to remove shorter strands, resulting in a bundle where the majority of hairs are the same length from root to tip. The preferred choice for high-end wig brands and extension manufacturers.',
    highlights: [
      'Length: 12 inch to 42 inch',
      'Uniform length from root to tip',
      'Preferred by premium wig manufacturers',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {products.map((product) => (
            <div key={product.id} className="border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3]">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
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
