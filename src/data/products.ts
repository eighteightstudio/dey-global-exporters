export interface ProductSpec {
  label: string
  value: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: 'Bulk Raw Hair' | 'Wefted Bundles' | 'Closures' | 'Frontals' | 'Specialty'
  image: string
  badge: string
  tagline: string
  description: string
  lengthRange: string
  textures: string[]
  colors: string[]
  moq: string
  hsCode: string
  isRemy: boolean
  isTemple: boolean
  isVirgin: boolean
  specs: ProductSpec[]
  tags: string[]
}

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'raw-indian-temple-hair-bulk',
    name: 'Raw Indian Temple Hair — Bulk Unprocessed',
    category: 'Bulk Raw Hair',
    image: 'https://picsum.photos/seed/hair1/600/600',
    badge: 'Temple-Sourced',
    tagline: 'Single-donor, cuticle-intact, straight from the temple floor.',
    description:
      'Our flagship raw bulk hair is collected exclusively from South Indian temple donations, primarily the Tirupati Devasthanams auction network. Hair is sorted by length, cleaned, and packed without any chemical treatment — delivered in natural black, completely unprocessed. Ideal for wig manufacturers, extension brands, and wholesale distributors who require the purest raw Indian hair input for their production lines.',
    lengthRange: '10–32 inches',
    textures: ['Straight', 'Wavy', 'Natural Body'],
    colors: ['Natural Black', 'Natural Brown'],
    moq: '5 kg per order',
    hsCode: 'HS 05010010',
    isRemy: true,
    isTemple: true,
    isVirgin: true,
    specs: [
      { label: 'Hair Type', value: 'Single-Donor Temple Hair' },
      { label: 'Processing', value: 'None — Raw/Virgin' },
      { label: 'Cuticle Alignment', value: 'Fully Intact (Remy)' },
      { label: 'Weight per Bundle', value: '100g ± 5g' },
      { label: 'Available Lengths', value: '10" to 32"' },
      { label: 'Color', value: 'Natural Black / Natural Brown' },
      { label: 'Weft Type', value: 'Loose Bulk (no weft)' },
      { label: 'Chemical Treatment', value: 'Zero — unprocessed' },
      { label: 'Moisture Content', value: '<12% at dispatch' },
      { label: 'HS Code', value: '05010010' },
      { label: 'Export FOB Min', value: 'USD 65/kg (DGFT compliant)' },
      { label: 'Shelf Life', value: '24 months with proper storage' },
    ],
    tags: ['Raw', 'Virgin', 'Remy', 'Temple', 'Unprocessed', 'Bulk'],
  },
  {
    id: 'p2',
    slug: 'wefted-remy-hair-bundles-double-drawn',
    name: 'Wefted Remy Bundles — Double Drawn Natural Black',
    category: 'Wefted Bundles',
    image: 'https://picsum.photos/seed/hair2/600/600',
    badge: 'Double Drawn',
    tagline: 'Uniform length, thick from root to tip — the gold standard for extension brands.',
    description:
      'Machine-wefted double-drawn bundles crafted from cuticle-aligned Remy hair sourced through our temple and salon collection network. Double-drawing ensures a consistent thickness from root to tip — no thin, wispy ends. Each bundle is hand-inspected for shedding and tangling before dispatch. Our wefted bundles are the preferred input for US and European extension brands building premium product lines.',
    lengthRange: '12–30 inches',
    textures: ['Straight', 'Body Wave', 'Deep Wave', 'Loose Curly'],
    colors: ['Natural Black', 'Natural Brown', 'Custom Color on Request'],
    moq: '10 bundles per texture',
    hsCode: 'HS 05010020',
    isRemy: true,
    isTemple: false,
    isVirgin: true,
    specs: [
      { label: 'Hair Type', value: 'Double-Drawn Remy' },
      { label: 'Weft Type', value: 'Machine Weft' },
      { label: 'Bundle Weight', value: '100g ± 3g' },
      { label: 'Available Lengths', value: '12" to 30"' },
      { label: 'Cuticle Direction', value: 'Single-directional (cuticle-aligned)' },
      { label: 'Shedding', value: 'Minimal — hand-tested per batch' },
      { label: 'Textures', value: 'Straight, Body Wave, Deep Wave, Loose Curly' },
      { label: 'Chemical Treatment', value: 'Light wash only — no dye or bleach' },
      { label: 'Weft Width', value: '~95cm per bundle' },
      { label: 'HS Code', value: '05010020' },
      { label: 'Lead Time', value: '7–14 business days from PO' },
      { label: 'Packaging', value: 'White-label or branded on request' },
    ],
    tags: ['Remy', 'Wefted', 'Double Drawn', 'Bundles', 'Extensions'],
  },
  {
    id: 'p3',
    slug: 'lace-closures-4x4-5x5-raw-indian',
    name: 'Lace Closures — 4×4 & 5×5 Raw Indian Hair',
    category: 'Closures',
    image: 'https://picsum.photos/seed/hair3/600/600',
    badge: 'Swiss Lace',
    tagline: 'Undetectable hairlines. Raw Indian hair hand-tied on Swiss lace.',
    description:
      'Our lace closures are hand-tied on premium Swiss lace using raw single-donor Indian hair. Available in 4×4 and 5×5 configurations, they provide a seamless, scalp-like finish that blends naturally with diverse skin tones. Paired with our wefted bundles, these closures complete full sew-in installations for wig brands and professional salon clients worldwide.',
    lengthRange: '8–20 inches (closure piece)',
    textures: ['Straight', 'Body Wave', 'Deep Wave', 'Kinky Straight'],
    colors: ['Natural Black', 'HD Lace Transparent'],
    moq: '20 pieces per style',
    hsCode: 'HS 05010020',
    isRemy: true,
    isTemple: true,
    isVirgin: true,
    specs: [
      { label: 'Lace Type', value: 'Swiss Lace / HD Transparent' },
      { label: 'Size Options', value: '4×4 inch, 5×5 inch' },
      { label: 'Hair Type', value: 'Raw Indian Single-Donor' },
      { label: 'Construction', value: 'Hand-tied knots' },
      { label: 'Knot Style', value: 'Single knot (bleachable)' },
      { label: 'Part Style', value: 'Free part' },
      { label: 'Density', value: '130% – 150%' },
      { label: 'Baby Hairs', value: 'Natural baby hairs included' },
      { label: 'Lace Color', value: 'Medium brown / Transparent' },
      { label: 'HS Code', value: '05010020' },
      { label: 'Lead Time', value: '10–18 business days from PO' },
      { label: 'MOQ', value: '20 pieces per style/texture' },
    ],
    tags: ['Lace Closure', 'Swiss Lace', 'Raw', 'Hand-tied', '4x4', '5x5'],
  },
  {
    id: 'p4',
    slug: 'lace-frontals-13x4-13x6-raw-indian',
    name: 'Lace Frontals — 13×4 & 13×6 Ear-to-Ear',
    category: 'Frontals',
    image: 'https://picsum.photos/seed/hair4/600/600',
    badge: 'Ear-to-Ear',
    tagline: 'Full hairline coverage. Raw Indian hair on premium Swiss lace.',
    description:
      'Our ear-to-ear lace frontals deliver full forehead coverage with a completely natural-looking hairline. Hand-tied using raw Indian temple hair on Swiss or HD lace, they are built for wig manufacturers requiring top-tier frontal pieces for their luxury product lines. Available in 13×4 and 13×6 widths with customizable density and part styling.',
    lengthRange: '10–22 inches (frontal piece)',
    textures: ['Straight', 'Body Wave', 'Deep Wave', 'Curly'],
    colors: ['Natural Black', 'HD Lace Transparent'],
    moq: '15 pieces per style',
    hsCode: 'HS 05010020',
    isRemy: true,
    isTemple: true,
    isVirgin: true,
    specs: [
      { label: 'Lace Type', value: 'Swiss Lace / HD Transparent' },
      { label: 'Size Options', value: '13×4 inch, 13×6 inch' },
      { label: 'Hair Type', value: 'Raw Indian Temple Hair' },
      { label: 'Construction', value: 'Hand-tied, ear-to-ear' },
      { label: 'Knot Style', value: 'Single/double (pre-pluckable)' },
      { label: 'Part Style', value: 'Free part / Middle part' },
      { label: 'Density', value: '130% – 180%' },
      { label: 'Baby Hairs', value: 'Natural baby hairs along perimeter' },
      { label: 'Adjustable Straps', value: 'Yes — 3 combs + elastic band' },
      { label: 'HS Code', value: '05010020' },
      { label: 'Lead Time', value: '12–20 business days from PO' },
      { label: 'MOQ', value: '15 pieces per style/texture' },
    ],
    tags: ['Frontal', 'Swiss Lace', 'Ear-to-Ear', '13x4', '13x6', 'Raw', 'Temple'],
  },
  {
    id: 'p5',
    slug: 'specialty-curly-kinky-raw-indian-hair',
    name: 'Specialty Textures — Kinky & Curly Raw Indian Hair',
    category: 'Specialty',
    image: 'https://picsum.photos/seed/hair5/600/600',
    badge: 'Specialty',
    tagline: 'Natural curl patterns from the source. No perming, no chemicals.',
    description:
      'Our specialty texture line captures the natural curl and kink patterns found in South Indian hair donors. These textures are not artificially permed or chemically altered — they reflect the genuine diversity of Indian hair. Highly sought after by African and Middle Eastern distributors and US wig brands catering to natural hair markets.',
    lengthRange: '8–24 inches',
    textures: ['Kinky Straight', 'Kinky Curly', 'Deep Curly', 'Afro Wave'],
    colors: ['Natural Black', 'Natural Off-Black'],
    moq: '5 kg (bulk) or 20 bundles (wefted)',
    hsCode: 'HS 05010010 / 05010020',
    isRemy: true,
    isTemple: true,
    isVirgin: true,
    specs: [
      { label: 'Hair Type', value: 'Natural Curly / Kinky Indian Hair' },
      { label: 'Processing', value: 'None — raw, natural curl pattern' },
      { label: 'Curl Pattern', value: '3B–4C equivalent' },
      { label: 'Available Formats', value: 'Bulk loose / Machine weft bundles' },
      { label: 'Weight per Bundle', value: '100g ± 5g' },
      { label: 'Shrinkage', value: '30–40% when dry (natural curl)' },
      { label: 'Chemical Treatment', value: 'Zero — 100% unaltered' },
      { label: 'Cuticle Alignment', value: 'Remy — cuticle intact' },
      { label: 'HS Code', value: '05010010 / 05010020' },
      { label: 'Lead Time', value: '14–21 business days (sourcing dependent)' },
      { label: 'Custom Textures', value: 'Available with 30+ day lead' },
      { label: 'Blend Options', value: 'Custom % curly/straight blend possible' },
    ],
    tags: ['Curly', 'Kinky', 'Natural Texture', 'Specialty', 'Afro', 'Raw'],
  },
  {
    id: 'p6',
    slug: 'single-drawn-remy-bundles-wholesale',
    name: 'Single Drawn Remy Bundles — Wholesale Volume',
    category: 'Wefted Bundles',
    image: 'https://picsum.photos/seed/hair6/600/600',
    badge: 'Wholesale',
    tagline: 'High-volume, consistent quality. The backbone of your wholesale supply chain.',
    description:
      'Designed for distributors, wholesalers, and large-format wig manufacturers who need reliable bulk volume at competitive FOB pricing. Single-drawn Remy bundles offer a natural mix of lengths within each bundle — a cost-effective option for buyers producing mid-range extension products. Available in large-lot discounts from 50kg orders.',
    lengthRange: '10–28 inches',
    textures: ['Straight', 'Body Wave', 'Natural Wave'],
    colors: ['Natural Black', 'Natural Brown', 'Dark Brown (2#)'],
    moq: '50 kg per order',
    hsCode: 'HS 05010020',
    isRemy: true,
    isTemple: false,
    isVirgin: false,
    specs: [
      { label: 'Hair Type', value: 'Single-Drawn Remy' },
      { label: 'Weft Type', value: 'Machine Weft' },
      { label: 'Bundle Weight', value: '100g ± 5g' },
      { label: 'Length Mix', value: 'Natural mix (70% at stated length)' },
      { label: 'Available Lengths', value: '10" to 28"' },
      { label: 'Cuticle Direction', value: 'Single-directional (Remy)' },
      { label: 'Processing', value: 'Light wash + de-tangle only' },
      { label: 'Color', value: 'Natural Black / Natural Brown / 2#' },
      { label: 'Packaging', value: 'Polyweave bulk bags or retail packs' },
      { label: 'HS Code', value: '05010020' },
      { label: 'Volume Pricing', value: 'Tiered discounts from 50kg+' },
      { label: 'Lead Time', value: '5–10 business days from PO' },
    ],
    tags: ['Single Drawn', 'Remy', 'Wholesale', 'Volume', 'Bundles'],
  },
]

export const productCategories = [
  'All',
  'Bulk Raw Hair',
  'Wefted Bundles',
  'Closures',
  'Frontals',
  'Specialty',
] as const

export type ProductCategory = typeof productCategories[number]
