import { Search, SlidersHorizontal, Sparkles, ShieldCheck, Box, Plane } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Ethical Sourcing',
    description:
      'We source raw hair through temple tonsure auctions (TTD-certified) and verified salon collection networks across South India. Every batch is traceable to its source.',
  },
  {
    icon: SlidersHorizontal,
    step: '02',
    title: 'Sorting & Grading',
    description:
      'Hair is manually sorted by length, texture (straight, wavy, curly), color, and quality grade (Remy vs non-Remy, single-donor vs mixed). Only passing batches proceed.',
  },
  {
    icon: Sparkles,
    step: '03',
    title: 'Processing & Wefting',
    description:
      'Washing, hackling, combing, and where applicable machine-wefting. Raw bulk hair is minimally processed — washed only. Wefted products undergo controlled processing to spec.',
  },
  {
    icon: ShieldCheck,
    step: '04',
    title: 'QC Inspection',
    description:
      'Multi-point quality check: cuticle alignment verification, shedding test, moisture content measurement, weight accuracy, and visual inspection against buyer specifications.',
  },
  {
    icon: Box,
    step: '05',
    title: 'Packaging & Labelling',
    description:
      'Secure export-grade packaging with weight and spec labels. White-label and custom branded options available. Packed to preserve hair quality through long-haul freight.',
  },
  {
    icon: Plane,
    step: '06',
    title: 'Export & Documentation',
    description:
      'DGFT-compliant export documentation: commercial invoice, packing list, bill of lading, certificate of origin, and QC batch report — all transmitted before vessel departure.',
  },
]

export function ProcessTimeline() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionHeading
            title="From Temple to Your Factory Floor"
            subtitle="A transparent 6-step process that ensures quality, traceability, and compliance at every stage."
            align="center"
          />
        </div>

        {/* Timeline grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.step}
                className="relative bg-white border border-[var(--border)] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-200"
              >
                {/* Step number */}
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

                {/* Connector dot for non-last items */}
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
