'use client';

import React from 'react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { NewsCard } from '@/components/cards/NewsCard';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';

export default function OtomotifPage() {
  const otoArticles = DUMMY_ARTICLES.filter(
    a => a.category === 'otomotif' || a.categoryLabel === 'OTOMOTIF'
  );
  const articlesToDisplay = otoArticles.length ? otoArticles : DUMMY_ARTICLES.slice(0, 4);

  return (
    <div className="flex flex-1 mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop gap-gutter py-stack-lg">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg min-w-0 pb-32">
        <header className="mb-4">
          <h1 className="font-headline-xl text-3xl md:text-5xl text-on-surface font-bold tracking-tight mb-2">
            Otomotif
          </h1>
          <p className="font-body-md text-on-surface-variant text-base md:text-lg">
            Ulasan kendaraan, modifikasi, touring, dan berita dunia otomotif Sukabumi
          </p>
        </header>

        <div className="flex flex-col gap-6">
          {articlesToDisplay.map(article => (
            <NewsCard key={article.id} article={article} variant="row" />
          ))}
        </div>
      </main>
    </div>
  );
}
