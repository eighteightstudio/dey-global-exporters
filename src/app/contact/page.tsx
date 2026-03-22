// src/app/contact/page.tsx
import type { Metadata } from 'next'
import { MapPin, Phone, Mail, MessageCircle, Clock, CheckCircle } from 'lucide-react'
import { ContactForm } from './ContactForm'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Contact Us | DEY GLOBAL EXPORTERS',
  description:
    'Contact DEY GLOBAL EXPORTERS for raw human hair pricing, sample requests, or bulk export inquiries. Reach Sunny Dey and the team based in East Medinipur, West Bengal, India. We respond within 24 business hours.',
  openGraph: {
    title: 'Contact DEY GLOBAL EXPORTERS | Raw Hair Export Inquiry',
    description:
      'Request a price list, ask about MOQs, or discuss your monthly hair supply requirements. Based in East Medinipur, West Bengal, India. WhatsApp, email, and phone available.',
  },
}

const contactDetails = [
  {
    icon: MapPin,
    label: 'Office and Warehouse',
    lines: ['East Medinipur, West Bengal', 'India'],
    href: undefined as string | undefined,
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91 98765 43210'],
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    label: 'Export Email',
    lines: ['exports@deyglobalexporters.com'],
    href: 'mailto:exports@deyglobalexporters.com',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    lines: ['+91 98765 43210', 'Fastest response channel'],
    href: 'https://wa.me/919876543210?text=Hello%20DEY%20GLOBAL%20EXPORTERS%2C%20I%20am%20interested%20in%20your%20raw%20hair%20products.',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    lines: ['Mon to Sat: 9:00 AM to 7:00 PM IST', 'IST = UTC+5:30', 'US East overlap: 9 PM to 4 AM ET'],
    href: undefined as string | undefined,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-28 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading leading-tight mb-5">
              Let's Talk About Your Hair Supply
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Fill out the inquiry form below with your requirements. Our team reviews every
              qualified inquiry and responds within 24 business hours with pricing,
              availability, and sample options.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Left — Form */}
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

            {/* Right — Contact info */}
            <div>
              <SectionHeading
                title="Get in Touch Directly"
                subtitle="Prefer a faster channel? WhatsApp is our most responsive line."
                align="left"
              />

              <div className="mt-8 flex flex-col gap-4">
                {contactDetails.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex gap-4 p-5 border border-[var(--border)] rounded-xl"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-[var(--accent)]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-1">
                          {item.label}
                        </p>
                        {item.href ? (
                          
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-sm text-[var(--navy)] hover:text-[var(--navy-muted)] transition-colors"
                          >
                            {item.lines.map((line, i) => (
                              <span key={i} className="block leading-relaxed">{line}</span>
                            ))}
                          </a>
                        ) : (
                          item.lines.map((line, i) => (
                            <p key={i} className="text-sm text-[var(--navy)] leading-relaxed">{line}</p>
                          ))
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Contact person */}
              <div className="mt-5 bg-[var(--navy)] rounded-xl p-5">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-1">
                  Contact Person
                </p>
                <p className="text-white font-bold font-heading text-base">Sunny Dey</p>
                <p className="text-white/60 text-sm mt-0.5">Founder, DEY GLOBAL EXPORTERS</p>
              </div>

              {/* Response promise */}
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

              {/* WhatsApp CTA */}
              
                href="https://wa.me/919876543210?text=Hello%20DEY%20GLOBAL%20EXPORTERS%2C%20I%20am%20interested%20in%20your%20raw%20hair%20products."
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

      {/* What happens next */}
      <section className="py-20 bg-[var(--surface)] border-t border-[var(--border)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <SectionHeading
              title="What Happens After You Submit"
              align="center"
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              {
                step: '01',
                title: 'Review and Qualify',
                desc: 'Our team reviews your inquiry and matches your requirements to our available products and current stock.',
              },
              {
                step: '02',
                title: 'Price List and Quote',
                desc: 'We respond within 24 business hours with FOB pricing, quantities, and sample order options.',
              },
              {
                step: '03',
                title: 'Sample Shipment',
                desc: 'Approve a sample lot before your first bulk order — same quality and documentation as commercial shipments.',
              },
            ].map((item) => (
              <div key={item.step} className="p-6 bg-white border border-[var(--border)] rounded-2xl">
                <p className="text-4xl font-bold text-[var(--border)] font-heading mb-3">{item.step}</p>
                <h3 className="font-bold text-[var(--navy)] font-heading mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
