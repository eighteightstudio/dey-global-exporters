import type { Metadata } from 'next'
import { FileCheck, Receipt, Building2, Shield, Globe, Award, CheckCircle } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { certifications, compliancePoints } from '@/data/certifications'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'Certifications & Export Compliance — IEC, DGFT, GST, MSME',
  description:
    'DEY GLOBAL EXPORTERS holds IEC registration, GST/LUT registration, MSME UDYAM certificate, FIEO membership, and full DGFT compliance. View our export credentials and compliance documentation.',
  openGraph: {
    title: 'Export Certifications — DEY GLOBAL EXPORTERS | Raw Hair Exporter India',
    description:
      'IEC registered, DGFT compliant, GST verified. Full certification overview for our B2B raw hair export operations from Kolkata, India.',
  },
}

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  Receipt,
  Building2,
  Shield,
  Globe,
  Award,
}

const categoryLabels: Record<string, string> = {
  export: 'Export License',
  tax: 'Tax Registration',
  quality: 'Quality',
  trade: 'Trade Membership',
}

export default function CertificationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5">
              Certifications & Export Compliance
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              International B2B buyers require documentation confidence before committing to a
              supplier. Here is the complete record of our registrations, certifications, and
              compliance credentials — verifiable and transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Certification cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionHeading
              title="Our Certifications & Registrations"
              subtitle="Every document available for verification. Certificate numbers masked per standard practice — full details shared with verified buyers."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const Icon = iconMap[cert.icon]
              return (
                <div
                  key={cert.id}
                  className="border border-[var(--border)] rounded-2xl p-7 bg-white hover:-translate-y-1 transition-transform duration-200"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[var(--navy)] flex items-center justify-center">
                      <Icon size={20} className="text-[var(--accent)]" />
                    </div>
                    <span className="text-xs font-medium text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--border)] rounded-full px-2.5 py-0.5">
                      {categoryLabels[cert.category]}
                    </span>
                  </div>

                  <h3 className="font-bold text-[var(--navy)] font-heading text-lg mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{cert.issuingAuthority}</p>

                  <div className="bg-[var(--surface)] rounded-lg px-3 py-2 mb-4 font-mono text-xs text-[var(--navy)]">
                    {cert.registrationNumber}
                  </div>

                  <div className="flex gap-4 text-xs text-[var(--text-muted)] mb-4">
                    <div>
                      <p className="font-medium text-[var(--navy)]">Valid From</p>
                      <p>{new Date(cert.validFrom).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</p>
                    </div>
                    <div>
                      <p className="font-medium text-[var(--navy)]">Valid Until</p>
                      <p>{cert.validUntil}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Export Compliance section */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionHeading
              title="Export Compliance Framework"
              subtitle="How we ensure every shipment meets India's export regulations and international import requirements."
              align="center"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {compliancePoints.map((point) => (
              <div
                key={point.title}
                className="bg-white border border-[var(--border)] rounded-2xl p-6 flex gap-4"
              >
                <CheckCircle size={20} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-[var(--navy)] font-heading mb-1.5">{point.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* DGFT Policy box */}
          <div className="bg-[var(--navy)] rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold font-heading mb-4 text-[var(--accent)]">
              India's DGFT Export Policy for Raw Human Hair — HS 05010010
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Under India's Foreign Trade Policy, the export of raw human hair (HS 05010010) is
              categorized as "Prohibited" with a statutory exception: exports are freely allowed
              when the Free-On-Board (FOB) value is at or above USD 65 per kilogram.
            </p>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              This means any legitimate supplier of raw Indian temple hair must price FOB at a
              minimum of USD 65/kg — any quote below this threshold should be treated as a serious
              compliance red flag, potentially indicating misclassification, undervaluation, or
              non-genuine temple hair.
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              DEY GLOBAL EXPORTERS prices all raw bulk hair exports (HS 05010010) at or above this
              threshold. Worked products under HS 05010020 (wefted bundles, closures, frontals) are
              exported under free export conditions without FOB price restrictions.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionHeading
              title="Standard Documentation Per Shipment"
              subtitle="Every DEY GLOBAL EXPORTERS shipment includes these documents, transmitted digitally before vessel departure."
              align="center"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Commercial Invoice (with HS code, FOB value, IEC number)',
              'Packing List (bundle count, box weights, dimensions)',
              'Bill of Lading / Airway Bill',
              'Certificate of Origin (EIA / FIEO issued)',
              'Shipping Bill (filed at Indian Customs)',
              'GST LUT Export Acknowledgement',
              'QC Batch Report (cuticle test, shedding, weight)',
              'Pre-shipment photographs (per buyer request)',
            ].map((doc) => (
              <div
                key={doc}
                className="flex items-start gap-3 p-4 border border-[var(--border)] rounded-xl"
              >
                <CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--navy)]">{doc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="primary" size="md" href="/contact">
              Request Full Credential Package →
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
