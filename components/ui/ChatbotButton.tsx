'use client';

import React from 'react';
import { Bot } from 'lucide-react';

export const ChatbotButton: React.FC = () => {
  return (
    <button
      aria-label="Chat with AI"
      onClick={() => alert('AI Chatbot Jurnal Vibes siap membantu!')}
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#e74c3c] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center z-50 group border border-white/10"
    >
      <Bot className="w-8 h-8 group-hover:animate-pulse" />
    </button>
  );
};
