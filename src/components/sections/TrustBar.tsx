import { Globe, Package, CheckCircle, Clock, Award, Truck } from 'lucide-react'

const trustItems = [
  {
    icon: Globe,
    value: '20+',
    label: 'Countries Served',
    sub: 'USA, EU, Africa, Middle East',
  },
  {
    icon: Package,
    value: '500 kg+',
    label: 'Monthly Export Capacity',
    sub: 'Scalable on demand',
  },
  {
    icon: CheckCircle,
    value: '100%',
    label: 'Temple-Sourced Option',
    sub: 'Ethical, traceable sourcing',
  },
  {
    icon: Clock,
    value: '24h',
    label: 'Response Guarantee',
    sub: 'All inquiries answered',
  },
  {
    icon: Award,
    value: 'IEC',
    label: 'DGFT Registered Exporter',
    sub: 'Full compliance documentation',
  },
  {
    icon: Truck,
    value: 'FOB / CIF',
    label: 'Flexible Incoterms',
    sub: 'Your preferred shipping terms',
  },
]

export function TrustBar() {
  return (
    <section className="py-16 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {trustItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex flex-col items-center text-center gap-2"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--navy)] flex items-center justify-center mb-1">
                  <Icon size={18} className="text-[var(--accent)]" />
                </div>
                <span className="text-xl font-bold text-[var(--navy)] font-heading">
                  {item.value}
                </span>
                <span className="text-xs font-semibold text-[var(--navy)]">
                  {item.label}
                </span>
                <span className="text-[11px] text-[var(--text-muted)] leading-tight">
                  {item.sub}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
