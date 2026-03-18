import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Export Sales Policy',
  description:
    'Terms and conditions governing B2B purchase orders, MOQs, payment terms, shipping incoterms, quality claims, and dispute resolution for DEY GLOBAL EXPORTERS raw hair export transactions.',
  robots: { index: false, follow: false },
}

const sections = [
  {
    id: '1',
    title: '1. Scope and Parties',
    content: `These Terms and Conditions ("Terms") govern all B2B purchase orders, sales agreements, and export transactions between DEY GLOBAL EXPORTERS ("Seller," "we," "us"), a company registered in Kolkata, West Bengal, India (IEC: IEC-XXXX-XXXX; GSTIN: 19XXXXX1234X1ZX), and the purchasing entity ("Buyer," "you"). By placing a purchase order, the Buyer agrees to be bound by these Terms.

These Terms apply to all products supplied by DEY GLOBAL EXPORTERS, including raw bulk human hair (HS 05010010), wefted hair bundles, lace closures, lace frontals, and related products (HS 05010020). These Terms supersede any terms presented by the Buyer unless expressly agreed in writing by an authorized representative of the Seller.

Governing law: These Terms are governed by the laws of India. Disputes shall be subject to the exclusive jurisdiction of courts in Kolkata, West Bengal, India. For international transactions, the parties may mutually agree to ICC arbitration in writing.`,
  },
  {
    id: '2',
    title: '2. Ordering Process & Purchase Orders',
    content: `All orders are initiated via a written purchase order (PO) submitted by the Buyer via email or WhatsApp and confirmed in writing by the Seller. A PO becomes binding upon the Seller's written confirmation and receipt of the agreed advance payment.

Purchase orders must specify: product type and HS code, quantity (in kg or bundle count), length range and texture, color specification, packaging requirements (plain or branded), required incoterm (FOB/CIF/DDP), and destination port or delivery address.

The Seller reserves the right to decline any order that cannot be fulfilled at the requested specifications, volume, or timeline. In such cases, the Seller will notify the Buyer within 48 hours of PO receipt and any advance payment received will be refunded in full within 7 business days.`,
  },
  {
    id: '3',
    title: '3. Minimum Order Quantities (MOQs)',
    content: `Current MOQs are as follows and subject to change with 30 days' notice:
Raw temple bulk hair (HS 05010010): 5 kg per order.
Wefted Remy bundles — double drawn: 10 bundles per texture per order.
Wefted Remy bundles — single drawn: 50 kg per order.
Lace closures (4×4 or 5×5): 20 pieces per style per order.
Lace frontals (13×4 or 13×6): 15 pieces per style per order.
Specialty textures (curly/kinky): 5 kg bulk or 20 bundles per texture per order.

Sample orders below standard MOQ are available at the Seller's discretion. Sample pricing equals standard commercial FOB pricing — no premium, no discount. Sample lot documentation is identical to commercial shipment documentation.`,
  },
  {
    id: '4',
    title: '4. Pricing & Payment Terms',
    content: `All prices are quoted in United States Dollars (USD) unless otherwise agreed in writing. Prices are quoted FOB (Free On Board) Kolkata/Chennai port unless an alternative incoterm is agreed. FOB pricing for raw human hair (HS 05010010) is at or above USD 65/kg in compliance with India's DGFT Foreign Trade Policy.

Standard payment terms for first-time buyers: 50% advance payment upon purchase order confirmation, with the balance 50% payable against copy of the Bill of Lading (B/L) before release of original B/L documents. Established buyers (minimum 3 completed orders) may apply for revised payment terms in writing.

Accepted payment methods: Bank wire transfer (T/T) in USD to the Seller's designated bank account; Letter of Credit (L/C) for orders above USD 10,000 — L/C terms must be agreed before PO confirmation; PayPal for sample orders only (subject to PayPal transaction fees borne by Buyer).

The Seller does not accept payment through cryptocurrency, informal channels, or cash. All transactions are documented on the commercial invoice.`,
  },
  {
    id: '5',
    title: '5. Shipping Terms & INCOTERMS',
    content: `The Seller offers the following INCOTERMS 2020:
FOB (Free On Board): Seller delivers goods to the vessel at the Indian port of loading. Risk and costs transfer to Buyer once goods are loaded. Buyer arranges and pays international freight, insurance, and destination charges.
CIF (Cost, Insurance, Freight): Seller arranges freight and insurance to Buyer's named destination port. Risk transfers to Buyer at port of origin. Buyer handles destination customs and inland delivery.
DDP (Delivered Duty Paid): Seller handles all freight, insurance, customs clearance, and delivery to Buyer's named address. All costs and risks borne by Seller until delivery.

The applicable incoterm must be specified in the purchase order. Lead times (from PO confirmation and advance payment receipt) range from 3–21 business days for production depending on product type. International transit times are in addition to production lead times.`,
  },
  {
    id: '6',
    title: '6. Quality Standards & Specifications',
    content: `The Seller warrants that all products will materially conform to the agreed specifications stated in the confirmed purchase order, including: hair type (Remy/non-Remy), draw quality (single/double drawn), length range, texture, color, and bundle weight (±5g tolerance).

Pre-shipment QC documentation including batch photographs and weight verification is provided for all commercial orders. Buyers may request additional QC metrics at time of PO placement.

The Seller does not guarantee that individual donor hair characteristics (slight natural tonal variation, minor texture variation within a stated texture) constitute a defect. These are inherent properties of natural human hair and are disclosed in product descriptions.`,
  },
  {
    id: '7',
    title: '7. Quality Claims & Dispute Resolution',
    content: `The Buyer must inspect the shipment upon receipt and notify the Seller of any quality claims within 7 calendar days of delivery. Claims submitted after 14 calendar days of delivery will not be accepted.

To submit a valid quality claim, the Buyer must provide: written claim submitted to exports@deyglobalexporters.com with the PO number and invoice number; photographic or video evidence of the claimed defect on a minimum of 5% of the lot; a sample of the claimed defective product held in original condition (unopened or unprocessed).

The Seller will acknowledge the claim within 48 business hours and investigate within 5 business days. Resolutions may include: replacement of defective quantity in the next commercial shipment; credit against a future order; partial refund on documented, confirmed defects. The Seller's maximum liability in any claim is limited to the invoiced FOB value of the disputed quantity. The Seller is not liable for consequential, indirect, or downstream losses.

Claims are not accepted for: products that have been processed, chemically treated, colored, or otherwise altered by the Buyer or a third party after receipt; products stored improperly by the Buyer; normal variation inherent to natural human hair.`,
  },
  {
    id: '8',
    title: '8. Cancellations & Returns',
    content: `Purchase orders may be cancelled by the Buyer within 24 hours of PO confirmation with full advance payment refund. Cancellations after 24 hours but before production commencement will incur a 15% cancellation fee on the advance payment. Cancellations after production has commenced will result in forfeiture of the full advance payment.

The Seller does not accept physical returns except in cases of confirmed quality claims resolved under Section 7. Return shipping costs for confirmed defective goods are borne by the Seller.`,
  },
  {
    id: '9',
    title: '9. Limitation of Liability & Force Majeure',
    content: `The Seller's total liability under any transaction is limited to the invoiced value of the specific shipment giving rise to the claim. The Seller is not liable for indirect, consequential, special, or incidental damages of any kind.

Neither party is liable for delays or non-performance caused by circumstances beyond its reasonable control, including but not limited to: acts of God, natural disasters, governmental actions, port strikes, war, pandemic-related restrictions, or customs delays at destination. The affected party must notify the other within 5 business days of the force majeure event arising.`,
  },
  {
    id: '10',
    title: '10. Intellectual Property & White-Label Terms',
    content: `Where the Buyer has requested custom-branded packaging, the Buyer warrants that it holds all necessary rights to the logos, trademarks, and artwork provided to the Seller for printing. The Buyer indemnifies the Seller against any third-party IP claims arising from artwork supplied by the Buyer.

The Seller retains all rights to its own trade name, logo, and proprietary QC methodologies. The Seller's name and credentials may be referenced by the Buyer for sourcing disclosure purposes (e.g., "Sourced from DGFT-registered exporter in India") but the Seller's full business identity may not be used in Buyer's consumer-facing marketing without written consent.`,
  },
  {
    id: '11',
    title: '11. Amendments',
    content: `These Terms may be updated by the Seller at any time. The current version is always available at https://www.deyglobalexporters.com/terms. Existing confirmed purchase orders are governed by the Terms in effect at the time of PO confirmation. New purchase orders placed after an update are subject to the updated Terms.`,
  },
]

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="w-10 h-[3px] bg-[var(--accent)] mb-6 rounded-full" />
            <h1 className="text-4xl font-bold text-white font-heading leading-tight mb-3">
              Terms & Conditions
            </h1>
            <p className="text-white/50 text-sm">
              Last updated: January 2025 · Governing law: India (West Bengal)
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
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

        {/* Footer note */}
        <div className="mt-14 p-5 bg-[var(--surface)] border border-[var(--border)] rounded-xl text-xs text-[var(--text-muted)] leading-relaxed">
          <p className="font-semibold text-[var(--navy)] mb-1">Contact for Terms Queries</p>
          <p>
            For questions about these Terms, contact exports@deyglobalexporters.com or write to:
            DEY GLOBAL EXPORTERS, 123 Export Industrial Zone, Kolkata, West Bengal 700001, India.
          </p>
        </div>
      </div>
    </>
  )
}
