import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { BrandMotif } from './BrandMotif';

const NAV_ITEMS = [
  { label: 'WORK', path: '/work' },
  { label: 'ABOUT', path: '/about' },
  { label: 'JOURNAL', path: '/journal' },
  { label: 'CONTACT', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Check if current view is on Home Page top hero (which has dark background)
  const isHomePage = location.pathname === '/';
  const isDarkContext = !isScrolled && isHomePage;

  return (
    <>
      {/* Header Container with High-Contrast Glassmorphic Scroll Transition */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'top-3 mx-4 md:mx-auto max-w-7xl rounded-full bg-white/95 backdrop-blur-md shadow-md border border-[#2F7B93]/20 py-3 px-6 md:px-10'
            : isHomePage
            ? 'top-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent py-6 px-6 md:px-12 text-white'
            : 'top-0 bg-[#F8F9F8] py-6 px-6 md:px-12 border-b border-[#2F7B93]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with Explicit Variant for Crisp Contrast */}
          <Logo
            variant={isDarkContext ? 'dark' : 'light'}
            motifSize={32}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-link group relative text-xs tracking-[0.25em] font-semibold py-1.5 uppercase transition-colors duration-300 focus:outline-none ${
                      isActive
                        ? isDarkContext
                          ? 'text-[#8FD3DC]'
                          : 'text-[#2F7B93]'
                        : isDarkContext
                        ? 'text-white hover:text-[#8FD3DC]'
                        : 'text-[#11181C] hover:text-[#2F7B93]'
                    }`
                  }
                >
                  <span>{item.label}</span>

                  {/* Left-to-Right Expanding Underline Animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ease-out ${
                      isDarkContext ? 'bg-[#8FD3DC]' : 'bg-[#2F7B93]'
                    } ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-lg font-medium text-xs tracking-widest uppercase transition-colors focus:outline-none flex items-center gap-2 ${
                isDarkContext
                  ? 'text-white hover:text-[#8FD3DC] bg-black/20'
                  : 'text-[#11181C] hover:text-[#2F7B93] bg-[#EEF5F6]'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle main navigation menu"
            >
              <span>{mobileMenuOpen ? 'CLOSE' : 'MENU'}</span>
              {!mobileMenuOpen ? (
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-[#2F7B93]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-[#16465A] text-white flex flex-col justify-between p-8 pt-28 overflow-y-auto"
          >
            <div className="absolute right-[-10%] bottom-[-10%] pointer-events-none opacity-10">
              <BrandMotif size={600} color="#8FD3DC" animateSpin={true} />
            </div>

            <div className="relative z-10">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#8FD3DC] block mb-2 font-mono">
                [ NAVIGATION MENU ]
              </span>
              <div className="w-12 h-[1px] bg-[#2F7B93]" />
            </div>

            <nav className="my-auto py-8 space-y-4 relative z-10">
              {NAV_ITEMS.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.06, duration: 0.3 }}
                  >
                    <NavLink
                      to={item.path}
                      className={`group flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#2F7B93] text-white border-[#8FD3DC]/40 shadow-sm font-semibold'
                          : 'bg-[#16465A]/80 border-[#2F7B93]/30 text-white hover:text-white hover:bg-[#2F7B93]/30'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-xs font-mono text-[#8FD3DC] group-hover:text-white transition-colors">
                          0{index + 1}
                        </span>
                        <span className="font-serif text-2xl tracking-wide uppercase">
                          {item.label}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#8FD3DC] group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </NavLink>
                  </motion.div>
                );
              })}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.3 }}
              className="border-t border-[#2F7B93]/30 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[#8FD3DC] relative z-10"
            >
              <div>
                <p className="font-serif text-base text-white">JIVAH PROJECTS</p>
                <p className="text-[11px] text-[#8FD3DC]/80 font-light mt-0.5">
                  Malabar Hill, Mumbai · Golf Links, New Delhi · Assagao, Goa
                </p>
              </div>
              <div className="flex gap-6 tracking-widest uppercase text-[10px]">
                <a
                  href="mailto:enquiries@jivahprojects.com"
                  className="hover:text-white transition-colors"
                >
                  ENQUIRIES@JIVAHPROJECTS.COM
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  INSTAGRAM
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
