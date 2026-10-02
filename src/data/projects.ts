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
        caption: 'Primary living lounge facing panoramic balcony in Hadapsar, Pune.',
        alt: 'Primary living lounge interior with custom sofa and travertine flooring in Hadapsar Pune',
        aspectRatio: 'wide'
      },
      {
        url: '/images/interiors/IMG_20250105_112813 - Copy.jpg',
        caption: 'Bespoke entry foyer featuring custom wall panelling and warm cove lighting.',
        alt: 'Luxury entry foyer interior joinery designed by JIVAH Projects Pune',
        aspectRatio: 'portrait'
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
        url: '/images/interiors/IMG_20250105_113240 - Copy.jpg',
        caption: 'Dining room credenza with integrated display shelves and ambient lighting.',
        alt: 'Dining room interior joinery and lighting in Pune residence',
        aspectRatio: 'square'
      },
      {
        url: '/images/interiors/IMG_20250105_113541 - Copy.jpg',
        caption: 'Master bedroom suite featuring bespoke joinery wall and padded headboard.',
        alt: 'Master bedroom suite interior in Pune residence',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20250118_125501 - Copy.jpg',
        caption: 'Detail view of custom fluted timber wall paneling and stone niche.',
        alt: 'Fluted timber wall panel detail in Pune home interior',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20250118_125532 - Copy.jpg',
        caption: 'Balcony lounge seating area seamlessly connected to the internal living space.',
        alt: 'Indoor outdoor balcony lounge transition in Hadapsar apartment',
        aspectRatio: 'landscape'
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
      'Custom Chandelier installations cast a golden glow across carpeted floors, while acoustic wall panels absorb excess reverberation for crisp speech and music clarity.'
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
        caption: 'Main banquet hall vista with custom lighting setup.',
        alt: 'Main banquet hall interior with chandeliers in Pune',
        aspectRatio: 'wide'
      },
      {
        url: '/images/banqueat/DSC08576.JPG',
        caption: 'Grand grand entrance hall with architectural arches and ambient warmth.',
        alt: 'Grand banquet foyer interior Pune',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/banqueat/DSC08588.JPG',
        caption: 'Dining tables arrangement with acoustic wall panelling.',
        alt: 'Banquet dining arrangement interior Pune',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/banqueat/DSC08589.JPG',
        caption: 'Custom chandelier lighting grid across the primary hall floor.',
        alt: 'Chandelier lighting installation banquet hall Pune',
        aspectRatio: 'wide'
      },
      {
        url: '/images/banqueat/DSC08675.JPG',
        caption: 'VIP lounge seating section with premium plush upholstery.',
        alt: 'VIP lounge seating section in banquet hall Pune',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/banqueat/DSC08871.JPG',
        caption: 'Stage and event focal wall featuring dynamic lighting columns.',
        alt: 'Banquet hall event stage interior design Pune',
        aspectRatio: 'wide'
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
        url: '/images/interiors/IMG_20250313_131230.jpg',
        caption: 'Ergonomic kitchen counter with seamless marble splashback.',
        alt: 'Modular kitchen counter and storage in Pune residence',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20250313_131420.jpg',
        caption: 'Master bedroom wardrobe joinery and soft drapery.',
        alt: 'Bedroom wardrobe interior joinery Pune',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/interiors/IMG_20250313_131743.jpg',
        caption: 'Bedside floating nightstand with brass reading light.',
        alt: 'Bedside nightstand and wall light interior detail Pune',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20250313_131752.jpg',
        caption: 'Custom bedroom vanity unit with arched lit mirror.',
        alt: 'Bedroom vanity mirror and interior cabinetry Pune',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20250313_132914.jpg',
        caption: 'Guest bedroom sanctuary with warm linen bedding and accent rug.',
        alt: 'Guest bedroom interior design in Koregaon Park Pune',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/interiors/IMG_20250313_133637.jpg',
        caption: 'Luxury bathroom vanity with micro-cement walls and matte black fittings.',
        alt: 'Modern bathroom vanity interior design in Pune home',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredLayout: 'wide'
  },
  {
    id: 'amanora-penthouse-suite',
    slug: 'amanora-penthouse-suite',
    title: 'AMANORA PENTHOUSE SUITE',
    subtitle: 'High-floor penthouse interior in Amanora Town with panoramic city vistas, brass accents, and custom living area seating.',
    location: 'Amanora Park Town · Pune',
    category: 'Residential',
    year: '2026',
    area: '3,500 sq. ft.',
    scope: 'Penthouse Interior Design, Furniture Curation & Lighting Architecture',
    heroImage: '/images/interiors/IMG_20250118_125548.jpg',
    heroAlt: 'Amanora penthouse living room interior designed by JIVAH Projects Pune',
    portraitImage: '/images/interiors/IMG_20250118_132127 - Copy.jpg',
    thumbnail: '/images/interiors/IMG_20250118_125548.jpg',
    excerpt: 'An expansive penthouse sanctuary overlooking Pune skyline, detailed with honed natural stone, warm oak panels, and bespoke lighting.',
    conceptStatement: 'Elevated urban living defined by continuous natural light, refined materials, and serene spatial proportions.',
    spatialFeeling: 'Airy, expansive, sophisticated, embracing high-altitude sky views.',
    fullDescription: [
      'Perched high in Amanora Park Town, Pune, this penthouse interior frames dramatic sky views through full-height curtain glass.',
      'We curated custom low-profile furniture pieces that preserve uninterrupted sightlines across the living and dining expanses.'
    ],
    materials: [
      { name: 'Italian Marble Flooring', description: 'Polished white marble floor slabs with subtle grey veining' },
      { name: 'Brushed Brass Inlays', description: 'Architectural metal trim inlays framing doorways' }
    ],
    furnitureCuration: [
      { piece: 'Low-Profile Modular Lounge', designerOrMaker: 'JIVAH Bespoke', notes: 'Upholstered in Italian woven wool with brass legs' }
    ],
    colorPalette: [
      { name: 'Sky White', hex: '#FAFAFA' },
      { name: 'Brushed Brass', hex: '#C5A059' },
      { name: 'Deep Charcoal', hex: '#262626' }
    ],
    gallery: [
      {
        url: '/images/interiors/IMG_20250118_125548.jpg',
        caption: 'Living room expanse framing high-floor city vistas.',
        alt: 'Penthouse living room interior in Amanora Pune',
        aspectRatio: 'wide'
      },
      {
        url: '/images/interiors/IMG_20250118_132127 - Copy.jpg',
        caption: 'Formal dining zone with custom chandelier overhang.',
        alt: 'Penthouse dining interior layout Pune',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20250118_132150.jpg',
        caption: 'Living sanctuary seating area with plush rug and stone table.',
        alt: 'Penthouse seating arrangement in Pune home',
        aspectRatio: 'landscape'
      },
      {
        url: '/images/interiors/IMG_20250118_132208 - Copy.jpg',
        caption: 'Private bar nook featuring back-lit onyx countertop.',
        alt: 'Private home bar interior detail Amanora Pune',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20250105_113619.jpg',
        caption: 'Master suite dressing room with custom glass wardrobe doors.',
        alt: 'Luxury wardrobe glass door joinery Pune',
        aspectRatio: 'portrait'
      }
    ],
    featured: false
  },
  {
    id: 'magarpatta-villa-interiors',
    slug: 'magarpatta-villa-interiors',
    title: 'MAGARPATTA VILLA INTERIORS',
    subtitle: 'Private residential villa interior in Magarpatta City showcasing warm earth tones, customized furniture, and serene courtyard views.',
    location: 'Magarpatta City · Pune',
    category: 'Residential',
    year: '2026',
    area: '4,500 sq. ft.',
    scope: 'Complete Villa Interior Design & Outdoor Terrace Integration',
    heroImage: '/images/interiors/IMG_20260913_171640 (1).jpg',
    heroAlt: 'Luxury villa interior lounge in Magarpatta City Pune by JIVAH Projects',
    portraitImage: '/images/interiors/IMG_20260913_171649 (1).jpg',
    thumbnail: '/images/interiors/IMG_20260913_171640 (1).jpg',
    excerpt: 'A multi-level villa interior in Magarpatta City where indoor living spaces flow fluidly into private garden courtyards.',
    conceptStatement: 'Organic warmth meets contemporary luxury in a peaceful villa atmosphere.',
    spatialFeeling: 'Harmonious, grounded, nature-connected, tranquil.',
    fullDescription: [
      'Located in Magarpatta City, Pune, this spacious residential villa interior bridges indoor comfort with surrounding lush gardens.',
      'Rich oak wood wall paneling, natural stone cladding, and floor-to-ceiling glass windows generate an enduring feeling of quiet luxury.'
    ],
    materials: [
      { name: 'Natural Sandstone Cladding', description: 'Textured natural stone wall cladding on feature courtyard wall' },
      { name: 'Teak Wood Paneling', description: 'Rich warm teak wall paneling with soft satin finish' }
    ],
    furnitureCuration: [
      { piece: 'Villa Lounge Sectional', designerOrMaker: 'JIVAH Bespoke', notes: 'L-shaped sectional sofa in earthy beige linen' }
    ],
    colorPalette: [
      { name: 'Earth Ochre', hex: '#C89D7C' },
      { name: 'Warm Cream', hex: '#F3EFEA' },
      { name: 'Teal Accent', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: '/images/interiors/IMG_20260913_171640 (1).jpg',
        caption: 'Courtyard-facing lounge room with warm timber ceiling beams.',
        alt: 'Villa lounge interior with garden view in Magarpatta Pune',
        aspectRatio: 'wide'
      },
      {
        url: '/images/interiors/IMG_20260913_171649 (1).jpg',
        caption: 'Bespoke staircase lobby with floating wood treads and ambient wall sconces.',
        alt: 'Villa staircase interior design in Magarpatta Pune',
        aspectRatio: 'portrait'
      },
      {
        url: '/images/interiors/IMG_20260913_172536 (1).jpg',
        caption: 'Sunlit family living space with custom media wall unit.',
        alt: 'Villa family room interior with timber media wall Pune',
        aspectRatio: 'landscape'
      }
    ],
    featured: false
  }
];

