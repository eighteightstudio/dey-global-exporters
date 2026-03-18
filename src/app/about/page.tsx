import type { Metadata } from 'next'
import Image from 'next/image'
import { Check, Users, Target, Heart } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { CtaBanner } from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title: 'About Us — Raw Indian Temple Hair Exporter from Kolkata',
  description:
    'Learn about DEY GLOBAL EXPORTERS — our origin story, sourcing philosophy, team, and commitment to ethical temple hair supply from Kolkata, India to global wig and extension brands.',
  openGraph: {
    title: 'About DEY GLOBAL EXPORTERS | Raw Hair Exporter, Kolkata India',
    description:
      'Family-built B2B raw hair export business from Kolkata. Ethical temple sourcing, rigorous QC, DGFT-compliant documentation for wig manufacturers worldwide.',
  },
}

const milestones = [
  { year: '2022', event: 'DEY GLOBAL EXPORTERS founded in Kolkata, West Bengal' },
  { year: '2022', event: 'IEC and GSTIN registration completed; first test shipment to the UAE' },
  { year: '2023', event: 'First US shipment — 20kg raw temple bulk hair to a Dallas wig brand' },
  { year: '2023', event: 'MSME UDYAM registered; FIEO membership secured' },
  { year: '2024', event: 'Export reach expanded to 15+ countries across Africa and Europe' },
  { year: '2024', event: 'Monthly export capacity surpasses 300 kg; wefted bundle line launched' },
  { year: '2025', event: 'Lace closures and frontals added; 20+ active B2B buyer relationships' },
]

const values = [
  {
    icon: Heart,
    title: 'Ethical Sourcing, Always',
    description:
      'We source exclusively through temple tonsure auctions and verified collection networks. Every lot is documented for traceability. We do not purchase from grey-market or unverified sources.',
  },
  {
    icon: Target,
    title: 'Accuracy Over Volume',
    description:
      'We would rather ship a smaller, accurately graded lot than a larger, inconsistent one. Every bundle weight, cuticle alignment test, and length measurement matters to us — because it matters to your production line.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    description:
      'We are not a one-order supplier. We build relationships with B2B buyers who value reliability over novelty. Our repeat customer rate reflects that commitment — the majority of our revenue comes from buyers placing their third order or beyond.',
  },
]

