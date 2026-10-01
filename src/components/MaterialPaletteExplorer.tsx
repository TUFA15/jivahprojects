import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface TextureItem {
  id: string;
  name: string;
  category: 'Stone' | 'Wood' | 'Textile' | 'Metal' | 'Plaster';
  tactileNotes: string;
  colorHex: string;
  image: string;
  pairings: string;
}

const TEXTURES: TextureItem[] = [
  {
    id: 'travertine-romano',
    name: 'TRAVERTINE ROMANO',
    category: 'Stone',
    tactileNotes: 'Honed, porous warm cream stone slabs that absorb sunlight into a soft glow.',
    colorHex: '#E8E1D5',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    pairings: 'Smoked European Oak & Brushed Bronze Hardware',
  },
  {
    id: 'smoked-oak',
    name: 'SMOKED EUROPEAN OAK',
    category: 'Wood',
    tactileNotes: 'Deep, rich dark timber grain with natural open pore oil finish.',
    colorHex: '#3D312A',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
    pairings: 'Chalk Lime Wash & Bouclé Linen Seating',
  },
  {
    id: 'boucle-linen',
    name: 'BELGIAN BOUCLÉ LINEN',
    category: 'Textile',
    tactileNotes: 'Tactile, textured looped yarn fabric bringing acoustic warmth to seating.',
    colorHex: '#F2EFE9',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    pairings: 'Pietra Grey Marble & Saddle Leather',
  },
  {
    id: 'brushed-bronze',
    name: 'HAND-PATINATED BRONZE',
    category: 'Metal',
    tactileNotes: 'Subtle metallic luster that oxidizes gracefully with human touch.',
    colorHex: '#2F7B93',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=800&auto=format&fit=crop',
    pairings: 'Deep Teal Navy Joinery & Lime Wash Walls',
  },
  {
    id: 'lime-wash-plaster',
    name: 'CHALK LIME WASH PLASTER',
    category: 'Plaster',
    tactileNotes: 'Velvety mineral matte wall finish with organic depth and shadow movement.',
    colorHex: '#F8F9F8',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=800&auto=format&fit=crop',
    pairings: 'Travertine Slabs & Soft Ambient Lighting',
  },
];

export const MaterialPaletteExplorer: React.FC = () => {
  const [activeTexture, setActiveTexture] = useState<TextureItem>(TEXTURES[0]);

  return (
    <div className="space-y-8 bg-[#EEF5F6]/60 p-8 md:p-12 border border-[#2F7B93]/15">
      <div className="space-y-3">
        <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
          [ TACTILITY & TEXTURE PALETTE ]
        </span>
        <h3 className="font-serif text-3xl md:text-4xl uppercase text-[#11181C]">
          MATERIALS THAT TOUCH THE SENSES
        </h3>
        <p className="text-sm font-light text-[#61747C] max-w-2xl">
          We curate authentic natural materials chosen for their tactile honesty, acoustic softness, and grace under light.
        </p>
      </div>

      {/* Selector Swatches */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
        {TEXTURES.map((texture) => {
          const isActive = activeTexture.id === texture.id;
          return (
            <button
              key={texture.id}
              onClick={() => setActiveTexture(texture)}
              className={`p-4 text-left border transition-all duration-300 focus:outline-none ${
                isActive
                  ? 'bg-white border-[#2F7B93] shadow-xs'
                  : 'bg-[#F8F9F8] border-[#2F7B93]/10 hover:border-[#2F7B93]/40'
              }`}
            >
              <div
                className="w-6 h-6 rounded-full mb-3 border border-black/10 shadow-2xs"
                style={{ backgroundColor: texture.colorHex }}
              />
              <span className="text-[9px] font-mono text-[#2F7B93] block uppercase tracking-wider">
                {texture.category}
              </span>
              <span className="font-serif text-sm text-[#11181C] block uppercase leading-snug font-medium">
                {texture.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTexture.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 md:p-8 border border-[#2F7B93]/20"
        >
          <div className="md:col-span-5 overflow-hidden aspect-[4/3] bg-[#EEF5F6]">
            <img
              src={activeTexture.image}
              alt={activeTexture.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-7 space-y-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#2F7B93] uppercase">
                MATERIAL CHARACTERISTICS // {activeTexture.category}
              </span>
              <h4 className="font-serif text-2xl md:text-3xl uppercase text-[#11181C] mt-1">
                {activeTexture.name}
              </h4>
            </div>

            <p className="text-sm font-light text-[#61747C] leading-relaxed">
              {activeTexture.tactileNotes}
            </p>

            <div className="pt-2 border-t border-[#EEF5F6] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-2 text-[#2F7B93]">
              <div>
                <span className="text-[#61747C] text-[10px] uppercase block">HARMONIOUS PAIRING:</span>
                <span className="font-sans font-medium text-[#11181C]">{activeTexture.pairings}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#61747C] text-[10px] uppercase">PALETTE SWATCH:</span>
                <span
                  className="inline-block w-4 h-4 rounded-full border"
                  style={{ backgroundColor: activeTexture.colorHex }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
