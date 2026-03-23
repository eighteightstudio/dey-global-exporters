import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--navy)]">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/DEY_GLOBAL_LOGO.png"
                alt="DEY GLOBAL EXPORTERS"
                width={220}
                height={64}
                className="h-14 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <div className="flex flex-wrap gap-1.5 mb-4">
              <span className="text-[10px] font-medium text-white/60 border border-white/20 rounded-full px-2.5 py-0.5">IEC Registered</span>
              <span className="text-[10px] font-medium text-white/60 border border-white/20 rounded-full px-2.5 py-0.5">DGFT Compliant</span>
              <span className="text-[10px] font-medium text-white/60 border border-white/20 rounded-full px-2.5 py-0.5">GST Verified</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              Founded by Sunny Dey with over 10 years of sourcing expertise. Temple and household
              sourced raw hair exported to global wig and extension brands from Kolkata, India.
            </p>
          </div>

          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3 items-start">
                <MapPin size={13} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70 leading-relaxed">
                  1A, 2/12A Rashmoni Bazar Rd,<br />
                  Beleghata, Kolkata 700010, India
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={13} className="text-[var(--accent)] flex-shrink-0" />
                <a href="tel:+917003455085" className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors">
                  +91 70034 55085
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={13} className="text-[var(--accent)] flex-shrink-0" />
                <a href="mailto:deyglobalexporters@gmail.com" className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors break-all">
                  deyglobalexporters@gmail.com
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <MessageCircle size={13} className="text-[var(--accent)] flex-shrink-0" />
                <a href="https://wa.me/917003455085" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors">
                  WhatsApp: +91 70034 55085
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
            <p>2025 DEY GLOBAL EXPORTERS. All rights reserved.</p>
            <p>HS Code: 0501 &nbsp;|&nbsp; Raw Human Hair &nbsp;|&nbsp; B2B Export from India</p>
            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
