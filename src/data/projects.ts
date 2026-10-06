export type MainCategory = 'Residential' | 'Commercial' | 'Hospitality';
export type RoomType = 'Living Room' | 'Bedroom' | 'Dining Room' | 'Kitchen';
export type ImageOrientation = 'landscape' | 'portrait' | 'panoramic';

export interface GalleryImage {
  id: string;
  url: string;
  category: MainCategory;
  roomType?: RoomType;
  orientation: ImageOrientation;
  title: string;
  caption: string;
  alt: string;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // =========================================================================
  // 1. RESIDENTIAL (24 IMAGES) — Sourced directly from interior folder
  // =========================================================================

  // --- Living Room (13) ---
  {
    id: 'res-living-01',
    url: '/images/interiors/living (5).jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'landscape',
    title: 'Living Lounge',
    caption: 'Spacious living lounge with honed travertine flooring and custom bouclé sofa.',
    alt: 'JIVAH Projects residential living room interior'
  },
  {
    id: 'res-living-02',
    url: '/images/interiors/living (2).jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'landscape',
    title: 'Bespoke Entry Foyer',
    caption: 'Custom entry foyer with smoked oak wall paneling and warm LED channel lighting.',
    alt: 'JIVAH Projects residential living room and foyer interior'
  },
  {
    id: 'res-living-03',
    url: '/images/interiors/living (1).jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'portrait',
    title: 'Living Island & Joinery',
    caption: 'Tactile living island combining quartz surfaces with concealed soft-close cabinetry.',
    alt: 'JIVAH Projects residential living room island joinery'
  },
  {
    id: 'res-living-04',
    url: '/images/interiors/living (4).jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'landscape',
    title: 'Fluted Timber & Stone Detail',
    caption: 'Detail view of custom fluted timber wall paneling and natural stone niche.',
    alt: 'JIVAH Projects residential living room wall detail'
  },
  {
    id: 'res-living-05',
    url: '/images/interiors/living (3).jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'landscape',
    title: 'Balcony Lounge Transition',
    caption: 'Indoor-outdoor balcony lounge seamlessly extending the internal living room.',
    alt: 'JIVAH Projects residential living lounge and balcony transition'
  },
  {
    id: 'res-living-06',
    url: '/images/interiors/IMG_20250313_131005.jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'landscape',
    title: 'Open-Plan Living Sanctuary',
    caption: 'Open-plan living and lounge area with warm ambient cove illumination.',
    alt: 'JIVAH Projects residential living room interior'
  },
  {
    id: 'res-living-07',
    url: '/images/interiors/living (6).jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'portrait',
    title: 'Living Task Lighting Joinery',
    caption: 'Full-height living cabinetry featuring handleless doors and recessed task illumination.',
    alt: 'JIVAH Projects residential living room cabinetry'
  },
  {
    id: 'res-living-08',
    url: '/images/interiors/living.jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'portrait',
    title: 'Living Counter & Splashback',
    caption: 'Stain-resistant quartz surfaces paired with seamless marble splashback.',
    alt: 'JIVAH Projects residential living room counter detail'
  },
  {
    id: 'res-living-09',
    url: '/images/interiors/mandir.jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'portrait',
    title: 'Bespoke Mandir Sanctuary',
    caption: 'Custom mandir prayer sanctuary featuring backlit stone counter and warm vertical lighting.',
    alt: 'JIVAH Projects residential mandir sanctuary interior'
  },
  {
    id: 'res-living-10',
    url: '/images/interiors/TV cupboard.jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'portrait',
    title: 'TV Cupboard & Credenza',
    caption: 'Custom architectural media cupboard with vertical timber acoustic slats.',
    alt: 'JIVAH Projects residential TV cupboard joinery'
  },
  {
    id: 'res-living-11',
    url: '/images/interiors/TV section.jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'landscape',
    title: 'TV Section & Staircase Lobby',
    caption: 'Living room TV section and adjacent staircase lobby with architectural wall sconces.',
    alt: 'JIVAH Projects residential living room TV section'
  },
  {
    id: 'res-living-12',
    url: '/images/interiors/IMG_20260913_171640 (1).jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'portrait',
    title: 'Courtyard Villa Lounge',
    caption: 'Multi-level villa lounge with exposed timber ceiling beams facing green garden courtyard.',
    alt: 'JIVAH Projects residential living room lounge'
  },
  {
    id: 'res-living-13',
    url: '/images/interiors/IMG_20250118_132150.jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'landscape',
    title: 'Lounge & Stone Coffee Table',
    caption: 'Low-profile lounge seating surrounding a carved natural stone coffee table.',
    alt: 'JIVAH Projects residential living room seating'
  },

