import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES, GalleryImage, MainCategory, RoomType } from '../data/projects';
import { OptimizedImage } from '../components/OptimizedImage';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA } from '../data/schemas';

type PrimaryFilter = 'ALL' | MainCategory;
type ResidentialSubFilter = 'ALL' | RoomType;

const parseCategoryParam = (param: string | null): PrimaryFilter => {
  if (!param) return 'ALL';
  const lower = param.toLowerCase();
  if (lower === 'residential') return 'Residential';
  if (lower === 'commercial') return 'Commercial';
  if (lower === 'hospitality') return 'Hospitality';
  return 'ALL';
};

const parseRoomParam = (param: string | null): ResidentialSubFilter => {
  if (!param) return 'ALL';
  const lower = param.toLowerCase().replace(/[-_]/g, ' ').trim();
  if (lower === 'living room') return 'Living Room';
  if (lower === 'bedroom') return 'Bedroom';
  if (lower === 'dining room') return 'Dining Room';
  if (lower === 'kitchen') return 'Kitchen';
  if (lower === 'mandir') return 'Mandir';
  if (lower === 'wall finishes' || lower === 'wall finish') return 'Wall Finishes';
  if (lower === 'tv') return 'TV';
  if (lower === 'study') return 'Study';
  if (lower === 'cupboards' || lower === 'cupboard') return 'Cupboards';
  return 'ALL';
};

