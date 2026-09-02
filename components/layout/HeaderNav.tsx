'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Moon, Sun, ChevronDown } from 'lucide-react';
import { SearchOverlay } from './SearchOverlay';
import { Logo } from '../ui/Logo';
import { WeatherWidget } from '../widgets/WeatherWidget';

export const HeaderNav: React.FC = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (typeof document !== 'undefined') {
      document.documentElement.classList.toggle('dark');
    }
  };

  const navLinks = [
    { href: '/berita', label: 'Berita' },
    { href: '/lifestyle', label: 'Lifestyle' },
    { href: '/loker', label: 'Loker' },
    { href: '/sport', label: 'Sport' }
  ];

  const dropdownLinks = [
    { href: '/otomotif', label: 'Otomotif' },
    { href: '/science', label: 'Science' },
    { href: '/health', label: 'Health' },
    { href: '/tech', label: 'Tech' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md dark:bg-inverse-surface/90 border-b border-outline-variant dark:border-secondary transition-colors duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto w-full relative z-10 gap-4">
        {/* Brand Logo */}
        <div className="shrink-0 min-w-max flex items-center pr-2">
          <Link href="/" className="flex items-center shrink-0 min-w-max">
            <Logo variant={isDark ? 'dark' : 'light'} size="md" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex items-center justify-center min-w-0">
          {/* Desktop Navigation (Hybrid) */}
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-on-surface">
            {navLinks.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`hover:text-[#e74c3c] transition-colors ${
                    isActive ? 'text-primary font-bold border-b-2 border-primary pb-1' : ''
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-[#e74c3c] transition-colors cursor-pointer">
                Eksplor
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-surface border border-outline-variant rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 py-2">
                {dropdownLinks.map((drop, idx) => (
                  <Link
                    key={idx}
                    href={drop.href}
                    className="block px-4 py-2 hover:bg-surface-variant hover:text-[#e74c3c] transition-colors"
                  >
                    {drop.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation (Horizontal Scroll) */}
          <div className="md:hidden flex overflow-x-auto no-scrollbar gap-4 px-4 py-2 text-sm font-semibold text-on-surface snap-x">
            {navLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="shrink-0 snap-start hover:text-[#e74c3c]">
                {link.label}
              </Link>
            ))}
            {dropdownLinks.map((drop, idx) => (
              <Link key={idx} href={drop.href} className="shrink-0 snap-start hover:text-[#e74c3c]">
                {drop.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0 justify-end">
          <WeatherWidget />
          <button
            onClick={() => setIsSearchOpen(true)}
            className="text-on-surface hover:text-[#e74c3c] transition-colors p-2 rounded-full hover:bg-surface-variant flex items-center justify-center cursor-pointer"
            title="Cari Berita"
          >
            <Search className="w-6 h-6" />
          </button>
          <button
            onClick={toggleDarkMode}
            className="text-on-surface hover:text-[#e74c3c] transition-colors p-2 rounded-full hover:bg-surface-variant flex items-center justify-center cursor-pointer"
            title="Ganti Mode Tampilan"
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </header>
  );
};