  // --- Bedroom (8) ---
  {
    id: 'res-bed-01',
    url: '/images/interiors/bedroom.jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'landscape',
    title: 'Master Bedroom Suite',
    caption: 'Master bedroom suite with upholstered headboard wall and oak wardrobes.',
    alt: 'JIVAH Projects residential bedroom interior'
  },
  {
    id: 'res-bed-02',
    url: '/images/interiors/bedroom (1).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'portrait',
    title: 'Bedroom Wardrobe Joinery',
    caption: 'Full-height bedroom wardrobes with integrated wardrobe illumination.',
    alt: 'JIVAH Projects residential bedroom wardrobe interior'
  },
  {
    id: 'res-bed-03',
    url: '/images/interiors/bedroom (2).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'landscape',
    title: 'Bedroom Vanity Desk',
    caption: 'Custom bedroom vanity desk with arched backlit mirror.',
    alt: 'JIVAH Projects residential bedroom vanity interior'
  },
  {
    id: 'res-bed-04',
    url: '/images/interiors/bedroom (3).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'landscape',
    title: 'Floating Bedside Nightstand',
    caption: 'Wall-mounted timber nightstand with architectural reading sconce.',
    alt: 'JIVAH Projects residential bedroom nightstand detail'
  },
  {
    id: 'res-bed-05',
    url: '/images/interiors/bedroom (4).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'landscape',
    title: 'Dressing Room Glass Wardrobe',
    caption: 'Dressing room featuring tinted glass wardrobe doors and warm interior lighting.',
    alt: 'JIVAH Projects residential dressing room interior'
  },
  {
    id: 'res-bed-06',
    url: '/images/interiors/bedroom (5).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'landscape',
    title: 'Bedroom Study Alcove',
    caption: 'Integrated bedroom study alcove with custom timber shelving and floating desk joinery.',
    alt: 'JIVAH Projects residential bedroom study alcove'
  },
  {
    id: 'res-bed-07',
    url: '/images/interiors/1.jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'portrait',
    title: 'Guest Bedroom Sanctuary',
    caption: 'Serene guest bedroom with organic linen bedding and soft neutral palette.',
    alt: 'JIVAH Projects residential guest bedroom interior'
  },
  {
    id: 'res-bed-08',
    url: '/images/interiors/IMG_20250313_133637.jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'landscape',
    title: 'Suite Bathroom & Dresser',
    caption: 'Minimalist suite bathroom with micro-cement walls and matte black fixtures.',
    alt: 'JIVAH Projects residential suite bathroom interior'
  },

  // --- Dining Room (2) ---
  {
    id: 'res-dining-01',
    url: '/images/interiors/dining.jpg',
    category: 'Residential',
    roomType: 'Dining Room',
    orientation: 'portrait',
    title: 'Dining Area & Feature Wall',
    caption: 'Sunlit dining area centered around an architectural timber feature wall.',
    alt: 'JIVAH Projects residential dining room interior'
  },
  {
    id: 'res-dining-02',
    url: '/images/interiors/2.jpg',
    category: 'Residential',
    roomType: 'Dining Room',
    orientation: 'landscape',
    title: 'Dining Room Credenza',
    caption: 'Tailored dining sideboard with integrated LED display niche.',
    alt: 'JIVAH Projects residential dining room credenza joinery'
  },

  // --- Kitchen (1) ---
  {
    id: 'res-kitchen-01',
    url: '/images/interiors/kitchen.jpg',
    category: 'Residential',
    roomType: 'Kitchen',
    orientation: 'landscape',
    title: 'Modular Kitchen & Skyline View',
    caption: 'Open modular kitchen layout framing panoramic city skyline vistas.',
    alt: 'JIVAH Projects residential modular kitchen interior'
  },

