'use client';

import React from 'react';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { Logo } from '../ui/Logo';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.36 1.52-1.36 2.53-.02 1.07.47 2.12 1.31 2.78.85.67 2.02.9 3.06.6 1.16-.31 2.11-1.25 2.45-2.39.12-.48.15-.99.14-1.49.01-4.87.01-9.74.01-14.61z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://whatsapp.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-white dark:bg-slate-900 border-t border-zinc-200 dark:border-slate-800 mt-auto relative">
      {/* Top Thin Red Accent Border */}
      <div className="h-0.5 bg-[#e74c3c] w-full" />

      {/* Main 3-Section Proportional Layout */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Bagian 1 (Brand & Info Redaksi - Kiri): 6 Kolom Grid */}
          <div className="md:col-span-6 flex flex-col gap-3.5 pr-0 md:pr-6">
            <Link href="/" className="inline-block">
              <Logo variant="light" size="md" />
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-body-md max-w-lg">
              Media digital lokal Sukabumi ramah Gen-Z. Menyajikan berita terkini, gaya hidup, dan cerita visual seputar Sukabumi.
            </p>

            {/* Kontak Redaksi Langsung di Bawah Deskripsi */}
            <div className="flex items-center gap-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 font-medium pt-0.5">
              <Mail className="w-4 h-4 text-[#e74c3c] shrink-0" />
              <span>Redaksi:</span>
              <a href="mailto:redaksi@jurnalvibes.com" className="hover:text-[#e74c3c] transition-colors font-semibold text-zinc-800 dark:text-zinc-200">
                redaksi@jurnalvibes.com
              </a>
            </div>

            {/* Deretan Ikon Medsos Bulat */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                  className="w-8.5 h-8.5 rounded-full bg-zinc-100 dark:bg-slate-800 border border-zinc-200 dark:border-slate-700 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:bg-[#e74c3c] hover:text-white dark:hover:bg-[#e74c3c] dark:hover:text-white hover:border-[#e74c3c] transition-all duration-200 shadow-2xs"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bagian 2 (Kanal): 3 Kolom Grid */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-sm uppercase tracking-wider">
              Kanal
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm font-medium">
              <li>
                <Link href="/berita" className="text-zinc-600 dark:text-zinc-400 hover:text-[#e74c3c] transition-colors">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/lifestyle" className="text-zinc-600 dark:text-zinc-400 hover:text-[#e74c3c] transition-colors">
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link href="/loker" className="text-zinc-600 dark:text-zinc-400 hover:text-[#e74c3c] transition-colors">
                  Loker
                </Link>
              </li>
              <li>
                <Link href="/sport" className="text-zinc-600 dark:text-zinc-400 hover:text-[#e74c3c] transition-colors">
                  Sport
                </Link>
              </li>
              <li>
                <Link href="/reels" className="text-zinc-600 dark:text-zinc-400 hover:text-[#e74c3c] transition-colors">
                  Vibes Reels
                </Link>
              </li>
            </ul>
          </div>

          {/* Bagian 3 (Informasi & Regulasi / Tentang Media): 3 Kolom Grid */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h3 className="font-semibold text-zinc-900 dark:text-white text-sm uppercase tracking-wider">
              Tentang Media
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm font-medium">
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-[#e74c3c] transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-[#e74c3c] transition-colors">
                  Pedoman Media Siber
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-[#e74c3c] transition-colors">
                  Info Pemasangan Iklan
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-600 dark:text-zinc-400 hover:text-[#e74c3c] transition-colors">
                  Bantuan & FAQ
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Garis Pemisah & Sub-Footer dengan safe padding pr-24 untuk Floating Bot */}
        <div className="border-t border-zinc-200 dark:border-slate-800 mt-10 pt-6 pb-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400 font-body-md pr-0 sm:pr-24">
            <p>© 2026 Jurnal Vibes. All rights reserved.</p>
            <div className="flex items-center gap-4 font-medium text-zinc-600 dark:text-zinc-400">
              <a href="#" className="hover:text-[#e74c3c] transition-colors">
                Kebijakan Privasi
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[#e74c3c] transition-colors">
                Ketentuan Layanan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



