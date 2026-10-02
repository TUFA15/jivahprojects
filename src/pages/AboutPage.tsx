import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { BrandMotif } from '../components/BrandMotif';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA } from '../data/schemas';

export const AboutPage: React.FC = () => {
  const SENSORY_PROCESS_STEPS = [
    {
      num: '01',
      name: 'FEEL & OBSERVE',
      subtitle: 'Living Ritual Audit & Solar Orientation',
      text: 'We begin by observing how your family lives, rests, and entertains in your Pune home. We map natural solar light angles from morning sunrise to evening dusk.',
    },
    {
      num: '02',
      name: 'MATERIAL & PALETTE',
      subtitle: 'Tactile Swatches & Surface Curation',
      text: 'We curate authentic stone slabs, open-grain wood veneers, bouclé wools, and mineral plaster samples. Every material is paired under real site lighting conditions.',
    },
    {
      num: '03',
      name: 'FURNITURE & LIGHT',
      subtitle: 'Bespoke Joinery & Ambient Lighting',
      text: 'Proportioning custom sofas, credenzas, and integrated joinery. We design recessed LED troughs and indirect cove glow to eliminate glare and create warm evening comfort.',
    },
    {
      num: '04',
      name: 'CRAFT & TAILOR',
      subtitle: 'Artisan Guild Collaboration',
      text: 'Working hand-in-hand with skilled stonemasons, wood turners, metal fabricators, and textile weavers to build key furniture pieces and custom modular kitchens.',
    },
    {
      num: '05',
      name: 'ELEVATE ATMOSPHERE',
      subtitle: 'Interior Styling & Acoustic Tuning',
      text: 'Hands-on spatial commissioning on site. Tuning acoustic drapes, placement of artwork, and lighting scenes so your interior feels like a calm sanctuary.',
    },
  ];

  return (
    <PageTransition>
      <SEO
        title="About JIVAH Projects | Interior Design Studio in Pune"
        description="Learn about JIVAH Projects and Founder Ananya Roy. An interior design studio based in Hadapsar, Pune dedicated to thoughtful spatial flow, authentic materials, and home interior sanctuaries."
        canonicalUrl="https://jivahprojects.com/about"
        jsonLd={[LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA]}
      />

      <div className="pt-36 pb-24 bg-[#F7F3EC] text-[#11181C]">
        {/* Header Hero */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 space-y-8">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
            <BrandMotif size={16} color="#2F7B93" />
            <span>JIVAH PROJECTS · PUNE INTERIOR DESIGN STUDIO</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.92] max-w-5xl">
            DESIGNING
            <br />
            WITH
            <br />
            <span className="italic font-normal text-[#2F7B93]">INTENTION.</span>
          </h1>

          <p className="text-xl sm:text-2xl font-light text-[#61747C] max-w-3xl leading-relaxed">
            An interior design studio based in Hadapsar, Pune, focused on how spaces feel, how light moves, and how authentic materials enrich residential living.
          </p>
        </section>

        {/* Large Interior Visual */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="overflow-hidden aspect-[21/9] bg-[#EEF5F6] shadow-lg rounded-2xl border border-[#2F7B93]/15">
            <img
              src="/images/interiors/IMG_20250118_125129.jpg"
              alt="Contemporary living room interior design by JIVAH Projects in Pune"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Studio Philosophy & Narrative */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
                  [ STUDIO PHILOSOPHY ]
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl uppercase text-[#11181C] tracking-tight leading-[1.05]">
                  THE PSYCHOLOGY OF INTERIOR CALM
                </h2>
              </div>
              <p className="text-base font-light text-[#61747C] leading-relaxed">
                Founded on the principle that your interior environment shapes your emotional state, JIVAH Projects creates spaces that offer acoustic peace, visual harmony, and tactile delight.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base md:text-lg font-light leading-relaxed text-[#11181C]/90">
              <p>
                We avoid artificial trends, superficial decorations, or sterile minimalist setups. Instead, our interior design language emerges from natural stone, warm timber, soft textiles, and custom lighting.
              </p>
              <p>
                Serving Hadapsar and greater Pune, we craft home interiors, 2 BHK & 3 BHK layouts, modular kitchens, and residential sanctuaries that feel personal, timeless, and deeply lived-in.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-[#2F7B93]/20 text-xs font-mono">
                <div>
                  <span className="text-[#2F7B93] block">STUDIO LOCATION</span>
                  <span className="text-[#11181C] block font-sans font-medium mt-1">
                    Hadapsar, Pune, Maharashtra
                  </span>
                </div>
                <div>
                  <span className="text-[#2F7B93] block">INTERIOR SERVICES</span>
                  <span className="text-[#11181C] block font-sans font-medium mt-1">
                    Residential Interiors · Modular Kitchens · Custom Furniture
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- DEDICATED ABOUT THE FOUNDER SECTION ---------------- */}
        <section className="py-24 px-6 md:px-12 bg-[#EDE5D9]/70 border-y border-[#2F7B93]/15 mb-28">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Founder Editorial Portrait Container */}
              <div className="lg:col-span-5 relative">
                <div className="overflow-hidden bg-[#16465A] aspect-[4/5] shadow-2xl rounded-3xl border border-[#2F7B93]/30 relative group">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop"
                    alt="Ananya Roy - Founder and Creative Director of JIVAH Projects Interior Design Studio Pune"
                    className="w-full h-full object-cover grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#16465A] via-[#16465A]/50 to-transparent p-8 text-white space-y-1">
                    <span className="text-[10px] font-mono tracking-[0.25em] text-[#8FD3DC] uppercase block font-semibold">
                      FOUNDER & CREATIVE DIRECTOR
                    </span>
                    <h3 className="font-serif text-3xl uppercase tracking-wide text-white">
                      ANANYA ROY
                    </h3>
                  </div>
                </div>

                {/* Decorative Motif Accent */}
                <div className="absolute -bottom-6 -right-6 pointer-events-none opacity-20 hidden sm:block">
                  <BrandMotif size={140} color="#2F7B93" />
                </div>
              </div>

              {/* Founder Narrative & Vision */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#2F7B93]" />
                    <span className="text-[11px] font-mono tracking-[0.25em] text-[#2F7B93] uppercase font-semibold">
                      CREATIVE LEADERSHIP
                    </span>
                  </div>

                  <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl uppercase text-[#11181C] tracking-tight leading-[1.05]">
                    ABOUT THE FOUNDER
                  </h2>
                </div>

                <blockquote className="font-serif text-2xl sm:text-3xl italic text-[#16465A] leading-snug border-l-3 border-[#2F7B93] pl-6 py-2">
                  "An interior is not a static backdrop; it is an intimate physical sanctuary where material authenticity, soft light, and quiet acoustics elevate the rhythm of daily living."
                </blockquote>

                <div className="space-y-4 text-base sm:text-lg text-[#61747C] font-light leading-relaxed">
                  <p>
                    Ananya Roy established JIVAH Projects with a singular objective: to liberate home interior design from superficial, synthetic trends and restore tactile intimacy, living comfort, and spatial flow to contemporary residences.
                  </p>
                  <p>
                    Based in Hadapsar, Pune, her approach combines rigorous material selection—such as honed natural stone, warm timber joinery, and concealed lighting schematics—with a deep, intuitive understanding of daily human family rituals.
                  </p>
                </div>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#2F7B93]/20 text-xs font-mono">
                  <div className="bg-white/70 p-4 rounded-xl border border-[#2F7B93]/15">
                    <span className="text-[#2F7B93] uppercase text-[10px] tracking-wider block font-semibold">FOUNDER</span>
                    <span className="text-[#11181C] font-sans font-medium text-sm block mt-1">Ananya Roy</span>
                    <span className="text-[#61747C] text-[10px]">Creative Director</span>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl border border-[#2F7B93]/15">
                    <span className="text-[#2F7B93] uppercase text-[10px] tracking-wider block font-semibold">DISCIPLINE</span>
                    <span className="text-[#11181C] font-sans font-medium text-sm block mt-1">Interior Architecture</span>
                    <span className="text-[#61747C] text-[10px]">Furniture & Styling</span>
                  </div>
                  <div className="bg-white/70 p-4 rounded-xl border border-[#2F7B93]/15">
                    <span className="text-[#2F7B93] uppercase text-[10px] tracking-wider block font-semibold">STUDIO HUB</span>
                    <span className="text-[#11181C] font-sans font-medium text-sm block mt-1">Hadapsar, Pune</span>
                    <span className="text-[#61747C] text-[10px]">Maharashtra, India</span>
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
            <div className="space-y-4 max-w-3xl">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8FD3DC]">
                [ OUR METHODOLOGY ]
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl uppercase text-white tracking-tight">
                THE INTERIOR CREATIVE PROCESS
              </h2>
              <p className="text-base font-light text-[#8FD3DC]/80 leading-relaxed">
                A 5-phase spatial journey centered around atmosphere, materiality, and residential comfort in Pune.
              </p>
            </div>

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

        {/* Master Artisans & Execution */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 overflow-hidden bg-[#EEF5F6] aspect-[4/5] shadow-lg rounded-2xl border border-[#2F7B93]/15">
              <img
                src="/images/interiors/IMG_20250313_132914.jpg"
                alt="Custom furniture curation and interior styling by JIVAH Projects Pune"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
                  [ CRAFT & STYLING ]
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl uppercase text-[#11181C] tracking-tight">
                  BESPOKE FURNITURE & MODULAR KITCHEN EXECUTION
                </h2>
                <p className="text-base font-light text-[#61747C] leading-relaxed">
                  We work closely with skilled craftsmen, stone fabricators, and hardware specialists. Every piece of furniture, headboard wall, modular kitchen unit, or lighting accent is prototyped and custom-built specifically for your space.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-4 bg-[#2F7B93] text-white hover:bg-[#16465A] px-8 py-4 text-xs tracking-[0.25em] font-medium uppercase transition-colors rounded-xl"
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
