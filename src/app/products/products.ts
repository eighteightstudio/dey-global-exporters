export const productCategories = [
  'All',
  'Raw Bulk Hair',
  'Drawn Hair',
  'Custom Order',
] as const

export type ProductCategory = (typeof productCategories)[number]

export interface Product {
  id: string
  name: string
  category: ProductCategory
  grade: string
  description: string
  highlights: string[]
  lengths: string
  packaging: string
  image: string
  badge: string | null
}

export const products: Product[] = [
  {
    id: 'raw-virgin-hair-ball-combo',
    name: 'Raw Virgin Hair Ball Combo',
    category: 'Raw Bulk Hair',
    grade: 'A1 Quality',
    description:
      'Unprocessed raw virgin hair sourced directly from South Indian temples and verified household donor networks. Single-donor bundles with natural cuticle alignment intact. No chemical treatment, no washing, no processing of any kind.',
    highlights: [
      'Available in 50 kg sacks',
      'Mixed sizes in each sack',
      'Untangled and loose-packed',
      'Sourced from temples and households',
      'Full batch traceability documentation',
      'Natural cuticle direction preserved',
    ],
    lengths: 'Mixed lengths per sack',
    packaging: '50 kg sacks',
    image: 'https://picsum.photos/seed/hair1/600/480',
    badge: 'Best Seller',
  },
  {
    id: 'white-hair-ball',
    name: 'White Hair Ball',
    category: 'Raw Bulk Hair',
    grade: 'A1 Quality',
    description:
      'Premium natural white human hair — known as "paka chul" — sourced from the same temple and household networks as our virgin hair. Highly sought after by wig manufacturers for white and grey wig production. Same ethical sourcing and documentation standards as all DEY GLOBAL EXPORTERS products.',
    highlights: [
      'Premium "paka chul" — natural white hair',
      'Same A1 sourcing quality as virgin hair',
      'Temple and household sourced',
      'Rare and high-demand product category',
      'Full traceability documentation included',
      'Available for bulk B2B orders',
    ],
    lengths: 'Mixed lengths',
    packaging: 'Sack packaging',
    image: 'https://picsum.photos/seed/hair2/600/480',
    badge: 'Premium',
  },
  {
    id: 'single-drawn-hair',
    name: 'Single Drawn Hair',
    category: 'Drawn Hair',
    grade: 'A1 Quality',
    description:
      'Single drawn hair retains the natural variation of a collected lot — a mix of lengths within each bundle with the shortest hairs included. Ideal for buyers who require a full, voluminous look at a wholesale price point. Sourced from verified donor networks across India.',
    highlights: [
      'Length range: 12 inches to 42 inches',
      'Natural volume and fullness',
      'A1 quality grading',
      'Verified donor network sourced',
      'Suitable for full wig and extension production',
      'Competitive wholesale FOB pricing',
    ],
    lengths: '12" to 42"',
    packaging: 'Bundle packaging',
    image: 'https://picsum.photos/seed/hair3/600/480',
    badge: null,
  },
  {
    id: 'double-drawn-hair',
    name: 'Double Drawn Hair',
    category: 'Drawn Hair',
    grade: 'A1 Quality',
    description:
      'Double drawn hair is sorted to remove shorter strands, resulting in a bundle where the majority of hairs are the same length from root to tip. Produces a dense, uniform, premium look. The preferred choice for high-end wig brands and extension manufacturers who demand consistency.',
    highlights: [
      'Length range: 12 inches to 42 inches',
      'Uniform length from root to tip',
      'High density and consistent thickness',
      'A1 quality grading',
      'Preferred by premium wig manufacturers',
      'Available in bulk B2B quantities',
    ],
    lengths: '12" to 42"',
    packaging: 'Bundle packaging',
    image: 'https://picsum.photos/seed/hair4/600/480',
    badge: 'Premium',
  },
  {
    id: 'custom-order',
    name: 'Custom Order',
    category: 'Custom Order',
    grade: 'As per requirement',
    description:
      'We accommodate custom requirements for buyers with specific sourcing, grading, length, or packaging needs. If you require a product not listed in our standard catalog — a specific texture, a particular length range, a custom sack weight, or a blend of grades — our team will assess feasibility and revert with a quote.',
    highlights: [
      'Any length range on request',
      'Custom packaging and sack weights',
      'Specific texture or grade blends',
      'Private label documentation available',
      'MOQ discussed case by case',
      'Respond within 24 business hours',
    ],
    lengths: 'As specified',
    packaging: 'As specified',
    image: 'https://picsum.photos/seed/hair-custom/600/480',
    badge: 'On Request',
  },
]
