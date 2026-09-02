'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Moon, Sun, ChevronDown, Menu, X, Home, Bookmark, Film, MessageCircle, ExternalLink } from 'lucide-react';
import { SearchOverlay } from './SearchOverlay';
import { Logo } from '../ui/Logo';
import { WeatherWidget } from '../widgets/WeatherWidget';

export const HeaderNav: React.FC = () => {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  const mobileDrawerContent = (
    <div className="fixed inset-0 z-[9999] md:hidden flex overflow-hidden">
      {/* Dark Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 z-0"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Solid Slide-over Content Drawer */}
      <div className="relative w-4/5 max-w-[320px] bg-surface dark:bg-slate-900 text-on-surface dark:text-white h-full min-h-screen shadow-2xl flex flex-col z-10 overflow-y-auto border-r border-outline-variant/60 dark:border-slate-800 animate-in slide-in-from-left duration-300 opacity-100">
        {/* 1. Header Logo + Close Button */}
        <div className="p-4 border-b border-outline-variant/60 dark:border-slate-800 flex items-center justify-between bg-surface dark:bg-slate-900 shrink-0 sticky top-0 z-20">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <Logo variant={isDark ? 'dark' : 'light'} size="sm" />
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full text-on-surface-variant hover:text-[#e74c3c] hover:bg-surface-variant dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Tutup Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 2. Drawer Body (Main Navigation & Categories) */}
        <div className="p-4 flex flex-col gap-6 flex-1 bg-surface dark:bg-slate-900">
          {/* Main Navigation */}
          <div className="flex flex-col gap-1.5">
            <span className="text-[11px] font-extrabold uppercase text-[#e74c3c] tracking-widest px-3 mb-1">
              NAVIGASI UTAMA
            </span>

            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                pathname === '/'
                  ? 'bg-red-50 text-[#e74c3c] dark:bg-primary-fixed/20 shadow-xs'
                  : 'text-on-surface dark:text-slate-100 hover:bg-surface-variant dark:hover:bg-slate-800 hover:text-[#e74c3c]'
              }`}
            >
              <Home className="w-5 h-5 shrink-0" />
              <span>For You</span>
            </Link>

            <Link
              href="/bookmark"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                pathname === '/bookmark'
                  ? 'bg-red-50 text-[#e74c3c] dark:bg-primary-fixed/20 shadow-xs'
                  : 'text-on-surface dark:text-slate-100 hover:bg-surface-variant dark:hover:bg-slate-800 hover:text-[#e74c3c]'
              }`}
            >
              <Bookmark className="w-5 h-5 shrink-0" />
              <span>Tersimpan</span>
            </Link>

            <Link
              href="/reels"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-3.5 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                pathname === '/reels'
                  ? 'bg-red-50 text-[#e74c3c] dark:bg-primary-fixed/20 shadow-xs'
                  : 'text-on-surface dark:text-slate-100 hover:bg-surface-variant dark:hover:bg-slate-800 hover:text-[#e74c3c]'
              }`}
            >
              <Film className="w-5 h-5 shrink-0" />
              <span>Vibes Reels</span>
            </Link>

            <a
              href="https://halo-jurnal-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3.5 px-4 py-3 rounded-xl font-bold text-sm text-on-surface dark:text-slate-100 hover:bg-surface-variant dark:hover:bg-slate-800 hover:text-[#e74c3c] transition-all group"
            >
              <MessageCircle className="w-5 h-5 text-[#e74c3c] shrink-0 group-hover:scale-110 transition-transform" />
              <span className="flex-1 font-bold">Hallo Jurnal</span>
              <ExternalLink className="w-4 h-4 opacity-50 shrink-0" />
            </a>
          </div>

          {/* Categories Section */}
          <div className="pt-4 border-t border-outline-variant/60 dark:border-slate-800 flex flex-col gap-1.5">
            <span className="text-[11px] font-extrabold uppercase text-on-surface-variant tracking-widest px-3 mb-1">
              KATEGORI BERITA
            </span>
            {[...navLinks, ...dropdownLinks].map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg font-semibold text-sm transition-colors ${
                    isActive
                      ? 'text-[#e74c3c] font-bold bg-red-50 dark:bg-slate-800'
                      : 'text-on-surface-variant dark:text-slate-300 hover:text-[#e74c3c] hover:bg-surface-variant dark:hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* 3. Drawer Footer */}
        <div className="p-4 border-t border-outline-variant/60 dark:border-slate-800 bg-surface-container-lowest dark:bg-slate-950 shrink-0 text-center">
          <span className="text-[11px] text-on-surface-variant dark:text-slate-400 opacity-90">
            © Jurnal Vibes • Portal Berita Sukabumi
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur-md dark:bg-inverse-surface/95 border-b border-outline-variant dark:border-secondary transition-colors duration-300">
        <div className="flex justify-between items-center px-4 md:px-margin-desktop h-16 md:h-20 max-w-container-max mx-auto w-full relative z-10 gap-2 md:gap-4">
          {/* Mobile Hamburger & Brand Logo */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-on-surface hover:text-[#e74c3c] p-2 rounded-lg hover:bg-surface-variant transition-colors cursor-pointer"
              aria-label="Buka Menu Sidebar"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link href="/" className="flex items-center shrink-0">
              <Logo variant={isDark ? 'dark' : 'light'} size="md" />
            </Link>
          </div>

          {/* Navigation Links (Desktop Only) */}
          <nav className="hidden md:flex flex-1 items-center justify-center min-w-0">
            <div className="flex items-center gap-6 text-sm font-semibold text-on-surface">
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
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0 justify-end">
            <WeatherWidget />
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-on-surface hover:text-[#e74c3c] transition-colors p-2 rounded-full hover:bg-surface-variant flex items-center justify-center cursor-pointer"
              title="Cari Berita"
            >
              <Search className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={toggleDarkMode}
              className="text-on-surface hover:text-[#e74c3c] transition-colors p-2 rounded-full hover:bg-surface-variant flex items-center justify-center cursor-pointer"
              title="Ganti Mode Tampilan"
            >
              {isDark ? <Sun className="w-5 h-5 md:w-6 md:h-6" /> : <Moon className="w-5 h-5 md:w-6 md:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Quick Category Bar */}
        <div className="md:hidden flex overflow-x-auto no-scrollbar gap-3 px-4 py-2 text-xs font-semibold text-on-surface border-t border-outline-variant/30 bg-surface-container-lowest/80">
          {navLinks.map((link, idx) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={idx}
                href={link.href}
                className={`shrink-0 px-2.5 py-1 rounded-full transition-colors ${
                  isActive ? 'bg-primary text-on-primary font-bold' : 'hover:text-[#e74c3c]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {dropdownLinks.map((drop, idx) => (
            <Link
              key={idx}
              href={drop.href}
              className={`shrink-0 px-2.5 py-1 rounded-full transition-colors ${
                pathname === drop.href ? 'bg-primary text-on-primary font-bold' : 'hover:text-[#e74c3c]'
              }`}
            >
              {drop.label}
            </Link>
          ))}
        </div>

        <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      </header>

      {/* Render Mobile Drawer at document.body level via React Portal */}
      {isMobileMenuOpen && mounted && createPortal(mobileDrawerContent, document.body)}
    </>
  );
};
