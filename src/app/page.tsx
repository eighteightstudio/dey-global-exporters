// src/app/page.tsx
import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustBar } from '@/components/sections/TrustBar'
import { ProductGrid } from '@/components/sections/ProductGrid'
import { WhyIndianHair } from '@/components/sections/WhyIndianHair'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { CertificationsPreview } from '@/components/sections/CertificationsPreview'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FaqAccordion } from '@/components/sections/FaqAccordion'
import { BlogPreview } from '@/components/sections/BlogPreview'
import { CtaBanner } from '@/components/sections/CtaBanner'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

export const metadata: Metadata = {
  title: 'DEY GLOBAL EXPORTERS | Raw Human Hair Exporter from India',
  description:
    'DEY GLOBAL EXPORTERS — B2B wholesale exporter of raw virgin human hair, single drawn, double drawn, and white hair from East Medinipur, West Bengal, India. Supplying wig manufacturers, extension brands, and wholesale distributors worldwide.',
  openGraph: {
    title: 'DEY GLOBAL EXPORTERS | Raw Human Hair Exporter from India',
    description:
      'B2B wholesale exporter of raw virgin human hair from East Medinipur, West Bengal, India. Temple sourced, household collected, and grassroots network verified. Founded by Sunny Dey.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProductGrid />
      <WhyIndianHair />
      <ProcessTimeline />
      <CertificationsPreview />
      <TestimonialsSection />
      <FaqAccordion />
      <BlogPreview />
      <CtaBanner />
      <WhatsAppButton />
    </>
  )
}
