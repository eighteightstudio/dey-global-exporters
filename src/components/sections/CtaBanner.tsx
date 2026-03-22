import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CtaBanner() {
  return (
    <section className="py-12 bg-[var(--navy)]">
      <div className="max-w-3xl mx-auto px-6 text-center">

        <h2 className="text-2xl md:text-3xl font-bold text-white font-heading leading-tight mb-3">
          Ready to Source Premium Raw Indian Hair?
        </h2>

        <p className="text-white/60 text-sm mb-6 max-w-xl mx-auto leading-relaxed">
          Request a price list, ask for a sample lot, or discuss your monthly volume requirements.
          We respond within 24 business hours.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button variant="accent" size="lg" href="/contact">
            Request Price List <ArrowRight size={16} />
          </Button>
          <a
            href="https://wa.me/917003455085"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/30 text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200 rounded-lg px-6 py-3 text-sm font-medium"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>

      </div>
    </section>
  )
}
