export interface ProjectMaterial {
  name: string;
  description: string;
}

export interface FurnitureItem {
  piece: string;
  designerOrMaker: string;
  notes: string;
}

export interface ColorSwatch {
  name: string;
  hex: string;
}

export interface BeforeAfterData {
  beforeImage: string;
  afterImage: string;
  caption: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  location: string;
  category: 'Residential' | 'Commercial' | 'Hospitality';
  year: string;
  area: string;
  scope: string;
  heroImage: string;
  heroAlt: string;
  portraitImage?: string;
  thumbnail: string;
  excerpt: string;
  conceptStatement: string;
  spatialFeeling: string;
  fullDescription: string[];
  materials: ProjectMaterial[];
  furnitureCuration: FurnitureItem[];
  colorPalette: ColorSwatch[];
  beforeAfter?: BeforeAfterData;
  gallery: {
    url: string;
    caption: string;
    alt: string;
    aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide';
  }[];
  featured: boolean;
  featuredLayout?: 'large' | 'tall' | 'wide' | 'standard';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'hadapsar-residential-sanctuary',
    slug: 'hadapsar-residential-sanctuary',
    title: 'HADAPSAR RESIDENTIAL SANCTUARY',
    subtitle: 'A contemporary 3 BHK home interior shaped by warm oak joinery, travertine stone, and ambient cove illumination in Hadapsar, Pune.',
    location: 'Hadapsar · Pune',
    category: 'Residential',
    year: '2026',
    area: '2,800 sq. ft.',
    scope: 'Complete Home Interior Design, Modular Kitchen & Furniture Curation',
    heroImage: '/images/interiors/IMG_20250118_125129.jpg',
    heroAlt: 'Contemporary living room interior designed by JIVAH Projects in Hadapsar Pune',
    portraitImage: '/images/interiors/IMG_20250105_112813 - Copy.jpg',
    thumbnail: '/images/interiors/IMG_20250118_125129.jpg',
    excerpt: 'Thoughtfully planned residential interior balancing raw honed stone, custom smoked oak millwork, tactile bouclé upholstery, and indirect solar lighting.',
    conceptStatement: 'A home in Hadapsar designed around peaceful daily rhythms, tactile material honesty, and cocooning interior warmth.',
    spatialFeeling: 'Calm, grounding, luxurious, absorbing urban energy into quiet domestic serenity.',
    fullDescription: [
      'Located in Hadapsar, Pune, this 3 BHK apartment interior was crafted around how the family interacts, rests, and gathers throughout the day.',
      'Instead of rigid partition walls, we designed intuitive interior zones using floating oak screens, linen sheers, and low-slung custom seating.',
      'Natural daylight filters softly through sheer linen curtains during morning hours, while warm 2700K indirect cove illumination takes over at dusk.'
    ],
    materials: [
      { name: 'Honed Travertine', description: 'Warm beige natural stone floor tiles with soft matte texture' },
      { name: 'Smoked European Oak', description: 'Custom full-height cabinetry, wall paneling, and acoustic slats' },
      { name: 'Textured Bouclé Linen', description: 'Tactile wool-blend upholstery for custom living room seating' },
      { name: 'Brushed Anodized Hardware', description: 'Recessed lighting trims and custom door handles' }
    ],
    furnitureCuration: [
      { piece: 'Custom Modular Lounge Sofa', designerOrMaker: 'JIVAH Bespoke', notes: 'Upholstered in organic off-white bouclé with concealed oak plinth' },
      { piece: 'Sculptural Stone Coffee Table', designerOrMaker: 'JIVAH Studio', notes: 'Carved from single travertine stone block' },
      { piece: 'Solid Oak Dining Table', designerOrMaker: 'Craftsman Guild', notes: '8-seater timber dining table with matte oil finish' }
    ],
    colorPalette: [
      { name: 'Warm Ivory', hex: '#F7F3EC' },
      { name: 'Deep Teal Accent', hex: '#2F7B93' },
      { name: 'Travertine Beige', hex: '#E8E1D5' },
      { name: 'Smoked Oak', hex: '#3D312A' },
      { name: 'Soft Sand', hex: '#EDE5D9' }
    ],
    beforeAfter: {
      beforeImage: '/images/interiors/IMG_20250105_113619.jpg',
      afterImage: '/images/interiors/IMG_20250118_132150.jpg',
      caption: 'Transformation of a raw concrete shell in Hadapsar into a warm travertine & oak living sanctuary.'
    },
    gallery: [
      {
        url: '/images/interiors/IMG_20250118_125129.jpg',
        caption: 'The primary living lounge facing the balcony in Hadapsar, Pune.',
        alt: 'Primary living lounge interior with custom sofa and travertine flooring in Hadapsar Pune',
        aspectRatio: 'wide'
      },
      {
        url: '/images/interiors/IMG_20250105_112832 - Copy.jpg',
        caption: 'Tactile kitchen island combining quartz surfaces with brushed bronze hardware.',
        alt: 'Modern modular kitchen interior with stone island in Pune home',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20250105_113101 - Copy.jpg',
        caption: 'Custom smoked oak study alcove with warm LED channel illumination.',
        alt: 'Wood paneled home office study interior designed by JIVAH Projects Pune',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/interiors/IMG_20250105_113541 - Copy.jpg',
        caption: 'Master bedroom suite featuring bespoke joinery wall.',
        alt: 'Master bedroom suite interior in Pune residence',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredLayout: 'large'
  },
  {
    id: 'the-banquet-hall-lounge',
    slug: 'the-banquet-hall-lounge',
    title: 'THE BANQUET HALL LOUNGE',
    subtitle: 'Grand hospitality banquet interior featuring custom chandeliers, acoustic wall panels, and bespoke dining layout.',
    location: 'Hadapsar · Pune',
    category: 'Hospitality',
    year: '2026',
    area: '6,500 sq. ft.',
    scope: 'Hospitality Interior Design, Custom Lighting & Acoustic Wall Panelling',
    heroImage: '/images/banqueat/DSC08587.JPG',
    heroAlt: 'Grand banquet hall hospitality interior designed by JIVAH Projects in Pune',
    portraitImage: '/images/banqueat/DSC08576.JPG',
    thumbnail: '/images/banqueat/DSC08587.JPG',
    excerpt: 'Luxe hospitality venue in Hadapsar Pune featuring warm ambient chandeliers, custom banquette seating, and gold-hued acoustic wall treatments.',
    conceptStatement: 'A banquet venue crafted for memorable gatherings, combining opulent warmth with acoustic clarity.',
    spatialFeeling: 'Regal, welcoming, acoustically balanced with warm ambient illumination.',
    fullDescription: [
      'Designed in Hadapsar, Pune, The Banquet Hall Lounge accommodates large celebratory gatherings and corporate galas.',
      'Custom chandelier installation casts a golden glow across carpeted floors, while acoustic wall panels absorb excess reverberation for crisp speech and music clarity.'
    ],
    materials: [
      { name: 'Acoustic Fabric Panelling', description: 'Gold-threaded acoustic sound absorbent wall covers' },
      { name: 'Polished Brass Trims', description: 'Custom metal trims framing interior archways' }
    ],
    furnitureCuration: [
      { piece: 'Custom Curved Banquet Seating', designerOrMaker: 'JIVAH Bespoke', notes: 'Upholstered in rich velvet with brass base trims' }
    ],
    colorPalette: [
      { name: 'Warm Gold', hex: '#D4AF37' },
      { name: 'Deep Burgundy', hex: '#4A0E17' },
      { name: 'Teal Accent', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: '/images/banqueat/DSC08587.JPG',
        caption: 'Main banquet hall hall with custom lighting setup.',
        alt: 'Main banquet hall interior with chandeliers in Pune',
        aspectRatio: 'wide'
      },
      {
        url: '/images/banqueat/DSC08588.JPG',
        caption: 'Dining tables arrangement with acoustic wall panelling.',
        alt: 'Banquet dining arrangement interior Pune',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/banqueat/DSC08675.JPG',
        caption: 'VIP lounge seating section in banquet hall.',
        alt: 'VIP lounge seating section in banquet hall Pune',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredLayout: 'tall'
  },
  {
    id: 'hadapsar-corporate-office',
    slug: 'hadapsar-corporate-office',
    title: 'HADAPSAR CORPORATE OFFICE',
    subtitle: 'Modern commercial office interior with acoustic glass partitions, executive suites, and ergonomic workstations in Pune.',
    location: 'Hadapsar · Pune',
    category: 'Commercial',
    year: '2026',
    area: '4,200 sq. ft.',
    scope: 'Commercial Interior Design, Space Planning & Executive Joinery',
    heroImage: '/images/offices/IMG_20260318_121652.jpg',
    heroAlt: 'Modern corporate office workspace interior designed by JIVAH Projects in Hadapsar Pune',
    portraitImage: '/images/offices/IMG_20260218_155838.jpg',
    thumbnail: '/images/offices/IMG_20260318_121652.jpg',
    excerpt: 'Clean, productive corporate office environment featuring glass partitions, warm timber accents, acoustic ceiling panels, and task lighting.',
    conceptStatement: 'A workplace designed around focus, collaboration, and executive elegance.',
    spatialFeeling: 'Professional, uncluttered, luminous, encouraging creative energy.',
    fullDescription: [
      'Situated in Hadapsar, Pune, this corporate office interior balances open collaborative zones with quiet private executive suites.',
      'Double-glazed acoustic partitions maintain quiet workspace acoustics while allowing natural daylight to illuminate central work desks.'
    ],
    materials: [
      { name: 'Double Glazed Glass', description: 'Acoustic glass partition walls with aluminum framing' },
      { name: 'Matte Oak Veneer', description: 'Executive desk surfaces and storage Credenzas' }
    ],
    furnitureCuration: [
      { piece: 'Executive Suite Desk', designerOrMaker: 'JIVAH Edition', notes: 'Custom oak desk with integrated cable management' }
    ],
    colorPalette: [
      { name: 'Corporate Grey', hex: '#4A5568' },
      { name: 'Warm Ivory', hex: '#F7F3EC' },
      { name: 'Teal Blue', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: '/images/offices/IMG_20260318_121652.jpg',
        caption: 'Main open workstation layout with acoustic ceiling bays.',
        alt: 'Corporate office workstation layout interior in Hadapsar Pune',
        aspectRatio: 'wide'
      },
      {
        url: '/images/offices/IMG_20260218_155838.jpg',
        caption: 'Executive conference room with glass partition walls.',
        alt: 'Executive office conference room interior Pune',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/offices/IMG_20260218_161037.jpg',
        caption: 'Reception lounge seating for visiting clients.',
        alt: 'Office reception lounge interior Pune',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredLayout: 'standard'
  },
  {
    id: 'koregaon-park-residence',
    slug: 'koregaon-park-residence',
    title: 'KOREGAON PARK RESIDENCE',
    subtitle: 'Contemporary 2 BHK home interior featuring custom kitchen joinery, master suite wardrobes, and warm ambient lighting in Koregaon Park, Pune.',
    location: 'Koregaon Park · Pune',
    category: 'Residential',
    year: '2025',
    area: '2,200 sq. ft.',
    scope: 'Interior Design, Modular Kitchen & Soft Styling',
    heroImage: '/images/interiors/IMG_20250313_131005.jpg',
    heroAlt: 'Contemporary living room interior in Koregaon Park Pune home',
    portraitImage: '/images/interiors/IMG_20250313_131134.jpg',
    thumbnail: '/images/interiors/IMG_20250313_131005.jpg',
    excerpt: 'Elegantly proportioned residential interior in Koregaon Park incorporating custom kitchen storage, warm neutral palette, and soft ambient lighting.',
    conceptStatement: 'Crafted for modern urban living, where smart spatial planning creates maximum functional comfort.',
    spatialFeeling: 'Luminous, cozy, uncluttered, reflecting personal home style.',
    fullDescription: [
      'Designed in Koregaon Park, Pune, this home interior reorganizes 2,200 square feet into seamless living, dining, and sleeping environments.',
      'Custom modular kitchen storage and full-height bedroom wardrobes eliminate visual clutter while maintaining warm, welcoming interior tones.'
    ],
    materials: [
      { name: 'Quartz Worktops', description: 'Stain-resistant quartz surfaces for kitchen countertops' },
      { name: 'Warm Timber Laminate', description: 'Durable cabinetry laminate in matte natural finish' }
    ],
    furnitureCuration: [
      { piece: 'Custom Dining Table & Chairs', designerOrMaker: 'JIVAH Studio', notes: '4-seater dining set with soft linen upholstery' }
    ],
    colorPalette: [
      { name: 'Warm Beige', hex: '#E5DDCB' },
      { name: 'Off-White', hex: '#F8F9F8' },
      { name: 'Teal Blue', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: '/images/interiors/IMG_20250313_131005.jpg',
        caption: 'Living and dining interior transition in Koregaon Park home.',
        alt: 'Living room interior in Koregaon Park Pune apartment',
        aspectRatio: 'wide'
      },
      {
        url: '/images/interiors/IMG_20250313_131134.jpg',
        caption: 'Modular kitchen layout with under-cabinet task lighting.',
        alt: 'Modular kitchen interior in Koregaon Park home',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20250313_131420.jpg',
        caption: 'Master bedroom wardrobe joinery and soft drapery.',
        alt: 'Bedroom wardrobe interior joinery Pune',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredLayout: 'wide'
  }
];
