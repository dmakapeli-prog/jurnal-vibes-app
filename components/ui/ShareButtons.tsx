'use client';

import React, { useState } from 'react';
import { Link as LinkIcon, Check } from 'lucide-react';

interface ShareButtonsProps {
  title?: string;
  url?: string;
  className?: string;
  showLabel?: boolean;
}

export function ShareButtons({ title = '', url = '', className = '', showLabel = true }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const getArticleUrl = () => {
    if (url) return url;
    if (typeof window !== 'undefined') {
      return window.location.href;
    }
    return '';
  };

  const handleShareWhatsApp = () => {
    const articleUrl = getArticleUrl();
    const shareText = title ? `*${title}*\n\n` : '';
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}${articleUrl}`)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleShareFacebook = () => {
    const articleUrl = getArticleUrl();
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`;
    window.open(facebookUrl, '_blank', 'noopener,noreferrer');
  };

  const handleShareTwitter = () => {
    const articleUrl = getArticleUrl();
    const shareText = title || 'Artikel Menarik di Jurnal Vibes';
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(twitterUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = async () => {
    const articleUrl = getArticleUrl();
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(articleUrl);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = articleUrl;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Gagal menyalin link:', err);
    }
  };

  return (
    <div className={`flex items-center gap-3 flex-wrap ${className}`}>
      {showLabel && (
        <span className="font-button text-on-surface-variant dark:text-gray-400 font-semibold text-sm mr-1">
          Bagikan:
        </span>
      )}

      <div className="flex items-center gap-2">
        {/* WhatsApp Button */}
        <button
          type="button"
          onClick={handleShareWhatsApp}
          title="Bagikan ke WhatsApp"
          aria-label="Bagikan ke WhatsApp"
          className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20ba5a] hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer group"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.553 4.11 1.519 5.84L0 24l6.335-1.652C8.016 23.332 9.957 23.999 12 23.999c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.833 0-3.565-.486-5.068-1.336l-.363-.205-3.766.983.999-3.674-.225-.358C2.696 15.892 2 14.01 2 12 2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
          </svg>
        </button>

        {/* Facebook Button */}
        <button
          type="button"
          onClick={handleShareFacebook}
          title="Bagikan ke Facebook"
          aria-label="Bagikan ke Facebook"
          className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#166fe5] hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer group"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>

        {/* Twitter / X Button */}
        <button
          type="button"
          onClick={handleShareTwitter}
          title="Bagikan ke X (Twitter)"
          aria-label="Bagikan ke X (Twitter)"
          className="w-9 h-9 rounded-full bg-slate-900 dark:bg-slate-800 text-white flex items-center justify-center hover:bg-black dark:hover:bg-slate-700 hover:scale-105 active:scale-95 transition-all shadow-sm cursor-pointer group"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </button>

        {/* Copy Link Explicit Button with Text */}
        <button
          type="button"
          onClick={handleCopyLink}
          title="Salin Link Artikel"
          aria-label="Salin Link Artikel"
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full border transition-all font-button text-xs font-semibold cursor-pointer shadow-sm active:scale-95 ${
            copied
              ? 'bg-emerald-500 text-white border-emerald-500 dark:bg-emerald-600 dark:border-emerald-600'
              : 'bg-surface-container dark:bg-slate-800 border-outline-variant dark:border-slate-700 text-on-surface dark:text-gray-200 hover:bg-surface-container-high dark:hover:bg-slate-700 hover:border-slate-400 dark:hover:border-slate-600'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-white animate-in zoom-in-50 duration-200" />
              <span>Tersalin!</span>
            </>
          ) : (
            <>
              <LinkIcon className="w-4 h-4" />
              <span>Salin Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
