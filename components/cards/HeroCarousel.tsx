'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';
import { Article } from '@/types';

interface HeroCarouselProps {
  articles: Article[];
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ articles }) => {
  const heroArticles = articles.filter(a => a.isHero).slice(0, 3);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [savedArticles, setSavedArticles] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroArticles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroArticles.length]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedArticles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  if (!heroArticles.length) return null;

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-2 group shadow-md">
      {/* Carousel Track */}
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {heroArticles.map(article => (
          <article key={article.id} className="relative w-full h-full shrink-0">
            {/* eslint-disable-next-img-element */}
            <img
              src={article.imageUrl}
              alt={article.imageAlt || article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Badge */}
            {article.badge && (
              <div className="absolute top-4 left-4 bg-surface text-on-surface px-3 py-1 rounded-full text-label-caps shadow-sm z-10 text-xs font-bold">
                {article.badge}
              </div>
            )}

            {/* Bookmark button */}
            <button
              onClick={e => toggleBookmark(article.id, e)}
              className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors group/bookmark"
            >
              <Bookmark
                className={`w-6 h-6 drop-shadow-md ${
                  savedArticles[article.id] || article.isSaved ? 'fill-current text-white' : ''
                }`}
              />
            </button>

            {/* Slide Content */}
            <div className="absolute bottom-7 md:bottom-10 left-4 right-4 md:left-6 md:right-6 z-10 flex flex-col gap-1.5 md:gap-2">
              <div className="flex gap-2 items-center text-label-caps text-primary-fixed">
                <span className="bg-red-50 text-red-600 font-bold text-[11px] sm:text-xs px-2 py-0.5 rounded-full">
                  {article.categoryLabel}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/50" />
                <span className="text-white/80 text-[11px] sm:text-xs">{article.createdAt}</span>
              </div>
              <Link href={`/artikel/${article.id}`}>
                <h2 className="text-white text-base sm:text-xl md:text-2xl font-bold hover:text-primary-fixed transition-colors cursor-pointer line-clamp-2 leading-tight">
                  {article.title}
                </h2>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full bg-white transition-all duration-300 ${
              currentSlide === index ? 'opacity-100 scale-125' : 'opacity-50 hover:opacity-100'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
