import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CURATED_HOME_IMAGES } from '../data/projects';
import { JOURNAL_ARTICLES } from '../data/journal';
import { OptimizedImage } from '../components/OptimizedImage';
import { BlogCard } from '../components/BlogCard';
import { BrandMotif } from '../components/BrandMotif';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA } from '../data/schemas';

export const HomePage: React.FC = () => {
  return (
    <PageTransition>
      {/* ---------------- SEO & STRUCTURED DATA (JSON-LD) ---------------- */}
      <SEO
        title="JIVAH Projects | Interior Designer in Pune"
        description="JIVAH Projects is a premier interior design studio based in Mundhwa (near Hermosa Casa), Pune specializing in residential interior design, modular kitchen design, and bespoke living sanctuaries."
        canonicalUrl="https://jivahprojects.com"
        jsonLd={[LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA]}
      />

      {/* ---------------- 1. HERO BANNER SECTION (Approved Visual Design) ---------------- */}
      <section className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center pt-32 pb-24 bg-[#16465A] text-white overflow-hidden">
        {/* Main Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <OptimizedImage
            src="/images/interiors/HERO.jpg"
            alt="JIVAH Projects Interior Atmosphere & Light in Pune"
            priority={true}
            sizes="100vw"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover opacity-35 brightness-90 contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16465A] via-[#16465A]/90 to-[#16465A]/40" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#16465A] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          {/* Accessible / Semantic H1 for SEO & Screen Readers */}
          <h1 className="sr-only">Interior Design Studio in Pune — JIVAH Projects</h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* GES2 Animated Status Badge */}
              <div className="inline-flex items-center space-x-2.5 bg-[#16465A]/90 border border-[#8FD3DC]/40 text-[#8FD3DC] font-mono text-[10px] uppercase tracking-[0.25em] px-4 py-2 rounded-full shadow-xs backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#55B3C5] animate-ping" />
                <span>INTERIOR DESIGN COMMISSIONS OPEN 2026–27</span>
              </div>

              <motion.div
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="heading-hero font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[88px] tracking-tight uppercase leading-[0.92] text-white"
              >
                SPACES
                <br />
                THAT DEFINE
                <br />
                <span className="italic font-normal text-[#8FD3DC]">HOW YOU LIVE.</span>
              </motion.div>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl font-light text-[#8FD3DC]/90 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                JIVAH Projects is an interior design studio based in Mundhwa, Pune, crafting homes shaped by tactile materiality, soft light, and serene living rituals.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-4"
              >
                <Link
                  to="/work"
                  className="group inline-flex items-center gap-3 bg-[#2F7B93] text-white hover:bg-[#55B3C5] px-8 py-4 text-xs tracking-[0.25em] font-medium uppercase transition-all duration-300 shadow-md rounded-xl hover:-translate-y-0.5"
                >
                  <span>EXPLORE INTERIORS</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                    →
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-white/90 hover:text-white px-6 py-4 border border-white/30 hover:border-white/60 rounded-xl transition-all"
                >
                  <span>STUDIO PHILOSOPHY</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Hero Image Showcase */}
            <div className="lg:col-span-5 relative w-full flex justify-center items-center min-h-[380px] sm:min-h-[460px]">
              <div className="relative w-full max-w-[400px]">
                {/* Large Main Frame */}
                <div className="aspect-[4/5] w-[88%] ml-auto rounded-3xl overflow-hidden border-2 border-[#2F7B93]/40 shadow-2xl relative group">
                  <OptimizedImage
                    src="/images/interiors/living (7).jpg"
                    alt="Contemporary residential interior designed by JIVAH Projects in Pune"
                    priority={true}
                    sizes="(max-width: 640px) 100vw, 400px"
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/90 via-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-1 z-10">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[#8FD3DC]">
                      RESIDENTIAL SANCTUARY
                    </span>
                    <h4 className="font-serif text-lg uppercase text-white">Pune Residence</h4>
                  </div>
                </div>

                {/* Offset Small Overlapping Frame */}
                <div className="absolute bottom-[-5%] left-0 w-[55%] aspect-square rounded-3xl overflow-hidden border-2 border-[#8FD3DC]/50 shadow-2xl group/sub relative z-20 bg-[#16465A]">
                  <OptimizedImage
                    src="/images/interiors/living (5).jpg"
                    alt="Tactile residential living interior detail by JIVAH Projects Pune"
                    sizes="250px"
                    className="w-full h-full object-cover group-hover/sub:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/90 via-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <h4 className="font-serif text-sm uppercase text-[#8FD3DC]">Tactile Detail</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 2. STUDIO INTRODUCTION ---------------- */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#F7F3EC] text-[#11181C]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#2F7B93]" />
                <span className="text-[11px] font-mono text-[#2F7B93] tracking-[0.25em] uppercase font-semibold">
                  STUDIO PHILOSOPHY
                </span>
              </div>

              <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl uppercase text-[#11181C] leading-[1.05] tracking-tight">
                INTERIOR DESIGN STUDIO
                <br />
                <span className="italic font-normal text-[#2F7B93]">IN PUNE.</span>
              </h2>

              <div className="w-16 h-[1px] bg-[#2F7B93]/30" />

              <p className="text-lg sm:text-xl font-light text-[#61747C] leading-relaxed max-w-xl">
                JIVAH Projects is a contemporary interior design studio founded by Jitesh, based in Mundhwa (near Hermosa Casa), Pune. We create thoughtful, refined, and functional residential interiors, custom modular kitchens, and tailored living environments across Pune, Maharashtra.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] font-medium uppercase text-[#2F7B93] hover:text-[#16465A] transition-colors"
                >
                  <span>MEET FOUNDER JITESH & THE STUDIO</span>
                  <span className="w-8 h-[1px] bg-[#2F7B93] group-hover:w-12 transition-all duration-300" />
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden bg-[#EEF5F6] aspect-[4/5] rounded-3xl shadow-xl border border-[#2F7B93]/20">
                <OptimizedImage
                  src="/images/interiors/living (5).jpg"
                  alt="Contemporary living room interior designed by JIVAH Projects in Pune"
                  sizes="(max-width: 1024px) 100vw, 500px"
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-[#16465A]/95 backdrop-blur-md text-white p-6 rounded-2xl border-l-2 border-[#2F7B93] z-10">
                  <p className="font-serif text-base sm:text-lg leading-snug">
                    "True luxury is the quiet rhythm of a beautifully lived-in home."
                  </p>
                  <p className="text-[10px] tracking-[0.2em] font-mono text-[#8FD3DC] mt-2 uppercase">
                    — JIVAH DESIGN DISCIPLINE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. SELECTED WORK / PROJECTS ---------------- */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#EDE5D9]/50 border-y border-[#2F7B93]/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#2F7B93]" />
                <span className="text-[11px] font-mono text-[#2F7B93] tracking-[0.25em] uppercase font-semibold">
                  PORTFOLIO SHOWCASE
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl uppercase text-[#11181C] tracking-tight">
                OUR INTERIOR DESIGN PROJECTS
              </h2>
              <p className="text-base sm:text-lg font-light text-[#61747C] leading-relaxed">
                Explore a curated selection of residential interior design projects, modular kitchens, and custom living environments in Pune, Maharashtra.
              </p>
            </div>

            <Link
              to="/work"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] font-medium uppercase text-[#2F7B93] hover:text-[#16465A] transition-colors shrink-0"
            >
              <span>VIEW ALL INTERIORS</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            {/* 1. Living Lounge */}
            <div className="md:col-span-8">
              <Link to={CURATED_HOME_IMAGES[0].link} className="group block overflow-hidden focus:outline-none">
                <div className="relative overflow-hidden bg-[#EEF5F6] rounded-3xl border border-[#2F7B93]/20 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={CURATED_HOME_IMAGES[0].url}
                      alt={CURATED_HOME_IMAGES[0].alt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] tracking-[0.25em] font-mono font-medium uppercase px-3 py-1 bg-[#16465A]/85 text-[#8FD3DC] backdrop-blur-md border border-[#2F7B93]/30 rounded-full">
                      {CURATED_HOME_IMAGES[0].roomType || CURATED_HOME_IMAGES[0].category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <div className="pt-4 pb-2 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl md:text-2xl text-[#11181C] group-hover:text-[#2F7B93] transition-colors duration-300 tracking-tight uppercase flex items-center gap-2">
                      <span>{CURATED_HOME_IMAGES[0].title}</span>
                      <span className="text-xs font-mono text-[#2F7B93] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-[#2F7B93] font-medium">VIEW</span>
                  </div>
                  <p className="text-xs text-[#61747C] font-light tracking-wider uppercase">
                    {CURATED_HOME_IMAGES[0].category} · {CURATED_HOME_IMAGES[0].roomType}
                  </p>
                </div>
              </Link>
            </div>

            {/* 2. Master Bedroom Suite */}
            <div className="md:col-span-4 md:mt-12">
              <Link to={CURATED_HOME_IMAGES[1].link} className="group block overflow-hidden focus:outline-none">
                <div className="relative overflow-hidden bg-[#EEF5F6] rounded-3xl border border-[#2F7B93]/20 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={CURATED_HOME_IMAGES[1].url}
                      alt={CURATED_HOME_IMAGES[1].alt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] tracking-[0.25em] font-mono font-medium uppercase px-3 py-1 bg-[#16465A]/85 text-[#8FD3DC] backdrop-blur-md border border-[#2F7B93]/30 rounded-full">
                      {CURATED_HOME_IMAGES[1].roomType || CURATED_HOME_IMAGES[1].category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <div className="pt-4 pb-2 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl md:text-2xl text-[#11181C] group-hover:text-[#2F7B93] transition-colors duration-300 tracking-tight uppercase flex items-center gap-2">
                      <span>{CURATED_HOME_IMAGES[1].title}</span>
                      <span className="text-xs font-mono text-[#2F7B93] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-[#2F7B93] font-medium">VIEW</span>
                  </div>
                  <p className="text-xs text-[#61747C] font-light tracking-wider uppercase">
                    {CURATED_HOME_IMAGES[1].category} · {CURATED_HOME_IMAGES[1].roomType}
                  </p>
                </div>
              </Link>
            </div>

            {/* 3. Commercial Executive */}
            <div className="md:col-span-5">
              <Link to={CURATED_HOME_IMAGES[2].link} className="group block overflow-hidden focus:outline-none">
                <div className="relative overflow-hidden bg-[#EEF5F6] rounded-3xl border border-[#2F7B93]/20 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={CURATED_HOME_IMAGES[2].url}
                      alt={CURATED_HOME_IMAGES[2].alt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 700px"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] tracking-[0.25em] font-mono font-medium uppercase px-3 py-1 bg-[#16465A]/85 text-[#8FD3DC] backdrop-blur-md border border-[#2F7B93]/30 rounded-full">
                      {CURATED_HOME_IMAGES[2].category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <div className="pt-4 pb-2 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl md:text-2xl text-[#11181C] group-hover:text-[#2F7B93] transition-colors duration-300 tracking-tight uppercase flex items-center gap-2">
                      <span>{CURATED_HOME_IMAGES[2].title}</span>
                      <span className="text-xs font-mono text-[#2F7B93] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-[#2F7B93] font-medium">VIEW</span>
                  </div>
                  <p className="text-xs text-[#61747C] font-light tracking-wider uppercase">
                    {CURATED_HOME_IMAGES[2].category}
                  </p>
                </div>
              </Link>
            </div>

            {/* 4. Hospitality Showcase */}
            <div className="md:col-span-7">
              <Link to={CURATED_HOME_IMAGES[3].link} className="group block overflow-hidden focus:outline-none">
                <div className="relative overflow-hidden bg-[#EEF5F6] rounded-3xl border border-[#2F7B93]/20 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <div className="w-full aspect-[4/3] overflow-hidden">
                    <OptimizedImage
                      src={CURATED_HOME_IMAGES[3].url}
                      alt={CURATED_HOME_IMAGES[3].alt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1000px"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] tracking-[0.25em] font-mono font-medium uppercase px-3 py-1 bg-[#16465A]/85 text-[#8FD3DC] backdrop-blur-md border border-[#2F7B93]/30 rounded-full">
                      {CURATED_HOME_IMAGES[3].category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
                <div className="pt-4 pb-2 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-xl md:text-2xl text-[#11181C] group-hover:text-[#2F7B93] transition-colors duration-300 tracking-tight uppercase flex items-center gap-2">
                      <span>{CURATED_HOME_IMAGES[3].title}</span>
                      <span className="text-xs font-mono text-[#2F7B93] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </h3>
                    <span className="text-xs font-mono text-[#2F7B93] font-medium">VIEW</span>
                  </div>
                  <p className="text-xs text-[#61747C] font-light tracking-wider uppercase">
                    {CURATED_HOME_IMAGES[3].category}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 4. DESIGN PILLARS ---------------- */}
      <section className="py-20 md:py-28 px-6 md:px-12 bg-[#F7F3EC]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: '01',
                title: 'MATERIAL INTEGRITY',
                desc: 'Honed travertine, bouclé textiles, & smoked oak that age gracefully.',
              },
              {
                num: '02',
                title: 'SPATIAL CLARITY',
                desc: 'Uncluttered interior volumes framed by floating joinery & shadow gaps.',
              },
              {
                num: '03',
                title: 'DIURNAL LIGHTING',
                desc: 'Natural sunlight mapping paired with 2700K indirect cove warmth.',
              },
              {
                num: '04',
                title: 'ACOUSTIC CALM',
                desc: 'Timber wall slats & sheer linen drapes tuned to absorb urban noise.',
              },
            ].map((pillar) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="bg-white border border-[#2F7B93]/20 rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-4 hover:-translate-y-1.5 transition-transform duration-350 ease-[cubic-bezier(0.25,1,0.5,1)] group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#EEF5F6] border border-[#2F7B93]/15 flex items-center justify-center">
                  <BrandMotif size={22} color="#2F7B93" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#2F7B93] tracking-widest font-semibold block">
                    [ {pillar.num} ]
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#11181C] group-hover:text-[#2F7B93] transition-colors uppercase font-semibold leading-tight mt-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#61747C] font-light mt-2 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 5. JOURNAL / SELECTED ARTICLES ---------------- */}
      <section className="py-24 md:py-36 px-6 md:px-12 bg-[#EDE5D9]/40 border-t border-[#2F7B93]/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#2F7B93]" />
                <span className="text-[11px] font-mono text-[#2F7B93] tracking-[0.25em] uppercase font-semibold">
                  EDITORIAL ESSAYS
                </span>
              </div>
              <h2 className="font-serif text-4xl sm:text-6xl uppercase text-[#11181C] tracking-tight">
                INTERIOR DESIGN JOURNAL
              </h2>
              <p className="text-base sm:text-lg font-light text-[#61747C] leading-relaxed">
                Practical guidance, ideas, and perspectives on home interior design, 2 BHK planning, modular kitchens, materials, and soft lighting in Pune.
              </p>
            </div>

            <Link
              to="/journal"
              className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] font-medium uppercase text-[#2F7B93] hover:text-[#16465A] transition-colors shrink-0"
            >
              <span>READ ALL ARTICLES</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.slice(0, 3).map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- 6. CONTACT CTA ---------------- */}
      <section className="py-28 px-6 md:px-12 bg-[#F7F3EC] border-t border-[#2F7B93]/15 text-center relative">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-xs border border-[#2F7B93]/20">
            <BrandMotif size={28} color="#2F7B93" animateSpin={true} />
          </div>

          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93] block">
              [ START YOUR INTERIOR JOURNEY ]
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl text-[#11181C] uppercase tracking-tight leading-tight">
              LET'S CREATE
              <br />
              YOUR SPACE
            </h2>
            <p className="text-base sm:text-lg text-[#61747C] font-light max-w-xl mx-auto leading-relaxed">
              Connect with JIVAH Projects to discuss your home interior, residential renovation, or modular kitchen design project in Mundhwa, Pune.
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-[#16465A] text-white hover:bg-[#2F7B93] px-10 py-5 text-xs tracking-[0.25em] font-medium uppercase transition-all duration-300 shadow-md rounded-xl hover:-translate-y-0.5"
            >
              <span>GET IN TOUCH</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};
