'use client';

import React from 'react';

interface FilterChipsProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (cat: string) => void;
}

export const FilterChips: React.FC<FilterChipsProps> = ({
  categories,
  activeCategory,
  onSelectCategory
}) => {
  return (
    <div className="relative w-full mb-6">
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 snap-x">
        {categories.map((cat, idx) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={idx}
              onClick={() => onSelectCategory(cat)}
              className={`px-4 py-1.5 rounded-full font-label-caps text-xs whitespace-nowrap transition-all snap-start ${
                isActive
                  ? 'bg-primary text-on-primary font-bold shadow-sm scale-[1.02]'
                  : 'bg-surface-container-high text-on-surface hover:bg-primary-fixed-dim hover:text-on-primary-fixed'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <div className="absolute right-0 top-0 bottom-2 w-12 bg-gradient-to-r from-transparent to-background pointer-events-none" />
    </div>
  );
};
