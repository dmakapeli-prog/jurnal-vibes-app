'use client';

import React from 'react';
import Link from 'next/link';
import { CloudSun, Calendar } from 'lucide-react';

interface WeatherWidgetProps {
  date?: string;
  temp?: string;
  location?: string;
  variant?: 'header' | 'sidebar';
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  date = 'Kamis, 27 Ags 2026',
  temp = '24°C',
  location = 'Sukabumi',
  variant = 'header'
}) => {
  if (variant === 'sidebar') {
    return (
      <Link
        href="/cuaca"
        className="mt-8 px-4 flex flex-col gap-1 group cursor-pointer block hover:opacity-90 transition-opacity"
      >
        <p className="text-xs text-gray-500 group-hover:text-primary transition-colors">{date}</p>
        <div className="flex items-center gap-2 text-on-surface group-hover:text-primary transition-colors">
          <CloudSun className="w-5 h-5 text-on-surface group-hover:text-primary transition-colors" />
          <span className="text-base font-bold">{temp}</span>
          <span className="text-sm opacity-70">{location}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href="/cuaca"
      className="hidden sm:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-surface-container/70 dark:bg-slate-800/70 hover:bg-surface-variant dark:hover:bg-slate-800 border border-outline-variant/60 dark:border-slate-700/60 shadow-2xs hover:shadow-xs transition-all duration-300 group shrink-0 cursor-pointer backdrop-blur-xs"
      title="Lihat Perkiraan Cuaca Sukabumi"
    >
      {/* Weather Icon Badge */}
      <div className="flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/10 text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shrink-0">
        <CloudSun className="w-4 h-4 stroke-[2.2] group-hover:scale-110 transition-transform" />
      </div>

      {/* Weather Info */}
      <div className="flex items-center gap-1.5 text-xs font-semibold text-on-surface">
        <span className="font-extrabold text-sm text-[#e74c3c] tracking-tight">{temp}</span>
        <span className="text-[11px] text-on-surface-variant font-medium opacity-90">{location}</span>
      </div>

      {/* Divider */}
      <span className="hidden lg:block w-px h-3.5 bg-outline-variant/60 dark:bg-slate-700 shrink-0" />

      {/* Date Info */}
      <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-medium text-on-surface-variant/90 shrink-0">
        <Calendar className="w-3.5 h-3.5 opacity-60 text-[#e74c3c]" />
        <span>{date}</span>
      </div>
    </Link>
  );
};

