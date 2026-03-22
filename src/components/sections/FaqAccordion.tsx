"use client"

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const faqs = [
  {
    id: 'faq-1',
    question: 'What products does DEY GLOBAL EXPORTERS supply?',
    answer:
      'We supply Raw Virgin Hair Ball Combo (A1 Quality) in 50 kg sacks, White Hair Ball (A1 Quality) known as paka chul, Single Drawn Hair (12 to 42 inch), Double Drawn Hair (12 to 42 inch), and Custom Orders on demand. All products are sourced from South Indian temples and verified household networks.',
  },
  {
    id: 'faq-2',
    question: 'What is the difference between Single Drawn and Double Drawn hair?',
    answer:
      'Single Drawn hair retains the natural variation of a collected lot — a mix of lengths within each bundle, producing natural volume. Double Drawn hair is sorted to remove shorter strands, resulting in a bundle where the majority of hairs are the same length from root to tip — producing a dense, uniform appearance preferred by premium wig manufacturers.',
  },
  {
    id: 'faq-3',
    question: 'Where is the hair sourced from?',
    answer:
      'Our primary source is South Indian temple tonsure donations — voluntary, spiritually motivated donations that are single-donor by nature. We supplement temple-sourced stock with verified household collection networks built by our founder Sunny Dey over a decade of ground-level sourcing work across India.',
  },
  {
    id: 'faq-4',
    question: 'What documentation comes with each shipment?',
    answer:
      'Every shipment includes a commercial invoice with correct HS code and FOB value, packing list, certificate of origin, and QC batch report. All documents are transmitted before vessel departure. We are IEC registered and DGFT compliant, ensuring clean documentation for import clearance in the US, EU, Africa, and the Middle East.',
  },
  {
    id: 'faq-5',
    question: 'What is the minimum order quantity?',
    answer:
      'Raw Virgin Hair Ball Combo and White Hair Ball are available in standard 50 kg sacks. For Single Drawn and Double Drawn hair, MOQ is discussed based on your length requirement and volume. Custom orders are assessed case by case. Contact us on WhatsApp or via the inquiry form and we will revert within 24 business hours.',
  },
]

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from wig manufacturers and B2B buyers sourcing raw hair from India."
            align="center"
          />
        </div>

        <div className="flex flex-col gap-2 mb-10">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="bg-white border border-[var(--border)] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[var(--navy)] text-sm leading-snug">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--surface)] flex items-center justify-center">
                    {isOpen ? (
                      <Minus size={13} className="text-[var(--navy)]" />
                    ) : (
                      <Plus size={13} className="text-[var(--navy)]" />
                    )}
                  </span>
                </button>

                <div
                  className={cn(
                    'transition-all duration-300 ease-in-out overflow-hidden',
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="px-6 pb-5 text-sm text-[var(--text-muted)] leading-relaxed border-t border-[var(--border)]">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="md" href="/contact">
            Have a specific question? Contact us
          </Button>
        </div>
      </div>
    </section>
  )
}
