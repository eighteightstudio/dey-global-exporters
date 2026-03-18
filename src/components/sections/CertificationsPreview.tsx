import Link from 'next/link'
import { FileCheck, Receipt, Building2, Shield, Globe, Award, ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const iconMap: Record<string, React.ElementType> = {
  FileCheck,
  Receipt,
  Building2,
  Shield,
  Globe,
  Award,
}

const certPreviews = [
  { icon: 'FileCheck', title: 'IEC Registration', sub: 'Directorate General of Foreign Trade', number: 'IEC-XXXX-XXXX' },
  { icon: 'Receipt', title: 'GST + LUT', sub: 'Zero-rated export registration', number: 'GSTIN: 19XXXXX1234X1ZX' },
  { icon: 'Building2', title: 'MSME / UDYAM', sub: 'Ministry of MSME, India', number: 'UDYAM-WB-XX-XXXXXXX' },
  { icon: 'Shield', title: 'DGFT Compliance', sub: 'Foreign Trade Policy 2023', number: 'HS 0501 Compliant' },
  { icon: 'Globe', title: 'FIEO Member', sub: 'Federation of Indian Export Orgs', number: 'FIEO/WB/XXXX/2022' },
  { icon: 'Award', title: 'EPC Member', sub: 'Export Promotion Council', number: 'EPCH/XXXX/XX/XXXX' },
]

export function CertificationsPreview() {
  return (
    <section className="py-20 bg-[var(--navy)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionHeading
            title="Registered, Compliant & Documented"
            subtitle="Every shipment backed by full DGFT-compliant export documentation. No compliance surprises at your port of entry."
            align="center"
            light
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
          {certPreviews.map((cert) => {
            const Icon = iconMap[cert.icon]
            return (
              <div
                key={cert.title}
                className="border border-white/10 rounded-xl p-4 bg-white/5 hover:bg-white/10 transition-colors duration-150 flex flex-col gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--accent)]/15 flex items-center justify-center">
                  <Icon size={16} className="text-[var(--accent)]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-tight">{cert.title}</p>
                  <p className="text-white/50 text-[11px] mt-0.5 leading-tight">{cert.sub}</p>
                  <p className="text-white/30 text-[10px] mt-1.5 font-mono">{cert.number}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="md" href="/certifications" className="border-white/30 text-white hover:bg-white hover:text-[var(--navy)]">
            View All Certifications <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
