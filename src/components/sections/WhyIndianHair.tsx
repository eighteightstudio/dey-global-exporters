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
    title: 'Intact Remy Cuticle Alignment',
    description:
      'Temple hair naturally maintains root-to-tip cuticle direction. No acid stripping, no silicone coating. Remy integrity means minimal tangling and maximum product lifespan.',
  },
  {
    title: 'Natural Black — Global Market Staple',
    description:
      'Indian hair\'s natural black-to-dark-brown color range is universally in demand across the US, African, and Middle Eastern markets. It accepts dye uniformly without pre-lightening resistance.',
  },
  {
    title: 'Texture Diversity',
    description:
      'South Indian hair spans straight, wavy, body wave, and natural curl — a range that meets multiple market segments without chemical alteration of the base texture.',
  },
  {
    title: 'Ethical & Traceable Supply',
    description:
      'Temple tonsure is entirely voluntary and spiritually motivated. The TTD auction system is transparent and regulated — providing a documentable, ethically sound sourcing story for your brand.',
  },
  {
    title: 'DGFT-Compliant Export Infrastructure',
    description:
      'India\'s export ecosystem for human hair is institutionally developed — IEC licensing, GST LUT registration, established freight forwarding networks, and compliant HS code documentation.',
  },
]

export function WhyIndianHair() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left — Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/whyindia/600/750"
                alt="South Indian temple hair sorting facility — raw Remy hair quality inspection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-5 -right-5 bg-[var(--navy)] text-white rounded-2xl p-5 shadow-xl max-w-[200px]">
              <p className="text-3xl font-bold font-heading text-[var(--accent)]">80%+</p>
              <p className="text-xs text-white/70 mt-1 leading-relaxed">
                of global human hair exports originate from India
              </p>
            </div>
          </div>

          {/* Right — Content */}
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
                Our Sourcing Story →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
