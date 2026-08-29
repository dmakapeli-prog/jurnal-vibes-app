'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, X, TrendingUp, ChevronRight } from 'lucide-react';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const trendingTags = [
    { label: '#SukabumiUpdate', query: 'Sukabumi' },
    { label: '#KulinerCikole', query: 'Cikole' },
    { label: '#WisataAlam', query: 'Wisata' },
    { label: '#LokerSMI', query: 'Loker' },
    { label: '#FestivalKuliner', query: 'Festival' }
  ];

  // Perform instant live filtering
  const searchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return [];

    return DUMMY_ARTICLES.filter(
      article =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.categoryLabel.toLowerCase().includes(query) ||
        (article.subCategory && article.subCategory.toLowerCase().includes(query)) ||
        article.content.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleClear = () => {
    setSearchQuery('');
  };

  const handleClose = () => {
    setSearchQuery('');
    onClose();
  };

  return (
    <>
      <div
        className={`absolute top-0 left-0 w-full bg-surface shadow-2xl transform transition-all duration-300 ease-in-out z-50 pt-20 pb-8 px-4 border-b border-outline-variant max-h-[85vh] overflow-y-auto ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          {/* Search Input Bar */}
          <div className="relative flex items-center">
            <Search className="w-7 h-7 absolute left-3 text-primary" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari berita, tempat, atau topik seputar Sukabumi..."
              autoFocus={isOpen}
              className="w-full bg-surface-container border-b-2 border-outline-variant focus:border-primary text-xl md:text-2xl font-bold text-on-surface placeholder:text-on-surface-variant/40 py-4 pl-14 pr-16 outline-none transition-colors"
            />
            {searchQuery ? (
              <button
                onClick={handleClear}
                className="absolute right-12 text-on-surface-variant hover:text-primary p-2 transition-colors cursor-pointer"
                title="Hapus teks"
              >
                <X className="w-5 h-5" />
              </button>
            ) : null}
            <button
              onClick={handleClose}
              className="absolute right-2 text-on-surface-variant hover:text-primary p-2 transition-colors cursor-pointer"
              title="Tutup pencarian"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Trending Tags (If query is empty) */}
          {!searchQuery.trim() && (
            <div>
              <h4 className="font-headline-md text-primary font-bold text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Trending Sekarang
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {trendingTags.map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSearchQuery(tag.query)}
                    className="px-4 py-2 bg-surface-container-high hover:bg-primary hover:text-white text-on-surface font-button rounded-full transition-all text-xs font-semibold cursor-pointer border border-outline-variant"
                  >
                    {tag.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Live Search Results */}
          {searchQuery.trim() ? (
            <div className="mt-2">
              <div className="flex items-center justify-between mb-4 border-b border-outline-variant pb-2">
                <h4 className="font-headline-md text-on-surface font-bold text-base">
                  Hasil Pencarian untuk &quot;<span className="text-primary">{searchQuery}</span>&quot;
                </h4>
                <span className="text-xs font-medium text-on-surface-variant">
                  {searchResults.length} artikel ditemukan
                </span>
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-1">
                  {searchResults.map(article => (
                    <Link
                      key={article.id}
                      href={`/artikel/${article.id}`}
                      onClick={handleClose}
                      className="flex gap-4 p-3 rounded-xl bg-surface-container border border-outline-variant hover:border-primary hover:shadow-md transition-all group"
                    >
                      <div className="w-24 h-20 rounded-lg overflow-hidden shrink-0 aspect-video">
                        {/* eslint-disable-next-img-element */}
                        <img
                          src={article.imageUrl}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-between min-w-0 flex-1">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-full inline-block mb-1">
                            {article.categoryLabel}
                          </span>
                          <h5 className="font-button text-sm font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                            {article.title}
                          </h5>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-primary mt-1">
                          <span>Baca Selengkapnya</span>
                          <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-surface-container rounded-xl border border-outline-variant">
                  <p className="text-on-surface-variant font-medium text-sm">
                    Tidak ada artikel yang cocok dengan kata kunci &quot;
                    <span className="font-bold text-primary">{searchQuery}</span>&quot;.
                  </p>
                  <p className="text-xs text-on-surface-variant/70 mt-1">
                    Coba kata kunci lain seperti <span className="underline cursor-pointer" onClick={() => setSearchQuery('Kuliner')}>Kuliner</span>, <span className="underline cursor-pointer" onClick={() => setSearchQuery('SMAN')}>SMAN</span>, atau <span className="underline cursor-pointer" onClick={() => setSearchQuery('Sukabumi')}>Sukabumi</span>.
                  </p>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>

      {/* Backdrop overlay */}
      <div
        onClick={handleClose}
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
    </>
  );
};
