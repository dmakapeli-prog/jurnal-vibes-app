'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bookmark, Film, Hand, ExternalLink } from 'lucide-react';
import { EditorsPickWidget } from '../widgets/EditorsPickWidget';
import { Article } from '@/types';

interface LeftSidebarProps {
  articles: Article[];
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ articles }) => {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isBookmark = pathname === '/bookmark';
  const isReels = pathname === '/reels';

  return (
    <aside className="hidden md:flex flex-col w-1/4 sticky overflow-y-auto pr-4 gap-stack-lg top-24 h-[calc(100vh-6rem)] no-scrollbar shrink-0 justify-between">
      <div className="flex flex-col gap-stack-lg">
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-button group transition-colors ${
              isHome
                ? 'bg-primary-fixed/20 text-[#e74c3c] hover:bg-primary-container hover:text-on-primary-container'
                : 'text-secondary hover:bg-surface-variant hover:text-on-surface-variant'
            }`}
          >
            <Home className={`w-5 h-5 ${isHome ? 'fill-current' : ''}`} />
            For You
          </Link>

          <Link
            href="/bookmark"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-button group transition-colors ${
              isBookmark
                ? 'bg-primary-fixed/20 text-[#e74c3c] hover:bg-primary-container hover:text-on-primary-container'
                : 'text-secondary hover:bg-surface-variant hover:text-on-surface-variant'
            }`}
          >
            <Bookmark className={`w-5 h-5 ${isBookmark ? 'fill-current' : ''}`} />
            Tersimpan
          </Link>

          <Link
            href="/reels"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-button group transition-colors ${
              isReels
                ? 'bg-primary-fixed/20 text-[#e74c3c] hover:bg-primary-container hover:text-on-primary-container'
                : 'text-secondary hover:bg-surface-variant hover:text-on-surface-variant'
            }`}
          >
            <Film className={`w-5 h-5 ${isReels ? 'fill-current' : ''}`} />
            Vibes Reels
          </Link>
        </nav>

        <EditorsPickWidget articles={articles} />
      </div>

      {/* Hallo Jurnal Channel Link at the bottom of left sidebar */}
      <div className="mt-6 pt-4 border-t border-outline-variant/50 pb-2">
        <a
          href="https://halo-jurnal-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-button font-bold text-sm transition-all group border border-emerald-500/20 shadow-xs cursor-pointer"
        >
          <Hand className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:rotate-12 transition-transform shrink-0" />
          <span className="flex-1">Hallo Jurnal</span>
          <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
        </a>
      </div>
    </aside>
  );
};
