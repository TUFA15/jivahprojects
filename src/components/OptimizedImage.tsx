import React, { useState } from 'react';
import imageManifest from '../data/imageManifest.json';

interface ImageManifestEntry {
  originalPath: string;
  fallbackWebp: string;
  sources: Record<string, string>;
  srcset: string;
  width: number;
  height: number;
  aspectRatio: number;
  placeholder: string;
}

const manifest = imageManifest as Record<string, ImageManifestEntry>;

export interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  aspectRatio?: string;
  containerClassName?: string;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  aspectRatio,
  containerClassName = '',
  className = '',
  objectFit = 'cover',
  onLoad,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Match manifest metadata
  const meta = manifest[src];

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const imageSrc = meta ? meta.fallbackWebp : src;
  const imageSrcSet = meta ? meta.srcset : undefined;
  const placeholderUrl = meta ? meta.placeholder : undefined;
  const computedAspect = aspectRatio || (meta ? `${meta.aspectRatio}` : undefined);

  return (
    <div
      className={`relative overflow-hidden bg-[#EEF5F6] ${containerClassName}`}
      style={computedAspect ? { aspectRatio: computedAspect } : undefined}
    >
      {/* 1. Low-Quality Blur-Up Placeholder */}
      {placeholderUrl && (
        <img
          src={placeholderUrl}
          alt=""
          aria-hidden="true"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-${objectFit} blur-lg scale-105 transition-opacity duration-700 pointer-events-none ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* 2. Responsive WebP Image */}
      <img
        src={imageSrc}
        srcSet={imageSrcSet}
        sizes={imageSrcSet ? sizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // @ts-ignore fetchpriority is supported in modern browsers
        fetchpriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        className={`w-full h-full object-${objectFit} transition-all duration-700 ease-out ${
          placeholderUrl ? (isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-102') : 'opacity-100'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
