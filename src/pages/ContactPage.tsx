import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { BrandMotif } from '../components/BrandMotif';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA } from '../data/schemas';

// Easily editable configuration object for client/developer updates
export const CONTACT_CONFIG = {
  email: 'enquiries@jivahprojects.com',
  phone: '+91 (0) 22 4980 3200',
  phoneRaw: '+912249803200',
  locationUrl: 'https://maps.google.com/?q=Hadapsar,+Pune,+Maharashtra',
  primaryLocation: {
    city: 'PUNE',
    hub: 'HADAPSAR',
    address: 'Hadapsar, Pune',
    state: 'Maharashtra 411028',
    mapsUrl: 'https://maps.google.com/?q=Hadapsar,+Pune,+Maharashtra',
  },
  additionalLocations: [
    {
      city: 'MUMBAI',
      address: 'Malabar Hill',
      state: 'Mumbai, Maharashtra 400006',
      mapsUrl: 'https://maps.google.com/?q=Malabar+Hill,+Mumbai',
    },
  ],
};

export const ContactPage: React.FC = () => {
  return (
    <PageTransition>
      <SEO
        title="Contact JIVAH Projects | Interior Designer in Pune"
        description="Get in touch with JIVAH Projects, interior design studio in Hadapsar, Pune. Contact us via email or phone for residential interior and modular kitchen inquiries."
        canonicalUrl="https://jivahprojects.com/contact"
        jsonLd={[LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA]}
      />

      <div className="pt-36 pb-32 bg-[#F7F3EC] text-[#11181C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20">
          {/* Header */}
          <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
              <BrandMotif size={16} color="#2F7B93" />
              <span>JIVAH PROJECTS · PUNE INTERIOR DESIGN STUDIO</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.92]">
              GET IN TOUCH
            </h1>

            <p className="text-lg sm:text-xl font-light text-[#61747C] leading-relaxed max-w-2xl pt-2">
              Connect with JIVAH Projects to discuss your home interior, 2 BHK or 3 BHK layout, or modular kitchen design project in Hadapsar, Pune, and surrounding areas.
            </p>
          </div>

          {/* Minimal Editorial Contact Layout (No Form) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-t border-[#2F7B93]/20 pt-16">
            {/* Primary Contact Details Column */}
            <div className="lg:col-span-6 space-y-12">
              {/* Email Section */}
              <div className="space-y-3 pb-8 border-b border-[#2F7B93]/15">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2F7B93] uppercase block font-semibold">
                  ELECTRONIC MAIL
                </span>
                <a
                  href={`mailto:${CONTACT_CONFIG.email}`}
                  className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#11181C] hover:text-[#2F7B93] transition-colors duration-300 block leading-tight"
                >
                  {CONTACT_CONFIG.email}
                </a>
              </div>

              {/* Phone Section */}
              <div className="space-y-3 pb-8 border-b border-[#2F7B93]/15">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2F7B93] uppercase block font-semibold">
                  TELEPHONE INQUIRIES
                </span>
                <a
                  href={`tel:${CONTACT_CONFIG.phoneRaw}`}
                  className="font-mono text-2xl sm:text-3xl text-[#11181C] hover:text-[#2F7B93] transition-colors duration-300 block"
                >
                  {CONTACT_CONFIG.phone}
                </a>
              </div>

              {/* Location Direct Access */}
              <div className="space-y-3 pb-8 border-b border-[#2F7B93]/15">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2F7B93] uppercase block font-semibold">
                  LOCATION & MAP LINK
                </span>
                <div className="space-y-1">
                  <p className="font-serif text-2xl sm:text-3xl text-[#11181C]">
                    Hadapsar, Pune, Maharashtra
                  </p>
                  <div className="pt-2">
                    <a
                      href={CONTACT_CONFIG.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#16465A] text-white hover:bg-[#2F7B93] px-6 py-3 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 rounded-xl shadow-xs"
                    >
                      <span>VIEW LOCATION</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Archive */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2F7B93] uppercase block font-semibold">
                  INSTAGRAM ARCHIVE
                </span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#11181C] hover:text-[#2F7B93] uppercase transition-colors"
                >
                  <span>@JIVAHPROJECTS</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Studio Locations Column */}
            <div className="lg:col-span-6 space-y-12 bg-[#EDE5D9]/60 p-8 md:p-12 border border-[#2F7B93]/15 rounded-3xl shadow-xs">
              <div className="space-y-2">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93] block">
                  [ PRIMARY HUB & LOCATION ]
                </span>
                <h2 className="font-serif text-3xl uppercase text-[#11181C]">
                  STUDIO PRESENCE IN PUNE
                </h2>
              </div>

              {/* Primary Location (Hadapsar, Pune) */}
              <div className="space-y-3 pb-6 border-b border-[#2F7B93]/20">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl uppercase text-[#11181C]">
                    {CONTACT_CONFIG.primaryLocation.city}
                  </h3>
                  <span className="text-[10px] font-mono text-[#2F7B93] tracking-widest uppercase font-semibold">
                    PRIMARY STUDIO HUB
                  </span>
                </div>
                <p className="text-sm font-light text-[#61747C]">
                  {CONTACT_CONFIG.primaryLocation.address}
                </p>
                <p className="text-sm font-light text-[#61747C]">
                  {CONTACT_CONFIG.primaryLocation.state}
                </p>
                <div className="pt-2">
                  <a
                    href={CONTACT_CONFIG.primaryLocation.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-[#2F7B93] hover:text-[#16465A] uppercase transition-colors font-medium"
                  >
                    <span>VIEW LOCATION</span>
                    <span>→</span>
                  </a>
                </div>
              </div>

              {/* Additional Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                {CONTACT_CONFIG.additionalLocations.map((loc) => (
                  <div key={loc.city} className="space-y-2">
                    <h3 className="font-serif text-xl uppercase text-[#11181C]">{loc.city}</h3>
                    <p className="text-xs font-light text-[#61747C]">{loc.address}</p>
                    <p className="text-xs font-light text-[#61747C]">{loc.state}</p>
                    <div className="pt-1">
                      <a
                        href={loc.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider text-[#2F7B93] hover:text-[#16465A] uppercase transition-colors"
                      >
                        <span>VIEW LOCATION</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
