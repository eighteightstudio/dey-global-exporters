import type { Metadata } from 'next'
import { ProductsClientPage } from './ProductsClientPage'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Products — Raw Indian Temple Hair, Remy Bundles, Closures & Frontals',
  description:
    'Browse DEY GLOBAL EXPORTERS\' full range: raw Indian temple hair bulk, double-drawn Remy wefted bundles, lace closures (4×4, 5×5), lace frontals (13×4, 13×6), and specialty curly/kinky textures. B2B wholesale from Kolkata, India.',
  openGraph: {
    title: 'Raw Indian Hair Products — Wholesale Exporter India | DEY GLOBAL EXPORTERS',
    description:
      'B2B product catalog: raw temple bulk hair, Remy wefted bundles, lace closures, frontals. HS code 0501. Export from Kolkata.',
  },
}

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5">
              B2B Raw Hair Product Catalog
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              From unprocessed temple bulk hair to precision-wefted Remy bundles and Swiss lace
              closures. All products export-ready with full HS code documentation and DGFT-compliant
              FOB pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Products with filters */}
      <ProductsClientPage />

      {/* HS Code info */}
      <section className="py-16 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-bold text-[var(--navy)] font-heading mb-2">HS Code: 05010010</p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Raw, unprocessed human hair in natural state. Temple-sourced bulk hair. Minimum
                export FOB: USD 65/kg per DGFT policy.
              </p>
            </div>
            <div>
              <p className="font-bold text-[var(--navy)] font-heading mb-2">HS Code: 05010020</p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Worked human hair — washed, wefted, or minimally processed. Covers wefted bundles,
                closures, frontals. Free export — no FOB minimum.
              </p>
            </div>
            <div>
              <p className="font-bold text-[var(--navy)] font-heading mb-2">All Products Include</p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Commercial invoice with HS code and FOB value, packing list, certificate of origin,
                and QC batch report transmitted before vessel departure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
