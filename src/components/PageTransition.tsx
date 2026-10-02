import React from 'react';
import { motion } from 'framer-motion';
import { BrandMotif } from './BrandMotif';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  return (
    <div className="relative w-full">
      {/* Editorial Top Loader Curtain Reveal */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
        style={{ originY: 0 }}
        className="fixed inset-0 z-[9990] bg-[#16465A] pointer-events-none flex items-center justify-center"
      >
        <div className="flex items-center gap-3 text-[#8FD3DC] opacity-70">
          <BrandMotif size={36} color="#8FD3DC" animateSpin={true} />
        </div>
      </motion.div>

      {/* Main Page Content Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: 0.15 }}
        className="smooth-gpu min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
};
