'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bookmark, Film, ExternalLink } from 'lucide-react';
import { EditorsPickWidget } from '../widgets/EditorsPickWidget';
import { Article } from '@/types';

const WavingPersonIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Head */}
    <circle cx="9.5" cy="6" r="3" />
    {/* Upper Body / Torso */}
    <path d="M4 20v-2a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v2" />
    {/* Waving Arm & Hand */}
    <path d="M15 12l4.5-4.5" />
    <path d="M19.5 7.5a1.8 1.8 0 0 1 2.5 2.5L18 14" />
    {/* Wave Motion Lines */}
    <path d="M18 3.5c1.2.6 2.2 1.8 2.5 3" />
    <path d="M21 4.5c.8.8 1.2 1.8 1.5 2.8" />
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
    <aside className="hidden md:flex flex-col w-1/4 sticky overflow-y-auto pr-4 gap-stack-lg top-24 h-[calc(100vh-6rem)] no-scrollbar shrink-0">
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

        <a
          href="https://halo-jurnal-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-lg font-button group transition-colors text-secondary hover:bg-surface-variant hover:text-[#e74c3c]"
        >
          <WavingPersonIcon className="w-5 h-5 text-[#e74c3c] group-hover:rotate-12 transition-transform shrink-0" />
          <span className="flex-1">Hallo Jurnal</span>
          <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:text-[#e74c3c] transition-all shrink-0" />
        </a>
      </nav>

      <EditorsPickWidget articles={articles} />
    </aside>
  );
};
