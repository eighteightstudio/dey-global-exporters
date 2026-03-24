import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, Users, Target, Heart } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'About Us | DEY GLOBAL EXPORTERS',
  description:
    'Learn about DEY GLOBAL EXPORTERS — our origin story, sourcing philosophy, leadership team, and commitment to ethical human hair supply from East Medinipur, West Bengal, India.',
  openGraph: {
    title: 'About Us | DEY GLOBAL EXPORTERS',
    description:
      'Founded by Sunny Dey with over 10 years of sourcing expertise. Ethical temple and household hair sourcing from India for global wig and extension brands.',
  },
}

const milestones = [
  { year: '2015', event: 'Sunny Dey begins hands-on sourcing across Indian temples and households' },
  { year: '2015 to 2023', event: 'Nearly a decade supplying established exporters and mastering the full supply chain' },
  { year: '2023', event: 'DEY GLOBAL EXPORTERS formally established — East Medinipur, West Bengal' },
  { year: '2023', event: 'IEC and GSTIN registration completed; first direct export shipments initiated' },
  { year: '2024', event: 'Product range expanded: single drawn, double drawn, white hair, and custom orders' },
  { year: '2024', event: 'Active B2B buyer relationships established across multiple international markets' },
  { year: '2025', event: 'Expansion planning underway into additional high-quality export product categories' },
]

const values = [
  {
    icon: Heart,
    title: 'Ethical Sourcing, Always',
    description:
      'We source exclusively through temples, verified households, and established grassroots networks across India. Every lot carries full traceability. We do not purchase from grey-market or unverified sources — this is a non-negotiable principle.',
  },
  {
    icon: Target,
    title: 'Quality Over Everything',
    description:
      'Our founder spent a decade on the ground learning what real quality looks like before building a business around it. We grade meticulously, document accurately, and only ship what we would stand behind personally.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnerships',
    description:
      'We are not a one-order supplier. Our goal is to build consistent, trust-based relationships with B2B buyers who value reliability, documentation transparency, and a supplier that understands their production requirements.',
  },
]

