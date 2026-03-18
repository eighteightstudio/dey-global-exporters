"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--border)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none" onClick={() => setMobileOpen(false)}>
            <span className="font-bold text-[var(--navy)] tracking-wide text-base font-heading">
              DEY GLOBAL EXPORTERS
            </span>
            <span className="text-[10px] text-[var(--text-muted)] tracking-wider uppercase mt-0.5">
              Raw Hair Exporters, India
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-150',
                  pathname === link.href
                    ? 'text-[var(--navy)] font-semibold'
                    : 'text-[var(--text-muted)] hover:text-[var(--navy)]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[var(--navy)] text-white hover:bg-[var(--navy-muted)] rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-150"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 text-[var(--navy)] rounded-lg hover:bg-[var(--surface)] transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[var(--border)]',
          mobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1 bg-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'text-sm font-medium px-3 py-2.5 rounded-lg transition-colors duration-150',
                pathname === link.href
                  ? 'bg-[var(--surface)] text-[var(--navy)] font-semibold'
                  : 'text-[var(--text-muted)] hover:text-[var(--navy)] hover:bg-[var(--surface)]'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 mt-2 border-t border-[var(--border)]">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block w-full text-center bg-[var(--navy)] text-white hover:bg-[var(--navy-muted)] rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-150"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
