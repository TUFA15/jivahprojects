import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { OptimizedImage } from '../components/OptimizedImage';
import { BrandMotif } from '../components/BrandMotif';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { createBreadcrumbSchema, LOCAL_BUSINESS_SCHEMA } from '../data/schemas';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  const relatedProjects = PROJECTS_DATA.filter((p) => p.id !== project.id).slice(0, 2);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: 'https://jivahprojects.com/' },
    { name: 'Work', item: 'https://jivahprojects.com/work' },
    { name: project.title, item: `https://jivahprojects.com/work/${project.slug}` },
  ]);

  return (
    <PageTransition>
      <SEO
        title={`${project.title} | Interior Design Project | JIVAH Projects`}
        description={`${project.subtitle} Designed by JIVAH Projects interior studio in ${project.location}.`}
        canonicalUrl={`https://jivahprojects.com/work/${project.slug}`}
        ogImage={project.heroImage}
        jsonLd={[LOCAL_BUSINESS_SCHEMA, breadcrumbSchema]}
      />

      <article className="pt-32 pb-24 bg-[#F7F3EC] text-[#11181C]">
        {/* Header */}
        <header className="max-w-7xl mx-auto px-6 md:px-12 space-y-8 pb-12">
          <div className="flex items-center justify-between">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#2F7B93] hover:text-[#16465A] font-medium transition-colors"
            >
              <span>← BACK TO INTERIOR GALLERY</span>
            </Link>

            <span className="text-xs font-mono text-[#61747C] tracking-widest uppercase">
              [ INTERIOR SANCTUARY // 0{PROJECTS_DATA.findIndex((p) => p.id === project.id) + 1} ]
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-4 max-w-5xl">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-none">
              {project.title}
            </h1>
            <p className="text-lg sm:text-2xl font-light text-[#61747C] leading-snug">
              {project.subtitle}
            </p>
          </div>

          {/* Key Facts / Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-b border-[#2F7B93]/20 py-6 text-xs font-mono">
            <div>
              <span className="text-[#61747C] uppercase block text-[10px] tracking-widest">
                LOCATION
              </span>
              <span className="text-[#11181C] font-sans font-medium text-sm mt-1 block">
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-[#61747C] uppercase block text-[10px] tracking-widest">
                CATEGORY & YEAR
              </span>
              <span className="text-[#11181C] font-sans font-medium text-sm mt-1 block">
                {project.category} · {project.year}
              </span>
            </div>
            <div>
              <span className="text-[#61747C] uppercase block text-[10px] tracking-widest">
                AREA
              </span>
              <span className="text-[#11181C] font-sans font-medium text-sm mt-1 block">
                {project.area}
              </span>
            </div>
            <div>
              <span className="text-[#61747C] uppercase block text-[10px] tracking-widest">
                INTERIOR SCOPE
              </span>
              <span className="text-[#11181C] font-sans font-medium text-sm mt-1 block">
                {project.scope}
              </span>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
          <div className="overflow-hidden aspect-[16/9] bg-[#EEF5F6] shadow-xl rounded-2xl border border-[#2F7B93]/15">
            <OptimizedImage
              src={project.heroImage}
              alt={project.heroAlt || `${project.title} interior design in ${project.location}`}
              priority={true}
              sizes="(max-width: 1200px) 100vw, 1200px"
              aspectRatio="16/9"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Spatial Feeling & Concept Statement */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 bg-[#16465A] text-white p-8 md:p-12 space-y-6 relative border-l-4 border-[#2F7B93] rounded-3xl shadow-xl">
              <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-[#8FD3DC] uppercase">
                <BrandMotif size={16} color="#8FD3DC" />
                <span>SPATIAL ATMOSPHERE & FEEL</span>
              </div>
              <blockquote className="font-serif text-2xl md:text-3xl leading-snug italic text-[#F8F9F8]">
                "{project.conceptStatement}"
              </blockquote>
              <div className="pt-2 border-t border-[#2F7B93]/30">
                <span className="text-[10px] font-mono text-[#8FD3DC] uppercase block">
                  SPATIAL FEELING:
                </span>
                <p className="text-xs font-light text-white/90 mt-1">{project.spatialFeeling}</p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base md:text-lg font-light leading-relaxed text-[#11181C]/90">
              <h2 className="text-xs tracking-[0.25em] font-mono text-[#2F7B93] uppercase font-medium">
                [ INTERIOR DESIGN STORY ]
              </h2>
              {project.fullDescription.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Before & After Transformation */}
        {project.beforeAfter && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
                [ INTERIOR TRANSFORMATION ]
              </span>
              <h2 className="font-serif text-3xl md:text-4xl uppercase text-[#11181C]">
                BEFORE & AFTER DESIGN REVEAL
              </h2>
            </div>

            <BeforeAfterSlider
              beforeImage={project.beforeAfter.beforeImage}
              afterImage={project.beforeAfter.afterImage}
              caption={project.beforeAfter.caption}
            />
          </section>
        )}

        {/* Color Palette Bar */}
        {project.colorPalette && project.colorPalette.length > 0 && (
          <section className="bg-[#EDE5D9]/60 py-12 mb-20 border-y border-[#2F7B93]/15">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
                  [ INTERIOR COLOR PALETTE ]
                </span>
                <span className="text-xs font-mono text-[#61747C]">
                  CURATED ATMOSPHERIC SWATCHES
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {project.colorPalette.map((color, idx) => (
                  <div key={idx} className="bg-white p-4 border border-[#2F7B93]/15 space-y-2 rounded-xl">
                    <div
                      className="w-full h-12 rounded-lg border border-black/10 shadow-2xs"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs font-serif text-[#11181C] block uppercase font-medium">
                      {color.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#61747C] block">{color.hex}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Materials & Tactile Specifications */}
        {project.materials && project.materials.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
                [ MATERIAL SPECIFICATIONS ]
              </span>
              <h2 className="font-serif text-3xl md:text-4xl uppercase text-[#11181C]">
                TACTILE SURFACES & FINISHES
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.materials.map((mat, i) => (
                <div
                  key={i}
                  className="bg-white p-6 border border-[#2F7B93]/15 space-y-3 shadow-2xs rounded-2xl"
                >
                  <span className="text-xs font-mono text-[#2F7B93]">0{i + 1}</span>
                  <h3 className="font-serif text-xl text-[#11181C] uppercase">{mat.name}</h3>
                  <p className="text-xs font-light text-[#61747C] leading-relaxed">
                    {mat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Furniture & Styling Curation */}
        {project.furnitureCuration && project.furnitureCuration.length > 0 && (
          <section className="bg-[#16465A] text-white py-20 mb-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8FD3DC]">
                  [ BESPOKE CURATION ]
                </span>
                <h2 className="font-serif text-3xl md:text-4xl uppercase text-white">
                  FURNITURE & STYLING OBJECTS
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.furnitureCuration.map((item, i) => (
                  <div
                    key={i}
                    className="border-t border-[#2F7B93]/40 pt-6 space-y-2 group hover:border-[#8FD3DC] transition-colors"
                  >
                    <span className="text-[10px] font-mono text-[#8FD3DC] tracking-widest block">
                      ITEM NO. 0{i + 1}
                    </span>
                    <h3 className="font-serif text-xl uppercase text-white group-hover:text-[#8FD3DC] transition-colors">
                      {item.piece}
                    </h3>
                    <p className="text-xs font-mono text-[#8FD3DC]/70 uppercase">
                      MAKER: {item.designerOrMaker}
                    </p>
                    <p className="text-xs font-light text-white/80 leading-relaxed pt-1">
                      {item.notes}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Photography Spread */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 space-y-16">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
                [ SPATIAL DOCUMENTATION ]
              </span>
              <h2 className="font-serif text-3xl md:text-5xl uppercase text-[#11181C]">
                PHOTOGRAPHY SPREAD
              </h2>
            </div>

            <div className="space-y-12">
              {project.gallery.map((imgItem, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="overflow-hidden bg-[#EEF5F6] shadow-md rounded-2xl border border-[#2F7B93]/15">
                    <OptimizedImage
                      src={imgItem.url}
                      alt={imgItem.alt || imgItem.caption}
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="w-full max-h-[85vh] object-cover"
                    />
                  </div>
                  {imgItem.caption && (
                    <p className="text-xs font-mono text-[#61747C] tracking-wider uppercase">
                      FIG 0{idx + 1} — {imgItem.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Projects */}
        <section className="bg-[#16465A] text-white py-24 border-t border-[#2F7B93]/20">
          <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#2F7B93]/30 pb-6">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#8FD3DC]">
                  [ CONTINUE EXPLORING ]
                </span>
                <h2 className="font-serif text-3xl md:text-4xl uppercase text-white">
                  RELATED INTERIOR SANCTUARIES
                </h2>
              </div>
              <Link
                to="/work"
                className="text-xs tracking-[0.25em] font-mono uppercase text-[#8FD3DC] hover:text-white"
              >
                VIEW ALL INTERIORS →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedProjects.map((relProject) => (
                <ProjectCard key={relProject.id} project={relProject} aspectRatio="landscape" />
              ))}
            </div>
          </div>
        </section>
      </article>
    </PageTransition>
  );
};
