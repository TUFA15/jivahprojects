import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { BrandMotif } from '../components/BrandMotif';
import { PageTransition } from '../components/PageTransition';

export const AboutPage: React.FC = () => {
  const SENSORY_PROCESS_STEPS = [
    {
      num: '01',
      name: 'FEEL & OBSERVE',
      subtitle: 'Living Ritual Audit & Natural Solar Mapping',
      text: 'We begin by observing how you live, rest, and entertain. We map how daylight enters your space from sunrise to dusk, establishing the emotional foundation of the interior.',
    },
    {
      num: '02',
      name: 'MATERIAL & PALETTE',
      subtitle: 'Tactile Texture Swatches & Color Curation',
      text: 'We curate authentic stone slabs, open-grain wood veneers, bouclé wools, and mineral plaster samples. Every material is paired under real site lighting conditions.',
    },
    {
      num: '03',
      name: 'FURNITURE & LIGHT',
      subtitle: 'Bespoke Joinery & Ambient Lighting Schematics',
      text: 'Proportioning custom sofas, credenzas, and integrated joinery. We design recessed lighting troughs and indirect cove glow to eliminate glare and create cozy evening warmth.',
    },
    {
      num: '04',
      name: 'CRAFT & TAILOR',
      subtitle: 'Artisan Collaboration & Guild Procurement',
      text: 'Working hand-in-hand with master stonemasons, wood turners, bronze smiths, and textile weavers. We prototype key furniture pieces to ensure exceptional comfort.',
    },
    {
      num: '05',
      name: 'ELEVATE ATMOSPHERE',
      subtitle: 'Interior Styling & Acoustic Tuning',
      text: 'Hands-on spatial commissioning on site. Tuning acoustic drapes, position of artwork, scent notes, and lighting scenes so your home feels like a calm, cocooning sanctuary.',
    },
  ];

  return (
    <PageTransition>
      <div className="pt-36 pb-24 bg-[#F8F9F8] text-[#11181C]">
        {/* Hero Banner */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 space-y-8">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
            <BrandMotif size={16} color="#2F7B93" />
            <span>JIVAH PROJECTS · CREATIVE PHILOSOPHY</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.92] max-w-5xl">
            DESIGNING
            <br />
            WITH
            <br />
            <span className="italic font-normal text-[#2F7B93]">INTENTION.</span>
          </h1>

          <p className="text-xl sm:text-2xl font-light text-[#61747C] max-w-3xl leading-relaxed">
            An interior design studio focused on how spaces feel, how light moves, and how authentic materials enrich daily living.
          </p>
        </section>

        {/* Large Interior Visual */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="overflow-hidden aspect-[21/9] bg-[#EEF5F6] shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop"
              alt="JIVAH Studio Interior Atmosphere"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Studio Philosophy & Narrative */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <SectionHeading
                label="PHILOSOPHY"
                title="THE PSYCHOLOGY OF INTERIOR CALM"
              />
              <p className="text-base font-light text-[#61747C] leading-relaxed">
                Founded on the principle that your interior environment shapes your emotional state, JIVAH Projects creates spaces that offer acoustic peace, visual harmony, and tactile delight.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base md:text-lg font-light leading-relaxed text-[#11181C]/90">
              <p>
                We avoid artificial trends, superficial decorations, or sterile minimalist setups. Instead, our design language emerges from natural stone, warm timber, soft textiles, and custom lighting.
              </p>
              <p>
                From private coastal villas in Goa to high-rise penthouses in Mumbai and Delhi, we craft interior environments that feel personal, timeless, and deeply lived-in.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#2F7B93]/20 text-xs font-mono">
                <div>
                  <span className="text-[#2F7B93] block">STUDIO LOCATIONS</span>
                  <span className="text-[#11181C] block font-sans font-medium mt-1">
                    Mumbai · New Delhi · Goa
                  </span>
                </div>
                <div>
                  <span className="text-[#2F7B93] block">STUDIO EXPERTISE</span>
                  <span className="text-[#11181C] block font-sans font-medium mt-1">
                    Residential Interiors · Hospitality Lounges · Bespoke Furniture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- FOUNDER & CREATIVE LEADERSHIP SECTION ---------------- */}
        <section className="py-24 px-6 md:px-12 bg-[#EEF5F6]/60 border-y border-[#2F7B93]/15 mb-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Founder Editorial Portrait Image */}
              <div className="lg:col-span-5 relative">
                <div className="overflow-hidden bg-[#16465A] aspect-[4/5] shadow-xl border border-[#2F7B93]/20 relative">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                    alt="JIVAH Projects Founder & Creative Director"
                    className="w-full h-full object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#16465A] via-[#16465A]/40 to-transparent p-6 text-white">
                    <span className="text-[9px] font-mono tracking-[0.25em] text-[#8FD3DC] uppercase block">
                      FOUNDER & CREATIVE DIRECTOR
                    </span>
                    <h3 className="font-serif text-2xl uppercase tracking-wide text-white mt-1">
                      ANANYA ROY
                    </h3>
                  </div>
                </div>

                {/* Decorative Emblem Accent */}
                <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-25 hidden sm:block">
                  <BrandMotif size={140} color="#2F7B93" />
                </div>
              </div>

              {/* Founder Bio & Creative Vision */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
                    [ CREATIVE LEADERSHIP ]
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl uppercase text-[#11181C] tracking-tight leading-[1.05]">
                    FROM THE FOUNDER
                  </h2>
                </div>

                <blockquote className="font-serif text-2xl md:text-3xl italic text-[#16465A] leading-snug border-l-3 border-[#2F7B93] pl-6 py-1">
                  "An interior is not a static backdrop; it is an intimate physical sanctuary where material authenticity, soft light, and quiet acoustics elevate the rhythm of human life."
                </blockquote>

                <div className="space-y-4 text-sm text-[#61747C] font-light leading-relaxed">
                  <p>
                    With over twelve years of spatial design practice across India and Europe, Ananya Roy established JIVAH Projects with a singular vision: to liberate luxury interior design from superficial ornamentation and restore tactile, living intimacy.
                  </p>
                  <p>
                    Her approach combines deep research into regional natural stone quarries, bespoke timber joinery, and custom lighting schematics with a personal, intuitive understanding of human daily rituals.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-[#2F7B93]/20 text-xs font-mono">
                  <div>
                    <span className="text-[#2F7B93] uppercase text-[10px] tracking-wider block">LEADERSHIP</span>
                    <span className="text-[#11181C] font-sans font-medium text-sm block mt-1">Ananya Roy</span>
                    <span className="text-[#61747C] text-[10px]">Creative Director</span>
                  </div>
                  <div>
                    <span className="text-[#2F7B93] uppercase text-[10px] tracking-wider block">DISCIPLINE</span>
                    <span className="text-[#11181C] font-sans font-medium text-sm block mt-1">Interior Architecture</span>
                    <span className="text-[#61747C] text-[10px]">Furniture & Styling</span>
                  </div>
                  <div>
                    <span className="text-[#2F7B93] uppercase text-[10px] tracking-wider block">PRACTICE</span>
                    <span className="text-[#11181C] font-sans font-medium text-sm block mt-1">Bespoke Curation</span>
                    <span className="text-[#61747C] text-[10px]">12+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Step Process Section */}
        <section className="bg-[#16465A] text-white py-28 relative overflow-hidden mb-28">
          <div className="absolute right-[-5%] top-[10%] pointer-events-none opacity-5">
            <BrandMotif size={600} color="#8FD3DC" animateSpin={true} />
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 relative z-10">
            <SectionHeading
              label="OUR METHODOLOGY"
              title="THE INTERIOR CREATIVE PROCESS"
              subtitle="A 5-phase spatial journey centered around atmosphere, materiality, and human comfort."
              dark={true}
            />

            <div className="space-y-12">
              {SENSORY_PROCESS_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline border-t border-[#2F7B93]/30 pt-8 group hover:border-[#8FD3DC] transition-colors duration-300"
                >
                  <div className="md:col-span-2 flex items-center gap-3">
                    <span className="text-xs font-mono text-[#8FD3DC] tracking-widest">
                      [ {step.num} ]
                    </span>
                  </div>

                  <div className="md:col-span-4 space-y-1">
                    <h3 className="font-serif text-2xl md:text-3xl uppercase text-white group-hover:text-[#8FD3DC] transition-colors">
                      {step.name}
                    </h3>
                    <p className="text-xs font-mono text-[#8FD3DC]/70 uppercase tracking-wider">
                      {step.subtitle}
                    </p>
                  </div>

                  <div className="md:col-span-6">
                    <p className="text-sm font-light text-[#8FD3DC]/80 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Master Artisans Collaboration */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 overflow-hidden bg-[#EEF5F6] aspect-[4/5] shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop"
                alt="JIVAH Studio Furniture & Craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                label="CRAFT & STYLING"
                title="BESPOKE FURNITURE & ARTISAN GUILDS"
              />
              <p className="text-base font-light text-[#61747C] leading-relaxed">
                We collaborate directly with master wood turners, stone masons, bronze smiths, and textile artisans. Every piece of furniture, headboard wall, or lighting accent is prototyped and custom-built specifically for your space.
              </p>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-[#2F7B93] text-white hover:bg-[#16465A] px-8 py-4 text-xs tracking-[0.25em] font-medium uppercase transition-colors"
                >
                  <span>START AN INTERIOR PROJECT</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
