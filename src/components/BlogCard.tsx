import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { JournalArticle } from '../data/journal';

interface BlogCardProps {
  article: JournalArticle;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ article, featured = false }) => {
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
        className="smooth-gpu"
      >
        <Link
          to={`/journal/${article.slug}`}
          className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#EEF5F6]/60 border border-[#2F7B93]/15 p-6 md:p-8 hover:border-[#2F7B93]/40 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
        >
          <div className="lg:col-span-7 overflow-hidden aspect-[16/10] bg-[#EEF5F6]">
            <img
              src={article.coverImage}
              alt={article.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
            />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="text-[#2F7B93] tracking-widest uppercase font-medium">
                {article.category}
              </span>
              <span className="text-[#61747C]">·</span>
              <span className="text-[#61747C]">{article.date}</span>
            </div>

            <h3 className="font-serif text-3xl md:text-4xl text-[#11181C] group-hover:text-[#2F7B93] transition-colors duration-300 leading-tight">
              {article.title}
            </h3>

            <p className="text-sm font-light text-[#61747C] leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#2F7B93]">
              <span>READ ARTICLE</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300 ease-out">
                →
              </span>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
      className="smooth-gpu h-full"
    >
      <Link
        to={`/journal/${article.slug}`}
        className="group flex flex-col justify-between h-full bg-white border border-[#2F7B93]/10 p-6 hover:border-[#2F7B93]/30 hover:shadow-xs transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
      >
        <div className="space-y-4">
          <div className="overflow-hidden aspect-[4/3] bg-[#EEF5F6]">
            <img
              src={article.coverImage}
              alt={article.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.05]"
            />
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-[#61747C]">
            <span className="text-[#2F7B93] tracking-wider uppercase font-medium">
              {article.category}
            </span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>

          <h3 className="font-serif text-2xl text-[#11181C] group-hover:text-[#2F7B93] transition-colors duration-300 leading-snug">
            {article.title}
          </h3>

          <p className="text-xs font-light text-[#61747C] leading-relaxed line-clamp-2">
            {article.excerpt}
          </p>
        </div>

        <div className="pt-6 border-t border-[#EEF5F6] flex items-center justify-between text-xs font-medium tracking-[0.2em] uppercase text-[#2F7B93]">
          <span className="text-[10px] text-[#61747C] font-mono">{article.date}</span>
          <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300 ease-out">
            <span>READ</span>
            <span>→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
};
