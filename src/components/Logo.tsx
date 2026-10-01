import React from 'react';
import { Link } from 'react-router-dom';
import { BrandMotif } from './BrandMotif';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showMotif?: boolean;
  motifSize?: number;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'light',
  showMotif = true,
  motifSize = 34,
}) => {
  const isDark = variant === 'dark';

  const textColorClass = isDark ? 'text-white' : 'text-[#11181C]';
  const subtextColorClass = isDark ? 'text-[#8FD3DC]' : 'text-[#2F7B93]';
  const motifColor = isDark ? '#8FD3DC' : '#2F7B93';

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-3.5 group cursor-pointer focus:outline-none ${className}`}
      aria-label="JIVAH Projects Home"
    >
      {showMotif && (
        <div className="relative flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
          <BrandMotif size={motifSize} color={motifColor} />
        </div>
      )}

      <div className="flex flex-col leading-none">
        <span
          className={`font-serif text-xl md:text-2xl tracking-[0.2em] font-medium uppercase transition-colors duration-300 ${textColorClass}`}
        >
          JIVAH
        </span>
        <span
          className={`text-[9px] md:text-[10px] tracking-[0.32em] font-sans font-semibold uppercase mt-0.5 transition-colors duration-300 ${subtextColorClass}`}
        >
          PROJECTS
        </span>
      </div>
    </Link>
  );
};
