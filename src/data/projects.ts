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
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    heroAlt: 'Contemporary living room interior designed by JIVAH Projects in Hadapsar Pune',
    portraitImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
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
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      caption: 'Transformation of a raw concrete shell in Hadapsar into a warm travertine & oak living sanctuary.'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
        caption: 'The primary living lounge facing the garden balcony in Hadapsar, Pune.',
        alt: 'Primary living lounge interior with custom sofa and travertine flooring in Hadapsar Pune',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
        caption: 'Tactile kitchen island combining quartz surfaces with brushed bronze hardware.',
        alt: 'Modern modular kitchen interior with stone island in Pune home',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        caption: 'Custom smoked oak study alcove with warm LED channel illumination.',
        alt: 'Wood paneled home office study interior designed by JIVAH Projects Pune',
        aspectRatio: 'landscape'
      }
    ],
    featured: true,
    featuredLayout: 'large'
  },
  {
    id: 'koregaon-park-penthouse',
    slug: 'koregaon-park-penthouse',
    title: 'KOREGAON PARK PENTHOUSE',
    subtitle: 'Explorations in spatial height, velvet textures, and bespoke lighting in Koregaon Park, Pune.',
    location: 'Koregaon Park · Pune',
    category: 'Residential',
    year: '2025',
    area: '4,500 sq. ft.',
    scope: 'Interior Design, Modular Kitchen & Soft Furnishings',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop',
    heroAlt: 'High-ceiling penthouse living room interior designed in Koregaon Park Pune',
    portraitImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Double-height residential penthouse interior incorporating grey marble flooring, velvet seating, and sheer drapery.',
    conceptStatement: 'Interior atmosphere is born when raw natural surfaces meet soft, inviting human furniture.',
    spatialFeeling: 'Expansive yet intimate; an art lover’s sanctuary bathed in soft, diffused daylight.',
    fullDescription: [
      'Designed in Koregaon Park, Pune, this duplex penthouse reorganizes 4,500 square feet around curated furniture compositions.',
      'A microcement feature wall acts as an acoustic backdrop for contemporary paintings, softened by sheer linen drapes and deep velvet seating.',
      'Custom floating storage conceals everyday clutter, maintaining visual tranquility at all times.'
    ],
    materials: [
      { name: 'Pietra Grey Marble', description: 'Honed grey stone with subtle quartz veining' },
      { name: 'Belgian Sheer Linen', description: 'Custom woven drapery for light control' }
    ],
    furnitureCuration: [
      { piece: 'Curved Velvet Conversation Sofa', designerOrMaker: 'JIVAH Edition', notes: 'Mineral green velvet with brass accent base' }
    ],
    colorPalette: [
      { name: 'Pietra Slate', hex: '#3B3F43' },
      { name: 'Off-White Linen', hex: '#F2EFE9' },
      { name: 'Deep Teal Accent', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
        caption: 'Double-height living lounge with custom sheer drapery in Pune.',
        alt: 'Double height luxury living room interior with sheer drapes in Pune penthouse',
        aspectRatio: 'wide'
      }
    ],
    featured: true,
    featuredLayout: 'tall'
  },
  {
    id: 'baner-villa-interior',
    slug: 'baner-villa-interior',
    title: 'BANER VILLA INTERIOR',
    subtitle: 'Seamless indoor-outdoor tropical harmony with natural teakwood furniture and soft water courtyard accents.',
    location: 'Baner · Pune',
    category: 'Residential',
    year: '2025',
    area: '5,200 sq. ft.',
    scope: 'Interior Spatial Design, Furniture & Styling',
    heroImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop',
    heroAlt: 'Residential villa interior with teakwood furniture and courtyard views in Baner Pune',
    portraitImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Contemporary villa interior celebrating reclaimed teakwood furniture, lime wash walls, and cross-ventilated living verandas.',
    conceptStatement: 'When interior spaces embrace surrounding gardens, daily life acquires a calm, meditative rhythm.',
    spatialFeeling: 'Breezy, grounded, organic, filled with natural sunlight and teakwood warmth.',
    fullDescription: [
      'Situated in Baner, Pune, this villa interior was furnished with handcrafted teakwood pieces, terracotta accents, and soft linen fabrics.',
      'Deep roof overhangs cast horizontal shadow patterns across polished floors, inviting gentle cross ventilation through slatted timber doors.'
    ],
    materials: [
      { name: 'Reclaimed Teakwood', description: 'Restored teak timber for custom louvers and daybeds' }
    ],
    furnitureCuration: [
      { piece: 'Teak Daybed', designerOrMaker: 'JIVAH Studio', notes: 'Strung with natural woven jute straps' }
    ],
    colorPalette: [
      { name: 'Warm Terracotta', hex: '#D27D56' },
      { name: 'Teak Amber', hex: '#9C6644' },
      { name: 'Teal Blue', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop',
        caption: 'Living veranda lounge furnished with custom teakwood seating.',
        alt: 'Tropical villa interior living veranda with wooden seating in Baner Pune',
        aspectRatio: 'wide'
      }
    ],
    featured: true,
    featuredLayout: 'standard'
  },
  {
    id: 'design-gallery-lounge',
    slug: 'design-gallery-lounge',
    title: 'DESIGN GALLERY LOUNGE',
    subtitle: 'A quiet commercial interior gallery space defined by soft plaster arches and warm lighting in Pune.',
    location: 'Kharadi · Pune',
    category: 'Commercial',
    year: '2026',
    area: '3,800 sq. ft.',
    scope: 'Commercial Interior Design & Lighting Design',
    heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2000&auto=format&fit=crop',
    heroAlt: 'Commercial interior design showroom gallery with arched walls in Pune',
    portraitImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Boutique design showroom interior featuring sculpted plaster archways and seamless limestone display pedestals.',
    conceptStatement: 'An interior designed for clarity transforms physical objects into works of art.',
    spatialFeeling: 'Serene, acoustic, gallery-like with warm indirect lighting.',
    fullDescription: [
      'Conceived as a boutique showroom lounge in Kharadi, Pune, visitors move through sculpted plaster arches illuminated by perimeter cove lighting.'
    ],
    materials: [
      { name: 'Sandblasted Limestone', description: 'Monolithic display pedestals and low tables' }
    ],
    furnitureCuration: [
      { piece: 'Limestone Plinth Display', designerOrMaker: 'JIVAH Custom', notes: 'Integrated micro-spot illumination' }
    ],
    colorPalette: [
      { name: 'Off-White Plaster', hex: '#F8F9F8' },
      { name: 'Sandstone Grey', hex: '#C5C1B8' },
      { name: 'Teal Accent', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1600&auto=format&fit=crop',
        caption: 'Exhibition corridor featuring recessed lighting troughs in Pune commercial space.',
        alt: 'Commercial interior showroom gallery with archway lighting in Pune',
        aspectRatio: 'wide'
      }
    ],
    featured: true,
    featuredLayout: 'wide'
  }
];
