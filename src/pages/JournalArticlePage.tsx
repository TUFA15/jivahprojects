import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { JOURNAL_ARTICLES } from '../data/journal';
import { BlogCard } from '../components/BlogCard';
import { BrandMotif } from '../components/BrandMotif';
import { PageTransition } from '../components/PageTransition';
import { SEO } from '../components/SEO';
import { createBreadcrumbSchema, LOCAL_BUSINESS_SCHEMA } from '../data/schemas';

export const JournalArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = JOURNAL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/journal" replace />;
  }

  const otherArticles = JOURNAL_ARTICLES.filter((a) => a.id !== article.id).slice(0, 2);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', item: 'https://jivahprojects.com/' },
    { name: 'Journal', item: 'https://jivahprojects.com/journal' },
    { name: article.title, item: `https://jivahprojects.com/journal/${article.slug}` },
  ]);

  return (
    <PageTransition>
      <SEO
        title={`${article.title} | Interior Design Journal | JIVAH Projects`}
        description={article.excerpt}
        canonicalUrl={`https://jivahprojects.com/journal/${article.slug}`}
        ogImage={article.coverImage}
        jsonLd={[LOCAL_BUSINESS_SCHEMA, breadcrumbSchema]}
      />

      <article className="pt-36 pb-24 bg-[#F7F3EC] text-[#11181C]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-10">
          {/* Back link */}
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#2F7B93] hover:text-[#16465A] font-medium transition-colors"
          >
            <span>← BACK TO JOURNAL</span>
          </Link>

          {/* Metadata & Title */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-xs font-mono text-[#61747C]">
              <span className="text-[#2F7B93] tracking-widest uppercase font-medium">
                {article.category}
              </span>
              <span>·</span>
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl uppercase leading-tight text-[#11181C]">
              {article.title}
            </h1>

            <p className="text-xl font-light text-[#61747C] leading-relaxed pt-2">
              {article.excerpt}
            </p>
          </div>

          {/* Author info */}
          <div className="flex items-center gap-3 border-y border-[#2F7B93]/20 py-4 text-xs font-mono">
            <BrandMotif size={20} color="#2F7B93" />
            <div>
              <span className="text-[#11181C] font-bold block">{article.author.name}</span>
              <span className="text-[#61747C] text-[10px] block">{article.author.role}</span>
            </div>
          </div>

          {/* Cover Image */}
          <div className="overflow-hidden bg-[#EEF5F6] aspect-[16/10] my-8 shadow-md rounded-2xl border border-[#2F7B93]/15">
            <img
              src={article.coverImage}
              alt={`${article.title} - JIVAH Projects interior journal Pune`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Reading Content */}
          <div className="space-y-8 text-base md:text-lg font-light leading-relaxed text-[#11181C]/90 pt-4">
            {article.content.map((item, index) => {
              if (item.type === 'heading') {
                return (
                  <h2
                    key={index}
                    className="font-serif text-2xl md:text-3xl uppercase text-[#11181C] pt-6"
                  >
                    {item.text}
                  </h2>
                );
              }
              if (item.type === 'quote') {
                return (
                  <blockquote
                    key={index}
                    className="my-8 p-6 md:p-8 bg-[#EDE5D9]/70 border-l-4 border-[#2F7B93] font-serif text-xl md:text-2xl italic text-[#16465A] rounded-r-2xl"
                  >
                    "{item.text}"
                  </blockquote>
                );
              }
              if (item.type === 'image' && item.imageUrl) {
                return (
                  <div key={index} className="my-8 space-y-2">
                    <img
                      src={item.imageUrl}
                      alt={item.caption || article.title}
                      className="w-full max-h-[70vh] object-cover rounded-2xl border border-[#2F7B93]/15"
                    />
                    {item.caption && (
                      <p className="text-xs font-mono text-[#61747C] uppercase tracking-wider">
                        {item.caption}
                      </p>
                    )}
                  </div>
                );
              }
              return <p key={index}>{item.text}</p>;
            })}
          </div>

          {/* Article Footer & Related Articles */}
          <div className="pt-16 border-t border-[#2F7B93]/20 space-y-12">
            <h2 className="font-serif text-3xl uppercase text-[#11181C]">MORE FROM THE JOURNAL</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherArticles.map((other) => (
                <BlogCard key={other.id} article={other} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  );
};
