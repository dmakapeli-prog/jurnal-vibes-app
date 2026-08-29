'use client';

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 'md' }) => {
  const iconHeights = {
    sm: 'h-7 md:h-8',
    md: 'h-9 md:h-11',
    lg: 'h-12 md:h-14'
  };

  const titleSizes = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl font-headline-lg font-bold',
    lg: 'text-2xl md:text-3xl font-headline-lg font-bold'
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[9.5px] md:text-[10.5px]',
    lg: 'text-[11px] md:text-xs'
  };

  const textColor = variant === 'footer' ? 'text-white' : 'dark:text-white text-[#1b1c1c]';
  const taglineColor =
    variant === 'footer'
      ? 'text-gray-300 font-medium tracking-wider'
      : 'dark:text-gray-300 text-[#5d3f3c] font-medium tracking-wider';

  return (
    <div className="flex items-center gap-2.5 group shrink-0">
      {/* eslint-disable-next-img-element */}
      <img
        src="/logo-icon.png"
        alt="Jurnal Vibes Icon"
        className={`${iconHeights[size]} w-auto object-contain transition-transform group-hover:scale-105 shrink-0`}
      />
      <div className="flex flex-col justify-center leading-none">
        <span className={`tracking-tight ${titleSizes[size]} ${textColor}`}>
          Jurnal <span className="text-[#bd0015]">Vibes</span>
        </span>
        <span className={`font-sans uppercase mt-1 ${taglineSizes[size]} ${taglineColor}`}>
          Portal Berita Sukabumi
        </span>
      </div>
    </div>
  );
};
