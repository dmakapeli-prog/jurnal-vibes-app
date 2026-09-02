'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bookmark, Film, ExternalLink } from 'lucide-react';
import { EditorsPickWidget } from '../widgets/EditorsPickWidget';
import { Article } from '@/types';

const HandWaveIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 11V6a2 2 0 0 0-4 0v5" />
    <path d="M14 10V4a2 2 0 0 0-4 0v6" />
    <path d="M10 10.5V5a2 2 0 0 0-4 0v9" />
    <path d="M18 11a2 2 0 0 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.8-6-2.5L3 16" />
    <path d="M22 6c-1.5-1-3.5-1-5 0" />
    <path d="M20 3c-2-1.2-4.5-1.2-6.5 0" />
  </svg>
);

interface LeftSidebarProps {
  articles: Article[];
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ articles }) => {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isBookmark = pathname === '/bookmark';
  const isReels = pathname === '/reels';

  return (
    <aside className="hidden md:flex flex-col w-1/4 sticky overflow-y-auto pr-4 gap-stack-lg top-24 h-[calc(100vh-6rem)] no-scrollbar shrink-0 justify-between pb-8">
      <div className="flex flex-col gap-stack-lg">
        <nav className="flex flex-col gap-2">
          <Link
            href="/"
            className={`flex items-center gap-3 px-4 py-3 rounded-lg font-button group transition-colors ${
              isHome
                ? 'bg-primary-fixed/20 text-[#e74c3c] hover:bg-primary-container hover:text-on-primary-container'
                : 'text-secondary dark:text-slate-300 hover:bg-surface-variant dark:hover:bg-slate-800 hover:text-on-surface-variant dark:hover:text-white'
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
                : 'text-secondary dark:text-slate-300 hover:bg-surface-variant dark:hover:bg-slate-800 hover:text-on-surface-variant dark:hover:text-white'
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
                : 'text-secondary dark:text-slate-300 hover:bg-surface-variant dark:hover:bg-slate-800 hover:text-on-surface-variant dark:hover:text-white'
            }`}
          >
            <Film className={`w-5 h-5 ${isReels ? 'fill-current' : ''}`} />
            Vibes Reels
          </Link>
        </nav>

        <EditorsPickWidget articles={articles} />
      </div>

      {/* Hallo Jurnal Channel Link at bottom section */}
      <div className="mt-4 pt-3 border-t border-outline-variant/40 dark:border-slate-800 shrink-0 mb-4">
        <a
          href="https://halo-jurnal-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-variant/50 dark:bg-slate-800/50 hover:bg-primary-container text-on-surface dark:text-white hover:text-on-primary-container font-button font-bold text-sm transition-all group border border-outline-variant/50 dark:border-slate-700 shadow-xs cursor-pointer"
        >
          <HandWaveIcon className="w-5 h-5 text-[#e74c3c] group-hover:rotate-12 transition-transform shrink-0" />
          <span className="flex-1 font-bold">Hallo Jurnal</span>
          <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity shrink-0" />
        </a>
      </div>
    </aside>
  );
};
