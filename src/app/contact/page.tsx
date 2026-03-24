import type { Metadata } from 'next'
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Contact Us | DEY GLOBAL EXPORTERS',
  description: 'Contact DEY GLOBAL EXPORTERS for raw human hair pricing, sample requests, or bulk export inquiries. Reach Sunny Dey and the team in Kolkata, West Bengal, India.',
  openGraph: {
    title: 'Contact DEY GLOBAL EXPORTERS | Raw Hair Export Inquiry',
    description: 'Request a price list or discuss your monthly hair supply requirements. Based in Kolkata, West Bengal, India.',
  },
}

export default function ContactPage() {
  return (
    <>
      <section className="py-28 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5">
              Talk to Us About Your Hair Supply
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Fill out the inquiry form below. Our team reviews every qualified inquiry and
              responds within 24 business hours with pricing, availability, and sample options.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <SectionHeading
                title="Send an Inquiry"
                subtitle="The more detail you provide, the more precisely we can quote."
                align="left"
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            <div>
              <SectionHeading
                title="Get in Touch Directly"
                subtitle="Prefer a faster channel? WhatsApp is our most responsive line."
                align="left"
              />

              <div className="mt-8 flex flex-col gap-4">

                <div className="flex gap-4 p-5 border border-[var(--border)] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">Office and Warehouse</p>
                    <p className="text-sm text-[var(--navy)] leading-relaxed">1A, 2/12A Rashmoni Bazar Rd</p>
                    <p className="text-sm text-[var(--navy)] leading-relaxed">Beleghata, Kolkata, West Bengal 700010</p>
                    <p className="text-sm text-[var(--navy)] leading-relaxed">India</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 border border-[var(--border)] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">Phone</p>
                    <a href="tel:+917003455085" className="text-sm text-[var(--navy)] leading-relaxed block">+91 70034 55085</a>
                  </div>
                </div>

                {/* ✅ Corrected email: deyglobalexport@gmail.com */}
                <div className="flex gap-4 p-5 border border-[var(--border)] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">Export Email</p>
                    <a href="mailto:deyglobalexport@gmail.com" className="text-sm text-[var(--navy)] leading-relaxed block">deyglobalexport@gmail.com</a>
                  </div>
                </div>

                <div className="flex gap-4 p-5 border border-[var(--border)] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">WhatsApp</p>
                    <a href="https://wa.me/917003455085" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--navy)] leading-relaxed block">+91 70034 55085</a>
                    <p className="text-sm text-[var(--navy)] leading-relaxed">Fastest response channel</p>
                  </div>
                </div>

                <div className="flex gap-4 p-5 border border-[var(--border)] rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center flex-shrink-0">
                    <Clock size={18} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">Working Hours</p>
                    <p className="text-sm text-[var(--navy)] leading-relaxed">Mon to Sat: 9:00 AM to 7:00 PM IST</p>
                    <p className="text-sm text-[var(--navy)] leading-relaxed">IST = UTC+5:30</p>
                    <p className="text-sm text-[var(--navy)] leading-relaxed">US East overlap: 9 PM to 4 AM ET</p>
                  </div>
                </div>

              </div>

              <div className="mt-5 bg-[var(--navy)] rounded-xl p-5">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">Contact Person</p>
                <p className="text-white font-bold font-heading text-base">Sunny Dey</p>
                <p className="text-white/60 text-sm mt-0.5">Founder, DEY GLOBAL EXPORTERS</p>
              </div>

              <div className="mt-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[var(--navy)] text-sm">24-Hour Response Guarantee</p>
                    <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                      We respond to all qualified inquiries within 24 business hours with pricing,
                      sample availability, and lead time confirmation. WhatsApp inquiries are
                      typically answered within 2 to 4 hours during working hours.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/917003455085"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-3 w-full bg-[#25D366] text-white font-semibold rounded-xl px-6 py-4 text-sm hover:bg-[#1ebe5d] transition-colors duration-200"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" fill="white">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 13.82 2.49 15.53 3.35 17L2 22L7.17 20.68C8.59 21.51 10.24 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" />
                </svg>
                Chat on WhatsApp — Fastest Response
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionHeading title="What Happens After You Submit" align="center" />
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white border border-[var(--border)] rounded-2xl">
              <p className="text-4xl font-bold text-[var(--border)] font-heading mb-3">01</p>
              <h3 className="font-bold text-[var(--navy)] font-heading mb-2">Review and Qualify</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Our team reviews your inquiry and matches your requirements to available products and current stock.</p>
            </div>
            <div className="p-6 bg-white border border-[var(--border)] rounded-2xl">
              <p className="text-4xl font-bold text-[var(--border)] font-heading mb-3">02</p>
              <h3 className="font-bold text-[var(--navy)] font-heading mb-2">Price List and Quote</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">We respond within 24 business hours with FOB pricing, quantities, and sample order options.</p>
            </div>
            <div className="p-6 bg-white border border-[var(--border)] rounded-2xl">
              <p className="text-4xl font-bold text-[var(--border)] font-heading mb-3">03</p>
              <h3 className="font-bold text-[var(--navy)] font-heading mb-2">Sample Shipment</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed">Approve a sample lot before your first bulk order. Same quality and documentation as commercial shipments.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
