import React, { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'Interior Designer in Pune, Interior Designer in Hadapsar, Home Interior Designer in Hadapsar, Residential Interior Designer in Pune, Home Interior Design Services Pune, Modular Kitchen Design Pune, JIVAH Projects',
  canonicalUrl = 'https://jivahprojects.com',
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  jsonLd,
}) => {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper function to set or create meta tag
    const setMetaTag = (nameOrProperty: string, value: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, nameOrProperty);
        document.head.appendChild(element);
      }
      element.setAttribute('content', value);
    };

    // Helper function to set or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 2. Set Meta Tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setLinkTag('canonical', canonicalUrl);

    // 3. Set Open Graph Tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:url', canonicalUrl, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'JIVAH Projects', true);

    // 4. Set Twitter Card Tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // 5. Inject JSON-LD Scripts
    const injectedScriptIds: string[] = [];
    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schemaObj, index) => {
        const scriptId = `jsonld-seo-${index}`;
        let scriptElem = document.getElementById(scriptId) as HTMLScriptElement | null;
        if (!scriptElem) {
          scriptElem = document.createElement('script');
          scriptElem.id = scriptId;
          scriptElem.type = 'application/ld+json';
          document.head.appendChild(scriptElem);
        }
        scriptElem.textContent = JSON.stringify(schemaObj, null, 2);
        injectedScriptIds.push(scriptId);
      });
    }

    return () => {
      // Cleanup injected JSON-LD scripts when component unmounts or updates
      injectedScriptIds.forEach((id) => {
        const elem = document.getElementById(id);
        if (elem && elem.parentNode) {
          elem.parentNode.removeChild(elem);
        }
      });
    };
  }, [title, description, keywords, canonicalUrl, ogType, ogImage, jsonLd]);

  return null;
};
