// Schema.org Structured Data Definitions for JIVAH Projects

export const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': ['InteriorDesigner', 'LocalBusiness'],
  '@id': 'https://jivahprojects.com/#organization',
  name: 'JIVAH Projects',
  legalName: 'JIVAH Projects',
  url: 'https://jivahprojects.com',
  logo: 'https://jivahprojects.com/logo.jpeg',
  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  founder: {
    '@type': 'Person',
    name: 'Jitesh',
    jobTitle: 'Founder & Principal Designer',
  },
  telephone: '+91 89797 19955',
  email: 'jivahprojects@gmail.com',
  description:
    'JIVAH Projects is a premier interior design studio in Hadapsar, Pune, specializing in residential interior design, modular kitchen design, and bespoke living spaces across Pune, Maharashtra.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hadapsar',
    addressLocality: 'Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411028',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5089,
    longitude: 73.926,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Pune',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Hadapsar, Pune',
    },
    {
      '@type': 'State',
      name: 'Maharashtra',
    },
  ],
  priceRange: '₹₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30',
    },
  ],
  sameAs: [
    'https://www.instagram.com/jivahprojects',
    'https://youtube.com/@jivahprojects',
    'https://www.linkedin.com/company/jivah-projects',
  ],
};

export const SERVICES_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Interior Design Services',
  provider: {
    '@type': 'InteriorDesigner',
    name: 'JIVAH Projects',
    url: 'https://jivahprojects.com',
  },
  areaServed: {
    '@type': 'City',
    name: 'Pune',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Interior Design Offerings',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Home Interior Design Services Pune',
          description: 'Full-home residential interior design for 2 BHK, 3 BHK, and luxury residences in Pune and Hadapsar.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Modular Kitchen Design Pune',
          description: 'Custom modular kitchen interior design focused on ergonomics, spatial efficiency, and tactile finishes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Residential Interior Design',
          description: 'Living room, bedroom, and complete home interior space planning and furniture curation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial & Office Interior Design',
          description: 'Selective boutique commercial and office interior design in Pune.',
        },
      },
    ],
  },
};

export const FAQ_ITEMS = [
  {
    question: 'What services does JIVAH Projects offer?',
    answer:
      'JIVAH Projects is an interior design studio specializing in home interior design, residential interior design, modular kitchen design, living room and bedroom interiors, as well as select commercial interior design in Pune and Hadapsar.',
  },
  {
    question: 'Where is JIVAH Projects based?',
    answer:
      'JIVAH Projects is located in Hadapsar, Pune, Maharashtra, serving residential and commercial clients across Pune and surrounding areas.',
  },
  {
    question: 'Does JIVAH Projects provide home interior design services in Pune?',
    answer:
      'Yes. JIVAH Projects offers complete home interior design services tailored for 2 BHK, 3 BHK, villas, and luxury apartments in Pune and Hadapsar.',
  },
  {
    question: 'Does JIVAH Projects design modular kitchens?',
    answer:
      'Yes. We design custom modular kitchens that combine ergonomic spatial layouts, durable material surfaces, concealed hardware, and ambient illumination for homes in Pune.',
  },
  {
    question: 'Does JIVAH Projects work in Hadapsar, Pune?',
    answer:
      'Yes. Hadapsar, Pune is our primary service hub and local relevance area for residential and commercial interior projects.',
  },
  {
    question: 'How can I contact JIVAH Projects for an interior project?',
    answer:
      'You can reach our interior design studio directly via email at jivahprojects@gmail.com or phone at +91 89797 19955.',
  },
];

export const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const createBreadcrumbSchema = (items: { name: string; item: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((el, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: el.name,
    item: el.item,
  })),
});
