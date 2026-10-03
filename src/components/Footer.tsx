import React from 'react';
import { Link } from 'react-router-dom';
import { BrandMotif } from './BrandMotif';
import { Logo } from './Logo';

// Configurable URLs for footer credits
export const FOOTER_CREDITS_CONFIG = {
  brbMediaaUrl: 'https://brbmediaa-stack.github.io/BRB/',
  arccenaSolutionsUrl: 'https://arccena.in',
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#16465A] text-white relative overflow-hidden border-t border-[#2F7B93]/20 pt-20 pb-12">
      {/* Background Subtle Ornamental Logo Motif Watermark */}
      <div className="absolute right-[-8%] bottom-[-15%] pointer-events-none opacity-5">
        <BrandMotif size={500} color="#8FD3DC" animateSpin={true} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#2F7B93]/30">
          {/* Column 1: Brand & Statement */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="dark" motifSize={36} />
            <p className="text-sm font-light leading-relaxed text-[#8FD3DC]/80 max-w-md">
              Contemporary interior environments in Pune shaped by material integrity, quiet luxury, soft lighting, and spatial atmosphere.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-2 h-2 rounded-full bg-[#55B3C5] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#8FD3DC]/70 font-mono">
                HADAPSAR · PUNE · MAHARASHTRA
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#8FD3DC] font-mono">
              [ NAVIGATION ]
            </h4>
            <ul className="space-y-3 text-xs tracking-[0.2em] uppercase font-medium">
              <li>
                <Link to="/work" className="text-white/80 hover:text-[#8FD3DC] transition-colors">
                  SELECTED WORK
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-[#8FD3DC] transition-colors">
                  ABOUT THE STUDIO
                </Link>
              </li>
              <li>
                <Link to="/journal" className="text-white/80 hover:text-[#8FD3DC] transition-colors">
                  JOURNAL & THOUGHTS
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-[#8FD3DC] transition-colors">
                  GET IN TOUCH
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-[#8FD3DC] font-mono">
              [ INQUIRIES ]
            </h4>
            <div className="space-y-2 text-xs text-white/80">
              <p className="font-serif text-base text-white">Interior Design Commissions</p>
              <p>
                <a
                  href="mailto:jivahprojects@gmail.com"
                  className="hover:text-[#8FD3DC] underline decoration-[#2F7B93] underline-offset-4 transition-colors font-mono text-sm text-white"
                >
                  jivahprojects@gmail.com
                </a>
              </p>
              <p className="text-[#8FD3DC] font-mono text-sm pt-1">
                <a href="tel:+918979719955" className="hover:text-white transition-colors">
                  +91 89797 19955
                </a>
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-5 text-[11px] tracking-[0.2em] uppercase text-[#8FD3DC]">
              <a
                href="https://www.instagram.com/jivahprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>INSTAGRAM</span>
                <span className="text-[9px]">↗</span>
              </a>
              <a
                href="https://youtube.com/@jivahprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>YOUTUBE</span>
                <span className="text-[9px]">↗</span>
              </a>
              <a
                href="https://www.linkedin.com/company/jivah-projects"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>LINKEDIN</span>
                <span className="text-[9px]">↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8FD3DC]/60 font-light gap-4">
          <div className="flex items-center gap-2">
            <BrandMotif size={16} color="#55B3C5" opacity={0.6} />
            <span>© {new Date().getFullYear()} JIVAH PROJECTS. ALL RIGHTS RESERVED.</span>
          </div>

          {/* Credit Line: Powered by BRB Mediaa · Built by Arccena Solutions */}
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-[#8FD3DC]/70">
            <span>Powered by</span>
            <a
              href={FOOTER_CREDITS_CONFIG.brbMediaaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline decoration-[#2F7B93] text-white font-medium"
            >
              BRB Mediaa
            </a>
            <span className="text-[#2F7B93]">·</span>
            <span>Built by</span>
            <a
              href={FOOTER_CREDITS_CONFIG.arccenaSolutionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8FD3DC] transition-colors underline decoration-[#2F7B93] text-white font-medium"
            >
              Arccena Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
