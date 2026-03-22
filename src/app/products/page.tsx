import type { Metadata } from 'next'
import { ProductsClientPage } from './ProductsClientPage'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Products | DEY GLOBAL EXPORTERS',
  description: 'Browse DEY GLOBAL EXPORTERS full product range: Raw Virgin Hair Ball Combo, White Hair Ball, Single Drawn Hair, Double Drawn Hair, and Custom Orders. A1 quality, temple and household sourced, B2B wholesale export from India.',
  openGraph: {
    title: 'Raw Human Hair Products | DEY GLOBAL EXPORTERS',
    description: 'B2B product catalog: Raw Virgin Hair Ball Combo, White Hair Ball, Single Drawn and Double Drawn Hair. A1 quality. Export from Kolkata, India.',
  },
}

export default function ProductsPage() {
  return (
    <>
      <section className="py-28 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5">
              Our Product Catalog
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We specialize in sourcing and exporting premium quality temple and donor hair.
              Every product is A1 graded, ethically sourced from temples and verified household
              networks across India, and export-ready with full documentation.
            </p>
          </div>
        </div>
      </section>

      <ProductsClientPage />

      <section className="py-16 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="font-bold text-[var(--navy)] font-heading mb-2">HS Code: 05010010</p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Raw, unprocessed human hair in natural state. Covers Raw Virgin Hair Ball Combo
                and White Hair Ball. Minimum export FOB: USD 65/kg per DGFT policy.
              </p>
            </div>
            <div>
              <p className="font-bold text-[var(--navy)] font-heading mb-2">HS Code: 05010020</p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Worked human hair — sorted and drawn. Covers Single Drawn and Double Drawn Hair.
                Free export with no FOB minimum.
              </p>
            </div>
            <div>
              <p className="font-bold text-[var(--navy)] font-heading mb-2">All Orders Include</p>
              <p className="text-[var(--text-muted)] leading-relaxed">
                Commercial invoice with HS code and FOB value, packing list, certificate of
                origin, and QC batch report transmitted before dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
