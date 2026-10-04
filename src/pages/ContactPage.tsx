import React from 'react';
import { BrandMotif } from '../components/BrandMotif';
import { PageTransition } from '../components/PageTransition';
import { FAQSection } from '../components/FAQSection';
import { SEO } from '../components/SEO';
import { LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA, FAQ_SCHEMA } from '../data/schemas';

// Easily editable configuration object for client/developer updates
export const CONTACT_CONFIG = {
  email: 'jivahprojects@gmail.com',
  phone: '+91 89797 19955',
  phoneRaw: '+918979719955',
  locationUrl: 'https://maps.google.com/?q=Hermosa+Casa,+Mundhwa,+Pune,+Maharashtra',
  social: {
    instagram: 'https://www.instagram.com/jivahprojects',
    youtube: 'https://youtube.com/@jivahprojects',
    linkedin: 'https://www.linkedin.com/company/jivah-projects',
  },
  primaryLocation: {
    city: 'PUNE',
    hub: 'MUNDHWA',
    address: 'Near Hermosa Casa, Mundhwa',
    state: 'Pune, Maharashtra 411036',
    mapsUrl: 'https://maps.google.com/?q=Hermosa+Casa,+Mundhwa,+Pune,+Maharashtra',
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
        description="Get in touch with JIVAH Projects, interior design studio based in Mundhwa (near Hermosa Casa), Pune. Contact us via email or phone for residential interior and modular kitchen inquiries."
        canonicalUrl="https://jivahprojects.com/contact"
        jsonLd={[LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA, FAQ_SCHEMA]}
      />

      <div className="pt-36 bg-[#F7F3EC] text-[#11181C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 pb-24">
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
              Connect with JIVAH Projects to discuss your home interior, 2 BHK or 3 BHK layout, or modular kitchen design project in Mundhwa, Pune, and surrounding areas.
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
                    Near Hermosa Casa, Mundhwa, Pune, Maharashtra
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

              {/* Digital Channels & Social */}
              <div className="space-y-4">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2F7B93] uppercase block font-semibold">
                  DIGITAL CHANNELS & ARCHIVES
                </span>
                <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs font-mono tracking-widest uppercase">
                  <a
                    href={CONTACT_CONFIG.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#11181C] hover:text-[#2F7B93] transition-colors"
                  >
                    <span>INSTAGRAM</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                  <a
                    href={CONTACT_CONFIG.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#11181C] hover:text-[#2F7B93] transition-colors"
                  >
                    <span>YOUTUBE</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                  <a
                    href={CONTACT_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#11181C] hover:text-[#2F7B93] transition-colors"
                  >
                    <span>LINKEDIN</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
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

              {/* Primary Location (Mundhwa, Pune) */}
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

        {/* FAQs Moved to Contact Page */}
        <FAQSection />
      </div>
    </PageTransition>
  );
};
