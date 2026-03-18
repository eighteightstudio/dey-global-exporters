import Link from 'next/link'
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'

const companyLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
]

const productLinks = [
  { href: '/products', label: 'Bulk Raw Hair' },
  { href: '/products', label: 'Wefted Hair Bundles' },
  { href: '/products', label: 'Lace Closures & Frontals' },
  { href: '/products', label: 'Custom Textures & Colors' },
  { href: '/products', label: 'Temple Hair (Single Donor)' },
  { href: '/products', label: 'Full Wigs' },
]

export function Footer() {
  return (
    <footer className="bg-[var(--navy)]">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <p className="font-bold text-white text-xl font-heading tracking-wide">
                DEY GLOBAL EXPORTERS
              </p>
              <p className="text-white/60 text-sm mt-1">
                Premium Raw Indian Temple Hair Exporter for Global Wig & Extension Brands
              </p>
            </div>

            {/* Compliance badges */}
            <div className="flex flex-wrap gap-2 mb-5">
              {['IEC Registered', 'DGFT Compliant', 'GST Verified'].map((badge) => (
                <span
                  key={badge}
                  className="text-[10px] font-medium text-white/70 border border-white/20 rounded-full px-2.5 py-0.5"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-white/50 text-sm leading-relaxed">
              A Kolkata-based B2B raw hair exporter serving wig manufacturers, extension brands,
              and wholesale distributors across 20+ countries. Ethically sourced temple hair,
              precisely graded and export-ready.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
              Company
            </p>
            <ul className="flex flex-col gap-3">
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

          {/* Column 3 — Products */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
              Products
            </p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.label}>
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

          {/* Column 4 — Contact */}
          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
              Get in Touch
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin size={15} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70 leading-relaxed">
                  123 Export Industrial Zone,<br />
                  Kolkata, West Bengal 700001, India
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={15} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919876543210"
                  className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={15} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:exports@deyglobalexporters.com"
                  className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors break-all"
                >
                  exports@deyglobalexporters.com
                </a>
              </li>
              <li className="flex gap-3">
                <MessageCircle size={15} className="text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 hover:text-[var(--accent)] transition-colors"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© 2025 DEY GLOBAL EXPORTERS. All rights reserved.</p>

            <p className="text-center">
              HS Code: 0501 &nbsp;|&nbsp; Raw Indian Temple Hair &nbsp;|&nbsp; B2B Export
            </p>

            <div className="flex items-center gap-4">
              <Link href="/terms" className="hover:text-white/70 transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white/70 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
          <p className="text-center text-white/20 text-xs mt-3">
            Proudly exporting from Kolkata, India
          </p>
        </div>
      </div>
    </footer>
  )
}
