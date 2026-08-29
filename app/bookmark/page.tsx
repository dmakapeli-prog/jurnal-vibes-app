'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';

export default function BookmarkPage() {
  const [savedArticles, setSavedArticles] = useState(
    DUMMY_ARTICLES.filter(a => a.isSaved)
  );
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const removeBookmark = (id: string) => {
    setSavedArticles(prev => prev.filter(a => a.id !== id));
  };

  const filtered = savedArticles.filter(a => {
    if (activeCategory === 'Semua') return true;
    return a.categoryLabel.toLowerCase() === activeCategory.toLowerCase();
  });

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-24 md:pb-stack-lg flex flex-col md:flex-row gap-gutter relative">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg pr-0 md:pr-12">
        <header className="flex flex-col gap-4 mb-4">
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-on-surface leading-tight">
            Artikel Tersimpan
          </h1>
          <p className="text-on-surface-variant font-body-lg text-base md:text-lg">
            Daftar berita, ulasan, dan artikel menarik yang telah Anda tandai untuk dibaca nanti.
          </p>
        </header>

        {/* Filter Badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button
            onClick={() => setActiveCategory('Semua')}
            className={`px-4 py-2 font-button text-sm rounded-full transition-colors ${
              activeCategory === 'Semua'
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-high hover:bg-surface-variant text-on-surface'
            }`}
          >
            Semua ({savedArticles.length})
          </button>
          <button
            onClick={() => setActiveCategory('Lifestyle')}
            className={`px-4 py-2 font-button text-sm rounded-full transition-colors ${
              activeCategory === 'Lifestyle'
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-high hover:bg-surface-variant text-on-surface'
            }`}
          >
            Lifestyle
          </button>
          <button
            onClick={() => setActiveCategory('Tech')}
            className={`px-4 py-2 font-button text-sm rounded-full transition-colors ${
              activeCategory === 'Tech'
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-high hover:bg-surface-variant text-on-surface'
            }`}
          >
            Tech
          </button>
          <button
            onClick={() => setActiveCategory('Berita')}
            className={`px-4 py-2 font-button text-sm rounded-full transition-colors ${
              activeCategory === 'Berita'
                ? 'bg-primary text-on-primary font-bold'
                : 'bg-surface-container-high hover:bg-surface-variant text-on-surface'
            }`}
          >
            Berita
          </button>
        </div>

        {/* Article Cards */}
        <div className="flex flex-col gap-6">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-on-surface-variant">
              Belum ada artikel tersimpan.
            </div>
          ) : (
            filtered.map(article => (
              <article
                key={article.id}
                className="flex flex-col md:flex-row gap-6 p-4 bg-surface-container-low rounded-xl border border-outline-variant hover:shadow-md transition-shadow"
              >
                <div className="w-full md:w-48 aspect-video md:aspect-square rounded-lg overflow-hidden shrink-0">
                  {/* eslint-disable-next-img-element */}
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow flex flex-col gap-2">
                  <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
                    {article.categoryLabel}
                  </span>
                  <Link href={`/artikel/${article.id}`}>
                    <h2 className="font-headline-md text-lg md:text-xl font-bold text-on-surface hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-sm text-on-surface-variant line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto flex items-center gap-2 text-xs text-on-surface-variant">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.publishedDate}</span>
                  </div>
                </div>
                <div className="flex md:flex-col justify-between items-end gap-4">
                  <button
                    onClick={() => removeBookmark(article.id)}
                    className="p-2 text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <Link
                    href={`/artikel/${article.id}`}
                    className="bg-primary text-on-primary px-4 py-2 rounded-full font-button text-sm font-semibold hover:scale-105 transition-transform whitespace-nowrap block"
                  >
                    Baca Sekarang
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-outline-variant text-center pb-12">
          <p className="text-xs text-on-surface-variant opacity-70">
            {savedArticles.length} dari 50 artikel tersimpan di perangkat ini
          </p>
        </div>
      </main>
    </div>
  );
}
