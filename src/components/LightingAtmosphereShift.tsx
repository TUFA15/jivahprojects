import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AtmosphereState {
  id: 'morning' | 'afternoon' | 'dusk';
  title: string;
  label: string;
  time: string;
  image: string;
  feeling: string;
  lightingNotes: string;
  accentColor: string;
}

const ATMOSPHERE_STATES: AtmosphereState[] = [
  {
    id: 'morning',
    title: 'MORNING RADIANCE',
    label: 'Natural Diurnal Sunlight',
    time: '08:00 AM',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
    feeling: 'Invigorating, crisp, long diagonal sunbeams across raw travertine and wood grain.',
    lightingNotes: 'Direct low-angle solar beams, high luminosity, natural shadows.',
    accentColor: '#55B3C5',
  },
  {
    id: 'afternoon',
    title: 'AFTERNOON TRANQUILITY',
    label: 'Soft Diffused Shade',
    time: '02:30 PM',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop',
    feeling: 'Calm, contemplative balance with gentle ambient illumination through linen sheers.',
    lightingNotes: 'Diffused sky glow, soft shadow gradients, balanced color rendition.',
    accentColor: '#8FD3DC',
  },
  {
    id: 'dusk',
    title: 'EVENING COVE AMBIANCE',
    label: 'Warm Recessed Illumination',
    time: '08:00 PM',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop',
    feeling: 'Intimate, warm, cocooning quiet luxury with zero direct glare.',
    lightingNotes: '2700K indirect perimeter cove illumination, focal accent spots on art.',
    accentColor: '#2F7B93',
  },
];

export const LightingAtmosphereShift: React.FC = () => {
  const [selectedState, setSelectedState] = useState<AtmosphereState>(ATMOSPHERE_STATES[0]);

  return (
    <div className="bg-[#16465A] text-white p-8 md:p-12 space-y-8 border border-[#2F7B93]/30 relative overflow-hidden">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2F7B93]/30 pb-6">
        <div className="space-y-2">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8FD3DC]">
            [ INTERIOR ATMOSPHERE & LIGHT ]
          </span>
          <h3 className="font-serif text-3xl md:text-4xl uppercase text-white">
            HOW A SPACE FEELS THROUGHOUT THE DAY
          </h3>
        </div>

        {/* Time Toggle Buttons */}
        <div className="flex flex-wrap gap-2">
          {ATMOSPHERE_STATES.map((state) => {
            const isActive = selectedState.id === state.id;
            return (
              <button
                key={state.id}
                onClick={() => setSelectedState(state)}
                className={`text-xs font-mono tracking-widest uppercase px-4 py-2 transition-all duration-300 ${
                  isActive
                    ? 'bg-[#2F7B93] text-white shadow-xs border border-[#8FD3DC]/40'
                    : 'bg-[#16465A]/80 text-[#8FD3DC]/80 hover:text-white border border-[#2F7B93]/30'
                }`}
              >
                {state.time} · {state.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Display Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 overflow-hidden aspect-[16/10] bg-black/40 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedState.id}
              src={selectedState.image}
              alt={selectedState.title}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1.0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          <div className="absolute bottom-4 left-4 bg-[#16465A]/90 backdrop-blur-md px-3 py-1.5 border-l-2 border-[#8FD3DC] text-[10px] font-mono text-[#8FD3DC] uppercase tracking-wider">
            ATMOSPHERE: {selectedState.label}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-[#8FD3DC] tracking-widest uppercase">
              TIME: {selectedState.time}
            </span>
            <h4 className="font-serif text-2xl md:text-3xl uppercase text-white">
              {selectedState.title}
            </h4>
          </div>

          <div className="space-y-4 text-xs font-light leading-relaxed text-[#8FD3DC]/90">
            <div>
              <span className="text-[10px] font-mono text-white uppercase block tracking-wider mb-1">
                SPATIAL FEELING
              </span>
              <p className="font-serif text-lg text-white italic leading-snug">
                "{selectedState.feeling}"
              </p>
            </div>

            <div className="pt-2 border-t border-[#2F7B93]/30">
              <span className="text-[10px] font-mono text-[#8FD3DC] uppercase block tracking-wider mb-1">
                LIGHTING DESIGN DISCIPLINE
              </span>
              <p>{selectedState.lightingNotes}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