export interface PortfolioImageItem {
  id: string;
  url: string;
  category: 'Hospitality' | 'Commercial' | 'Residential';
  title: string;
  location: string;
  caption: string;
  alt: string;
  folder: 'banqueat' | 'offices' | 'interiors';
}

export const ALL_PORTFOLIO_IMAGES: PortfolioImageItem[] = [
  // --- HOSPITALITY (All 6 images from banqueat) ---
  {
    id: 'banquet-01',
    url: '/images/banqueat/DSC08587.JPG',
    category: 'Hospitality',
    title: 'Grand Banquet Hall Vista',
    location: 'Hadapsar · Pune',
    caption: 'Main banquet hall expanse featuring custom ambient chandelier lighting grid and carpeted floors.',
    alt: 'Grand banquet hall interior designed by JIVAH Projects in Hadapsar Pune',
    folder: 'banqueat'
  },
  {
    id: 'banquet-02',
    url: '/images/banqueat/DSC08576.JPG',
    category: 'Hospitality',
    title: 'Grand Entrance Foyer',
    location: 'Hadapsar · Pune',
    caption: 'Architectural entrance foyer with illuminated arches and ambient warm illumination.',
    alt: 'Grand banquet entrance archways in Hadapsar Pune',
    folder: 'banqueat'
  },
  {
    id: 'banquet-03',
    url: '/images/banqueat/DSC08588.JPG',
    category: 'Hospitality',
    title: 'Dining Setup & Acoustic Panelling',
    location: 'Hadapsar · Pune',
    caption: 'Bespoke banquet dining tables framed by gold-threaded acoustic wall panels.',
    alt: 'Banquet dining arrangement with acoustic wall treatment Pune',
    folder: 'banqueat'
  },
  {
    id: 'banquet-04',
    url: '/images/banqueat/DSC08589.JPG',
    category: 'Hospitality',
    title: 'Chandelier Grid System',
    location: 'Hadapsar · Pune',
    caption: 'Custom overhead chandelier matrix illuminating the main hospitality hall.',
    alt: 'Chandelier lighting installation in Pune banquet hall',
    folder: 'banqueat'
  },
  {
    id: 'banquet-05',
    url: '/images/banqueat/DSC08675.JPG',
    category: 'Hospitality',
    title: 'VIP Lounge Seating',
    location: 'Hadapsar · Pune',
    caption: 'Plush velvet banquette seating for VIP guests within the venue.',
    alt: 'VIP banquet lounge seating interior in Hadapsar Pune',
    folder: 'banqueat'
  },
  {
    id: 'banquet-06',
    url: '/images/banqueat/DSC08871.JPG',
    category: 'Hospitality',
    title: 'Stage & Architectural Columns',
    location: 'Hadapsar · Pune',
    caption: 'Central event stage framed by custom warm lighting columns.',
    alt: 'Event stage architectural interior in Pune banquet hall',
    folder: 'banqueat'
  },

  // --- COMMERCIAL (All 3 images from offices) ---
  {
    id: 'office-01',
    url: '/images/offices/IMG_20260318_121652.jpg',
    category: 'Commercial',
    title: 'Open Workstation & Acoustic Ceiling',
    location: 'Hadapsar · Pune',
    caption: 'Luminous commercial office layout with ergonomic workstations and acoustic ceiling bays.',
    alt: 'Corporate office open workstation interior in Hadapsar Pune',
    folder: 'offices'
  },
  {
    id: 'office-02',
    url: '/images/offices/IMG_20260218_155838.jpg',
    category: 'Commercial',
    title: 'Executive Glass Conference Suite',
    location: 'Hadapsar · Pune',
    caption: 'Double-glazed glass partition conference room for private executive deliberations.',
    alt: 'Executive glass conference room interior in Hadapsar Pune office',
    folder: 'offices'
  },
  {
    id: 'office-03',
    url: '/images/offices/IMG_20260218_161037.jpg',
    category: 'Commercial',
    title: 'Client Reception Lounge',
    location: 'Hadapsar · Pune',
    caption: 'Welcoming corporate reception seating with warm timber accents.',
    alt: 'Corporate reception lounge interior design Pune office',
    folder: 'offices'
  },

  // --- RESIDENTIAL (All 24 images from interiors) ---
  {
    id: 'res-01',
    url: '/images/interiors/IMG_20250118_125129.jpg',
    category: 'Residential',
    title: 'Hadapsar Living Lounge',
    location: 'Hadapsar · Pune',
    caption: 'Spacious 3 BHK living room with honed travertine flooring and custom bouclé sofa.',
    alt: 'Contemporary living room interior with travertine flooring in Hadapsar Pune',
    folder: 'interiors'
  },
  {
    id: 'res-02',
    url: '/images/interiors/IMG_20250105_112813 - Copy.jpg',
    category: 'Residential',
    title: 'Bespoke Entry Foyer',
    location: 'Hadapsar · Pune',
    caption: 'Custom entry foyer with smoked oak wall paneling and warm LED channel lighting.',
    alt: 'Bespoke entry foyer joinery in Hadapsar home',
    folder: 'interiors'
  },
  {
    id: 'res-03',
    url: '/images/interiors/IMG_20250105_112832 - Copy.jpg',
    category: 'Residential',
    title: 'Modular Kitchen Island',
    location: 'Hadapsar · Pune',
    caption: 'Tactile kitchen island combining quartz surfaces with concealed soft-close storage.',
    alt: 'Modular kitchen island interior design Pune',
    folder: 'interiors'
  },
  {
    id: 'res-04',
    url: '/images/interiors/IMG_20250105_113101 - Copy.jpg',
    category: 'Residential',
    title: 'Smoked Oak Study Alcove',
    location: 'Hadapsar · Pune',
    caption: 'Integrated home study nook with custom timber shelving and desk.',
    alt: 'Oak paneled home office study alcove Pune',
    folder: 'interiors'
  },
  {
    id: 'res-05',
    url: '/images/interiors/IMG_20250105_113240 - Copy.jpg',
    category: 'Residential',
    title: 'Dining Room Credenza',
    location: 'Hadapsar · Pune',
    caption: 'Tailored dining sideboard with integrated LED display niche.',
    alt: 'Dining room credenza joinery Pune',
    folder: 'interiors'
  },
  {
    id: 'res-06',
    url: '/images/interiors/IMG_20250105_113541 - Copy.jpg',
    category: 'Residential',
    title: 'Master Bedroom Suite',
    location: 'Hadapsar · Pune',
    caption: 'Master bedroom suite with upholstered headboard wall and oak wardrobes.',
    alt: 'Master bedroom suite interior design Hadapsar Pune',
    folder: 'interiors'
  },
  {
    id: 'res-07',
    url: '/images/interiors/IMG_20250118_125501 - Copy.jpg',
    category: 'Residential',
    title: 'Fluted Timber & Stone Detail',
    location: 'Hadapsar · Pune',
    caption: 'Detail view of custom fluted timber wall paneling and stone niche.',
    alt: 'Fluted timber wall paneling detail Pune home',
    folder: 'interiors'
  },
  {
    id: 'res-08',
    url: '/images/interiors/IMG_20250118_125532 - Copy.jpg',
    category: 'Residential',
    title: 'Balcony Lounge Transition',
    location: 'Hadapsar · Pune',
    caption: 'Indoor-outdoor balcony lounge seamlessly extending the internal living room.',
    alt: 'Indoor outdoor balcony lounge transition Hadapsar',
    folder: 'interiors'
  },
  {
    id: 'res-09',
    url: '/images/interiors/IMG_20250313_131005.jpg',
    category: 'Residential',
    title: 'Koregaon Park Living Sanctuary',
    location: 'Koregaon Park · Pune',
    caption: 'Open-plan living and dining area in a Koregaon Park residence.',
    alt: 'Living room interior in Koregaon Park Pune home',
    folder: 'interiors'
  },
  {
    id: 'res-10',
    url: '/images/interiors/IMG_20250313_131134.jpg',
    category: 'Residential',
    title: 'Modular Kitchen Task Lighting',
    location: 'Koregaon Park · Pune',
    caption: 'Modular kitchen featuring handleless cabinetry and LED task lighting.',
    alt: 'Modular kitchen interior in Koregaon Park Pune',
    folder: 'interiors'
  },
  {
    id: 'res-11',
    url: '/images/interiors/IMG_20250313_131230.jpg',
    category: 'Residential',
    title: 'Kitchen Counter & Splashback',
    location: 'Koregaon Park · Pune',
    caption: 'Stain-resistant quartz counter paired with seamless marble splashback.',
    alt: 'Quartz kitchen counter and splashback Pune',
    folder: 'interiors'
  },
  {
    id: 'res-12',
    url: '/images/interiors/IMG_20250313_131420.jpg',
    category: 'Residential',
    title: 'Bedroom Wardrobe Joinery',
    location: 'Koregaon Park · Pune',
    caption: 'Full-height bedroom wardrobes with integrated wardrobe lighting.',
    alt: 'Full-height bedroom wardrobe joinery Pune',
    folder: 'interiors'
  },
  {
    id: 'res-13',
    url: '/images/interiors/IMG_20250313_131743.jpg',
    category: 'Residential',
    title: 'Floating Bedside Nightstand',
    location: 'Koregaon Park · Pune',
    caption: 'Wall-mounted timber nightstand with brass reading sconce.',
    alt: 'Floating bedside nightstand interior detail Pune',
    folder: 'interiors'
  },
  {
    id: 'res-14',
    url: '/images/interiors/IMG_20250313_131752.jpg',
    category: 'Residential',
    title: 'Bedroom Vanity Mirror',
    location: 'Koregaon Park · Pune',
    caption: 'Custom vanity desk with arched backlit mirror.',
    alt: 'Bedroom vanity desk and arched mirror Pune',
    folder: 'interiors'
  },
  {
    id: 'res-15',
    url: '/images/interiors/IMG_20250313_132914.jpg',
    category: 'Residential',
    title: 'Guest Bedroom Sanctuary',
    location: 'Koregaon Park · Pune',
    caption: 'Serene guest bedroom with organic linen bedding and textured rug.',
    alt: 'Guest bedroom sanctuary interior Koregaon Park Pune',
    folder: 'interiors'
  },
  {
    id: 'res-16',
    url: '/images/interiors/IMG_20250313_133637.jpg',
    category: 'Residential',
    title: 'Micro-cement Luxury Bathroom',
    location: 'Koregaon Park · Pune',
    caption: 'Minimalist bathroom with micro-cement walls and matte black fixtures.',
    alt: 'Micro-cement luxury bathroom interior design Pune',
    folder: 'interiors'
  },
  {
    id: 'res-17',
    url: '/images/interiors/IMG_20250118_125548.jpg',
    category: 'Residential',
    title: 'Penthouse Skyline Living',
    location: 'Amanora Park Town · Pune',
    caption: 'High-floor penthouse living room framing panoramic Pune skyline vistas.',
    alt: 'Penthouse living room interior in Amanora Town Pune',
    folder: 'interiors'
  },
  {
    id: 'res-18',
    url: '/images/interiors/IMG_20250118_132127 - Copy.jpg',
    category: 'Residential',
    title: 'Penthouse Formal Dining',
    location: 'Amanora Park Town · Pune',
    caption: 'Formal dining area with statement brass chandelier overhang.',
    alt: 'Penthouse formal dining interior Pune',
    folder: 'interiors'
  },
  {
    id: 'res-19',
    url: '/images/interiors/IMG_20250118_132150.jpg',
    category: 'Residential',
    title: 'Penthouse Lounge & Stone Table',
    location: 'Amanora Park Town · Pune',
    caption: 'Low-profile lounge seating surrounding a carved natural stone table.',
    alt: 'Penthouse lounge seating with stone table Pune',
    folder: 'interiors'
  },
  {
    id: 'res-20',
    url: '/images/interiors/IMG_20250118_132208 - Copy.jpg',
    category: 'Residential',
    title: 'Private Bar Nook',
    location: 'Amanora Park Town · Pune',
    caption: 'Custom home bar nook featuring backlit onyx counter and brass shelves.',
    alt: 'Private home bar nook interior detail Amanora Pune',
    folder: 'interiors'
  },
  {
    id: 'res-21',
    url: '/images/interiors/IMG_20250105_113619.jpg',
    category: 'Residential',
    title: 'Dressing Room Glass Doors',
    location: 'Amanora Park Town · Pune',
    caption: 'Dressing room featuring tinted glass wardrobe doors and warm interior lighting.',
    alt: 'Dressing room tinted glass wardrobe doors Pune',
    folder: 'interiors'
  },
  {
    id: 'res-22',
    url: '/images/interiors/IMG_20260913_171640 (1).jpg',
    category: 'Residential',
    title: 'Courtyard Villa Lounge',
    location: 'Magarpatta City · Pune',
    caption: 'Multi-level villa lounge with exposed timber ceiling beams facing green garden courtyard.',
    alt: 'Courtyard villa lounge interior in Magarpatta Pune',
    folder: 'interiors'
  },
  {
    id: 'res-23',
    url: '/images/interiors/IMG_20260913_171649 (1).jpg',
    category: 'Residential',
    title: 'Staircase Lobby & Floating Treads',
    location: 'Magarpatta City · Pune',
    caption: 'Bespoke staircase lobby with floating wood treads and architectural wall sconces.',
    alt: 'Villa staircase lobby with floating treads Magarpatta Pune',
    folder: 'interiors'
  },
  {
    id: 'res-24',
    url: '/images/interiors/IMG_20260913_172536 (1).jpg',
    category: 'Residential',
    title: 'Family Living Media Wall',
    location: 'Magarpatta City · Pune',
    caption: 'Sunlit family room centered around a full-height timber media wall.',
    alt: 'Villa family room timber media wall interior Magarpatta Pune',
    folder: 'interiors'
  }
];