const team = [
  {
    name: 'Rahul Dey',
    role: 'Founder & Managing Director',
    bio: 'Over 8 years in textile and commodity export from West Bengal. Founded DEY GLOBAL EXPORTERS to bring institutional-grade documentation standards to the raw hair export segment. Manages export licensing, buyer relationships, and strategic growth.',
    image: 'https://picsum.photos/seed/team1/200/200',
  },
  {
    name: 'Priya Dey',
    role: 'Head of Operations & QC',
    bio: 'Oversees the sorting, grading, and QC process for every outgoing shipment. Background in textile quality management. Personally approves every batch report before dispatch authorization.',
    image: 'https://picsum.photos/seed/team2/200/200',
  },
  {
    name: 'Arun Sharma',
    role: 'Export Documentation & Logistics',
    bio: 'Handles all DGFT compliance, HS code classification, shipping bill filing, and freight forwarder coordination. Ensures every shipment leaves Kolkata with a complete, accurate documentation set.',
    image: 'https://picsum.photos/seed/team3/200/200',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5">
              Built on Sourcing Integrity.<br />Grown on Trust.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              DEY GLOBAL EXPORTERS is a Kolkata-based B2B raw hair export company supplying
              wig manufacturers, extension brands, and wholesale distributors across 20+ countries.
              We entered the hair export industry to prove that ethical sourcing, institutional-grade
              documentation, and genuine quality control can coexist with competitive pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Story + Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle=""
                align="left"
              />
              <div className="mt-6 space-y-4 text-[var(--text-muted)] text-sm leading-relaxed">
                <p>
                  DEY GLOBAL EXPORTERS was founded in 2022 by Rahul Dey, a Kolkata-based export
                  professional who spent nearly a decade in the textile and commodity trade before
                  identifying a consistent gap in the raw hair export market: the absence of suppliers
                  who combined genuine quality documentation with reliable compliance practices.
                </p>
                <p>
                  The Indian raw hair export industry is dominated by volume — large informal networks
                  that move significant quantities but offer minimal traceability, inconsistent
                  documentation, and little recourse for quality disputes. International buyers, especially
                  in the US and EU, increasingly need more than just hair — they need a supplier who
                  understands customs documentation, HS code classification, DGFT compliance, and the
                  paperwork requirements of their import countries.
                </p>
                <p>
                  We built DEY GLOBAL EXPORTERS to fill that gap. Starting with small, carefully
                  documented shipments to UAE and then US buyers, we established our documentation
                  standards, QC protocols, and sourcing relationships before scaling volume.
                  That foundation — compliance first, then scale — defines how we operate today.
                </p>
                <p>
                  Today we export raw temple bulk hair, wefted Remy bundles, lace closures, and
                  frontals to brands and manufacturers across North America, Europe, Africa, and the
                  Middle East. The majority of our buyers are on their third order or beyond.
                  That repeat rate is the only metric that matters to us.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/aboutstory/600/750"
                  alt="DEY GLOBAL EXPORTERS — raw hair sorting and grading facility, Kolkata"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[var(--accent)] text-[var(--navy)] rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-bold font-heading">2022</p>
                <p className="text-xs font-semibold mt-0.5">Year Founded</p>
                <p className="text-xs mt-1">Kolkata, West Bengal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionHeading
              title="Our Core Values"
              subtitle="The principles that guide every sourcing decision, every QC check, and every shipment."
              align="center"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div
                  key={v.title}
                  className="bg-white border border-[var(--border)] rounded-2xl p-7"
                >
                  <div className="w-11 h-11 rounded-xl bg-[var(--navy)] flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[var(--accent)]" />
                  </div>
                  <h3 className="font-bold text-[var(--navy)] font-heading text-lg mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">{v.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden lg:aspect-[4/3]">
              <Image
                src="https://picsum.photos/seed/templesorting/700/530"
                alt="Temple hair collection and sorting process — ethical raw hair sourcing India"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div>
              <SectionHeading
                title="Sourcing Philosophy"
                subtitle=""
                align="left"
              />
              <div className="mt-6 space-y-4 text-[var(--text-muted)] text-sm leading-relaxed">
                <p>
                  Our primary raw material source is South Indian temple tonsure auctions — principally
                  the Tirumala Tirupati Devasthanams (TTD) auction system, which sells sorted temple
                  hair to licensed exporters through public, documented e-auctions.
                </p>
                <p>
                  Temple hair is single-donor — from one individual head — which naturally guarantees
                  cuticle direction consistency, texture uniformity, and the Remy characteristics that
                  premium wig brands require. Hair offered at temples is grown for months or years
                  before donation, resulting in longer lengths and healthier strands than collected
                  fallout hair.
                </p>
                <p>
                  We supplement temple-sourced stock with verified salon collection networks in West
                  Bengal and Tamil Nadu for our single-drawn wholesale bulk products. All collection
                  points are visited and vetted by our operations team before onboarding.
                </p>
              </div>
              <ul className="mt-6 space-y-2">
                {[
                  'TTD temple auction certified lots',
                  'Single-donor guarantees on premium products',
                  'Zero informal or grey-market sourcing',
                  'Batch-level traceability documentation',
                  'Verified salon network for wholesale grade',
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

      {/* Team */}
      <section className="py-20 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionHeading
              title="Meet the Team"
              subtitle="The people behind every shipment, every QC check, and every buyer inquiry."
              align="center"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-[var(--border)] rounded-2xl overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role} at DEY GLOBAL EXPORTERS`}
                    fill
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
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-[var(--navy)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <SectionHeading
              title="Company Milestones"
              subtitle="From first shipment to a 20+ country footprint — in three years."
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
