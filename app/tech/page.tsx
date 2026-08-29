'use client';

import React from 'react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { NewsCard } from '@/components/cards/NewsCard';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';

export default function TechPage() {
  const techArticles = DUMMY_ARTICLES.filter(
    a =>
      a.category === 'tech' ||
      a.categoryLabel.toUpperCase() === 'TECH' ||
      (a.subCategory || '').toUpperCase() === 'TECH'
  );

  return (
    <div className="flex flex-1 mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop gap-gutter py-stack-lg">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg min-w-0 pb-32">
        <header className="mb-4">
          <h1 className="font-headline-xl text-3xl md:text-5xl text-on-surface font-bold tracking-tight mb-2">
            Technology & Innovation
          </h1>
          <p className="font-body-md text-on-surface-variant text-base md:text-lg">
            Kabar dunia teknologi, AI, gadget terbaru, dan lanskap startup digital Sukabumi
          </p>
        </header>

        {techArticles.length > 0 ? (
          <div className="flex flex-col gap-6">
            {techArticles.map(article => (
              <NewsCard key={article.id} article={article} variant="row" />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-surface-container rounded-2xl border border-outline-variant">
            <p className="text-on-surface-variant font-medium">
              Belum ada artikel untuk kategori <span className="font-bold text-primary">Tech</span>.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
