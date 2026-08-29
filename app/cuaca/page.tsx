'use client';

import React from 'react';
import Link from 'next/link';
import { CloudSun, Sun, CloudRain, CloudSunRain } from 'lucide-react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';

export default function CuacaPage() {
  const forecast7Days = [
    { day: 'Sen', icon: Sun, temp: '28°/22°' },
    { day: 'Sel', icon: CloudSun, temp: '26°/21°' },
    { day: 'Rab', icon: CloudRain, temp: '24°/20°' },
    { day: 'Kam', icon: CloudSun, temp: '24°/21°' },
    { day: 'Jum', icon: CloudRain, temp: '23°/20°' },
    { day: 'Sab', icon: CloudSunRain, temp: '25°/21°' },
    { day: 'Min', icon: Sun, temp: '27°/22°' }
  ];

  const todayNewsArchive = [
    {
      id: '1',
      category: 'Lokal',
      title: 'Pembangunan Infrastruktur Sukabumi Dipercepat Menjelang Akhir Tahun',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA0tasqR_F3LCFb-3XEoTBBvxtH0tKTlxiVnGXTFOo1bKKVnFOZIa4dTxaYyfoBzCpCun1_o-r1fLViD0QHMrSpRnZn80YK5Fwb-czNRvjJIEyQ0dXPxBQElb5-6BQo3YHTlTMu2rr5ro4bKBPyfDt1DcsTwN_m2qgVkKgYfcDcNlr3E49Ampy75g4NMM5JgfFJhUDmMfpLVBDhctV0AIdmTFsN-ntOHNQnKoGzDhUVSWDD3sHxixVNAw'
    },
    {
      id: '2',
      category: 'Ekonomi',
      title: 'UMKM Sukabumi Go Digital: Pelatihan Intensif Bagi Pelaku Usaha Kreatif',
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBWdh2L7XD5cekfWLbXF48X78RKUkMLAEcnUA_Uz_Gq9rvquPMZdw3OoB5a8xOQCyMPdnu5t_zP-xqAi9IxkWXB0QL_ILRhIARZxLlP0WNQ13fBbPSKsmLE9Inzl82JPiE41OxKPQSs2MWGLm_9nQUwJLc6I6SrmvpesHccu4EpCDiPO90r3mnhfd8U8nuLueFDKR3bsJrX6w7FAtHY-D_IFb7H1dMHog7M8xBtx4wvWLjIRdSdlfeJOA'
    }
  ];

  return (
    <div className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-24 md:pb-stack-lg flex flex-col md:flex-row gap-gutter relative">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="w-full md:w-3/4 flex flex-col gap-stack-lg pr-0 md:pr-12">
        <header className="flex flex-col gap-4 mb-4">
          <h1 className="font-headline-xl text-3xl md:text-5xl font-bold text-on-surface leading-tight">
            Cuaca &amp; Informasi Harian Sukabumi
          </h1>
          <p className="text-on-surface-variant font-body-lg text-base md:text-lg">
            Prakiraan cuaca terkini, kondisi lingkungan, dan arsip berita untuk hari ini.
          </p>
        </header>

        {/* Current Weather Banner */}
        <section className="bg-gradient-to-br from-primary to-[#93000d] rounded-xl p-8 text-white shadow-lg mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-6">
              <CloudSun className="w-20 h-20 text-white stroke-[1.5]" />
              <div>
                <div className="text-5xl md:text-6xl font-bold">24°C</div>
                <div className="text-lg md:text-xl opacity-90 mt-1">Berawan • Sukabumi</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 md:gap-8 border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
              <div className="text-center">
                <div className="text-xs uppercase tracking-widest opacity-70 mb-1">Kelembapan</div>
                <div className="font-bold text-lg md:text-xl">78%</div>
              </div>
              <div className="text-center">
                <div className="text-xs uppercase tracking-widest opacity-70 mb-1">Angin</div>
                <div className="font-bold text-lg md:text-xl">12 km/h</div>
              </div>
              <div className="text-center">
                <div className="text-xs uppercase tracking-widest opacity-70 mb-1">AQI</div>
                <div className="font-bold text-lg md:text-xl">42 (Baik)</div>
              </div>
            </div>
          </div>
        </section>

        {/* 7 Days Forecast */}
        <section className="mb-8">
          <h3 className="font-headline-md text-xl md:text-2xl font-bold text-on-surface mb-6">
            Prakiraan 7 Hari
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4">
            {forecast7Days.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-surface-container-low p-4 rounded-xl border border-outline-variant text-center flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors"
                >
                  <div className="text-xs font-bold uppercase">{item.day}</div>
                  <IconComp className="w-7 h-7 text-primary" />
                  <div className="text-sm font-bold">{item.temp}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Today's News Archive */}
        <section className="pb-12">
          <h3 className="font-headline-md text-xl md:text-2xl font-bold text-on-surface mb-6">
            Arsip Berita Hari Ini
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {todayNewsArchive.map(news => (
              <Link
                key={news.id}
                href={`/artikel/${news.id}`}
                className="group cursor-pointer bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant hover:shadow-md transition-shadow block"
              >
                <div className="aspect-video overflow-hidden">
                  {/* eslint-disable-next-img-element */}
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="text-red-600 font-bold text-xs uppercase tracking-wider">
                    {news.category}
                  </span>
                  <h4 className="font-headline-md text-lg font-bold text-on-surface mt-2 group-hover:text-primary transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
