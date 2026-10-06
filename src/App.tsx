import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BackToTop } from './components/BackToTop';
import { SitePreloader } from './components/SitePreloader';
import { SmoothScrollProvider } from './components/SmoothScrollProvider';

import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { JournalPage } from './pages/JournalPage';
import { JournalArticlePage } from './pages/JournalArticlePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen flex flex-col bg-[#F7F3EC] text-[#11181C] selection:bg-[#2F7B93] selection:text-white font-sans overflow-x-hidden">
        {/* 1. Initial Site Preloader Animation */}
        <SitePreloader />

        {/* 2. Scroll Progress Bar & Controls */}
        <ScrollProgressBar />
        
        {/* 3. Global Navbar */}
        <Navbar />

        {/* 4. Main Animated Routes with AnimatePresence */}
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/:slug" element={<Navigate to="/work" replace />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/journal" element={<JournalPage />} />
              <Route path="/journal/:slug" element={<JournalArticlePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* 5. Global Footer */}
        <Footer />
        <BackToTop />
      </div>
    </SmoothScrollProvider>
  );
};

export default App;