  // =========================================================================
  // 2. COMMERCIAL (3 IMAGES) — Sourced directly from offices folder
  // =========================================================================
  {
    id: 'office-01',
    url: '/images/offices/IMG_20260318_121652.jpg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Open Workstation & Acoustic Ceiling',
    caption: 'Luminous commercial office layout with ergonomic workstations and acoustic ceiling bays.',
    alt: 'JIVAH Projects commercial office interior'
  },
  {
    id: 'office-02',
    url: '/images/offices/IMG_20260218_155838.jpg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Executive Glass Conference Suite',
    caption: 'Double-glazed glass partition conference room for private executive deliberations.',
    alt: 'JIVAH Projects commercial conference room interior'
  },
  {
    id: 'office-03',
    url: '/images/offices/IMG_20260218_161037.jpg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Client Reception Lounge',
    caption: 'Welcoming corporate reception seating with warm timber accents.',
    alt: 'JIVAH Projects commercial reception lounge interior'
  },
  {
    id: 'comm-01',
    url: '/images/offices/commercial (1).jpeg',
    category: 'Commercial',
    orientation: 'portrait',
    title: 'Commercial Executive Suite',
    caption: 'Contemporary executive office suite with custom joinery and natural illumination.',
    alt: 'JIVAH Projects commercial office interior'
  },
  {
    id: 'comm-02',
    url: '/images/offices/commercial (2).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Collaborative Workspace Floor',
    caption: 'Open collaborative workspace designed with acoustic paneling and ergonomic seating.',
    alt: 'JIVAH Projects commercial office interior'
  },
  {
    id: 'comm-03',
    url: '/images/offices/commercial (3).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Corporate Conference Room',
    caption: 'Modern glass-partitioned meeting room with integrated presentation technology.',
    alt: 'JIVAH Projects commercial conference room interior'
  },
  {
    id: 'comm-04',
    url: '/images/offices/commercial (4).jpeg',
    category: 'Commercial',
    orientation: 'portrait',
    title: 'Architectural Office Corridor',
    caption: 'Linear office circulation hallway featuring recessed channel lighting.',
    alt: 'JIVAH Projects commercial office corridor'
  },
  {
    id: 'comm-05',
    url: '/images/offices/commercial (5).jpeg',
    category: 'Commercial',
    orientation: 'portrait',
    title: 'Executive Meeting Alcove',
    caption: 'Private executive discussion space with warm timber accents and acoustic wall treatment.',
    alt: 'JIVAH Projects commercial office interior'
  },
  {
    id: 'comm-06',
    url: '/images/offices/commercial (6).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Open Workstation Bay',
    caption: 'Spacious corporate workstation layout configured for focus and team collaboration.',
    alt: 'JIVAH Projects commercial workspace interior'
  },
  {
    id: 'comm-07',
    url: '/images/offices/commercial (7).jpeg',
    category: 'Commercial',
    orientation: 'portrait',
    title: 'Bespoke Office Storage Joinery',
    caption: 'Concealed full-height storage cabinetry designed with minimal shadow gaps.',
    alt: 'JIVAH Projects commercial office joinery'
  },
  {
    id: 'comm-08',
    url: '/images/offices/commercial (8).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Corporate Breakout Lounge',
    caption: 'Informal breakout seating zone creating a relaxed environment for team discussions.',
    alt: 'JIVAH Projects commercial lounge interior'
  },
  {
    id: 'comm-09',
    url: '/images/offices/commercial (9).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Boardroom Presentation Suite',
    caption: 'Formal boardroom setup equipped with ambient cove lighting and tailored acoustic finishes.',
    alt: 'JIVAH Projects commercial boardroom interior'
  },
  {
    id: 'comm-10',
    url: '/images/offices/commercial (10).jpeg',
    category: 'Commercial',
    orientation: 'portrait',
    title: 'Executive Cabin View',
    caption: 'Minimalist private cabin layout framing floor-to-ceiling perimeter daylight.',
    alt: 'JIVAH Projects commercial executive cabin'
  },
  {
    id: 'comm-11',
    url: '/images/offices/commercial (11).jpeg',
    category: 'Commercial',
    orientation: 'portrait',
    title: 'Office Feature Wall',
    caption: 'Architectural textured accent wall framing the executive office suite.',
    alt: 'JIVAH Projects commercial office feature wall'
  },
  {
    id: 'comm-12',
    url: '/images/offices/commercial (12).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Team Collaboration Area',
    caption: 'Multi-functional agile workspace encouraging team productivity and interaction.',
    alt: 'JIVAH Projects commercial collaborative workspace'
  },
  {
    id: 'comm-13',
    url: '/images/offices/commercial (13).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Executive Desk & Credenza',
    caption: 'Tailored executive desk arrangement paired with linear floating credenza storage.',
    alt: 'JIVAH Projects commercial executive desk joinery'
  },
  {
    id: 'comm-14',
    url: '/images/offices/commercial (14).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Acoustic Ceiling Workstation',
    caption: 'Task-focused workstation bay with baffle ceiling acoustic dampening.',
    alt: 'JIVAH Projects commercial office workstations'
  },
  {
    id: 'comm-15',
    url: '/images/offices/commercial (15).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Conference Deliberation Suite',
    caption: 'Modern glass conference suite with low-glare architectural lighting.',
    alt: 'JIVAH Projects commercial conference interior'
  },
  {
    id: 'comm-16',
    url: '/images/offices/commercial (16).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Corporate Meeting Space',
    caption: 'Dedicated meeting room with seamless acoustic finishes and integrated connectivity.',
    alt: 'JIVAH Projects commercial meeting space'
  },
  {
    id: 'comm-17',
    url: '/images/offices/commercial (17).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Open Office Overview',
    caption: 'Expansive commercial office floor layout balancing natural light and workstation ergonomics.',
    alt: 'JIVAH Projects commercial office interior'
  },
  {
    id: 'comm-18',
    url: '/images/offices/commercial (18).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Executive Discussion Suite',
    caption: 'Intimate executive deliberation lounge with tailored seating and clean architectural lines.',
    alt: 'JIVAH Projects commercial discussion suite'
  },
  {
    id: 'comm-19',
    url: '/images/offices/commercial (19).jpeg',
    category: 'Commercial',
    orientation: 'landscape',
    title: 'Linear Workstation Hub',
    caption: 'Optimized commercial workstation row designed for cable management and ergonomics.',
    alt: 'JIVAH Projects commercial workstation interior'
  },
  {
    id: 'comm-20',
    url: '/images/offices/commercial (20).jpeg',
    category: 'Commercial',
    orientation: 'portrait',
    title: 'Architectural Office Entry',
    caption: 'Vertical architectural entrance framing the corporate workspace interior.',
    alt: 'JIVAH Projects commercial office entrance'
  },

