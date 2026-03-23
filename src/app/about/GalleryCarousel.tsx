"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const galleryImages = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/gallery1/800/600',
    alt: 'Raw temple hair sorting facility — DEY GLOBAL EXPORTERS West Bengal',
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/gallery2/800/600',
    alt: 'Hair grading and quality inspection — DEY GLOBAL EXPORTERS',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/gallery3/800/600',
    alt: 'Temple hair collection lot — ethically sourced India',
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/gallery4/800/600',
    alt: 'Export packaging and dispatch — DEY GLOBAL EXPORTERS Kolkata',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/gallery5/800/600',
    alt: 'Single drawn and double drawn hair bundles — A1 quality',
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/gallery6/800/600',
    alt: 'Workforce sorting raw hair — East Medinipur West Bengal',
  },
]

export function GalleryCarousel() {
  const [current, setCurrent] = useState(0)
  const total = galleryImages.length

  function prev() {
    setCurrent((c) => (c === 0 ? total - 1 : c - 1))
  }

  function next() {
    setCurrent((c) => (c === total - 1 ? 0 : c + 1))
  }

  const getVisible = () => {
    const indices = []
    for (let i = 0; i < 3; i++) {
      indices.push((current + i) % total)
    }
    return indices
  }

  const visible = getVisible()

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="w-10 h-[3px] bg-[var(--accent)] mx-auto mb-4 rounded-full" />
          <h2 className="text-3xl font-bold text-[var(--navy)] font-heading mb-3">Gallery</h2>
          <p className="text-[var(--text-muted)] text-sm max-w-xl mx-auto">
            A look inside our sourcing, sorting, and export operations.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {visible.map((imgIdx, position) => (
              <div
                key={galleryImages[imgIdx].id}
                className={cn(
                  'relative rounded-2xl overflow-hidden border border-[var(--border)] transition-all duration-300',
                  position === 1
                    ? 'aspect-[4/3] md:scale-105 shadow-lg z-10'
                    : 'aspect-[4/3] opacity-80'
                )}
              >
                <Image
                  src={galleryImages[imgIdx].src}
                  alt={galleryImages[imgIdx].alt}
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>

          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[var(--border)] shadow-md flex items-center justify-center hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] transition-all duration-150 z-20"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            aria-label="Next image"
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[var(--border)] shadow-md flex items-center justify-center hover:bg-[var(--navy)] hover:text-white hover:border-[var(--navy)] transition-all duration-150 z-20"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={cn(
                'rounded-full transition-all duration-200',
                current === idx
                  ? 'w-6 h-2 bg-[var(--navy)]'
                  : 'w-2 h-2 bg-[var(--border)] hover:bg-[var(--text-muted)]'
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
