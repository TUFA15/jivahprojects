import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandMotif } from './BrandMotif';

export const SitePreloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Fast, smooth counter simulation up to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 18) + 12;
      });
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.25, 1, 0.5, 1] }}
          className="fixed inset-0 z-[9999] bg-[#16465A] text-white flex flex-col justify-between p-8 sm:p-16 select-none pointer-events-none"
        >
          {/* Top Brand Tag */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-[10px] font-mono tracking-[0.3em] uppercase text-[#8FD3DC]">
              <span className="w-2 h-2 rounded-full bg-[#55B3C5] animate-ping" />
              <span>JIVAH PROJECTS · PUNE</span>
            </div>
            <span className="text-[10px] font-mono text-[#8FD3DC]/70 tracking-widest uppercase">
              INTERIOR DESIGN STUDIO
            </span>
          </div>

          {/* Center Brand Motif & Progress */}
          <div className="flex flex-col items-center justify-center space-y-6 text-center my-auto">
            <div className="relative flex items-center justify-center">
              <BrandMotif size={80} color="#8FD3DC" animateSpin={true} />
              <div className="absolute inset-0 rounded-full border border-[#2F7B93]/40 animate-ping opacity-25" />
            </div>

            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl uppercase tracking-wider text-white">
                JIVAH PROJECTS
              </h1>
              <p className="text-xs font-mono tracking-[0.25em] text-[#8FD3DC] uppercase">
                SPACES THAT DEFINE HOW YOU LIVE
              </p>
            </div>
          </div>

          {/* Bottom Progress Bar & Counter */}
          <div className="space-y-4 max-w-md mx-auto w-full">
            <div className="flex items-center justify-between text-xs font-mono text-[#8FD3DC]">
              <span>LOADING ATMOSPHERE</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>

            <div className="w-full h-[2px] bg-[#2F7B93]/40 overflow-hidden relative rounded-full">
              <motion.div
                className="h-full bg-[#55B3C5] rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
