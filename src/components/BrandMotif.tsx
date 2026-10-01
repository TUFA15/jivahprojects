import React from 'react';

interface BrandMotifProps {
  className?: string;
  size?: number | string;
  color?: string;
  animateSpin?: boolean;
  opacity?: number;
}

export const BrandMotif: React.FC<BrandMotifProps> = ({
  className = '',
  size = 40,
  color = '#2F7B93',
  animateSpin = false,
  opacity = 1,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${animateSpin ? 'animate-spin-slow' : ''} ${className}`}
      style={{ opacity }}
    >
      {/* Outer subtle circular ring */}
      <circle cx="50" cy="50" r="46" stroke={color} strokeWidth="1" opacity="0.35" />

      {/* Middle rotunda ring */}
      <circle cx="50" cy="50" r="38" stroke={color} strokeWidth="1.2" opacity="0.75" />

      {/* 4 Cardinal soft spatial markers */}
      <circle cx="50" cy="5" r="2" fill={color} />
      <circle cx="50" cy="95" r="2" fill={color} />
      <circle cx="5" cy="50" r="2" fill={color} />
      <circle cx="95" cy="50" r="2" fill={color} />

      {/* Inner spatial square rotated at 45 deg */}
      <rect
        x="33"
        y="33"
        width="34"
        height="34"
        transform="rotate(45 50 50)"
        stroke={color}
        strokeWidth="1.2"
        opacity="0.85"
      />

      {/* Inscribed inner circle */}
      <circle cx="50" cy="50" r="22" stroke={color} strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

      {/* Inner warm fill ring */}
      <circle cx="50" cy="50" r="10" fill={color} fillOpacity="0.12" stroke={color} strokeWidth="1" />

      {/* Central focal point */}
      <circle cx="50" cy="50" r="2.5" fill={color} />
    </svg>
  );
};
