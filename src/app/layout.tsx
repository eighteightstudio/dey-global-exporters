import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '600', '700', '800'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.deyglobalexporters.com'),
  title: {
    default: 'DEY GLOBAL EXPORTERS | Raw Indian Temple Hair Exporter',
    template: '%s | DEY GLOBAL EXPORTERS',
  },
  description:
    'DEY GLOBAL EXPORTERS is a leading B2B wholesale exporter of raw Indian temple hair, virgin Remy bundles, wefted extensions, lace closures and frontals from Kolkata, India.',
  keywords: [
    'raw Indian hair exporter',
    'Indian temple hair wholesale',
    'virgin Remy hair supplier India',
    'human hair export India',
    'HS code 0501 exporter',
    'hair bundles wholesale India',
    'B2B hair supplier Kolkata',
    'raw hair bundles exporter',
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.deyglobalexporters.com',
    siteName: 'DEY GLOBAL EXPORTERS',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'DEY GLOBAL EXPORTERS',
  url: 'https://www.deyglobalexporters.com',
  logo: 'https://www.deyglobalexporters.com/og-image.jpg',
  description:
    'B2B exporter of raw Indian temple hair from Kolkata, India. Supplying wig manufacturers and hair brands globally.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Export Industrial Zone',
    addressLocality: 'Kolkata',
    addressRegion: 'West Bengal',
    postalCode: '700001',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-98765-43210',
    contactType: 'sales',
    availableLanguage: 'English',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
