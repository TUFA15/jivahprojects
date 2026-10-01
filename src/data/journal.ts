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
    id: 'designing-with-natural-light',
    slug: 'designing-with-natural-light',
    title: 'Designing With Natural Light',
    category: 'Spatial Theory',
    date: 'September 18, 2026',
    readTime: '5 min read',
    excerpt: 'Light is not merely illumination—it is the dynamic material that shapes volume, shadow, and emotional cadence within interior architecture.',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    author: {
      name: 'JIVAH Editorial',
      role: 'Spatial Research & Architecture'
    },
    content: [
      {
        type: 'paragraph',
        text: 'In contemporary interior architecture, light is frequently treated as a secondary technical layer—a grid of recessed downlights installed after spatial decisions are finalized. At JIVAH Projects, we approach natural light as an active, primary building material equal in weight to stone, timber, or concrete.'
      },
      {
        type: 'heading',
        text: 'The Geometry of Diurnal Shift'
      },
      {
        type: 'paragraph',
        text: 'A space designed with intention changes character continuously throughout the day. Early morning sun casting long diagonal shadows across a lime-washed wall creates a quiet moment of contemplation. By midday, indirect skylight brings out the subtle grain of honed travertine without harsh glare.'
      },
      {
        type: 'quote',
        text: 'Architecture is the learned game, correct and magnificent, of forms assembled in the light.'
      },
      {
        type: 'paragraph',
        text: 'To harness this shift, we carefully map solar trajectories during early concept phases. We calculate window reveal depths, overhang projections, and screen densities to sculpt how daylight enters and moves through each room.'
      },
      {
        type: 'image',
        imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1400&auto=format&fit=crop',
        caption: 'Reflected morning light across raw travertine at JIVAH Residence.'
      },
      {
        type: 'heading',
        text: 'Indirect Illumination & Shadow Gap Discipline'
      },
      {
        type: 'paragraph',
        text: 'Controlling shadow is as critical as capturing light. By integrating architectural shadow gaps along ceiling perimeters and recessing LED channels behind wall panels, artificial lighting at night inherits the soft, indirect quality of natural dusk.'
      }
    ]
  },
  {
    id: 'why-materiality-matters',
    slug: 'why-materiality-matters',
    title: 'Why Materiality Matters',
    category: 'Material Science',
    date: 'August 24, 2026',
    readTime: '6 min read',
    excerpt: 'Examining the tactile resonance of authentic raw materials and why genuine surfaces age with grace and quiet dignity.',
    coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
    author: {
      name: 'JIVAH Editorial',
      role: 'Materiality & Craft'
    },
    content: [
      {
        type: 'paragraph',
        text: 'In an era dominated by synthetic imitations and rapid surface finishes, authentic materiality stands as an anchor of honesty. When a hand rests on honed limestone or smoked oak, the body immediately registers authenticity.'
      },
      {
        type: 'heading',
        text: 'The Intelligence of Wabi Sabi & Patina'
      },
      {
        type: 'paragraph',
        text: 'Raw materials possess a living quality. Unsealed travertine absorbs the history of a home; unlacquered brass oxidizes gracefully under human touch; solid teak deepens into rich amber tones over decades.'
      },
      {
        type: 'quote',
        text: 'Materials carry memories. Synthetics conceal time; raw stone and wood honor it.'
      },
      {
        type: 'paragraph',
        text: 'We select materials not only for their initial visual impact, but for how they will look twenty years into their lifecycle. This long-term material discipline ensures our spaces grow more soulful with age.'
      }
    ]
  },
  {
    id: 'the-architecture-of-everyday-living',
    slug: 'the-architecture-of-everyday-living',
    title: 'The Architecture of Everyday Living',
    category: 'Design Philosophy',
    date: 'July 15, 2026',
    readTime: '4 min read',
    excerpt: 'How spatial flow, acoustic balance, and intuitive ergonomics elevate daily rituals from routine to art.',
    coverImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1600&auto=format&fit=crop',
    author: {
      name: 'JIVAH Editorial',
      role: 'Interior Architecture'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Great interior design is often judged by photographs, yet true luxury is experienced in motion—the sequence of walking through an entryway, the weight of a custom door handle, or the acoustic calm of a wood-paneled study.'
      },
      {
        type: 'heading',
        text: 'Designing for Ritual Rather Than Display'
      },
      {
        type: 'paragraph',
        text: 'We design around human rituals: the morning cup of tea taken by a garden view, the seamless transition from entertaining guests to quiet evening solitude, the intuitive storage that eliminates visual clutter.'
      },
      {
        type: 'quote',
        text: 'A home should feel like a sanctuary tailored precisely to your rhythm of life.'
      }
    ]
  },
  {
    id: 'creating-timeless-interiors',
    slug: 'creating-timeless-interiors',
    title: 'Creating Timeless Interiors',
    category: 'Editorial',
    date: 'June 02, 2026',
    readTime: '5 min read',
    excerpt: 'Resisting fleeting micro-trends in favor of classical proportion, architectural discipline, and restrained elegance.',
    coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
    author: {
      name: 'JIVAH Editorial',
      role: 'Design Criticism'
    },
    content: [
      {
        type: 'paragraph',
        text: 'Trends come and go with seasonal speed. Design that relies on viral aesthetics quickly feels dated. Timelessness, however, is rooted in classical proportions, spatial clarity, and understated execution.'
      },
      {
        type: 'paragraph',
        text: 'By focusing on spatial purity, architectural alignment, and organic textures, JIVAH Projects creates environments that remain as captivating ten years from now as they are on the day of completion.'
      }
    ]
  }
];
