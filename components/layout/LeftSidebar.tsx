'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Bookmark } from 'lucide-react';
import { EditorsPickWidget } from '../widgets/EditorsPickWidget';
import { WeatherWidget } from '../widgets/WeatherWidget';
import { Article } from '@/types';

interface LeftSidebarProps {
  articles: Article[];
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ articles }) => {
  const pathname = usePathname();

  const isHome = pathname === '/';
  const isBookmark = pathname === '/bookmark';

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
      </nav>

      <EditorsPickWidget articles={articles} />
      <WeatherWidget />
    </aside>
  );
};
