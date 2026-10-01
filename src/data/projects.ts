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
    aspectRatio?: 'landscape' | 'portrait' | 'square' | 'wide';
  }[];
  featured: boolean;
  featuredLayout?: 'large' | 'tall' | 'wide' | 'standard';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'jivah-residence',
    slug: 'jivah-residence',
    title: 'JIVAH RESIDENCE',
    subtitle: 'A sanctuary of quiet luxury, soft textures, and spatial warmth high above the city.',
    location: 'Mumbai · Malabar Hill',
    category: 'Residential',
    year: '2026',
    area: '6,800 sq. ft.',
    scope: 'Interior Architecture, Custom Furniture & Styling Curation',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    portraitImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Contemporary residence balancing raw travertine surfaces, smoked oak joinery, tactile linen, and ambient cove illumination.',
    conceptStatement: 'A home should feel like an sanctuary—a place where material authenticity and soft light allow the human mind to rest.',
    spatialFeeling: 'Calm, grounding, luxurious, with a tactile warmth that absorbs city noise into quiet cocooning comfort.',
    fullDescription: [
      'Overlooking the Arabian Sea in Malabar Hill, JIVAH Residence was created around how the family moves, rests, and gathers throughout the day.',
      'Instead of stark open spaces, we designed a series of intuitive interior zones framed by floating oak screens, linen sheers, and low-slung bouclé seating pods.',
      'Natural light filters through full-height sheer drapes during the day, while warm 2700K indirect cove lighting takes over at dusk, creating an atmosphere of quiet, timeless luxury.'
    ],
    materials: [
      { name: 'Travertine Romano', description: 'Unfilled honed slab flooring with soft warm beige tones' },
      { name: 'Smoked European Oak', description: 'Custom full-height millwork and acoustic wall paneling' },
      { name: 'Belgian Bouclé Linen', description: 'Tactile looped wool fabric for custom lounge seating' },
      { name: 'Hand-Patinated Bronze', description: 'Bespoke interior hardware and recessed lighting trims' }
    ],
    furnitureCuration: [
      { piece: 'Monolithic Low Lounge Sofa', designerOrMaker: 'JIVAH Atelier Custom', notes: 'Upholstered in organic off-white bouclé with concealed walnut plinth' },
      { piece: 'Sculptural Travertine Coffee Table', designerOrMaker: 'Bespoke Commission', notes: 'Carved from single Roman travertine block' },
      { piece: 'Smoked Oak Dining Table', designerOrMaker: 'JIVAH Craftsmen Guild', notes: '8-seater solid timber table with hand-rubbed oil finish' }
    ],
    colorPalette: [
      { name: 'Warm Off-White', hex: '#F8F9F8' },
      { name: 'Deep Teal Accent', hex: '#2F7B93' },
      { name: 'Travertine Beige', hex: '#E8E1D5' },
      { name: 'Smoked Oak Charcoal', hex: '#3D312A' },
      { name: 'Pale Teal Mist', hex: '#EEF5F6' }
    ],
    beforeAfter: {
      beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
      caption: 'Transformation of a raw 6,800 sq ft concrete shell into a warm travertine & oak living sanctuary.'
    },
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
        caption: 'The primary living lounge facing the ocean terrace.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop',
        caption: 'Tactile kitchen island combining honed stone with brushed bronze hardware.',
        aspectRatio: 'portrait'
      },
      {
        url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop',
        caption: 'Custom smoked oak reading alcove with ambient warm lighting.',
        aspectRatio: 'landscape'
      },
      {
        url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
        caption: 'Master suite featuring custom headboard wall in linen and brass.',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredLayout: 'large'
  },
  {
    id: 'the-atelier-penthouse',
    slug: 'the-atelier-penthouse',
    title: 'THE ATELIER PENTHOUSE',
    subtitle: 'Explorations in volume, tactile textures, and sculptural furniture curation.',
    location: 'New Delhi · Golf Links',
    category: 'Residential',
    year: '2025',
    area: '8,500 sq. ft.',
    scope: 'Interior Spatial Design, Art Curation & Styling',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop',
    portraitImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Double-height minimal penthouse incorporating honed Pietra Grey stone, velvet seating, and sheer Belgian drapery.',
    conceptStatement: 'Interior atmosphere is born when raw material strength meets soft, inviting human furniture.',
    spatialFeeling: 'Expansive yet intimate; an art collector’s sanctuary bathed in soft, diffused daylight.',
    fullDescription: [
      'Designed for an international art collector, The Atelier Penthouse reorganizes an 8,500-square-foot duplex around curated furniture compositions and tactile wall finishes.',
      'A board-formed concrete accent wall acts as an acoustic backdrop for contemporary artworks, softened by sheer linen drapes and deep velvet seating in rich mineral tones.',
      'Custom floating joinery conceals all clutter, allowing the interior to feel serene and uncluttered at all hours.'
    ],
    materials: [
      { name: 'Pietra Grey Marble', description: 'Deep grey honed stone with crisp quartz veining' },
      { name: 'Belgian Linen Drapes', description: 'Custom woven sheer drapery for solar diffusion' },
      { name: 'Ochre Saddle Leather', description: 'Tactile leather upholstery for lounge chairs' }
    ],
    furnitureCuration: [
      { piece: 'Curved Velvet Conversation Sofa', designerOrMaker: 'JIVAH Edition', notes: 'Mineral green velvet with brass accent rim' },
      { piece: 'Pietra Grey Low Credenza', designerOrMaker: 'Bespoke Joinery', notes: 'Integrated audio & ambient lighting' }
    ],
    colorPalette: [
      { name: 'Pietra Slate', hex: '#3B3F43' },
      { name: 'Off-White Linen', hex: '#F2EFE9' },
      { name: 'Deep Teal Accent', hex: '#2F7B93' },
      { name: 'Ochre Leather', hex: '#C68B59' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop',
        caption: 'Double-height interior lounge with custom sheer drapery.',
        aspectRatio: 'wide'
      },
      {
        url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop',
        caption: 'Detail of floating steel stair and linen wall texture.',
        aspectRatio: 'portrait'
      }
    ],
    featured: true,
    featuredLayout: 'tall'
  },
  {
    id: 'sanctuary-house',
    slug: 'sanctuary-house',
    title: 'SANCTUARY HOUSE',
    subtitle: 'Seamless dialogue between indoor tropical serenity, natural teakwood, and soft water reflections.',
    location: 'Goa · Assagao',
    category: 'Residential',
    year: '2025',
    area: '9,200 sq. ft.',
    scope: 'Interior Design, Furniture Design & Landscape Styling',
    heroImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2000&auto=format&fit=crop',
    portraitImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Tropical villa celebrating reclaimed teakwood furniture, lime wash walls, and cross-ventilated verandas.',
    conceptStatement: 'When interior spaces embrace surrounding nature, daily life acquires a rhythmic, meditative calm.',
    spatialFeeling: 'Breezy, grounded, organic, filled with the scent of teakwood and sounds of courtyard water.',
    fullDescription: [
      'Situated in Assagao, Sanctuary House was furnished with handcrafted teakwood pieces, terracotta accents, and linen soft furnishings.',
      'Deep roof overhangs cast horizontal shadow patterns across polished microcement floors, inviting gentle breezes through slatted timber doors.'
    ],
    materials: [
      { name: 'Reclaimed Teakwood', description: 'Restored vintage teak for custom louvers and daybeds' },
      { name: 'Polished Microcement', description: 'Seamless warm grey interior floor surface' }
    ],
    furnitureCuration: [
      { piece: 'Low Teak Daybed', designerOrMaker: 'Goan Master Joiner', notes: 'Strung with natural jute web straps' }
    ],
    colorPalette: [
      { name: 'Warm Terracotta', hex: '#D27D56' },
      { name: 'Teak Amber', hex: '#9C6644' },
      { name: 'Pale Mist', hex: '#EEF5F6' },
      { name: 'Teal Blue', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop',
        caption: 'Veranda lounge furnished with custom teak daybeds.',
        aspectRatio: 'wide'
      }
    ],
    featured: true,
    featuredLayout: 'standard'
  },
  {
    id: 'maison-monolith',
    slug: 'maison-monolith',
    title: 'MAISON MONOLITH',
    subtitle: 'A contemplative interior gallery space defined by soft plaster arches and warm lighting.',
    location: 'Bengaluru · Indiranagar',
    category: 'Commercial',
    year: '2026',
    area: '4,200 sq. ft.',
    scope: 'Commercial Interior Experience & Lighting Design',
    heroImage: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=2000&auto=format&fit=crop',
    portraitImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'High-end design showroom featuring sculpted plaster archways and seamless limestone display plinths.',
    conceptStatement: 'An interior designed for sensory clarity transforms objects into works of art.',
    spatialFeeling: 'Serene, acoustic, gallery-like with warm indirect lighting and soft curved surfaces.',
    fullDescription: [
      'Maison Monolith was conceived as a flagship design studio and exhibition space.',
      'Visitors move through sculpted plaster archways illuminated by indirect perimeter cove lighting.'
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
        caption: 'Exhibition corridor featuring recessed lighting troughs.',
        aspectRatio: 'wide'
      }
    ],
    featured: true,
    featuredLayout: 'wide'
  },
  {
    id: 'pavilion-by-the-bay',
    slug: 'pavilion-by-the-bay',
    title: 'PAVILION BY THE BAY',
    subtitle: 'Tactile hospitality lounge tailored around curved walnut joinery and saddle leather seating.',
    location: 'Mumbai · Worli',
    category: 'Hospitality',
    year: '2026',
    area: '5,400 sq. ft.',
    scope: 'Hospitality Interior Design & Custom Furniture',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop',
    portraitImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Private oceanfront lounge combining curved timber ceiling slats, terrazzo floor plates, and rich saddle leather.',
    conceptStatement: 'Hospitality elevated by tactile warmth, quiet acoustics, and ocean views.',
    spatialFeeling: 'Enveloping, intimate, rich in scent of leather and polished walnut.',
    fullDescription: [
      'Overlooking the sea in Worli, Pavilion by the Bay offers a refined lounge environment.',
      'Curved walnut ceiling slats provide exceptional acoustic dampening while housing warm accent spots.'
    ],
    materials: [
      { name: 'Curved American Walnut', description: 'Ceiling acoustic vaulting and wall ribbons' }
    ],
    furnitureCuration: [
      { piece: 'Saddle Leather Banquettes', designerOrMaker: 'JIVAH Bespoke', notes: 'Stitched in cognac leather' }
    ],
    colorPalette: [
      { name: 'Cognac Leather', hex: '#8B4513' },
      { name: 'American Walnut', hex: '#4A3B32' },
      { name: 'Teal Blue', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop',
        caption: 'Lounge seating bay with custom terrazzo flooring.',
        aspectRatio: 'wide'
      }
    ],
    featured: false,
    featuredLayout: 'standard'
  },
  {
    id: 'the-glass-kiln',
    slug: 'the-glass-kiln',
    title: 'THE GLASS KILN',
    subtitle: 'Warm tactile minimalism framing courtyard greenery in coastal Alibaug.',
    location: 'Alibaug · Coastal Enclave',
    category: 'Residential',
    year: '2025',
    area: '11,000 sq. ft.',
    scope: 'Interior Architecture, Joinery & Soft Styling',
    heroImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop',
    portraitImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop',
    thumbnail: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop',
    excerpt: 'Pavilion residence framed by stained cedar wall paneling, linen drapery, and black granite floor plates.',
    conceptStatement: 'Transparency and warmth working together to anchor family living in nature.',
    spatialFeeling: 'Luminous, open, grounded with cedar aroma and garden shadows.',
    fullDescription: [
      'Situated in Alibaug, The Glass Kiln is a single-level home centered around private garden courtyards.',
      'Stained cedar wall paneling introduces organic warmth, balancing cool granite floor plates.'
    ],
    materials: [
      { name: 'Stained Cedar Wood', description: 'Interior wall paneling and slatted doors' }
    ],
    furnitureCuration: [
      { piece: 'Cedar Low Credenza', designerOrMaker: 'JIVAH Edition', notes: 'Integrated linen storage' }
    ],
    colorPalette: [
      { name: 'Cedar Brown', hex: '#6F4E37' },
      { name: 'Warm Granite', hex: '#2A2A2A' },
      { name: 'Teal Accent', hex: '#2F7B93' }
    ],
    gallery: [
      {
        url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop',
        caption: 'Living pavilion looking out to the courtyard garden.',
        aspectRatio: 'wide'
      }
    ],
    featured: false,
    featuredLayout: 'standard'
  }
];
