import React, { useState, useRef, useEffect } from 'react';
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
  containerClassName = 'w-full h-full',
  className = '',
  objectFit = 'cover',
  onLoad,
  ...props
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Match manifest metadata
  const meta = manifest[src];

  // Immediately check if already complete in browser cache
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setIsLoaded(true);
    }
  }, [src]);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const imageSrc = meta ? meta.fallbackWebp : src;
  const imageSrcSet = meta ? meta.srcset : undefined;
  const placeholderUrl = meta ? meta.placeholder : undefined;

  return (
    <div
      className={`relative overflow-hidden bg-[#EEF5F6] ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* 1. Low-Quality Blur-Up Placeholder (placed behind real image) */}
      {placeholderUrl && (
        <img
          src={placeholderUrl}
          alt=""
          aria-hidden="true"
          decoding="async"
          className={`absolute inset-0 w-full h-full object-${objectFit} blur-xs scale-102 transition-opacity duration-300 pointer-events-none z-0 ${
            isLoaded ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}

      {/* 2. Responsive WebP Image (front layer z-[1]) */}
      <img
        ref={imgRef}
        src={imageSrc}
        srcSet={imageSrcSet}
        sizes={imageSrcSet ? sizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        // @ts-ignore fetchpriority is supported in modern browsers
        fetchpriority={priority ? 'high' : 'auto'}
        onLoad={handleLoad}
        className={`relative z-[1] w-full h-full object-${objectFit} transition-opacity duration-300 ease-out ${
          placeholderUrl ? (isLoaded ? 'opacity-100' : 'opacity-95') : 'opacity-100'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
