'use client';

import React from 'react';
import Link from 'next/link';
import { Share2, Link as LinkIcon, Camera, PlayCircle, Music } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-[#6b0f1a] to-[#c0392b] py-16 px-4 border-t border-white/10 mt-auto w-full">
      <div className="max-w-container-max mx-auto flex flex-col items-center gap-8 text-white">
        {/* Layer 1: Logo */}
        <div>
          <Link href="/">
            {/* eslint-disable-next-img-element */}
            <img
              alt="Jurnal Vibes Logo"
              className="h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105"
              src="/logo-white-text.png"
            />
          </Link>
        </div>

        {/* Layer 2: Social Icons */}
        <div className="flex gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <LinkIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <Camera className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <PlayCircle className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
          >
            <Music className="w-5 h-5" />
          </a>
        </div>

        {/* Layer 3: Divider */}
        <div className="w-full max-w-2xl h-px bg-outline-variant opacity-50" />

        {/* Layer 4: Media Network */}
        <div className="text-center">
          <h4 className="font-bold text-white mb-4 tracking-widest text-sm uppercase">
            MEDIA NETWORK
          </h4>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-200">
            <a className="hover:text-[#e74c3c] transition-colors" href="#">
              Facebook.com
            </a>
            <a className="hover:text-[#e74c3c] transition-colors" href="#">
              Instagram.com
            </a>
            <a className="hover:text-[#e74c3c] transition-colors" href="#">
              Whatsapp.com
            </a>
            <a className="hover:text-[#e74c3c] transition-colors" href="#">
              Tiktok.com
            </a>
            <a className="hover:text-[#e74c3c] transition-colors" href="#">
              Twitter.com
            </a>
            <a className="hover:text-[#e74c3c] transition-colors" href="#">
              Youtube.com
            </a>
          </div>
        </div>

        {/* Layer 5: Divider */}
        <div className="w-full max-w-2xl h-px bg-outline-variant opacity-50" />

        {/* Layer 6: Policy Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs text-gray-300 font-medium tracking-wide">
          <a className="hover:text-[#e74c3c] transition-colors" href="#">
            TENTANG KAMI
          </a>
          <span className="text-outline-variant">/</span>
          <a className="hover:text-[#e74c3c] transition-colors" href="#">
            PEDOMAN MEDIA SIBER
          </a>
          <span className="text-outline-variant">/</span>
          <a className="hover:text-[#e74c3c] transition-colors" href="#">
            HUBUNGI KAMI
          </a>
          <span className="text-outline-variant">/</span>
          <a className="hover:text-[#e74c3c] transition-colors" href="#">
            PRIVACY POLICY
          </a>
          <span className="text-outline-variant">/</span>
          <a className="hover:text-[#e74c3c] transition-colors" href="#">
            KEBIJAKAN PRIVASI
          </a>
        </div>

        {/* Layer 7: Copyright */}
        <div className="text-xs text-gray-400 mt-4">
          COPYRIGHT © 2026 JURNAL VIBES - ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};
