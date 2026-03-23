"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const products = [
  {
    id: 'raw-indian-temple-hair-bulk',
    badge: 'Temple-Sourced',
    category: 'Bulk Raw Hair',
    name: 'Raw Indian Temple Hair — Bulk Unprocessed',
    grade: 'A1 Quality',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/Product%20Page%20Files/product_raw_blackball.png',
    alt: 'Raw Indian Temple Hair Bulk Unprocessed — A1 quality single donor hair India',
    description: 'Single-donor, cuticle-intact raw temple hair. Collected from South Indian temple donations, sorted by length, cleaned and packed with zero chemical treatment.',
    highlights: [
      'Single-donor temple sourced',
      'Zero chemical treatment',
      'Cuticle-aligned, fully intact Remy',
    ],
  },
  {
    id: 'wefted-remy-bundles-double-drawn',
    badge: 'Double Drawn',
    category: 'Wefted Bundles',
    name: 'Wefted Remy Bundles — Double Drawn',
    grade: 'A1 Quality',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/Product%20Page%20Files/product_raw_whiteball.png',
    alt: 'Wefted Remy Bundles Double Drawn Natural Black — wholesale export India',
    description: 'Machine-wefted double-drawn bundles from cuticle-aligned Remy hair. Uniform thickness root to tip — the preferred input for US and European extension brands.',
    highlights: [
      'Uniform length root to tip',
      'Machine weft, hand-inspected',
      'Length: 12 inch to 30 inch',
    ],
  },
  {
    id: 'single-drawn-remy-bundles',
    badge: 'Wholesale',
    category: 'Wefted Bundles',
    name: 'Single Drawn Remy Bundles — Wholesale',
    grade: 'A1 Quality',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/Product%20Page%20Files/product_single_drawn.png',
    alt: 'Single Drawn Remy Bundles wholesale — bulk volume export India',
    description: 'High-volume single-drawn Remy bundles for distributors and large-format manufacturers. Natural mix of lengths, competitive FOB pricing, tiered discounts from 50kg.',
    highlights: [
      'Length: 10 inch to 28 inch',
      'Volume pricing from 50 kg',
      'Light wash only, no dye or bleach',
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
                  quality={90}
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
