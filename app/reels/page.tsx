'use client';

import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { ReelsSection } from '@/components/cards/ReelsSection';
import { ReelsViewerModal } from '@/components/widgets/ReelsViewerModal';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';
import { DUMMY_REELS } from '@/data/dummyPolls';

export default function ReelsPage() {
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleOpenViewer = (index: number) => {
    setSelectedIndex(index);
    setIsViewerOpen(true);
  };

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-24 md:pb-stack-lg flex flex-col md:flex-row gap-gutter relative">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg pr-0 md:pr-12">
        <header className="flex flex-col gap-3 mb-2">
          <div className="inline-flex">
            <span className="bg-red-50 text-[#e74c3c] font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              VIBES REELS
            </span>
          </div>
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-on-surface leading-tight">
            Vibes Reels Sukabumi
          </h1>
          <p className="text-on-surface-variant font-body-lg text-base md:text-lg">
            Kumpulan video pendek dan cerita visual seputar kuliner, event, dan sudut kota Sukabumi. Klik video untuk menonton layar penuh!
          </p>
        </header>

        {/* Interactive Reels Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 my-2">
          {DUMMY_REELS.map((reel, idx) => (
            <div
              key={reel.id}
              onClick={() => handleOpenViewer(idx)}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer bg-surface-container shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-outline-variant/50"
            >
              {/* eslint-disable-next-img-element */}
              <img
                src={reel.thumbnailUrl}
                alt={reel.imageAlt || reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
                <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-xs flex items-center justify-center text-white mb-2 group-hover:bg-[#e74c3c] transition-colors">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <p className="text-white font-button text-sm font-bold leading-tight line-clamp-2">
                  {reel.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel section with hideSeeAll set to true */}
        <ReelsSection reels={DUMMY_REELS} hideSeeAll={true} />
      </main>

      <ReelsViewerModal
        reels={DUMMY_REELS}
        initialIndex={selectedIndex}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </div>
  );
}

