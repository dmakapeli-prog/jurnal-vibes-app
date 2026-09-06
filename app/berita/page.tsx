'use client';

import React, { useState, useEffect } from 'react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { FilterChips } from '@/components/ui/FilterChips';
import { NewsCard } from '@/components/cards/NewsCard';
import { Article } from '@/types';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';
import { fetchArticlesFromSupabase } from '@/lib/supabase';

export default function BeritaPage() {
  const [articles, setArticles] = useState<Article[]>(DUMMY_ARTICLES);
  const [activeFilter, setActiveFilter] = useState<string>('Semua Berita');
  const filters = ['Semua Berita', 'Kampus', 'Sekolah', 'Komunitas', 'Event Lokal'];

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchArticlesFromSupabase();
        if (data && data.length > 0) {
          setArticles(data);
        }
      } catch (err) {
        console.error('Error fetching articles in BeritaPage:', err);
      }
    }
    loadArticles();
  }, []);

  const filteredArticles = articles.filter(article => {
    if (activeFilter === 'Semua Berita') return true;
    if (activeFilter === 'Kampus') {
      return article.subCategory === 'KAMPUS' || article.categoryLabel === 'KAMPUS';
    }
    if (activeFilter === 'Sekolah') {
      return article.subCategory === 'SEKOLAH' || article.categoryLabel === 'SEKOLAH';
    }
    if (activeFilter === 'Komunitas') {
      return article.subCategory === 'KOMUNITAS' || article.categoryLabel === 'KOMUNITAS';
    }
    if (activeFilter === 'Event Lokal') {
      return (
        article.subCategory === 'EVENT LOKAL' ||
        article.categoryLabel === 'EVENT LOKAL' ||
        article.badge === 'EVENT'
      );
    }
    return true;
  });

  return (
    <div className="flex flex-1 mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop gap-gutter py-stack-lg">
      <LeftSidebar articles={articles} />

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

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {filteredArticles.map(article => (
              <NewsCard key={article.id} article={article} variant="grid" />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-surface-container rounded-2xl border border-outline-variant">
            <p className="text-on-surface-variant font-medium">
              Belum ada berita untuk kategori <span className="font-bold text-primary">{activeFilter}</span>.
            </p>
          </div>
        )}

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

