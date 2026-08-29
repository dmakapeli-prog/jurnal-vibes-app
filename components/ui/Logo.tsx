'use client';

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 'md' }) => {
  const iconHeights = {
    sm: 'h-8 md:h-9',
    md: 'h-10 md:h-12',
    lg: 'h-12 md:h-14'
  };

  const titleSizes = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl font-headline-lg font-bold',
    lg: 'text-2xl md:text-3xl font-headline-lg font-bold'
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] md:text-[11px]',
    lg: 'text-[11px] md:text-xs'
  };

  const textColor = variant === 'footer' ? 'text-white' : 'dark:text-white text-[#1b1c1c]';
  const taglineColor =
    variant === 'footer'
      ? 'text-gray-200 font-medium'
      : 'dark:text-gray-300 text-[#bd0015] font-semibold opacity-90';

  return (
    <div className="flex items-center gap-2.5 group shrink-0 min-w-max">
      {/* eslint-disable-next-img-element */}
      <img
        src="/logo-icon.png"
        alt="Jurnal Vibes Icon"
        className={`${iconHeights[size]} w-auto object-contain transition-transform group-hover:scale-105 shrink-0`}
      />
      <div className="flex flex-col justify-center leading-tight shrink-0 min-w-max">
        <span className={`tracking-tight ${titleSizes[size]} ${textColor} whitespace-nowrap`}>
          Jurnal <span className="text-[#bd0015]">Vibes</span>
        </span>
        <span className={`font-sans tracking-wide whitespace-nowrap ${taglineSizes[size]} ${taglineColor}`}>
          Your daily dose of <span className="text-[#bd0015] font-bold">Sukabumi Vibes</span>
        </span>
      </div>
    </div>
  );
};
