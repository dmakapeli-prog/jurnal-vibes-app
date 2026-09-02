'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, Film } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isBerita = pathname === '/berita';
  const isReels = pathname === '/reels';

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface/90 backdrop-blur-md dark:bg-inverse-surface/90 shadow-lg border-t border-outline-variant dark:border-secondary">
      <Link
        href="/"
        className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-transform ${
          isHome
            ? 'bg-primary-container text-on-primary-container scale-95'
            : 'text-on-surface-variant dark:text-tertiary-fixed-dim hover:bg-surface-container-high rounded-xl p-2'
        }`}
      >
        <Home className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold mt-1">Home</span>
      </Link>

      <Link
        href="/berita"
        className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-transform ${
          isBerita
            ? 'bg-primary-container text-on-primary-container scale-95'
            : 'text-on-surface-variant dark:text-tertiary-fixed-dim hover:bg-surface-container-high rounded-xl p-2'
        }`}
      >
        <Compass className="w-5 h-5" />
        <span className="text-xs font-bold mt-1">Explore</span>
      </Link>

      <Link
        href="/reels"
        className={`flex flex-col items-center justify-center rounded-full px-4 py-1 transition-transform ${
          isReels
            ? 'bg-primary-container text-on-primary-container scale-95'
            : 'text-on-surface-variant dark:text-tertiary-fixed-dim hover:bg-surface-container-high rounded-xl p-2'
        }`}
      >
        <Film className="w-5 h-5" />
        <span className="text-xs font-bold mt-1">Vibes</span>
      </Link>
    </nav>
  );
};
