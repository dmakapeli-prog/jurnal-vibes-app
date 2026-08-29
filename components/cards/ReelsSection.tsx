'use client';

import React from 'react';
import { PlayCircle, Play } from 'lucide-react';
import { Reel } from '@/types';

interface ReelsSectionProps {
  reels: Reel[];
}

export const ReelsSection: React.FC<ReelsSectionProps> = ({ reels }) => {
  return (
    <section className="border-t border-outline-variant pt-stack-lg my-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-headline-md text-on-surface text-xl font-bold flex items-center gap-2">
          <PlayCircle className="w-6 h-6 text-[#e74c3c] fill-current" />
          Vibes Reels
        </h3>
        <a href="#" className="text-[#e74c3c] font-button hover:underline text-sm font-semibold">
          Lihat Semua
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x snap-mandatory">
        {reels.map(reel => (
          <div
            key={reel.id}
            className="relative w-40 md:w-48 aspect-[9/16] rounded-xl overflow-hidden shrink-0 snap-center group cursor-pointer bg-surface-container"
          >
            {/* eslint-disable-next-img-element */}
            <img
              src={reel.thumbnailUrl}
              alt={reel.imageAlt || reel.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3">
              <Play className="w-6 h-6 text-white fill-current mb-1" />
              <p className="text-white font-button text-sm line-clamp-2">{reel.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
