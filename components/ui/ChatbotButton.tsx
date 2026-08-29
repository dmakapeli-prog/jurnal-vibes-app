'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageCircle, X, Sparkles } from 'lucide-react';

export const ChatbotButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close popup menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleTanyaAI = () => {
    setIsOpen(false);
    alert('AI Chatbot Jurnal Vibes siap membantu!');
  };

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up Action Menu */}
      <div
        className={`flex flex-col gap-3 mb-3 transition-all duration-300 transform origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Tombol 2: Hallo Jurnal */}
        <a
          href="https://halo-jurnal-app.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-button font-bold text-sm px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/20 whitespace-nowrap group"
        >
          <span className="shrink-0 bg-white/20 p-1.5 rounded-full">
            <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </span>
          <span>Hallo Jurnal</span>
        </a>

        {/* Tombol 1: Tanya AI */}
        <button
          onClick={handleTanyaAI}
          className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-button font-bold text-sm px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/20 whitespace-nowrap group"
        >
          <span className="shrink-0 bg-white/20 p-1.5 rounded-full">
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          </span>
          <span>Tanya AI</span>
        </button>
      </div>

      {/* Main Floating Action Button (FAB Toggle) */}
      <button
        aria-label="Toggle Action Menu"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-white/20 hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-slate-800 rotate-90' : 'bg-[#e74c3c]'
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Bot className="w-8 h-8 group-hover:animate-pulse" />
        )}
      </button>
    </div>
  );
};
