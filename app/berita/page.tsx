'use client';

import React, { useState } from 'react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { FilterChips } from '@/components/ui/FilterChips';
import { NewsCard } from '@/components/cards/NewsCard';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';

export default function BeritaPage() {
  const [activeFilter, setActiveFilter] = useState<string>('Semua Berita');
  const filters = ['Semua Berita', 'Kampus', 'Sekolah', 'Komunitas', 'Event Lokal'];

  const filteredArticles = DUMMY_ARTICLES.filter(article => {
    if (activeFilter === 'Semua Berita') return true;
    if (activeFilter === 'Kampus') return article.categoryLabel === 'KAMPUS';
    return true;
  });

  return (
    <div className="flex flex-1 mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop gap-gutter py-stack-lg">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg min-w-0 pb-32">
        <header className="mb-4">
          <h1 className="font-headline-xl text-3xl md:text-5xl text-on-surface font-bold tracking-tight mb-2">
            Berita Terkini
          </h1>
          <p className="font-body-md text-on-surface-variant text-base md:text-lg">
            Temukan informasi dan kabar terbaru seputar Sukabumi
          </p>
        </header>

        <FilterChips
          categories={filters}
          activeCategory={activeFilter}
          onSelectCategory={setActiveFilter}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {filteredArticles.map(article => (
            <NewsCard key={article.id} article={article} variant="grid" />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-surface-container-high text-on-surface font-button text-sm font-semibold px-8 py-3 rounded-full hover:bg-surface-container-highest transition-colors flex items-center gap-2 group cursor-pointer">
            Muat Berita Lainnya
          </button>
        </div>
      </main>
    </div>
  );
}
