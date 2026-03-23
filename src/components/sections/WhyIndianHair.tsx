import Image from 'next/image'
import { Check } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

const advantages = [
  {
    title: 'Single-Donor Temple Sourcing',
    description:
      'Hair donated at South Indian temples is single-donor — from one individual head — guaranteeing cuticle consistency and natural texture uniformity across the entire length.',
  },
  {
    title: 'Intact Cuticle Alignment',
    description:
      'Temple hair naturally maintains root-to-tip cuticle direction. No acid stripping, no silicone coating. This means minimal tangling and maximum product lifespan for your buyers.',
  },
  {
    title: 'Natural Black — Global Market Staple',
    description:
      'Indian hair\'s natural black-to-dark-brown color range is universally in demand across the US, African, and Middle Eastern markets. It accepts dye uniformly without pre-lightening resistance.',
  },
  {
    title: 'Household and Grassroots Networks',
    description:
      'Beyond temple sourcing, our founder spent a decade building verified household and grassroots collection networks across India — giving us access to consistent supply at scale.',
  },
  {
    title: 'Ethical and Traceable Supply',
    description:
      'Temple tonsure is entirely voluntary and spiritually motivated. Every lot we source — temple or household — carries batch-level traceability documentation for your compliance needs.',
  },
  {
    title: 'DGFT-Compliant Export Infrastructure',
    description:
      'IEC licensing, GST registration, established freight forwarding networks, and accurate HS code documentation — every shipment leaves India fully compliant and clean for import clearance.',
  },
]

export function WhyIndianHair() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/why_indian_hair_section.png"
                alt="South Indian temple hair sorting — raw human hair quality inspection India"
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 bg-[var(--navy)] text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold font-heading text-[var(--accent)]">80%+</p>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                of global human hair exports originate from India
              </p>
            </div>
          </div>

          <div>
            <SectionHeading
              title="Why Raw Indian Temple Hair?"
              subtitle="India's unique temple sourcing ecosystem makes it the world's dominant raw hair origin — and the preferred input for premium wig and extension brands globally."
              align="left"
            />
            <ul className="mt-8 flex flex-col gap-5">
              {advantages.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={11} className="text-[var(--navy)]" strokeWidth={3} />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--navy)] text-sm">{item.title}</p>
                    <p className="text-sm text-[var(--text-muted)] mt-0.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button variant="primary" size="md" href="/about">
                Our Sourcing Story
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
