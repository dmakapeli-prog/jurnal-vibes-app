'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bookmark } from 'lucide-react';
import { Article } from '@/types';

interface NewsCardProps {
  article: Article;
  variant?: 'row' | 'grid';
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, variant = 'row' }) => {
  const [isSaved, setIsSaved] = useState<boolean>(article.isSaved || false);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  if (variant === 'grid') {
    return (
      <article className="group bg-surface dark:bg-slate-900 rounded-xl border border-surface-variant dark:border-slate-800 hover:border-outline-variant hover:shadow-[0_4px_20px_-4px_rgba(189,0,21,0.1)] transition-all duration-300 overflow-hidden flex flex-col">
        <div className="relative h-48 overflow-hidden">
          {/* eslint-disable-next-img-element */}
          <img
            src={article.imageUrl}
            alt={article.imageAlt || article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <button
            onClick={toggleSave}
            aria-label="Bookmark"
            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-primary transition-colors"
          >
            <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current text-white' : ''}`} />
          </button>
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="mb-2">
            <span className="inline-block bg-primary text-on-primary font-label-caps text-xs px-2 py-0.5 rounded-full uppercase font-bold">
              {article.categoryLabel}
            </span>
          </div>
          <Link href={`/artikel/${article.id}`}>
            <h3
              className="font-headline-md font-bold text-on-surface dark:text-white mb-2 group-hover:text-primary transition-colors line-clamp-2"
              style={{ fontSize: '20px', lineHeight: '26px' }}
            >
              {article.title}
            </h3>
          </Link>
          <p className="font-body-md text-body-md text-secondary dark:text-slate-400 line-clamp-2 mb-4 flex-1">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-tertiary dark:text-slate-500">
            <span>{article.createdAt}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="flex flex-col md:flex-row gap-4 md:gap-stack-md group cursor-pointer border-t border-outline-variant/60 dark:border-slate-800 pt-4 md:pt-stack-lg w-full overflow-hidden">
      <div className="relative w-full md:w-1/3 aspect-video md:aspect-[4/3] rounded-xl overflow-hidden shrink-0">
        {/* eslint-disable-next-img-element */}
        <img
          src={article.imageUrl}
          alt={article.imageAlt || article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={toggleSave}
          className="absolute top-3 right-3 z-10 text-white/90 hover:text-white p-1.5 rounded-full bg-black/40 backdrop-blur-xs transition-colors"
        >
          <Bookmark className={`w-4 h-4 sm:w-5 sm:h-5 drop-shadow-md ${isSaved ? 'fill-current text-white' : ''}`} />
        </button>
      </div>
      <div className="flex flex-col gap-2 md:gap-stack-sm justify-center flex-1 min-w-0">
        <div className="flex gap-2 items-center text-label-caps text-[#e74c3c]">
          <span className="bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 font-bold text-[11px] sm:text-xs px-2 py-0.5 rounded-full uppercase">
            {article.categoryLabel}
          </span>
          <span className="w-1 h-1 rounded-full bg-outline-variant dark:bg-slate-700" />
          <span className="text-on-surface-variant dark:text-slate-400 text-[11px] sm:text-xs">{article.createdAt}</span>
        </div>
        <Link href={`/artikel/${article.id}`}>
          <h3 className="font-headline-md text-base sm:text-lg md:text-xl font-bold text-on-surface dark:text-white group-hover:text-[#e74c3c] transition-colors line-clamp-2 leading-snug">
            {article.title}
          </h3>
        </Link>
        <p className="text-xs sm:text-sm text-on-surface-variant dark:text-slate-400 line-clamp-2 leading-relaxed">{article.excerpt}</p>
      </div>
    </article>
  );
};
