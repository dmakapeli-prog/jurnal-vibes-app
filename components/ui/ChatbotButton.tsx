'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Bot, MessageCircle, X, Sparkles, Send, ExternalLink, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

export const ChatbotButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [inputText, setInputText] = useState<string>('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'Halo! 👋 Selamat datang di Jurnal Vibes AI. Ada berita, rekomendasi kuliner Cikole, atau informasi seputar Sukabumi yang ingin kamu tanyakan?',
      time: 'Just now'
    }
  ]);

  const menuRef = useRef<HTMLDivElement>(null);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  // Close popup menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Auto scroll chat to bottom when messages update
  useEffect(() => {
    if (isChatOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  const handleOpenChat = () => {
    setIsMenuOpen(false);
    setIsChatOpen(true);
  };

  const getTimeString = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: getTimeString()
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    // Simulate smart AI response
    setTimeout(() => {
      let replyText = '';
      const lower = query.toLowerCase();

      if (lower.includes('kopi') || lower.includes('cikole') || lower.includes('kuliner')) {
        replyText =
          '☕ Kedai Kopi Cikole Sukabumi sedang viral dengan konsep industrial-minimalis! Menu andalannya Signature Cold Brew 18 jam & Gourmet Latte. Kamu bisa cek ulasan lengkapnya di kategori Lifestyle & Kuliner.';
      } else if (lower.includes('berita') || lower.includes('terkini') || lower.includes('update')) {
        replyText =
          '📰 Berita terbaru Sukabumi hari ini: Festival Kuliner 2024 dibanjiri pengunjung, Siswa SMAN 1 meraih Medali Emas OSN, dan Riset IoT Mahasiswa UMMI Sukabumi!';
      } else if (lower.includes('loker') || lower.includes('kerja')) {
        replyText =
          '💼 Info Loker Sukabumi: Tersedia lowongan kerja Barista Cikole, Staff Admin Digital, dan Graphic Designer. Cek halaman /loker untuk detail selengkapnya!';
      } else if (lower.includes('wisata') || lower.includes('gede') || lower.includes('cikaso')) {
        replyText =
          '🏔️ Rekomendasi Wisata Sukabumi: Pendakian Gunung Gede jalur Selabintana & keindahan 3 air terjun Curug Cikaso di Sukabumi Selatan!';
      } else {
        replyText =
          '✨ Terima kasih pertanyaannya! Jurnal Vibes AI selalu siap memberikan berita & informasi terpercaya seputar Kota dan Kabupaten Sukabumi.';
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: replyText,
        time: getTimeString()
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 600);
  };

  return (
    <div ref={menuRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* ----------------- CHAT BOX WINDOW MODAL ----------------- */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[390px] h-[520px] bg-surface dark:bg-slate-900 rounded-2xl shadow-2xl border border-outline-variant dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* 1. Header Chat */}
          <div className="bg-gradient-to-r from-[#c00015] to-[#e74c3c] text-white p-4 flex items-center justify-between shadow-md shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 text-white">
                  <Bot className="w-6 h-6" />
                </div>
                {/* Online Badge */}
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#c00015] rounded-full" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-button text-sm font-bold leading-tight">
                  Jurnal Vibes AI
                </h3>
                <span className="text-[11px] text-white/90 flex items-center gap-1 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Online &amp; Siap Membantu
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-white/80 hover:text-white p-1.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              title="Tutup Chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 2. Area Percakapan (Body Chat) */}
          <div className="flex-1 p-4 overflow-y-auto bg-surface-container-lowest dark:bg-slate-950/60 flex flex-col gap-3 text-sm">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex flex-col max-w-[85%] ${
                  msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
                }`}
              >
                <div
                  className={`px-4 py-2.5 rounded-2xl shadow-xs text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-primary text-on-primary rounded-br-none font-medium'
                      : 'bg-surface-container dark:bg-slate-800 text-on-surface rounded-bl-none border border-outline-variant dark:border-slate-700'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-on-surface-variant/70 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
            <div ref={chatBottomRef} />

            {/* Quick Action Buttons (Tombol Aksi Cepat) */}
            <div className="mt-2 pt-2 border-t border-outline-variant/60 flex flex-col gap-2">
              <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">
                Aksi Cepat:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {/* WhatsApp Link Button */}
                <a
                  href="https://halo-jurnal-app.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat via Hallo Jurnal</span>
                  <ExternalLink className="w-3 h-3 opacity-70 ml-0.5" />
                </a>

                <button
                  onClick={() => handleSendMessage('Rekomendasi kuliner Cikole')}
                  className="bg-surface-container-high hover:bg-primary hover:text-white text-on-surface px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer border border-outline-variant"
                >
                  ☕ Kuliner Cikole
                </button>
                <button
                  onClick={() => handleSendMessage('Berita terbaru Sukabumi')}
                  className="bg-surface-container-high hover:bg-primary hover:text-white text-on-surface px-3 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer border border-outline-variant"
                >
                  📰 Berita Terbaru
                </button>
              </div>
            </div>
          </div>

          {/* 3. Footer Chat (Input Area) */}
          <div className="p-3 bg-surface dark:bg-slate-900 border-t border-outline-variant dark:border-slate-800 shrink-0">
            <form
              onSubmit={e => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2 bg-surface-container dark:bg-slate-800 rounded-full px-4 py-2 border border-outline-variant dark:border-slate-700 focus-within:border-primary transition-colors"
            >
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Ketik pesan Anda..."
                className="flex-1 bg-transparent text-xs sm:text-sm text-on-surface placeholder:text-on-surface-variant/50 outline-none"
              />
              <button
                type="submit"
                disabled={!inputText.trim()}
                className={`p-2 rounded-full transition-all cursor-pointer ${
                  inputText.trim()
                    ? 'bg-primary text-on-primary hover:scale-105'
                    : 'text-on-surface-variant/40 cursor-not-allowed'
                }`}
                title="Kirim pesan"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ----------------- POP-UP MENU TOGGLE ----------------- */}
      {!isChatOpen && (
        <div
          className={`flex flex-col gap-3 mb-3 transition-all duration-300 transform origin-bottom-right ${
            isMenuOpen
              ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 scale-90 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Tombol 2: Hallo Jurnal */}
          <a
            href="https://halo-jurnal-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-button font-bold text-sm px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/20 whitespace-nowrap group"
          >
            <span className="shrink-0 bg-white/20 p-1.5 rounded-full">
              <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </span>
            <span>Hallo Jurnal</span>
          </a>

          {/* Tombol 1: Tanya AI */}
          <button
            onClick={handleOpenChat}
            className="flex items-center gap-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-button font-bold text-sm px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer border border-white/20 whitespace-nowrap group"
          >
            <span className="shrink-0 bg-white/20 p-1.5 rounded-full">
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
            <span>Tanya AI</span>
          </button>
        </div>
      )}

      {/* Main Floating Action Button (FAB Toggle) */}
      {!isChatOpen && (
        <button
          aria-label="Toggle Action Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`w-14 h-14 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-white/20 hover:scale-105 active:scale-95 ${
            isMenuOpen ? 'bg-slate-800 rotate-90' : 'bg-[#e74c3c]'
          }`}
        >
          {isMenuOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <Bot className="w-8 h-8 group-hover:animate-pulse" />
          )}
        </button>
      )}
    </div>
  );
};
