export interface Certification {
  id: string
  title: string
  issuingAuthority: string
  registrationNumber: string
  validFrom: string
  validUntil: string
  description: string
  icon: string
  color: string
  category: 'export' | 'tax' | 'quality' | 'trade'
}

export const certifications: Certification[] = [
  {
    id: 'iec',
    title: 'Import Export Code (IEC)',
    issuingAuthority: 'Directorate General of Foreign Trade (DGFT), Ministry of Commerce, India',
    registrationNumber: 'IEC-XXXX-XXXX',
    validFrom: '2022-01-15',
    validUntil: 'Lifetime (no renewal required)',
    description:
      'The Import Export Code is the primary business identification number required for any Indian entity engaged in import or export. Our IEC is registered with the DGFT and appears on all our export documentation, shipping bills, and bank realization certificates. Every shipment we export carries our IEC on the commercial invoice and customs declaration.',
    icon: 'FileCheck',
    color: 'navy',
    category: 'export',
  },
  {
    id: 'gst',
    title: 'GST Registration & LUT',
    issuingAuthority: 'Goods and Services Tax Network (GSTN), Government of India',
    registrationNumber: 'GSTIN: 19XXXXX1234X1ZX',
    validFrom: '2022-03-01',
    validUntil: 'Annual renewal — current',
    description:
      'DEY GLOBAL EXPORTERS is GST registered under the GSTN. For export transactions, we operate under a Letter of Undertaking (LUT) which allows us to export without payment of IGST, making our exports zero-rated. This means no GST is passed on to our international buyers. Our GSTIN is cited on all commercial invoices and is verifiable on the GSTN portal.',
    icon: 'Receipt',
    color: 'navy',
    category: 'tax',
  },
  {
    id: 'msme',
    title: 'MSME / UDYAM Registration',
    issuingAuthority: 'Ministry of Micro, Small and Medium Enterprises, Government of India',
    registrationNumber: 'UDYAM-WB-XX-XXXXXXX',
    validFrom: '2022-04-10',
    validUntil: 'Lifetime (no renewal required)',
    description:
      'Registered under the UDYAM portal as a Micro, Small and Medium Enterprise. MSME registration provides access to priority sector financing, government export promotion schemes, and participation in MSME-exclusive trade fairs. It also demonstrates our credibility as a formally recognized Indian export business.',
    icon: 'Building2',
    color: 'navy',
    category: 'trade',
  },
  {
    id: 'dgft',
    title: 'DGFT Export Compliance',
    issuingAuthority: 'Directorate General of Foreign Trade, Ministry of Commerce, India',
    registrationNumber: 'Compliant under Foreign Trade Policy 2023',
    validFrom: '2023-04-01',
    validUntil: 'Per current FTP cycle',
    description:
      'All our raw hair exports comply with India\'s Foreign Trade Policy governing HS 0501 human hair exports. We export raw unprocessed temple hair (HS 05010010) exclusively at FOB values at or above the mandated USD 65/kg threshold, ensuring full DGFT compliance. Processed and wefted hair products (HS 05010020) are exported under standard free export conditions.',
    icon: 'Shield',
    color: 'navy',
    category: 'export',
  },
  {
    id: 'fieo',
    title: 'FIEO Membership',
    issuingAuthority: 'Federation of Indian Export Organisations (FIEO)',
    registrationNumber: 'FIEO/WB/XXXX/2022',
    validFrom: '2022-06-01',
    validUntil: 'Annual renewal — current',
    description:
      'Member of the Federation of Indian Export Organisations, the apex body representing Indian exporters. FIEO membership provides access to export promotion resources, trade fair participation, market intelligence, and facilitation with government export authorities. FIEO membership certificates are recognized by international trade bodies as a credibility signal for Indian exporters.',
    icon: 'Globe',
    color: 'navy',
    category: 'trade',
  },
  {
    id: 'epc',
    title: 'Export Promotion Council — Handicrafts',
    issuingAuthority: 'Export Promotion Council for Handicrafts (EPCH), India',
    registrationNumber: 'EPCH/XXXX/XX/XXXX',
    validFrom: '2023-01-01',
    validUntil: 'Annual renewal — current',
    description:
      'Member of the Export Promotion Council for Handicrafts, which covers natural fiber and hair-related export products. EPC membership enables participation in government-organized international buyer-seller meets, India International Trade Fairs (IITF), and overseas buyer delegations coordinated by the Ministry of Commerce.',
    icon: 'Award',
    color: 'navy',
    category: 'trade',
  },
]

export const compliancePoints = [
  {
    title: 'HS Code Accuracy',
    description:
      'We correctly classify all exports: HS 05010010 for raw unprocessed temple hair, HS 05010020 for wefted and processed products. Accurate classification prevents customs delays at destination ports worldwide.',
  },
  {
    title: 'FOB Price Compliance',
    description:
      'All raw human hair (HS 05010010) is exported at or above the DGFT-mandated minimum FOB of USD 65 per kilogram. We never engage in undervaluation or documentation misrepresentation.',
  },
  {
    title: 'Zero-Rated GST Export',
    description:
      'Under our LUT registration, all exports are zero-rated for IGST. International buyers do not bear Indian GST. Our commercial invoices clearly state the applicable tax treatment.',
  },
  {
    title: 'Complete Documentation Set',
    description:
      'Every shipment includes commercial invoice, packing list, bill of lading/airway bill, certificate of origin, shipping bill, and QC batch report — transmitted digitally before vessel departure.',
  },
]
