import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, Project } from '../data/projects';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

type CategoryFilter = 'ALL' | 'Residential' | 'Commercial' | 'Hospitality';

export const WorkPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');

  const filteredProjects =
    activeFilter === 'ALL'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const categories: CategoryFilter[] = ['ALL', 'Residential', 'Commercial', 'Hospitality'];

  return (
    <PageTransition>
      <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <SectionHeading
            label="PORTFOLIO GALLERY"
            title="SELECTED WORK"
            subtitle="Explore our portfolio of contemporary residential sanctuaries, commercial design galleries, and bespoke hospitality spaces."
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-3 pt-6 border-b border-[#2F7B93]/15 pb-6">
            <span className="text-[10px] tracking-[0.25em] font-mono text-[#61747C] uppercase mr-3">
              FILTER BY:
            </span>
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs tracking-[0.2em] font-medium uppercase px-4 py-2 transition-all duration-300 focus:outline-none ${
                    isActive
                      ? 'bg-[#16465A] text-white shadow-xs'
                      : 'bg-[#EEF5F6] text-[#61747C] hover:text-[#11181C] hover:bg-[#2F7B93]/10'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Vary aspect ratios for asymmetric editorial layout
              const aspectRatios: ('landscape' | 'portrait' | 'tall' | 'wide' | 'square')[] = [
                'landscape',
                'tall',
                'portrait',
                'wide',
                'landscape',
                'tall',
              ];

              const spanClasses = [
                'md:col-span-8',
                'md:col-span-4',
                'md:col-span-5',
                'md:col-span-7',
                'md:col-span-6',
                'md:col-span-6',
              ];

              const aspect = aspectRatios[index % aspectRatios.length];
              const spanClass = spanClasses[index % spanClasses.length];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={spanClass}
                >
                  <ProjectCard project={project} aspectRatio={aspect} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state fallback */}
        {filteredProjects.length === 0 && (
          <div className="py-20 text-center space-y-4">
            <p className="font-serif text-2xl text-[#11181C]">No projects found in this category.</p>
            <button
              onClick={() => setActiveFilter('ALL')}
              className="text-xs tracking-widest text-[#2F7B93] uppercase underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </PageTransition>
  );
};
