'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { HeroCarousel } from '@/components/cards/HeroCarousel';
import { NewsCard } from '@/components/cards/NewsCard';
import { PollingWidget } from '@/components/widgets/PollingWidget';
import { ReelsSection } from '@/components/cards/ReelsSection';
import { Article } from '@/types';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';
import { DUMMY_POLL, DUMMY_REELS } from '@/data/dummyPolls';
import { fetchArticlesFromSupabase } from '@/lib/supabase';

export default function HomePage() {
  const [articles, setArticles] = useState<Article[]>(DUMMY_ARTICLES);

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await fetchArticlesFromSupabase();
        if (data && data.length > 0) {
          setArticles(data);
        }
      } catch (err) {
        console.error('Error fetching articles from Supabase:', err);
      }
    }
    loadArticles();
  }, []);

  // Limit feed articles to 5 total on homepage
  const feedArticles = articles.filter(a => !a.isHero).slice(0, 5);

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-24 md:pb-stack-lg flex flex-col md:flex-row gap-gutter relative">
      <LeftSidebar articles={articles} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg pr-0 md:pr-12">
        <HeroCarousel articles={articles} />

        {/* Feed Articles (First 2) */}
        <div className="flex flex-col gap-6">
          {feedArticles.slice(0, 2).map(article => (
            <NewsCard key={article.id} article={article} variant="row" />
          ))}
        </div>

        {/* Polling Widget */}
        <PollingWidget poll={DUMMY_POLL} />

        {/* Remaining Feed Articles (Next 3, total 5) */}
        <div className="flex flex-col gap-6">
          {feedArticles.slice(2, 5).map(article => (
            <NewsCard key={article.id} article={article} variant="row" />
          ))}
        </div>

        {/* "Lihat Semua" Navigation Button */}
        <div className="mt-4 flex justify-center">
          <Link
            href="/berita"
            className="inline-flex items-center justify-center gap-2 bg-[#c00015] hover:bg-[#a00012] text-white font-button px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 text-sm font-bold tracking-wide w-full md:w-auto cursor-pointer"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Reels Section */}
        <ReelsSection reels={DUMMY_REELS} />
      </main>
    </div>
  );
}


