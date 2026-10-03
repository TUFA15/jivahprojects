import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { OptimizedImage } from './OptimizedImage';

interface ProjectCardProps {
  project: Project;
  aspectRatio?: 'landscape' | 'portrait' | 'square' | 'tall' | 'wide';
  className?: string;
  showCategoryBadge?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  aspectRatio = 'landscape',
  className = '',
  showCategoryBadge = true,
}) => {
  const getAspectClass = () => {
    switch (aspectRatio) {
      case 'portrait':
        return 'aspect-[3/4]';
      case 'tall':
        return 'aspect-[4/5]';
      case 'square':
        return 'aspect-square';
      case 'wide':
        return 'aspect-[16/9]';
      case 'landscape':
      default:
        return 'aspect-[4/3]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className={`smooth-gpu ${className}`}
    >
      <Link
        to={`/work/${project.slug}`}
        className="group block overflow-hidden focus:outline-none"
      >
        <div className="relative overflow-hidden bg-[#EEF5F6]">
          {/* Image Container with Restrained Scale (1.04) */}
          <div className={`w-full ${getAspectClass()} overflow-hidden`}>
            <OptimizedImage
              src={project.thumbnail}
              alt={project.heroAlt || `${project.title} - ${project.location} interior design by JIVAH Projects Pune`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
              containerClassName="w-full h-full"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.04]"
            />
          </div>

          {/* Category Badge */}
          {showCategoryBadge && (
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[9px] tracking-[0.25em] font-mono font-medium uppercase px-2.5 py-1 bg-[#16465A]/85 text-[#8FD3DC] backdrop-blur-md border border-[#2F7B93]/30 shadow-xs">
                {project.category}
              </span>
            </div>
          )}

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Corner Teal Marker */}
          <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
            <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#2F7B93] translate-x-6 translate-y-6 rotate-45 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />
          </div>
        </div>

        {/* Metadata Info */}
        <div className="pt-4 pb-2 space-y-1.5">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-xl md:text-2xl text-[#11181C] group-hover:text-[#2F7B93] transition-colors duration-300 tracking-tight uppercase flex items-center gap-2">
              <span>{project.title}</span>
              <span className="text-xs font-mono text-[#2F7B93] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </h3>
            <span className="text-xs font-mono text-[#2F7B93] font-medium ml-4">
              {project.year}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs text-[#61747C]">
            <span className="tracking-wider uppercase font-light">
              {project.location} · {project.category}
            </span>
            <span className="text-[10px] tracking-widest text-[#61747C]/80 font-mono">
              {project.area}
            </span>
          </div>

          {/* Thin Teal Underline Line Animation */}
          <div className="relative pt-1">
            <div className="w-full h-[1px] bg-[#EEF5F6]" />
            <span className="absolute top-1 left-0 h-[1.5px] bg-[#2F7B93] w-0 group-hover:w-full transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