  // =========================================================================
  // 3. HOSPITALITY (6 IMAGES) — Sourced directly from banqueat folder
  // =========================================================================
  {
    id: 'banquet-01',
    url: '/images/banqueat/DSC08587.JPG',
    category: 'Hospitality',
    orientation: 'landscape',
    title: 'Grand Banquet Hall',
    caption: 'Main banquet hall expanse featuring custom ambient chandelier lighting grid.',
    alt: 'JIVAH Projects hospitality banquet interior'
  },
  {
    id: 'banquet-02',
    url: '/images/banqueat/DSC08576.JPG',
    category: 'Hospitality',
    orientation: 'portrait',
    title: 'Architectural Timber Staircase',
    caption: 'Illuminated timber staircase with custom brass wall sconces and integrated step lighting.',
    alt: 'JIVAH Projects hospitality architectural staircase'
  },
  {
    id: 'banquet-03',
    url: '/images/banqueat/DSC08588.JPG',
    category: 'Hospitality',
    orientation: 'landscape',
    title: 'Banquet Dining Suite',
    caption: 'Bespoke banquet dining tables framed by acoustic wall panels.',
    alt: 'JIVAH Projects hospitality dining arrangement'
  },
  {
    id: 'banquet-04',
    url: '/images/banqueat/DSC08589.JPG',
    category: 'Hospitality',
    orientation: 'landscape',
    title: 'Chandelier Grid System',
    caption: 'Custom overhead chandelier matrix illuminating the main hospitality hall.',
    alt: 'JIVAH Projects hospitality chandelier lighting installation'
  },
  {
    id: 'banquet-05',
    url: '/images/banqueat/DSC08675.JPG',
    category: 'Hospitality',
    orientation: 'landscape',
    title: 'VIP Lounge Seating',
    caption: 'Plush velvet banquette seating for VIP guests within the venue.',
    alt: 'JIVAH Projects hospitality VIP lounge seating'
  },
  {
    id: 'banquet-06',
    url: '/images/banqueat/DSC08871.JPG',
    category: 'Hospitality',
    orientation: 'panoramic',
    title: 'Stage & Lighting Columns',
    caption: 'Central event stage framed by custom warm lighting columns.',
    alt: 'JIVAH Projects hospitality event stage interior'
  }
];

export interface CuratedShowcaseItem extends GalleryImage {
  link: string;
}

// Curated 4-image selection for Home Page Portfolio Showcase
export const CURATED_HOME_IMAGES: CuratedShowcaseItem[] = [
  {
    ...GALLERY_IMAGES.find((img) => img.id === 'res-living-01')!,
    title: 'Living Lounge',
    link: '/work?category=Residential&room=Living%20Room',
  },
  {
    ...GALLERY_IMAGES.find((img) => img.id === 'res-bed-01')!,
    title: 'Master Bedroom Suite',
    link: '/work?category=Residential&room=Bedroom',
  },
  {
    ...GALLERY_IMAGES.find((img) => img.id === 'comm-01')!,
    title: 'Commercial Executive',
    link: '/work?category=Commercial',
  },
  {
    ...GALLERY_IMAGES.find((img) => img.id === 'banquet-01')!,
    title: 'Hospitality Showcase',
    link: '/work?category=Hospitality',
  },
];
