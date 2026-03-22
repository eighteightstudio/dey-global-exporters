"use client"

import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'

export function ProductsClientPage() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://picsum.photos/seed/hair1/600/480"
                alt="Raw Virgin Hair Ball Combo A1 Quality — temple sourced bulk hair India"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute top-3 left-3 bg-[var(--accent)] text-[var(--navy)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Best Seller
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">Raw Bulk Hair</p>
              <h2 className="text-lg font-bold text-[var(--navy)] font-heading mb-1">Raw Virgin Hair Ball Combo</h2>
              <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide mb-3">A1 Quality</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                Unprocessed raw virgin hair sourced directly from South Indian temples and verified
                household donor networks. Natural cuticle alignment intact — no chemical treatment,
                no washing, no processing of any kind.
              </p>
              <ul className="space-y-1.5 mb-6">
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Available in 50 kg sacks
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Mixed sizes per sack
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Untangled and loose-packed
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Sourced from temples and households
                </li>
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

          <div className="border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://picsum.photos/seed/hair2/600/480"
                alt="White Hair Ball A1 Quality — paka chul premium natural white hair India"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute top-3 left-3 bg-[var(--accent)] text-[var(--navy)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Premium
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">Raw Bulk Hair</p>
              <h2 className="text-lg font-bold text-[var(--navy)] font-heading mb-1">White Hair Ball</h2>
              <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide mb-3">A1 Quality</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                Premium natural white human hair — known as "paka chul" — sourced from the same
                temple and household networks as our virgin hair. Highly sought after by wig
                manufacturers for white and grey wig production.
              </p>
              <ul className="space-y-1.5 mb-6">
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Premium "paka chul" natural white hair
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Same A1 sourcing quality as virgin hair
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Temple and household sourced
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Rare and high-demand product category
                </li>
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

          <div className="border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://picsum.photos/seed/hair3/600/480"
                alt="Single Drawn Hair A1 Quality — 12 to 42 inch wholesale export India"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">Drawn Hair</p>
              <h2 className="text-lg font-bold text-[var(--navy)] font-heading mb-1">Single Drawn Hair</h2>
              <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide mb-3">A1 Quality</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                Single drawn hair retains the natural variation of a collected lot — a mix of lengths
                within each bundle. Ideal for buyers who require a full, voluminous look at a
                wholesale price point.
              </p>
              <ul className="space-y-1.5 mb-6">
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Length: 12 inch to 42 inch
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Natural volume and fullness
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Verified donor network sourced
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Competitive wholesale FOB pricing
                </li>
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

          <div className="border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://picsum.photos/seed/hair4/600/480"
                alt="Double Drawn Hair A1 Quality — 12 to 42 inch premium uniform hair India"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute top-3 left-3 bg-[var(--accent)] text-[var(--navy)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Premium
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">Drawn Hair</p>
              <h2 className="text-lg font-bold text-[var(--navy)] font-heading mb-1">Double Drawn Hair</h2>
              <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide mb-3">A1 Quality</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                Double drawn hair is sorted to remove shorter strands, resulting in a bundle where
                the majority of hairs are the same length from root to tip. The preferred choice
                for high-end wig brands and extension manufacturers.
              </p>
              <ul className="space-y-1.5 mb-6">
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Length: 12 inch to 42 inch
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Uniform length from root to tip
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  High density and consistent thickness
                </li>
                <li className="flex items-start gap-2 text-sm text-[var(--navy)]">
                  <Check size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                  Preferred by premium wig manufacturers
                </li>
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

          <div className="border border-[var(--border)] rounded-2xl overflow-hidden flex flex-col md:col-span-2 lg:col-span-2">
            <div className="relative aspect-[4/3] lg:aspect-[16/6]">
              <Image
                src="https://picsum.photos/seed/hair-custom/600/480"
                alt="Custom hair order on demand — DEY GLOBAL EXPORTERS India"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
              <span className="absolute top-3 left-3 bg-white text-[var(--navy)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide border border-[var(--border)]">
                On Request
              </span>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">Custom</p>
              <h2 className="text-lg font-bold text-[var(--navy)] font-heading mb-1">Custom Orders — Various Varieties on Demand</h2>
              <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide mb-3">As per Requirement</p>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                Various varieties can be arranged on demand based on client requirements. If you
                need a specific length range, a custom sack weight, a particular grade blend, or
                a product type not listed above — reach out and our team will assess feasibility
                and respond with a quote within 24 business hours.
              </p>
              <div className="mt-auto">
                <Link
                  href="/contact"
                  className="inline-block text-center bg-[var(--accent)] text-[var(--navy)] text-sm font-semibold rounded-xl px-6 py-3 hover:bg-[var(--navy-muted)] hover:text-white transition-colors duration-200"
                >
                  Discuss Your Requirements
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
