import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  className?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'RAW SPACE',
  afterLabel = 'FINISHED INTERIOR',
  caption = 'Interior spatial transformation by JIVAH Projects',
  className = '',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div
        className="relative overflow-hidden bg-[#EEF5F6] aspect-[16/10] select-none cursor-ew-resize border border-[#2F7B93]/20 shadow-md group"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full width background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none transition-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 pointer-events-none z-10">
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase px-3 py-1 bg-[#16465A]/90 text-[#8FD3DC] backdrop-blur-xs border border-[#2F7B93]/30">
            {beforeLabel}
          </span>
        </div>

        <div className="absolute top-4 right-4 pointer-events-none z-10">
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase px-3 py-1 bg-[#2F7B93]/90 text-white backdrop-blur-xs border border-white/20">
            {afterLabel}
          </span>
        </div>

        {/* Slider Divider Bar */}
        <div
          className="absolute top-0 bottom-0 z-20 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-[2px] h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]" />
          <div className="absolute w-8 h-8 rounded-full bg-[#16465A] border-2 border-white text-white flex items-center justify-center shadow-lg transform -translate-x-1/2">
            <span className="text-[10px] tracking-tighter font-mono">↔</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-[#61747C] font-mono">
        <span className="tracking-wider uppercase text-[10px]">
          DRAG SLIDER TO REVEAL INTERIOR TRANSFORMATION
        </span>
        <span className="text-[10px] text-[#2F7B93]">{caption}</span>
      </div>
    </div>
  );
};
