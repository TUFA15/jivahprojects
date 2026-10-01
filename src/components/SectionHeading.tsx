import React from 'react';
import { BrandMotif } from './BrandMotif';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
  dark = false,
}) => {
  return (
    <div
      className={`space-y-4 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-4xl'} ${className}`}
    >
      {label && (
        <div
          className={`flex items-center gap-2.5 text-[10px] tracking-[0.3em] font-medium uppercase font-mono ${
            align === 'center' ? 'justify-center' : ''
          } ${dark ? 'text-[#8FD3DC]' : 'text-[#2F7B93]'}`}
        >
          <BrandMotif size={14} color={dark ? '#8FD3DC' : '#2F7B93'} opacity={0.8} />
          <span>{label}</span>
        </div>
      )}

      <h2
        className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] uppercase ${
          dark ? 'text-white' : 'text-[#11181C]'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl ${
            dark ? 'text-[#8FD3DC]/80' : 'text-[#61747C]'
          }`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`w-12 h-[1px] ${dark ? 'bg-[#2F7B93]' : 'bg-[#8FD3DC]'} ${
          align === 'center' ? 'mx-auto' : ''
        } mt-6`}
      />
    </div>
  );
};
