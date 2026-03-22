import { Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const testimonials = [
  {
    quote:
      'DEY GLOBAL EXPORTERS has been our primary raw hair supplier for over a year. Their Raw Virgin Hair Ball Combo is consistently A1 grade — single-donor, cuticle-aligned, exactly as documented. Sunny Dey personally follows up on every shipment.',
    author: 'Marcus T.',
    role: 'Founder',
    company: 'LuxeWig Co.',
    country: 'United States',
    flag: '🇺🇸',
    product: 'Raw Virgin Hair Ball Combo',
  },
  {
    quote:
      'We import bulk raw hair every month. The FOB pricing is transparent, the HS code documentation is accurate, and I have never had a customs hold on any of their shipments. That reliability is worth more than a marginally cheaper price.',
    author: 'Amara O.',
    role: 'Procurement Manager',
    company: 'Afro Beauty Wholesale',
    country: 'Nigeria',
    flag: '🇳🇬',
    product: 'White Hair Ball',
  },
  {
    quote:
      'Their Double Drawn Hair is the best raw Indian input we have found for our premium wig line. The cuticle alignment is genuinely consistent across lots. Communication on WhatsApp is fast and the pre-shipment documentation is always complete.',
    author: 'Sophie M.',
    role: 'Operations Director',
    company: 'Maison de Cheveux',
    country: 'France',
    flag: '🇫🇷',
    product: 'Double Drawn Hair',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionHeading
            title="Trusted by Brands Worldwide"
            subtitle="What our B2B buyers say after working with us across multiple shipments."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white border border-[var(--border)] rounded-2xl p-7 flex flex-col"
            >
              <Quote size={28} className="text-[var(--accent)] mb-5 flex-shrink-0" />
              <p className="text-[var(--navy)] text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>
              <div className="border-t border-[var(--border)] pt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--navy)] flex items-center justify-center text-white font-bold text-sm font-heading flex-shrink-0">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[var(--navy)] text-sm">{t.author}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {t.role}, {t.company}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {t.flag} {t.country} · {t.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
