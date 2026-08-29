'use client';

import React from 'react';
import Link from 'next/link';
import { CloudSun } from 'lucide-react';

interface WeatherWidgetProps {
  date?: string;
  temp?: string;
  location?: string;
}

export const WeatherWidget: React.FC<WeatherWidgetProps> = ({
  date = 'Kamis, 27 Agustus 2026',
  temp = '24°C',
  location = 'Sukabumi'
}) => {
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
};
