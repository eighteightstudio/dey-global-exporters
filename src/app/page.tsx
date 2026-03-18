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
  title: 'DEY GLOBAL EXPORTERS | Raw Indian Temple Hair Exporter',
  description:
    'DEY GLOBAL EXPORTERS — B2B wholesale exporter of raw Indian temple hair, virgin Remy bundles, wefted extensions, lace closures and frontals from Kolkata, India. Supplying wig manufacturers and hair brands in 20+ countries.',
  openGraph: {
    title: 'DEY GLOBAL EXPORTERS | Raw Indian Temple Hair Exporter',
    description:
      'B2B wholesale exporter of raw Indian temple hair from Kolkata, India. Remy bundles, closures, frontals. IEC registered, DGFT compliant.',
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
