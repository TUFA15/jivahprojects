export type MainCategory = 'Residential' | 'Commercial' | 'Hospitality';
export type RoomType =
  | 'Living Room'
  | 'Bedroom'
  | 'Dining Room'
  | 'Kitchen'
  | 'Mandir'
  | 'Wall Finishes'
  | 'TV'
  | 'Study'
  | 'Cupboards';
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
  // 1. RESIDENTIAL — Sourced directly from interior folder
  // =========================================================================

  // --- Living Room (12) ---
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
    url: '/images/interiors/living (7).jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'portrait',
    title: 'Living Credenza & Bar Console',
    caption: 'Bespoke living display credenza with tinted mirror backsplash, backlit glassware storage, and fluted acoustic ceiling detailing.',
    alt: 'JIVAH Projects residential living room credenza and bar console'
  },
  {
    id: 'res-living-10',
    url: '/images/interiors/IMG_20250118_132150.jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'landscape',
    title: 'Lounge & Stone Coffee Table',
    caption: 'Low-profile lounge seating surrounding a carved natural stone coffee table.',
    alt: 'JIVAH Projects residential living room seating'
  },
  {
    id: 'res-living-11',
    url: '/images/interiors/living (9).jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'portrait',
    title: 'Sunlit Living Salon',
    caption: 'Vertical architectural living room space welcoming soft daylight.',
    alt: 'JIVAH Projects residential living room interior'
  },
  {
    id: 'res-living-12',
    url: '/images/interiors/HERO.jpg',
    category: 'Residential',
    roomType: 'Living Room',
    orientation: 'landscape',
    title: 'Architectural Foyer & Open Living',
    caption: 'Sophisticated open-plan living entrance featuring chevron timber cabinetry, custom display shelving, and linear vertical illumination.',
    alt: 'JIVAH Projects residential foyer and open living interior'
  },

  // --- Bedroom (6) ---
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
    url: '/images/interiors/bedroom (2).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'landscape',
    title: 'Bedroom Vanity Desk',
    caption: 'Custom bedroom vanity desk with arched backlit mirror.',
    alt: 'JIVAH Projects residential bedroom vanity interior'
  },
  {
    id: 'res-bed-03',
    url: '/images/interiors/bedroom (3).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'landscape',
    title: 'Floating Bedside Nightstand',
    caption: 'Wall-mounted timber nightstand with architectural reading sconce.',
    alt: 'JIVAH Projects residential bedroom nightstand detail'
  },
  {
    id: 'res-bed-04',
    url: '/images/interiors/bedroom (6).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'landscape',
    title: 'Primary Bedroom Haven',
    caption: 'Refined contemporary bedroom with warm timber panelling and serene illumination.',
    alt: 'JIVAH Projects residential bedroom interior'
  },
  {
    id: 'res-bed-05',
    url: '/images/interiors/bedroom (7).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'portrait',
    title: 'Minimalist Bedroom Suite',
    caption: 'Vertical architectural view of peaceful sleeping quarters.',
    alt: 'JIVAH Projects residential bedroom interior'
  },
  {
    id: 'res-bed-06',
    url: '/images/interiors/bedroom (8).jpg',
    category: 'Residential',
    roomType: 'Bedroom',
    orientation: 'portrait',
    title: 'Contemporary Bedroom Retreat',
    caption: 'Quiet residential bedroom design tuned for relaxation and acoustic calm.',
    alt: 'JIVAH Projects residential bedroom interior'
  },

  // --- Dining Room (1) ---
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

  // --- Kitchen (9) ---
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
  {
    id: 'res-kitchen-02',
    url: '/images/interiors/kitchen (1).jpg',
    category: 'Residential',
    roomType: 'Kitchen',
    orientation: 'portrait',
    title: 'Sleek Modular Kitchen Suite',
    caption: 'Custom modular kitchen with handleless cabinets and built-in lighting.',
    alt: 'JIVAH Projects residential kitchen interior'
  },
  {
    id: 'res-kitchen-03',
    url: '/images/interiors/kitchen (2).jpg',
    category: 'Residential',
    roomType: 'Kitchen',
    orientation: 'landscape',
    title: 'Island Counter & Preparation Area',
    caption: 'Central kitchen island with durable quartz worktop and sleek storage drawers.',
    alt: 'JIVAH Projects residential kitchen island'
  },
  {
    id: 'res-kitchen-04',
    url: '/images/interiors/kitchen (3).jpg',
    category: 'Residential',
    roomType: 'Kitchen',
    orientation: 'portrait',
    title: 'Minimalist Kitchen Joinery',
    caption: 'Full-height kitchen cabinetry providing concealed pantry and appliance housing.',
    alt: 'JIVAH Projects residential kitchen cabinetry'
  },
  {
    id: 'res-kitchen-05',
    url: '/images/interiors/kitchen (4).jpg',
    category: 'Residential',
    roomType: 'Kitchen',
    orientation: 'portrait',
    title: 'Concealed Kitchen Cabinetry',
    caption: 'Streamlined kitchen surfaces with integrated LED task lighting strips.',
    alt: 'JIVAH Projects residential kitchen interior'
  },
  {
    id: 'res-kitchen-06',
    url: '/images/interiors/kitchen (5).jpg',
    category: 'Residential',
    roomType: 'Kitchen',
    orientation: 'portrait',
    title: 'Quartz Countertop & Splashback',
    caption: 'Premium engineered stone countertop meeting textured ceramic wall tile.',
    alt: 'JIVAH Projects residential kitchen counter detail'
  },
  {
    id: 'res-kitchen-07',
    url: '/images/interiors/kitchen (6).jpg',
    category: 'Residential',
    roomType: 'Kitchen',
    orientation: 'portrait',
    title: 'High-Gloss Kitchen Cabinetry',
    caption: 'Reflective overhead cabinets enhancing spatial lightness and utility.',
    alt: 'JIVAH Projects residential kitchen cabinets'
  },
  {
    id: 'res-kitchen-08',
    url: '/images/interiors/kitchen (7).jpg',
    category: 'Residential',
    roomType: 'Kitchen',
    orientation: 'portrait',
    title: 'Architectural Kitchen Layout',
    caption: 'Ergonomic kitchen work-triangle configured for culinary ease.',
    alt: 'JIVAH Projects residential kitchen space'
  },
  {
    id: 'res-kitchen-09',
    url: '/images/interiors/kitchen (8).jpg',
    category: 'Residential',
    roomType: 'Kitchen',
    orientation: 'landscape',
    title: 'Modern Culinary Space',
    caption: 'Spacious kitchen design featuring seamless quartz surfaces and soft ambient cove glow.',
    alt: 'JIVAH Projects residential modular kitchen interior'
  },

  // --- Mandir (3) ---
  {
    id: 'res-mandir-01',
    url: '/images/interiors/mandir.jpg',
    category: 'Residential',
    roomType: 'Mandir',
    orientation: 'portrait',
    title: 'Bespoke Mandir Sanctuary',
    caption: 'Custom mandir prayer sanctuary featuring backlit stone counter and warm vertical lighting.',
    alt: 'JIVAH Projects residential mandir interior'
  },
  {
    id: 'res-mandir-02',
    url: '/images/interiors/mandir (1).jpg',
    category: 'Residential',
    roomType: 'Mandir',
    orientation: 'portrait',
    title: 'Sacred Prayer Alcove',
    caption: 'Peaceful residential prayer space framed by handcrafted lattice and ambient radiance.',
    alt: 'JIVAH Projects residential mandir interior'
  },
  {
    id: 'res-mandir-03',
    url: '/images/interiors/mandir (2).jpg',
    category: 'Residential',
    roomType: 'Mandir',
    orientation: 'portrait',
    title: 'Contemporary Pooja Room Detail',
    caption: 'Dedicated pooja room joinery with carved architectural motifs and sacred niche lighting.',
    alt: 'JIVAH Projects residential mandir interior'
  },

  // --- Wall Finishes (6) ---
  {
    id: 'res-wall-01',
    url: '/images/interiors/wall finishes.jpg',
    category: 'Residential',
    roomType: 'Wall Finishes',
    orientation: 'portrait',
    title: 'Architectural Wall Finish & Sconce Detail',
    caption: 'Textured architectural wall finish and decorative fluted paneling detail.',
    alt: 'JIVAH Projects residential wall finish'
  },
  {
    id: 'res-wall-02',
    url: '/images/interiors/wall finishes (1).jpg',
    category: 'Residential',
    roomType: 'Wall Finishes',
    orientation: 'portrait',
    title: 'Textured Feature Wall Treatment',
    caption: 'Artisanal textured plaster wall creating subtle shadow transitions under grazing light.',
    alt: 'JIVAH Projects residential wall finish'
  },
  {
    id: 'res-wall-03',
    url: '/images/interiors/wall finishes (2).jpg',
    category: 'Residential',
    roomType: 'Wall Finishes',
    orientation: 'portrait',
    title: 'Decorative Wall Paneling',
    caption: 'Bespoke geometric wall paneling system framing the residential living volume.',
    alt: 'JIVAH Projects residential wall finish'
  },
  {
    id: 'res-wall-04',
    url: '/images/interiors/wall finishes (3).jpg',
    category: 'Residential',
    roomType: 'Wall Finishes',
    orientation: 'portrait',
    title: 'Fluted Architectural Wall Texture',
    caption: 'Vertical fluted timber wall accents offering acoustic absorption and visual warmth.',
    alt: 'JIVAH Projects residential wall finish'
  },
  {
    id: 'res-wall-05',
    url: '/images/interiors/wall finishes (4).jpg',
    category: 'Residential',
    roomType: 'Wall Finishes',
    orientation: 'portrait',
    title: 'Minimalist Geometric Wall Paneling',
    caption: 'Precision shadow-gap wall detailing with integrated cove illumination.',
    alt: 'JIVAH Projects residential wall finish'
  },
  {
    id: 'res-wall-06',
    url: '/images/interiors/wall finishes (5).jpg',
    category: 'Residential',
    roomType: 'Wall Finishes',
    orientation: 'portrait',
    title: 'Arched Fluted Feature Wall & Display Niche',
    caption: 'Custom arched fluted wall partition with marble feature inlay and illuminated glass display shelves.',
    alt: 'JIVAH Projects residential wall finish'
  },

  // --- TV (3) ---
  {
    id: 'res-tv-01',
    url: '/images/interiors/TV cupboard.jpg',
    category: 'Residential',
    roomType: 'TV',
    orientation: 'portrait',
    title: 'TV Cupboard & Credenza',
    caption: 'Custom architectural media cupboard with vertical timber acoustic slats.',
    alt: 'JIVAH Projects residential TV unit'
  },
  {
    id: 'res-tv-02',
    url: '/images/interiors/TV section.jpg',
    category: 'Residential',
    roomType: 'TV',
    orientation: 'landscape',
    title: 'TV Section & Staircase Lobby',
    caption: 'Living room TV section and adjacent staircase lobby with architectural wall sconces.',
    alt: 'JIVAH Projects residential TV unit'
  },
  {
    id: 'res-tv-03',
    url: '/images/interiors/TV unit.jpg',
    category: 'Residential',
    roomType: 'TV',
    orientation: 'landscape',
    title: 'Contemporary TV Entertainment Unit',
    caption: 'Wide-format floating entertainment console with integrated cable management and concealed drawers.',
    alt: 'JIVAH Projects residential TV unit'
  },

  // --- Study (3) ---
  {
    id: 'res-study-01',
    url: '/images/interiors/Study desks.jpg',
    category: 'Residential',
    roomType: 'Study',
    orientation: 'landscape',
    title: 'Bespoke Study Desk & Storage',
    caption: 'Dedicated study space with floating timber desk, task illumination, and integrated file drawers.',
    alt: 'JIVAH Projects residential study area'
  },
  {
    id: 'res-study-02',
    url: '/images/interiors/Study desks (2).jpg',
    category: 'Residential',
    roomType: 'Study',
    orientation: 'portrait',
    title: 'Integrated Study Corner & Shelving',
    caption: 'Quiet home work nook with vertical open bookshelf joinery and task lighting.',
    alt: 'JIVAH Projects residential study area'
  },
  {
    id: 'res-study-03',
    url: '/images/interiors/bedroom (5).jpg',
    category: 'Residential',
    roomType: 'Study',
    orientation: 'landscape',
    title: 'Bedroom Study Alcove',
    caption: 'Integrated bedroom study alcove with custom timber shelving and floating desk joinery.',
    alt: 'JIVAH Projects residential study area'
  },

  // --- Cupboards (6) ---
  {
    id: 'res-cupboard-01',
    url: '/images/interiors/bedroom (1).jpg',
    category: 'Residential',
    roomType: 'Cupboards',
    orientation: 'portrait',
    title: 'Full-Height Bedroom Wardrobe Joinery',
    caption: 'Full-height bedroom wardrobes with integrated internal illumination and soft-close hardware.',
    alt: 'JIVAH Projects residential cupboard interior'
  },
  {
    id: 'res-cupboard-02',
    url: '/images/interiors/bedroom (4).jpg',
    category: 'Residential',
    roomType: 'Cupboards',
    orientation: 'landscape',
    title: 'Dressing Room Glass Wardrobe',
    caption: 'Dressing room featuring tinted glass wardrobe doors and warm interior lighting.',
    alt: 'JIVAH Projects residential cupboard interior'
  },
  {
    id: 'res-cupboard-03',
    url: '/images/interiors/cupboard.jpg',
    category: 'Residential',
    roomType: 'Cupboards',
    orientation: 'portrait',
    title: 'Bespoke Built-In Wardrobe Unit',
    caption: 'Full-height custom storage cupboards designed with seamless panels and minimal shadow gaps.',
    alt: 'JIVAH Projects residential cupboard interior'
  },
  {
    id: 'res-cupboard-04',
    url: '/images/interiors/cupboard (2).jpg',
    category: 'Residential',
    roomType: 'Cupboards',
    orientation: 'portrait',
    title: 'Minimalist Storage Cupboard',
    caption: 'Floor-to-ceiling bedroom storage joinery with satin tactile finish.',
    alt: 'JIVAH Projects residential cupboard interior'
  },
  {
    id: 'res-cupboard-05',
    url: '/images/interiors/cupboards.jpg',
    category: 'Residential',
    roomType: 'Cupboards',
    orientation: 'portrait',
    title: 'Architectural Master Wardrobe',
    caption: 'Tailored master bedroom cupboards with recessed finger-pull channels.',
    alt: 'JIVAH Projects residential cupboard interior'
  },
  {
    id: 'res-cupboard-06',
    url: '/images/interiors/cupboards (2).jpg',
    category: 'Residential',
    roomType: 'Cupboards',
    orientation: 'portrait',
    title: 'Custom Fluted Bedroom Cupboard',
    caption: 'Modern bedroom cupboards accented with subtle vertical texture and concealed hinges.',
    alt: 'JIVAH Projects residential cupboard interior'
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
