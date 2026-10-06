export interface JournalArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
  };
  content: {
    type: 'paragraph' | 'heading' | 'quote' | 'image';
    text?: string;
    caption?: string;
    imageUrl?: string;
  }[];
}

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'how-to-plan-a-2-bhk-interior-in-pune',
    slug: 'how-to-plan-a-2-bhk-interior-in-pune',
    title: 'How to Plan a 2 BHK Interior in Pune',
    category: 'Home Interior Guide',
    date: 'October 01, 2026',
    readTime: '6 min read',
    excerpt: 'Key considerations for optimizing floor space, natural light, concealed storage, and material durability in contemporary 2 BHK homes across Pune.',
    coverImage: '/images/interiors/living (5).jpg',
    author: {
      name: 'JIVAH Studio',
      role: 'Interior Design Team'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Planning a 2 BHK interior in Pune requires a thoughtful balance between spatial fluidity and practical daily storage. Across contemporary urban apartments, layouts benefit significantly from tailored joinery and cohesive color schemes.'
      },
      {
        type: 'heading',
        text: '1. Prioritize Multi-Functional Living Room Zones'
      },
      {
        type: 'paragraph',
        text: 'In a 2 BHK apartment, the living area serves multiple functions—relaxing, dining, and working. Utilizing low-profile seating, floating media consoles, and warm neutral wall finishes creates an expansive feeling without crowding walkways.'
      },
      {
        type: 'quote',
        text: 'Thoughtful spatial layout in a 2 BHK interior transforms compact square footage into a serene living environment.'
      },
      {
        type: 'heading',
        text: '2. Maximize Vertical Storage & Concealed Joinery'
      },
      {
        type: 'paragraph',
        text: 'Full-height wardrobes, floor-to-ceiling kitchen pantries, and bed storage options eliminate visual clutter. Using oak veneers or matte neutral laminates ensures heavy storage units blend seamlessly into surrounding walls.'
      },
      {
        type: 'image',
        imageUrl: '/images/interiors/IMG_20250105_112813 - Copy.jpg',
        caption: 'Concealed kitchen joinery and natural light mapping in a modern Pune residential interior.'
      },
      {
        type: 'heading',
        text: '3. Solar Mapping & Sheer Window Treatments'
      },
      {
        type: 'paragraph',
        text: 'Pune receives generous natural sunshine throughout the year. Installing sheer Belgian linen or light-diffusing curtains softens harsh afternoon rays while illuminating natural stone floors.'
      }
    ]
  },
  {
    id: 'how-to-choose-the-right-interior-designer-in-pune',
    slug: 'how-to-choose-the-right-interior-designer-in-pune',
    title: 'How to Choose the Right Interior Designer in Pune',
    category: 'Design Guidance',
    date: 'September 24, 2026',
    readTime: '5 min read',
    excerpt: 'Essential advice for evaluating design studio portfolios, material transparency, local Pune experience, and spatial planning standards.',
    coverImage: '/images/interiors/living (1).jpg',
    author: {
      name: 'JIVAH Studio',
      role: 'Interior Design Team'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Selecting the ideal home interior designer in Pune is one of the most critical decisions when building your home. Beyond aesthetic preferences, your interior partner must possess deep technical knowledge of materials, lighting, and local execution standards.'
      },
      {
        type: 'heading',
        text: 'Review Authentic Completed Interior Work'
      },
      {
        type: 'paragraph',
        text: 'Look for actual photography of built interiors rather than 3D renders. High-quality craftsmanship is evidenced by clean shadow gaps, precise stone joinery, and durable kitchen hardware.'
      },
      {
        type: 'quote',
        text: 'A great interior studio listens to your daily habits and designs around how you actually live.'
      },
      {
        type: 'heading',
        text: 'Demand Material & Pricing Transparency'
      },
      {
        type: 'paragraph',
        text: 'Understand the grade of plywood, stone, hardware brands (such as Blum or Hafele), and finishing lacquers being specified. Clear documentation prevents unexpected budget adjustments during project execution.'
      }
    ]
  },
  {
    id: 'kitchen-interior-design-ideas-for-pune-homes',
    slug: 'kitchen-interior-design-ideas-for-pune-homes',
    title: 'Kitchen Interior Design Ideas for Pune Homes',
    category: 'Kitchen Interiors',
    date: 'September 12, 2026',
    readTime: '4 min read',
    excerpt: 'Exploring ergonomic work triangles, quartz countertops, ambient cove illumination, and durable cabinetry finishes for Indian cooking environments.',
    coverImage: '/images/interiors/IMG_20250313_131005.jpg',
    author: {
      name: 'JIVAH Studio',
      role: 'Kitchen Design Specialist'
    },
    content: [
      {
        type: 'paragraph',
        text: 'The kitchen is the functional hearth of every home in Pune. Designing a kitchen interior requires balancing heavy-duty daily usage with refined aesthetic elegance.'
      },
      {
        type: 'heading',
        text: 'Quartz & Granite Countertop Selection'
      },
      {
        type: 'paragraph',
        text: 'High-density quartz and matte black granite offer stain resistance against spices while providing a smooth, hygienic surface for daily meal preparation.'
      },
      {
        type: 'heading',
        text: 'Under-Cabinet Task Lighting'
      },
      {
        type: 'paragraph',
        text: 'Integrating 3000K warm LED channels under wall cabinets ensures clear visibility on work surfaces without casting overhead shadows.'
      }
    ]
  },
  {
    id: 'what-to-consider-before-designing-a-modular-kitchen',
    slug: 'what-to-consider-before-designing-a-modular-kitchen',
    title: 'What to Consider Before Designing a Modular Kitchen',
    category: 'Modular Kitchens',
    date: 'August 28, 2026',
    readTime: '5 min read',
    excerpt: 'A practical roadmap covering ergonomic heights, soft-close hardware, chimney ventilation, and moisture-resistant carcass materials.',
    coverImage: '/images/offices/IMG_20260318_121652.jpg',
    author: {
      name: 'JIVAH Studio',
      role: 'Modular Kitchen Team'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Before commencing a modular kitchen installation in Pune, understanding the core technical components ensures your investment remains trouble-free for decades.'
      },
      {
        type: 'heading',
        text: '1. Carcass Material Selection (BWP Marine Plywood)'
      },
      {
        type: 'paragraph',
        text: 'Always insist on Boiling Water Proof (BWP) IS:710 grade plywood for wet sink modules to protect against humidity and water exposure.'
      },
      {
        type: 'heading',
        text: '2. Soft-Close Drawer Systems & Corner Units'
      },
      {
        type: 'paragraph',
        text: 'Full-extension tandem drawers and S-carousel corner pull-outs make deep storage easily accessible without straining.'
      }
    ]
  },
  {
    id: 'how-lighting-changes-the-feel-of-an-interior',
    slug: 'how-lighting-changes-the-feel-of-an-interior',
    title: 'How Lighting Changes the Feel of an Interior',
    category: 'Spatial Lighting',
    date: 'August 14, 2026',
    readTime: '5 min read',
    excerpt: 'Layering ambient, accent, and task illumination to transform residential room atmospheres from bright morning clarity to evening calm.',
    coverImage: '/images/banqueat/DSC08587.JPG',
    author: {
      name: 'JIVAH Studio',
      role: 'Lighting & Atmosphere Specialist'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Light is the single most powerful tool in interior design. It determines how colors are perceived, how textures feel, and how relaxed a home feels at night.'
      },
      {
        type: 'heading',
        text: 'The 3-Layer Lighting Rule'
      },
      {
        type: 'paragraph',
        text: 'Every well-designed room relies on three distinct light layers: indirect cove lighting for general ambient glow, warm spots for artwork accents, and targeted lamps for reading or working.'
      }
    ]
  }
];
