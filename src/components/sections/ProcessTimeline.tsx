import { Search, SlidersHorizontal, Sparkles, ShieldCheck, Box, Plane } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Ethical Sourcing',
    description:
      'Raw hair is sourced through South Indian temple tonsure donations and verified household collection networks built by our founder over a decade of ground-level work across India.',
  },
  {
    icon: SlidersHorizontal,
    step: '02',
    title: 'Sorting and Grading',
    description:
      'Hair is manually sorted by length, type (virgin, white, single drawn, double drawn), and quality. Only batches that meet our A1 grade standard proceed to the next stage.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Processing',
    description:
      'Raw bulk hair is minimally processed — untangled and loose-packed as collected. Drawn hair is sorted to remove shorter strands per single or double drawn specification.',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'QC Inspection',
    description:
      'Multi-point quality check: cuticle alignment, weight accuracy, length verification, visual inspection against buyer specifications, and batch report generation before dispatch authorization.',
  },
  {
    icon: Box,
    step: '05',
    title: 'Packaging',
    description:
      'Raw bulk hair packed in standard 50 kg sacks. Drawn hair in bundle packaging. Secure export-grade packing to preserve quality through long-haul freight to your destination.',
  },
  {
    icon: Plane,
    step: '06',
    title: 'Export and Documentation',
    description:
      'DGFT-compliant export documentation: commercial invoice with HS code and FOB value, packing list, certificate of origin, and QC batch report — all transmitted before vessel departure.',
  },
]

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionHeading
            title="From Temple to Your Factory Floor"
            subtitle="A transparent 6-step process that ensures quality, traceability, and compliance at every stage of every shipment."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="relative bg-white border border-[var(--border)] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--navy)] flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-[var(--accent)]" />
                  </div>
                  <span className="text-4xl font-bold text-[var(--border)] font-heading select-none">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--navy)] font-heading text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-[var(--border)] z-10" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
