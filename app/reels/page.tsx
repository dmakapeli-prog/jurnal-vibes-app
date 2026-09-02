'use client';

import React from 'react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { ReelsSection } from '@/components/cards/ReelsSection';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';
import { DUMMY_REELS } from '@/data/dummyPolls';

export default function ReelsPage() {
  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-24 md:pb-stack-lg flex flex-col md:flex-row gap-gutter relative">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg pr-0 md:pr-12">
        <header className="flex flex-col gap-4 mb-4">
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-on-surface leading-tight">
            Vibes Reels
          </h1>
          <p className="text-on-surface-variant font-body-lg text-base md:text-lg">
            Kumpulan video pendek dan reels menarik seputar Sukabumi dan tren terkini.
          </p>
        </header>

        <ReelsSection reels={DUMMY_REELS} />
      </main>
    </div>
  );
}
