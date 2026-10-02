import React from 'react';
import { JOURNAL_ARTICLES } from '../data/journal';
import { BlogCard } from '../components/BlogCard';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA } from '../data/schemas';

export const JournalPage: React.FC = () => {
  const featuredArticle = JOURNAL_ARTICLES[0];
  const gridArticles = JOURNAL_ARTICLES.slice(1);

  return (
    <PageTransition>
      <SEO
        title="Interior Design Journal | JIVAH Projects"
        description="Read the JIVAH Projects Interior Design Journal for practical insights on home interiors, 2 BHK & 3 BHK layout planning, modular kitchen design, and lighting in Pune."
        canonicalUrl="https://jivahprojects.com/journal"
        jsonLd={[LOCAL_BUSINESS_SCHEMA, SERVICES_SCHEMA]}
      />

      <div className="pt-36 pb-24 bg-[#F7F3EC] text-[#11181C]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
          {/* Header */}
          <div className="space-y-4 max-w-4xl">
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
              <span className="w-8 h-[1px] bg-[#2F7B93]" />
              <span>EDITORIAL & THOUGHTS</span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight leading-[0.92]">
              INTERIOR DESIGN JOURNAL
            </h1>

            <p className="text-lg sm:text-xl font-light text-[#61747C] leading-relaxed max-w-2xl pt-2">
              Ideas, guidance, and perspectives on home interiors, residential spaces, modular kitchens, authentic materials, and contemporary living in Pune.
            </p>
          </div>

          {/* Featured Main Article */}
          {featuredArticle && (
            <div className="space-y-4">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93] block">
                [ FEATURED ARTICLE ]
              </span>
              <BlogCard article={featuredArticle} featured={true} />
            </div>
          )}

          {/* Article Grid */}
          <div className="space-y-8 pt-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#2F7B93]">
                [ RECENT GUIDES ]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl uppercase text-[#11181C]">
                PRACTICAL INTERIOR ARTICLES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gridArticles.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
