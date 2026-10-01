import React from 'react';
import { Link } from 'react-router-dom';
import { BrandMotif } from '../components/BrandMotif';
import { PageTransition } from '../components/PageTransition';

export const NotFoundPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-[85vh] flex items-center justify-center pt-32 pb-24 px-6 text-center bg-[#F8F9F8]">
        <div className="max-w-md mx-auto space-y-8">
          <div className="inline-flex justify-center p-6 bg-[#EEF5F6] rounded-full border border-[#2F7B93]/20">
            <BrandMotif size={64} color="#2F7B93" animateSpin={true} />
          </div>

          <div className="space-y-3">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
              [ ERROR 404 // SPATIAL UNASSIGNED ]
            </span>
            <h1 className="font-serif text-5xl md:text-6xl uppercase text-[#11181C]">
              PAGE NOT FOUND
            </h1>
            <p className="text-sm font-light text-[#61747C]">
              The spatial coordinates or architectural page you are looking for has been relocated or does not exist.
            </p>
          </div>

          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-3 bg-[#16465A] text-white hover:bg-[#2F7B93] px-8 py-4 text-xs tracking-[0.25em] font-medium uppercase transition-colors shadow-xs"
            >
              <span>RETURN TO HOME</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
