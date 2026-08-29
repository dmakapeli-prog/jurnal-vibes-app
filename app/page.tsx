'use client';

import React from 'react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { HeroCarousel } from '@/components/cards/HeroCarousel';
import { NewsCard } from '@/components/cards/NewsCard';
import { PollingWidget } from '@/components/widgets/PollingWidget';
import { ReelsSection } from '@/components/cards/ReelsSection';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';
import { DUMMY_POLL, DUMMY_REELS } from '@/data/dummyPolls';

export default function HomePage() {
  const feedArticles = DUMMY_ARTICLES.filter(a => !a.isHero);

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-24 md:pb-stack-lg flex flex-col md:flex-row gap-gutter relative">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg pr-0 md:pr-12">
        <HeroCarousel articles={DUMMY_ARTICLES} />

        {/* Feed Articles */}
        <div className="flex flex-col gap-6">
          {feedArticles.slice(0, 2).map(article => (
            <NewsCard key={article.id} article={article} variant="row" />
          ))}
        </div>

        {/* Polling Widget */}
        <PollingWidget poll={DUMMY_POLL} />

        {/* More Articles */}
        <div className="flex flex-col gap-6">
          {feedArticles.slice(2).map(article => (
            <NewsCard key={article.id} article={article} variant="row" />
          ))}
        </div>

        {/* Reels Section */}
        <ReelsSection reels={DUMMY_REELS} />

        {/* Load More Button */}
        <div className="mt-8 flex justify-center pb-8">
          <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-button px-8 py-3 rounded-full transition-colors w-full md:w-auto text-sm font-semibold cursor-pointer">
            Load More Vibes
          </button>
        </div>
      </main>
    </div>
  );
}
