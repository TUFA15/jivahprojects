import React from 'react';
import { JOURNAL_ARTICLES } from '../data/journal';
import { BlogCard } from '../components/BlogCard';
import { SectionHeading } from '../components/SectionHeading';
import { PageTransition } from '../components/PageTransition';

export const JournalPage: React.FC = () => {
  const featuredArticle = JOURNAL_ARTICLES[0];
  const gridArticles = JOURNAL_ARTICLES.slice(1);

  return (
    <PageTransition>
      <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <SectionHeading
          label="EDITORIAL ESSAYS"
          title="JOURNAL"
          subtitle="Thoughts on spaces, materials, light and contemporary living."
        />

        {/* Featured Main Article */}
        {featuredArticle && (
          <div className="space-y-4">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93] block">
              [ FEATURED ESSAY ]
            </span>
            <BlogCard article={featuredArticle} featured={true} />
          </div>
        )}

        {/* Article Grid */}
        <div className="space-y-8 pt-8">
          <h2 className="font-serif text-3xl uppercase text-[#11181C]">RECENT ESSAYS</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gridArticles.map((article) => (
              <BlogCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
