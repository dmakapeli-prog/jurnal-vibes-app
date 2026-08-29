'use client';

import React from 'react';
import { Search, X, TrendingUp } from 'lucide-react';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full bg-surface shadow-md transform transition-transform duration-300 ease-in-out z-40 pt-24 pb-8 px-4 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Jurnal Vibes..."
              className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-[#e74c3c] focus:ring-0 text-2xl font-bold text-on-surface placeholder:text-on-surface-variant/50 py-4 pl-12 pr-12 bg-transparent transition-colors outline-none"
            />
            <Search className="w-7 h-7 absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <button
              onClick={onClose}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-[#e74c3c] p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div>
            <h4 className="font-headline-md text-[#e74c3c] font-bold text-lg mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Trending Now
            </h4>
            <div className="flex flex-wrap gap-3">
              {[
                '#SukabumiUpdate',
                '#KulinerCikole',
                '#WisataAlam',
                '#LokerSMI',
                '#FestivalKuliner'
              ].map((tag, idx) => (
                <button
                  key={idx}
                  onClick={onClose}
                  className="px-4 py-2 bg-surface-container-high hover:bg-surface-variant text-on-surface font-button rounded-full transition-colors text-sm font-semibold"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
    </>
  );
};
