export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  youtubeId?: string
  tags: string[]
  relatedProducts?: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'how-to-identify-genuine-raw-indian-temple-hair',
    title: 'How to Identify Genuine Raw Indian Temple Hair vs Processed Hair',
    excerpt:
      'For wig manufacturers and extension brands, the difference between genuine raw Indian temple hair and chemically processed alternatives can make or break product quality.',
    content: `...`,
    category: 'Quality & Sourcing',
    author: 'DEY GLOBAL EXPORTERS Export Team',
    date: '2025-03-10',
    readTime: '8 min read',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/blog_genuine_check_two.png',
    tags: ['Temple Hair', 'Quality', 'Raw Hair', 'Identification', 'Remy'],
    relatedProducts: ['raw-indian-temple-hair-bulk'],
  },
  {
    id: 'b2',
    slug: 'remy-vs-non-remy-hair-what-wig-manufacturers-need-to-know',
    title: 'Remy vs Non-Remy Hair: What Wig Manufacturers Need to Know',
    excerpt:
      'The Remy vs non-Remy distinction is the most commercially significant quality marker in the human hair industry.',
    content: `...`,
    category: 'Industry Education',
    author: 'DEY GLOBAL EXPORTERS Export Team',
    date: '2025-02-18',
    readTime: '7 min read',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/remy_vs_nonremy_hair.png',
    tags: ['Remy Hair', 'Non-Remy', 'Wig Manufacturing', 'Quality', 'Double Drawn'],
    relatedProducts: [
      'wefted-remy-hair-bundles-double-drawn',
      'single-drawn-remy-bundles-wholesale',
    ],
  },
  {
    id: 'b3',
    slug: 'understanding-hs-code-0501-human-hair-imports',
    title: "Understanding HS Code 0501 for Human Hair Imports — A Buyer's Guide",
    excerpt:
      'HS Code 0501 governs the classification and customs clearance of human hair globally.',
    content: `...`,
    category: 'Export & Compliance',
    author: 'DEY GLOBAL EXPORTERS Export Team',
    date: '2025-01-25',
    readTime: '9 min read',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/blog_hs_code_und.png',
    tags: ['HS Code 0501', 'Customs', 'Export Compliance', 'DGFT', 'Documentation'],
    relatedProducts: ['raw-indian-temple-hair-bulk'],
  },
  {
    id: 'b4',
    slug: 'how-indian-temple-hair-is-collected',
    title: 'How Indian Temple Hair Is Collected and Why It Matters for Your Brand',
    excerpt:
      'The story behind Indian temple hair — from the devotee’s offering to your production line.',
    content: `...`,
    category: 'Sourcing Story',
    author: 'DEY GLOBAL EXPORTERS Export Team',
    date: '2024-12-12',
    readTime: '10 min read',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/blog_sourcing_story.png',
    tags: ['Temple Hair', 'Sourcing', 'Ethics', 'Tirupati', 'Supply Chain'],
    relatedProducts: [
      'raw-indian-temple-hair-bulk',
      'lace-closures-4x4-5x5-raw-indian',
    ],
  },
  {
    id: 'b5',
    slug: 'importing-hair-from-india-lead-times-usa-eu',
    title: 'Lead Times and Best Practices When Importing Hair from India to the USA/EU',
    excerpt:
      'Reliable lead times are the difference between a trusted supplier and an operational headache.',
    content: `...`,
    category: 'Logistics & Trade',
    author: 'DEY GLOBAL EXPORTERS Export Team',
    date: '2024-11-05',
    readTime: '11 min read',
    image: 'https://kwiecvvnonkolytbwvlv.supabase.co/storage/v1/object/public/Home%20Page%20Images/blog_best_practices.png',
    tags: ['Lead Times', 'Shipping', 'USA', 'EU', 'Sea Freight', 'Air Freight', 'Incoterms'],
    relatedProducts: [
      'wefted-remy-hair-bundles-double-drawn',
      'single-drawn-remy-bundles-wholesale',
    ],
  },
]
