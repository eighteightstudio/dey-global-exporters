export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'ordering' | 'quality' | 'shipping' | 'compliance' | 'products'
}

export const faqs: FAQ[] = [
  {
    id: 'faq1',
    question: 'What is your minimum order quantity (MOQ)?',
    answer:
      'Our MOQs vary by product type: Raw temple bulk hair starts at 5 kg per order. Wefted Remy bundles (double-drawn) start at 10 bundles per texture. Lace closures start at 20 pieces per style. Single-drawn wholesale bundles have a higher MOQ of 50 kg due to volume pricing structure. For sample orders, we offer a reduced sample lot (1–2 kg or 3–5 bundles per style) at standard FOB pricing — no special sample pricing. We believe buyers should evaluate actual commercial-grade product before committing to bulk orders.',
    category: 'ordering',
  },
  {
    id: 'faq2',
    question: 'How do you ensure the hair is genuinely Remy and cuticle-aligned?',
    answer:
      'Every batch of Remy hair goes through a documented multi-step QC protocol before dispatch. We test cuticle alignment by the "root-to-tip feel" method on 10% of strands per bundle — Remy hair will feel rougher when stroked tip-to-root due to intact cuticle scales. We conduct shedding tests on each bundle. We photograph each lot before packing and send QC photos to buyers via WhatsApp before dispatch. Our temple-sourced hair is single-donor by origin, which naturally guarantees cuticle direction consistency within a single head\'s hair. Buyers are welcome to visit our Kolkata facility for a physical audit.',
    category: 'quality',
  },
  {
    id: 'faq3',
    question: 'How long does shipping to the USA or EU take?',
    answer:
      'Sea freight from Kolkata to US East Coast ports (New York, Miami) takes approximately 28–35 days. To US West Coast (Los Angeles): approximately 30–38 days. To major EU ports (Rotterdam, Hamburg): approximately 22–30 days. Air freight from Kolkata International Airport (CCU) reaches US and EU destinations in 4–7 business days. Add 3–7 days for US/EU customs clearance. We recommend sea freight for regular bulk orders and air freight for samples or urgent replenishment. Production lead time before shipment varies from 3 to 21 business days depending on product type and whether the order is from existing stock or requires custom processing.',
    category: 'shipping',
  },
  {
    id: 'faq4',
    question: 'What HS codes do you use for export, and does your pricing comply with DGFT requirements?',
    answer:
      'We export under two primary HS codes: HS 05010010 for raw, unprocessed temple hair in its natural state (zero chemical treatment). HS 05010020 for worked hair including wefted bundles, closures, and frontals with light processing. Per India\'s Foreign Trade Policy, raw hair exports (HS 05010010) must be at or above USD 65 per kilogram FOB value. All our raw hair exports fully comply with this DGFT requirement — we never undervalue or misclassify shipments. Buyers can verify our FOB pricing against the official commercial invoice before payment. Finished products under HS 05010020 are exported under free export conditions without FOB price restrictions.',
    category: 'compliance',
  },
  {
    id: 'faq5',
    question: 'Can I request samples before placing a bulk order?',
    answer:
      'Yes — we strongly encourage sample orders before first-time bulk purchases. Sample lots are available for most product types: typically 1–2 kg for bulk hair and 3–5 bundles for wefted products. Samples are priced at standard FOB rates (no discount, but also no premium). Shipping is typically by air freight (4–7 days). Sample invoices and documentation are identical to commercial shipments — the same HS codes, FOB values, and documentation set. This allows your import process team to validate paperwork before your first large order. To request a sample, use our contact form or WhatsApp us directly.',
    category: 'ordering',
  },
  {
    id: 'faq6',
    question: 'What payment terms do you offer?',
    answer:
      'For first-time buyers: 50% advance payment upon purchase order confirmation, 50% balance payment against copy of Bill of Lading (before release of original documents). For established buyers (after 3+ successful orders): We negotiate TT (Telegraphic Transfer) terms on a case-by-case basis. We accept payments via bank wire transfer (T/T), Letter of Credit (L/C) for orders above USD 10,000, and PayPal for sample orders only. We do not accept payments through informal channels. All transactions are documented in USD on our commercial invoices.',
    category: 'ordering',
  },
  {
    id: 'faq7',
    question: 'What incoterms do you offer, and which is best for me?',
    answer:
      'We offer FOB (Free On Board), CIF (Cost Insurance Freight), and DDP (Delivered Duty Paid). FOB is most common for established importers with freight forwarding relationships — you control your freight costs and carrier selection. CIF is preferred by buyers who want us to handle international shipping booking — we quote an all-in price to your port. DDP is available for buyers who prefer a fully landed, duty-paid price at their warehouse — we handle all logistics including destination customs clearance. We recommend discussing your incoterm preference when requesting a quote, as pricing differs accordingly.',
    category: 'shipping',
  },
  {
    id: 'faq8',
    question: 'Do you offer white-label or custom-branded packaging?',
    answer:
      'Yes. We offer white-label packaging with your brand name, logo, and product specifications printed on bundle wrappers, boxes, and poly bags. Minimum order for custom-branded packaging is typically 50 bundles or 10 kg to justify print setup costs. Please provide your artwork in AI, PDF, or high-resolution PNG format. Branded packaging adds 3–5 business days to production lead time. We also offer plain bulk packaging for buyers who apply their own branding after receipt. Custom packaging quote is provided separately from the hair product pricing.',
    category: 'products',
  },
  {
    id: 'faq9',
    question: 'What quality guarantee or claims process do you have?',
    answer:
      'We conduct pre-shipment QC with photo/video documentation shared before dispatch. If you receive a shipment with quality issues (significant deviation from agreed specs — shedding, tangling, incorrect length distribution), notify us within 7 days of receipt with photographic evidence. We will investigate the batch QC records and respond within 48 hours. Our resolution process includes: replacement of defective quantity in the next shipment, credit against future order, or partial refund depending on the nature and scale of the issue. We do not accept returns after 14 days of receipt or for issues caused by improper storage or processing by the buyer.',
    category: 'quality',
  },
  {
    id: 'faq10',
    question: 'Which countries do you currently export to?',
    answer:
      'We currently export to over 20 countries across North America, Europe, Africa, and the Middle East. Primary markets include the United States, United Kingdom, Germany, France, Nigeria, Ghana, South Africa, UAE, Saudi Arabia, and Malaysia. We are equipped to ship to most countries through our Kolkata-based freight forwarding network. If your country is not listed, contact us — we can verify shipping routes and customs requirements for your destination and provide a CIF or DDP quote accordingly.',
    category: 'shipping',
  },
]

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'ordering', label: 'Ordering & MOQ' },
  { id: 'quality', label: 'Quality Assurance' },
  { id: 'shipping', label: 'Shipping & Logistics' },
  { id: 'compliance', label: 'Export Compliance' },
  { id: 'products', label: 'Products & Packaging' },
] as const
