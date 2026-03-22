import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function HeroSection() {
  return (
    <section className="relative bg-[var(--navy)] overflow-hidden min-h-[88vh] flex items-center py-28">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/herobg/1600/900"
          alt="Raw Indian temple hair export facility — DEY GLOBAL EXPORTERS Kolkata"
          fill
          priority
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)] via-[var(--navy)]/90 to-[var(--navy-muted)]/80" />
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 border border-[var(--accent)]/30 bg-[var(--accent)]/10 rounded-full px-4 py-1.5 mb-8 opacity-0-initial animate-fade-up delay-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="text-[var(--accent)] text-xs font-semibold tracking-wider uppercase">
              B2B Raw Hair Exporter — Kolkata, India
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-heading leading-[1.1] tracking-tight mb-6 opacity-0-initial animate-fade-up delay-100">
            Premium Raw Indian Temple Hair Exporter for Global Wig &amp; Extension Brands
          </h1>

          <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl opacity-0-initial animate-fade-up delay-200">
            Ethically sourced. Precisely graded. Export-ready from India.
            Founded by Sunny Dey with over 10 years of sourcing expertise — supplying wig
            manufacturers, extension brands, and wholesale distributors worldwide.
          </p>

          <div className="flex flex-wrap gap-4 mb-14 opacity-0-initial animate-fade-up delay-300">
            <Button variant="accent" size="lg" href="/contact">
              Request Price List <ArrowRight size={18} />
            </Button>
            <a
              href="https://wa.me/917003455085"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200 rounded-lg px-6 py-3 text-sm font-medium"
            >
              <MessageCircle size={18} />
              WhatsApp Our Export Team
            </a>
          </div>

          <div className="flex flex-wrap gap-6 md:gap-10 opacity-0-initial animate-fade-up delay-400">
            {[
              { value: '10+', label: 'Years Sourcing Experience' },
              { value: 'A1', label: 'Quality Grade' },
              { value: '100%', label: 'Temple and Household Sourced' },
              { value: '24h', label: 'Inquiry Response' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white font-heading">{stat.value}</span>
                <span className="text-xs text-white/50 mt-0.5">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
