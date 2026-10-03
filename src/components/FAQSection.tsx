import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_ITEMS } from '../data/schemas';
import { BrandMotif } from './BrandMotif';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F7F3EC] text-[#11181C] border-t border-[#2F7B93]/15 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#2F7B93]" />
            <span className="text-[11px] font-mono text-[#2F7B93] tracking-[0.25em] uppercase font-semibold">
              FAQ & INTERIOR ADVICE
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl uppercase text-[#11181C] leading-[1.05] tracking-tight">
            FREQUENTLY ASKED
            <br />
            <span className="italic font-normal text-[#2F7B93]">QUESTIONS.</span>
          </h2>

          <p className="text-base sm:text-lg font-light text-[#61747C] leading-relaxed">
            Essential answers about JIVAH Projects' interior design services, modular kitchens, scope, and local presence in Hadapsar, Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-4">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white border border-[#2F7B93]/20 rounded-2xl overflow-hidden transition-colors duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left p-6 sm:p-8 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl sm:text-2xl text-[#11181C] uppercase font-medium leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`w-8 h-8 rounded-full border border-[#2F7B93]/30 flex items-center justify-center text-[#2F7B93] text-lg transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-[#EEF5F6]' : ''
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-8 pb-6 sm:pb-8 text-sm sm:text-base font-light text-[#61747C] leading-relaxed border-t border-[#2F7B93]/10 pt-4">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-4 bg-[#16465A] text-white p-8 sm:p-10 rounded-3xl space-y-6 relative border-l-4 border-[#2F7B93] shadow-xl">
            <div className="w-12 h-12 rounded-2xl bg-[#2F7B93]/30 border border-[#8FD3DC]/30 flex items-center justify-center">
              <BrandMotif size={24} color="#8FD3DC" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono text-[#8FD3DC] tracking-widest uppercase block">
                [ STUDIO CONSULTATION ]
              </span>
              <h3 className="font-serif text-2xl uppercase text-white">HAVE A CUSTOM INQUIRY?</h3>
            </div>

            <p className="text-xs sm:text-sm text-[#8FD3DC]/80 font-light leading-relaxed">
              We collaborate with homeowners and business clients across Hadapsar and Pune for bespoke residential interiors and modular kitchens.
            </p>

            <div className="pt-2">
              <a
                href="mailto:jivahprojects@gmail.com"
                className="inline-flex items-center gap-3 text-xs tracking-[0.2em] font-mono text-[#8FD3DC] hover:text-white uppercase transition-colors"
              >
                <span>EMAIL OUR STUDIO</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
