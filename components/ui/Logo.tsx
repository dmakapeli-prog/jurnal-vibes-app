'use client';

import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'light', size = 'md' }) => {
  const iconHeights = {
    sm: 'h-8',
    md: 'h-10 md:h-12',
    lg: 'h-12 md:h-16'
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px] md:text-[11px]',
    lg: 'text-[11px] md:text-xs'
  };

  const textColor = variant === 'footer' ? 'text-white' : 'dark:text-white text-[#1b1c1c]';
  const taglineColor = variant === 'footer' ? 'text-gray-300' : 'dark:text-gray-400 text-[#5d3f3c]';

  return (
    <div className="flex items-center gap-3 group">
      {/* eslint-disable-next-img-element */}
      <img
        src="/logo-icon.png"
        alt="Jurnal Vibes Icon"
        className={`${iconHeights[size]} w-auto object-contain transition-transform group-hover:scale-105`}
      />
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-headline-lg font-extrabold tracking-tight ${titleSizes[size]} ${textColor}`}>
          Jurnal <span className="text-[#bd0015]">Vibes</span>
        </span>
        <span className={`font-sans tracking-wider uppercase font-semibold mt-0.5 ${subtitleSizes[size]} ${taglineColor}`}>
          Your daily dose of Sukabumi Vibes
        </span>
      </div>
    </div>
  );
};
