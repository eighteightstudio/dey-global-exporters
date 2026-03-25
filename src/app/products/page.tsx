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

      <CtaBanner />
    </>
  )
}
