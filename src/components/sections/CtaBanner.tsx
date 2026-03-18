import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CtaBanner() {
  return (
    <section className="py-20 bg-[var(--navy)]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Accent bar */}
        <div className="w-10 h-[3px] bg-[var(--accent)] mx-auto mb-6 rounded-full" />

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-heading leading-tight mb-5">
          Ready to Source Premium<br className="hidden sm:block" /> Raw Indian Temple Hair?
        </h2>

        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Request a price list, ask for a sample lot, or discuss your monthly volume requirements
          with our export team. We respond within 24 business hours.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="accent" size="lg" href="/contact">
            Request Price List <ArrowRight size={18} />
          </Button>
          <a
            href="https://wa.me/919876543210?text=Hello%20DEY%20GLOBAL%20EXPORTERS%2C%20I%20am%20interested%20in%20your%20raw%20hair%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200 rounded-lg px-8 py-4 text-base font-medium"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>

        <p className="text-white/30 text-xs mt-8">
          IEC Registered · DGFT Compliant · GST Verified · Shipping to 20+ Countries
        </p>
      </div>
    </section>
  )
}
