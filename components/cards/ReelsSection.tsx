'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PlayCircle, Play, Eye, MapPin } from 'lucide-react';
import { Reel } from '@/types';
import { ReelsViewerModal } from '../widgets/ReelsViewerModal';

interface ReelsSectionProps {
  reels: Reel[];
  hideSeeAll?: boolean;
  title?: string;
  subtitle?: string;
}

export const ReelsSection: React.FC<ReelsSectionProps> = ({
  reels,
  hideSeeAll = false,
  title = 'Vibes Reels',
  subtitle
}) => {
  const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleOpenViewer = (index: number) => {
    setSelectedIndex(index);
    setIsViewerOpen(true);
  };

  return (
    <>
      <section className="border-t border-outline-variant/60 pt-stack-lg my-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex flex-col gap-1">
            <h2 className="font-headline-md text-on-surface text-xl md:text-2xl font-bold flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-[#e74c3c]">
                <PlayCircle className="w-5 h-5 fill-current" />
              </span>
              <span>{title}</span>
            </h2>
            {subtitle && (
              <p className="text-on-surface-variant text-sm font-body-md">
                {subtitle}
              </p>
            )}
          </div>
          {!hideSeeAll && (
            <Link
              href="/reels"
              className="inline-flex items-center gap-1.5 text-[#e74c3c] font-button hover:text-[#c00015] hover:underline text-sm font-semibold transition-colors"
            >
              <span>Lihat Semua</span>
              <span className="text-xs">→</span>
            </Link>
          )}
        </div>

        {/* Responsive Layout: Swipe/Carousel on Mobile, Grid 3-4 cols on Tablet/Desktop */}
        <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 overflow-x-auto md:overflow-visible no-scrollbar snap-x snap-mandatory pb-4 md:pb-0">
          {reels.map((reel, idx) => (
            <div
              key={reel.id}
              onClick={() => handleOpenViewer(idx)}
              className="relative w-[210px] sm:w-[240px] md:w-auto shrink-0 snap-center md:shrink md:snap-align-none aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer bg-zinc-900 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-outline-variant/30"
            >
              {/* Image Poster */}
              {/* eslint-disable-next-img-element */}
              <img
                src={reel.thumbnailUrl}
                alt={reel.imageAlt || reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 flex flex-col justify-between p-3.5 md:p-4">
                {/* Top Badges */}
                <div className="flex items-center justify-between w-full z-10 gap-2">
                  <span className="bg-black/50 backdrop-blur-md text-white border border-white/15 font-bold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-xs">
                    {reel.category || 'Vibes'}
                  </span>
                  {reel.viewsCount && (
                    <span className="flex items-center gap-1 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/15">
                      <Eye className="w-3 h-3 text-white/80" />
                      <span>{reel.viewsCount}</span>
                    </span>
                  )}
                </div>

                {/* Center Hover Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-[#e74c3c] group-hover:border-[#e74c3c] group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Metadata */}
                <div className="flex flex-col gap-1.5 z-10 pt-8">
                  <p className="text-white font-bold text-sm md:text-base leading-snug line-clamp-2 drop-shadow-sm group-hover:text-red-300 transition-colors">
                    {reel.title}
                  </p>

                  <div className="flex items-center justify-between text-xs text-white/80 font-medium pt-0.5">
                    {reel.creator && (
                      <span className="truncate max-w-[110px] text-white/90">
                        {reel.creator}
                      </span>
                    )}
                    {reel.location && (
                      <span className="flex items-center gap-0.5 truncate text-white/70">
                        <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                        <span className="truncate">{reel.location}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ReelsViewerModal
        reels={reels}
        initialIndex={selectedIndex}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </>
  );
};


