'use client';

import React from 'react';
import Link from 'next/link';
import { CloudSun } from 'lucide-react';

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
      className="hidden sm:flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-surface-variant/40 hover:bg-surface-variant/80 border border-outline-variant/40 transition-all cursor-pointer group text-xs shrink-0"
      title="Lihat perkiraan cuaca Sukabumi"
    >
      <CloudSun className="w-4 h-4 text-amber-500 group-hover:scale-110 transition-transform shrink-0" />
      <div className="flex items-center gap-2 font-medium text-on-surface">
        <span className="text-[11px] text-on-surface-variant hidden lg:inline">{date}</span>
        <span className="text-[11px] text-on-surface-variant hidden lg:inline">•</span>
        <div className="flex items-center gap-1">
          <span className="font-bold text-xs group-hover:text-[#e74c3c] transition-colors">{temp}</span>
          <span className="text-[11px] text-on-surface-variant">{location}</span>
        </div>
      </div>
    </Link>
  );
};

