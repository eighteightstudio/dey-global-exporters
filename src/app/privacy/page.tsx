import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Data Collection & Use',
  description:
    'Privacy policy for DEY GLOBAL EXPORTERS website: what data is collected via contact forms, WhatsApp, and analytics, how it is used for B2B sales inquiries, and your data rights.',
  robots: { index: false, follow: false },
}

const sections = [
  {
    id: '1',
    title: '1. Who We Are',
    content: `DEY GLOBAL EXPORTERS ("we," "us," "our") is a B2B raw human hair export company based in Kolkata, West Bengal, India. Our website address is https://www.deyglobalexporters.com. We are not a consumer business — our services are directed exclusively at business entities (B2B buyers) including wig manufacturers, extension brands, and wholesale distributors.

For data-related inquiries, contact our designated point of contact at: exports@deyglobalexporters.com.`,
  },
  {
    id: '2',
    title: '2. What Data We Collect',
    content: `Contact Form Data: When you submit an inquiry through our contact form, we collect the information you provide, which may include: your name, company name and website, role/designation, country and city, WhatsApp number, business email address, product interests, approximate monthly volume requirement, and any message content you provide.

This information is provided voluntarily and is used solely to respond to your inquiry and evaluate your order requirements.

WhatsApp Data: When you click our WhatsApp links or button, you initiate a conversation with our team via WhatsApp (operated by Meta Platforms, Inc.). We receive your WhatsApp number and any messages you send. WhatsApp's own privacy policy governs that platform's data handling.

Analytics Data: We may use privacy-compliant analytics tools (such as Google Analytics or similar) to collect aggregated, anonymized data about website usage including page views, session duration, device type, geographic region, and referral source. This data does not identify individual visitors. Analytics cookies may be set — see Section 5.

No special category data: We do not collect any sensitive personal data such as health information, financial account details, government ID numbers, or biometric data.`,
  },
  {
    id: '3',
    title: '3. Legal Basis for Processing',
    content: `We process personal data on the following legal bases:

Legitimate interests: Processing inquiry form data and WhatsApp messages is necessary to respond to B2B business inquiries — our legitimate interest in operating a B2B export business. We have assessed that this interest does not override the fundamental rights and freedoms of the individuals whose data we process, given that our site is directed at business professionals, not consumers.

Consent: Analytics cookies (where used) are placed only with your consent via cookie consent mechanism, where legally required. You may withdraw consent at any time by adjusting your browser settings or cookie preferences.

Contract performance: Once a purchase order is placed, processing your contact information is necessary to fulfill contractual obligations (shipping notifications, documentation delivery, invoice issuance).`,
  },
  {
    id: '4',
    title: '4. How We Use Your Data',
    content: `We use the data collected for the following purposes:
To respond to your export inquiry with product information, pricing, and availability.
To issue pro-forma invoices and commercial documentation for confirmed orders.
To send shipment notifications, tracking information, and export documents related to your orders.
To follow up on unanswered inquiries if you have not responded (limited to 2 follow-up contacts).
To analyze aggregate website traffic patterns to improve the website's content and user experience.
To comply with legal obligations under Indian export law, GST regulations, and applicable accounting requirements.

We do not use your data for: consumer advertising, sale to third parties, automated profiling for credit scoring or eligibility decisions, or any purpose unrelated to our B2B hair export business.`,
  },
  {
    id: '5',
    title: '5. Cookies',
    content: `Our website may use the following types of cookies:
Strictly necessary cookies: Required for the website to function. These cannot be disabled.
Analytics cookies: Used to understand how visitors interact with the site. Set only with consent where required by applicable law.
No advertising or tracking cookies are intentionally set.

You can control cookies through your browser settings. Disabling analytics cookies will not affect your ability to use the website or submit inquiries.`,
  },
  {
    id: '6',
    title: '6. Data Sharing',
    content: `We share personal data with the following categories of recipients, only to the extent necessary:

Freight forwarders and logistics partners: Your delivery address and contact details are shared with our freight forwarding partners in Kolkata to coordinate shipment documentation and customs filing for your orders.

Email service providers: If we use an email delivery service provider (e.g., Google Workspace), your email address is processed by that provider to deliver our communications to you.

Analytics providers: Aggregated, anonymized usage data may be processed by third-party analytics tools. No individually identifying information is shared with analytics providers.

Legal and regulatory authorities: We may disclose data to Indian customs, DGFT, GST authorities, or other regulators as required by applicable law.

We do not sell, rent, or trade personal data to any third party for commercial purposes.`,
  },
  {
    id: '7',
    title: '7. Data Retention',
    content: `Contact inquiry data: Retained for 24 months from the date of last contact, after which it is deleted unless a commercial relationship has been established.

Purchase order and transaction data: Retained for 7 years from the date of the transaction to comply with Indian GST and accounting regulations.

Analytics data: Aggregated analytics data is retained in accordance with the relevant analytics provider's retention settings, typically 14–26 months.

WhatsApp conversations: Retained in our WhatsApp Business account for as long as the conversation history is maintained by WhatsApp or until manually deleted.`,
  },
  {
    id: '8',
    title: '8. Your Data Rights',
    content: `Depending on your jurisdiction, you may have the following rights regarding your personal data:

Right of access: Request a copy of the personal data we hold about you.
Right of rectification: Request correction of inaccurate data.
Right of erasure: Request deletion of your personal data, subject to our legal retention obligations.
Right to restrict processing: Request that we limit how we use your data.
Right to object: Object to processing based on our legitimate interests.
Right to data portability: Receive your data in a structured, machine-readable format (for electronically processed data).

For EU/UK residents (GDPR and UK GDPR): These rights apply to you in full. We aim to respond to rights requests within 30 calendar days.

To exercise your rights, contact: exports@deyglobalexporters.com with the subject line "Data Rights Request." We may ask you to verify your identity before processing the request.

You also have the right to lodge a complaint with your local data protection authority if you believe we have not handled your data appropriately.`,
  },
  {
    id: '9',
    title: '9. International Data Transfers',
    content: `Our business is based in India. If you submit a contact form from the EU, UK, USA, or another jurisdiction with data transfer restrictions, your data is transferred to India for processing. India does not currently hold an EU adequacy decision under GDPR.

We implement appropriate safeguards for such transfers, including contractual protections. By submitting an inquiry, you acknowledge this transfer. If you have concerns about cross-border data transfers, contact us before submitting your inquiry.`,
  },
  {
    id: '10',
    title: '10. Children\'s Privacy',
    content: `Our website and services are directed exclusively at business professionals aged 18 and over. We do not knowingly collect personal data from individuals under 18. If we become aware that we have inadvertently collected data from a minor, we will delete it promptly.`,
  },
  {
    id: '11',
    title: '11. Changes to This Policy',
    content: `We may update this Privacy Policy from time to time. The current version will always be published at https://www.deyglobalexporters.com/privacy with the date of last update. Significant changes will be communicated to existing B2B clients via email. Continued use of the website after an update constitutes acceptance of the revised policy.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl font-bold text-white font-heading leading-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-white/50 text-sm">
              Last updated: January 2025 · Applies to: deyglobalexporters.com
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Summary box */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 mb-10">
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
            Plain Language Summary
          </p>
          <ul className="space-y-2 text-sm text-[var(--text-muted)]">
            {[
              'We only collect data you voluntarily provide via our contact form or WhatsApp.',
              'We use your data solely to respond to your B2B export inquiry and fulfill orders.',
              'We do not sell your data or use it for consumer advertising.',
              'Analytics are aggregated and anonymized — we cannot identify individual visitors.',
              'EU/UK buyers have full GDPR rights. Contact us to exercise them.',
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-[var(--accent)] flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* TOC */}
        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-xl p-6 mb-10">
          <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-3">
            Table of Contents
          </p>
          <ul className="space-y-1.5">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#section-${s.id}`}
                  className="text-sm text-[var(--navy)] hover:text-[var(--navy-muted)] transition-colors underline underline-offset-2"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.id} id={`section-${s.id}`}>
              <h2 className="text-lg font-bold text-[var(--navy)] font-heading mb-3 pb-2 border-b border-[var(--border)]">
                {s.title}
              </h2>
              <div className="space-y-3">
                {s.content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-sm text-[var(--text-muted)] leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-xs text-[var(--text-muted)] leading-relaxed">
          <p className="font-semibold text-[var(--navy)] mb-1">Privacy Contact</p>
          <p>
            For privacy-related inquiries or to exercise your data rights, email:
            exports@deyglobalexporters.com (subject: "Privacy / Data Rights"). We aim to respond
            within 30 calendar days.
          </p>
        </div>
      </div>
    </>
  )
}