export const WorkPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeCategory, setActiveCategory] = useState<PrimaryFilter>(() =>
    parseCategoryParam(searchParams.get('category'))
  );
  const [activeRoom, setActiveRoom] = useState<ResidentialSubFilter>(() => {
    const cat = parseCategoryParam(searchParams.get('category'));
    return cat === 'Residential' ? parseRoomParam(searchParams.get('room')) : 'ALL';
  });

  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  // Sync state if URL search parameters change
  useEffect(() => {
    const cat = parseCategoryParam(searchParams.get('category'));
    const room = parseRoomParam(searchParams.get('room'));
    setActiveCategory(cat);
    setActiveRoom(cat === 'Residential' ? room : 'ALL');
  }, [searchParams]);

  // Switch primary category & update URL
  const handleCategorySelect = (category: PrimaryFilter) => {
    setActiveCategory(category);
    setActiveRoom('ALL');
    if (category === 'ALL') {
      setSearchParams({}, { replace: true });
    } else {
      setSearchParams({ category }, { replace: true });
    }
  };

  // Switch room sub-filter & update URL
  const handleRoomSelect = (room: ResidentialSubFilter) => {
    setActiveRoom(room);
    if (room === 'ALL') {
      setSearchParams({ category: 'Residential' }, { replace: true });
    } else {
      setSearchParams({ category: 'Residential', room }, { replace: true });
    }
  };

  // Filtered gallery images
  const filteredImages = useMemo(() => {
    if (activeCategory === 'ALL') {
      return GALLERY_IMAGES;
    }
    if (activeCategory === 'Residential') {
      if (activeRoom === 'ALL') {
        return GALLERY_IMAGES.filter((img) => img.category === 'Residential');
      }
      return GALLERY_IMAGES.filter(
        (img) => img.category === 'Residential' && img.roomType === activeRoom
      );
    }
    return GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory, activeRoom]);

  // Primary categories list
  const primaryCategories: PrimaryFilter[] = ['ALL', 'Residential', 'Commercial', 'Hospitality'];

  // Residential sub-filters list
  const residentialSubFilters: ResidentialSubFilter[] = [
    'ALL',
    'Living Room',
    'Bedroom',
    'Dining Room',
    'Kitchen',
    'Mandir',
    'Wall Finishes',
    'TV',
    'Study',
    'Cupboards',
  ];

  // Helper counts
  const getCategoryCount = (cat: PrimaryFilter) => {
    if (cat === 'ALL') return GALLERY_IMAGES.length;
    return GALLERY_IMAGES.filter((img) => img.category === cat).length;
  };

  const getRoomCount = (room: ResidentialSubFilter) => {
    if (room === 'ALL') {
      return GALLERY_IMAGES.filter((img) => img.category === 'Residential').length;
    }
    return GALLERY_IMAGES.filter(
      (img) => img.category === 'Residential' && img.roomType === room
    ).length;
  };

  // Lightbox Navigation
  const handlePrevImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  }, [selectedImage, filteredImages]);

  const handleNextImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [selectedImage, filteredImages]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') handlePrevImage();
      if (e.key === 'ArrowRight') handleNextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrevImage, handleNextImage]);

  return (
    <PageTransition>
      <SEO
        title="Interior Design Projects & Gallery in Pune | JIVAH Projects"
        description="Explore JIVAH Projects' visual portfolio of residential interiors, commercial spaces, and hospitality venues in Pune, Maharashtra. High-resolution interior photography archive."
        canonicalUrl="https://jivahprojects.com/work"
        jsonLd={[LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA]}
      />

      <div className="pt-36 pb-28 bg-[#F7F3EC] text-[#11181C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
              <span className="w-8 h-[1px] bg-[#2F7B93]" />
              <span>INTERIOR PORTFOLIO & ARCHIVE</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight leading-[0.92]">
              OUR INTERIOR DESIGN PROJECTS
            </h1>

            <p className="text-lg sm:text-xl font-light text-[#61747C] leading-relaxed max-w-2xl pt-2">
              Discover JIVAH Projects' curated interior photography spanning bespoke residential homes, corporate workspaces, and luxury hospitality venues across Pune, Maharashtra, India.
            </p>

            {/* Primary Category Filters */}
            <div className="pt-4 space-y-4 border-b border-[#2F7B93]/15 pb-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] tracking-[0.25em] font-mono text-[#61747C] uppercase mr-2">
                  CATEGORY:
                </span>
                {primaryCategories.map((cat) => {
                  const isActive = activeCategory === cat;
                  const count = getCategoryCount(cat);

                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategorySelect(cat)}
                      className={`text-xs tracking-[0.2em] font-medium uppercase px-5 py-2.5 transition-all duration-300 focus:outline-none rounded-xl flex items-center gap-2.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#16465A] text-white shadow-md'
                          : 'bg-white border border-[#2F7B93]/20 text-[#61747C] hover:text-[#11181C] hover:bg-[#2F7B93]/10'
                      }`}
                    >
                      <span>{cat}</span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-[#2F7B93] text-white' : 'bg-[#EDE5D9] text-[#61747C]'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Residential Sub-Filters (Living Room | Bedroom | Dining Room | Kitchen) */}
              <AnimatePresence>
                {activeCategory === 'Residential' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden pt-3"
                  >
                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#2F7B93]/10">
                      <span className="text-[10px] tracking-[0.25em] font-mono text-[#2F7B93] uppercase mr-2">
                        ROOM TYPE:
                      </span>
                      {residentialSubFilters.map((room) => {
                        const isRoomActive = activeRoom === room;
                        const count = getRoomCount(room);

                        return (
                          <button
                            key={room}
                            onClick={() => handleRoomSelect(room)}
                            className={`text-[11px] tracking-[0.18em] font-medium uppercase px-4 py-2 transition-all duration-200 focus:outline-none rounded-lg flex items-center gap-2 cursor-pointer ${
                              isRoomActive
                                ? 'bg-[#2F7B93] text-white shadow-xs'
                                : 'bg-white/80 border border-[#2F7B93]/15 text-[#61747C] hover:text-[#11181C] hover:bg-[#EDE5D9]/70'
                            }`}
                          >
                            <span>{room}</span>
                            <span
                              className={`text-[9px] font-mono px-1.5 py-0.2 rounded-full ${
                                isRoomActive
                                  ? 'bg-[#16465A] text-[#8FD3DC]'
                                  : 'bg-[#EDE5D9] text-[#61747C]'
                              }`}
                            >
                              {count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Gallery Status Bar */}
          <div className="flex items-center justify-between border-b border-[#2F7B93]/15 pb-4">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#2F7B93]">
              {activeCategory === 'Residential' && activeRoom !== 'ALL'
                ? `RESIDENTIAL // ${activeRoom.toUpperCase()}`
                : activeCategory.toUpperCase()}
            </span>
            <span className="text-xs font-mono text-[#61747C]">
              {filteredImages.length} PHOTOGRAPHS
            </span>
          </div>

          {/* Image-First Gallery: Responsive Masonry Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredImages.map((item) => {
              const isPortrait = item.orientation === 'portrait';
              const isPanoramic = item.orientation === 'panoramic';
              const aspectClass = isPortrait
                ? 'aspect-[3/4]'
                : isPanoramic
                ? 'aspect-[16/9]'
                : 'aspect-[4/3]';

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-2xl bg-[#EEF5F6] border border-[#2F7B93]/15 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image Container with native aspect-ratio */}
                  <div className={`w-full ${aspectClass} overflow-hidden`}>
                    <OptimizedImage
                      src={item.url}
                      alt={item.alt}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                      containerClassName="w-full h-full"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Gradient Overlay & Hover Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#16465A]/95 via-[#16465A]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white pointer-events-none">
                    <span className="text-[10px] font-mono tracking-widest text-[#8FD3DC] uppercase">
                      {item.category === 'Residential' && item.roomType
                        ? `Residential · ${item.roomType}`
                        : item.category}
                    </span>
                    <h3 className="font-serif text-xl font-medium text-white uppercase mt-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-light text-white/85 line-clamp-2 mt-1">
                      {item.caption}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#8FD3DC] uppercase">
                      <span>CLICK TO VIEW</span>
                      <span>→</span>
                    </div>
                  </div>

                  {/* Category Tag Badge */}
                  <div className="absolute top-4 left-4 bg-[#16465A]/85 backdrop-blur-md text-white text-[9px] font-mono tracking-widest uppercase px-3 py-1 rounded-full border border-white/20 pointer-events-none">
                    {item.category === 'Residential' && item.roomType
                      ? `${item.roomType}`
                      : item.category}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl font-mono p-2 transition-colors z-50 focus:outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 sm:left-8 text-white/70 hover:text-white text-3xl font-mono p-3 transition-colors z-50 focus:outline-none bg-black/40 hover:bg-black/80 rounded-full cursor-pointer"
              aria-label="Previous Image"
            >
              ←
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 sm:right-8 text-white/70 hover:text-white text-3xl font-mono p-3 transition-colors z-50 focus:outline-none bg-black/40 hover:bg-black/80 rounded-full cursor-pointer"
              aria-label="Next Image"
            >
              →
            </button>

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#16465A] border border-[#2F7B93]/40 rounded-3xl overflow-hidden shadow-2xl text-white"
            >
              <div className="relative flex-1 bg-black/60 flex items-center justify-center p-4 min-h-[320px] sm:min-h-[500px]">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.alt}
                  className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-2.5 bg-[#16465A] border-t border-[#2F7B93]/30">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#8FD3DC] uppercase px-3 py-1 bg-[#2F7B93]/30 rounded-full border border-[#8FD3DC]/30">
                    {selectedImage.category === 'Residential' && selectedImage.roomType
                      ? `Residential · ${selectedImage.roomType}`
                      : selectedImage.category}
                  </span>
                  <span className="text-xs font-mono text-[#8FD3DC]">
                    IMAGE {filteredImages.findIndex((i) => i.id === selectedImage.id) + 1} OF{' '}
                    {filteredImages.length}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl uppercase text-white tracking-tight">
                  {selectedImage.title}
                </h3>
                <p className="text-sm font-light text-white/85 leading-relaxed max-w-3xl">
                  {selectedImage.caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