const team = [
  {
    name: 'Sunny Dey',
    role: 'Founder',
    bio: 'Over 10 years of hands-on expertise sourcing premium human hair across India — from temples, households, and grassroots networks. Founded DEY GLOBAL EXPORTERS to bring transparency, reliability, and institutional-grade quality directly to global clients.',
    image: 'https://picsum.photos/seed/team1/200/200',
  },
  {
    name: 'Manashi Dey',
    role: 'Co-Founder',
    bio: 'Integral to the operational and strategic foundation of DEY GLOBAL EXPORTERS. Works alongside the founding team to ensure the company delivers on its commitment to quality, consistency, and long-term buyer relationships.',
    image: 'https://picsum.photos/seed/team2/200/200',
  },
  {
    name: 'Debayudh Roy',
    role: 'Office and Social Team',
    bio: 'Manages day-to-day office operations and buyer-facing communication. Responsible for digital presence, inquiry handling, and ensuring every client interaction reflects the professionalism the company is built on.',
    image: 'https://picsum.photos/seed/team3/200/200',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="py-28 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5">
              Built on a Decade of Ground-Level Expertise.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              DEY GLOBAL EXPORTERS is a West Bengal-based B2B raw human hair export company
              founded by Sunny Dey after nearly 10 years of sourcing experience across Indian
              temples, households, and grassroots supply networks. We entered the export market
              to bring transparency, quality consistency, and long-term trust to global buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading title="Our Story" subtitle="" align="left" />
              <div className="mt-6 space-y-4 text-[var(--text-muted)] text-sm leading-relaxed">
                <p>
                  Every business has a beginning. Ours began on the ground — where quality is not
                  promised, but discovered.
                </p>
                <p>
                  Back in 2015, Sunny Dey started his journey in the human hair industry — not as an
                  exporter, but as a source. Traveling across India, he worked closely with temples,
                  connected with households, and developed a firsthand understanding of where quality
                  hair truly comes from. What began as simple sourcing evolved into deep supply chain
                  involvement, supplying established exporters and learning the business from the inside out.
                </p>
                <p>
                  There were no shortcuts. Only years of observation, trial, and hands-on experience.
                  That time built something that cannot be replicated: a genuine understanding of quality,
                  consistency, and trust — alongside a clear view of the gaps and opportunities that
                  existed within the industry.
                </p>
                <p>
                  After nearly a decade of building networks and mastering the fundamentals, DEY GLOBAL
                  EXPORTERS was established to bring that expertise directly to global clients — with
                  transparency, reliability, and a standard of excellence that reflects everything our
                  founder learned on the ground.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/About%20Us/our_story_section.png"
                  alt="DEY GLOBAL EXPORTERS — human hair sorting and grading facility, West Bengal"
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[var(--accent)] text-[var(--navy)] rounded-2xl p-5">
                <p className="text-3xl font-bold font-heading">2015</p>
                <p className="text-xs font-semibold mt-0.5">Journey Began</p>
                <p className="text-xs mt-1">East Medinipur, West Bengal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[var(--border)] rounded-2xl p-10">
              <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
              <h2 className="text-2xl font-bold text-[var(--navy)] font-heading mb-4">Our Mission</h2>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed">
                Deliver consistent quality, build global trust, and create long-term partnerships
                with buyers who value a supplier that understands their business as well as their
                own product requirements.
              </p>
            </div>
            <div className="bg-[var(--navy)] border border-[var(--navy)] rounded-2xl p-10">
              <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
              <h2 className="text-2xl font-bold text-white font-heading mb-4">Our Vision</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                To expand beyond the hair industry and serve international markets with multiple
                high-quality product categories — carrying the same sourcing discipline and
                quality commitment across everything we export.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide every sourcing decision, every quality check, and every shipment."
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7">
                  <div className="w-11 h-11 rounded-xl bg-[var(--navy)] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="font-bold text-[var(--navy)] font-heading text-lg mb-3">{v.title}</h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden lg:aspect-[4/3]">
              <Image
                src="https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/About%20Us/our_sourcing_philosophy.png"
                alt="Temple and household hair collection process — ethical raw hair sourcing India"
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading title="Sourcing Philosophy" subtitle="" align="left" />
              <div className="mt-6 space-y-4 text-[var(--text-muted)] text-sm leading-relaxed">
                <p>
                  Our raw material comes from three verified source categories: South Indian temple
                  tonsure donations, direct household collections, and established grassroots networks
                  across India built by our founder over nearly a decade of ground-level work.
                </p>
                <p>
                  Temple-sourced hair is single-donor, grown for months or years before donation,
                  and naturally carries the cuticle alignment and length characteristics that premium
                  wig brands require. Household and network-sourced material fills demand for our
                  single-drawn and double-drawn wholesale product lines.
                </p>
                <p>
                  Every sourcing point is visited and verified by our team before onboarding.
                  We do not purchase through informal intermediaries or unverified grey-market
                  channels. Traceability is documented at the batch level.
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {[
                  'Temple tonsure sourcing — verified donation lots',
                  'Direct household collection networks',
                  'Grassroots sourcing across East Medinipur and Tamil Nadu',
                  'Zero informal or grey-market procurement',
                  'Batch-level traceability on all outgoing stock',
                ].map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-[var(--navy)]">
                    <Check size={14} className="text-[var(--accent)] flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionHeading
              title="Meet the Team"
              subtitle="The people behind every shipment, every quality check, and every buyer relationship."
              align="center"
            />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role} at DEY GLOBAL EXPORTERS`}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-[var(--navy)] font-heading text-lg">{member.name}</h3>
                  <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-wide mt-0.5 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-[var(--navy)] rounded-2xl px-8 py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-white font-semibold font-heading text-base">Our Workforce</p>
              <p className="text-white/60 text-sm mt-1">
                Skilled male and female workers from rural East Medinipur, West Bengal — the backbone
                of our sorting, grading, and packing operations.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-block bg-[var(--accent)] text-[var(--navy)] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wide">
                Local Employment
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionHeading
              title="Our Journey"
              subtitle="From ground-level sourcing in 2015 to a global export operation built on a decade of expertise."
              align="center"
              light
            />
          </div>
          <div className="relative">
            <div className="absolute left-[60px] top-0 bottom-0 w-px bg-white/10" />
            <div className="flex flex-col gap-8">
              {milestones.map((m) => (
                <div key={m.year + m.event} className="flex gap-6 items-start">
                  <div className="w-[60px] flex-shrink-0 text-right">
                    <span className="text-[var(--accent)] font-bold text-sm font-heading">{m.year}</span>
                  </div>
                  <div className="relative flex-shrink-0 mt-1">
                    <div className="w-3 h-3 rounded-full bg-[var(--accent)] border-2 border-[var(--navy)] relative z-10" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed pt-0.5">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
