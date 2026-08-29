'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { FilterChips } from '@/components/ui/FilterChips';
import { NewsCard } from '@/components/cards/NewsCard';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';

export default function LifestylePage() {
  const [activeFilter, setActiveFilter] = useState<string>('Semua');
  const filters = ['Semua', 'Kuliner', 'Wisata', 'Musik', 'Event', 'Fashion'];

  const lifestyleArticles = DUMMY_ARTICLES.filter(
    a => a.category === 'lifestyle' || a.categoryLabel === 'KULINER' || a.categoryLabel === 'WISATA'
  );

  const heroFeatured = lifestyleArticles[0] || DUMMY_ARTICLES[1];

  return (
    <div className="flex flex-1 mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop gap-gutter py-stack-lg">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg min-w-0 pb-32">
        <header className="mb-4">
          <h1 className="font-headline-xl text-3xl md:text-5xl text-on-surface font-bold tracking-tight mb-2">
            Lifestyle & Culture
          </h1>
          <p className="font-body-md text-on-surface-variant text-base md:text-lg">
            Gaya hidup, tempat nongkrong, kuliner, dan tren terbaru pemuda Sukabumi
          </p>
        </header>

        <FilterChips
          categories={filters}
          activeCategory={activeFilter}
          onSelectCategory={setActiveFilter}
        />

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter mb-stack-lg">
          {/* Large Featured Card (Left) */}
          <Link
            href={`/artikel/${heroFeatured.id}`}
            className="lg:col-span-12 group relative rounded-xl overflow-hidden h-[400px] lg:h-[450px] card-hover transition-all duration-300 border border-outline-variant block"
          >
            <div
              className="absolute inset-0 bg-cover bg-center w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              style={{ backgroundImage: `url("${heroFeatured.imageUrl}")` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-background/90 via-on-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col justify-end">
              <span className="bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider w-max mb-2">
                {heroFeatured.categoryLabel}
              </span>
              <h2 className="text-white text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary-fixed-dim transition-colors line-clamp-2">
                {heroFeatured.title}
              </h2>
              <p className="text-gray-200 text-sm line-clamp-2 max-w-2xl">{heroFeatured.excerpt}</p>
            </div>
          </Link>
        </div>

        {/* List of articles */}
        <div className="flex flex-col gap-6">
          {lifestyleArticles.map(article => (
            <NewsCard key={article.id} article={article} variant="row" />
          ))}
        </div>
      </main>
    </div>
  );
}
