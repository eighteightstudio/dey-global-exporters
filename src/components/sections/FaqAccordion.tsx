"use client"

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { faqs } from '@/data/faqs'
import { cn } from '@/lib/utils'

const previewFaqs = faqs.slice(0, 5)

export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <section className="py-20 bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions from wig manufacturers and B2B buyers sourcing from India."
            align="center"
          />
        </div>

        <div className="flex flex-col gap-2 mb-10">
          {previewFaqs.map((faq) => {
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
            Have a specific question? Contact us →
          </Button>
        </div>
      </div>
    </section>
  )
}
