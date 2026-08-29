'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { JobCard } from '@/components/cards/JobCard';
import { DUMMY_JOBS } from '@/data/dummyJobs';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';

export default function LokerPage() {
  const [activeType, setActiveType] = useState<string>('Semua Loker');
  const [selectedRegion, setSelectedRegion] = useState<string>('Semua Wilayah');
  const [isRegionOpen, setIsRegionOpen] = useState<boolean>(false);

  const types = ['Semua Loker', 'Full-Time', 'Part-Time', 'Freelance', 'Remote', 'Magang'];
  const regions = ['Semua Wilayah', 'Sukabumi Kota', 'Cikole', 'Cibadak', 'Pelabuhanratu'];

  const filteredJobs = DUMMY_JOBS.filter(job => {
    const matchType = activeType === 'Semua Loker' || job.type === activeType;
    const matchRegion = selectedRegion === 'Semua Wilayah' || job.region === selectedRegion;
    return matchType && matchRegion;
  });

  return (
    <div className="flex flex-1 mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop gap-gutter py-stack-lg">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="flex-1 flex flex-col min-w-0">
        <header className="mb-stack-lg">
          <h1 className="text-headline-xl text-3xl md:text-5xl font-headline-xl text-on-background font-bold mb-2">
            Lowongan Kerja Sukabumi
          </h1>
          <p className="text-body-lg font-body-lg text-on-surface-variant text-base md:text-lg">
            Temukan peluang karir terbaik di Sukabumi dan sekitarnya.
          </p>
        </header>

        {/* Filter Chips & Region Dropdown */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-stack-lg w-full">
          <div className="flex flex-wrap gap-2">
            {types.map((type, idx) => (
              <button
                key={idx}
                onClick={() => setActiveType(type)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  activeType === type
                    ? 'bg-primary text-on-primary shadow-sm hover:scale-[1.02]'
                    : 'bg-surface-container-high text-on-surface hover:bg-surface-variant border border-outline-variant'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Region Dropdown */}
          <div className="relative min-w-[180px] w-full md:w-auto">
            <button
              type="button"
              onClick={() => setIsRegionOpen(!isRegionOpen)}
              className="w-full flex items-center justify-between bg-surface border border-outline-variant rounded-lg px-4 py-2 text-sm font-bold text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer transition-all duration-200 hover:border-primary"
            >
              <span>{selectedRegion}</span>
              <ChevronDown
                className={`w-5 h-5 text-on-surface-variant transition-transform duration-300 ${
                  isRegionOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isRegionOpen && (
              <div className="absolute z-20 w-full mt-2 bg-surface border border-outline-variant rounded-lg shadow-lg origin-top-right transform transition-all duration-200">
                <ul className="py-2">
                  {regions.map((reg, idx) => (
                    <li
                      key={idx}
                      onClick={() => {
                        setSelectedRegion(reg);
                        setIsRegionOpen(false);
                      }}
                      className="px-4 py-2 text-sm font-bold text-on-surface hover:bg-surface-variant hover:text-primary cursor-pointer transition-colors"
                    >
                      {reg}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter mb-stack-lg">
          {filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-4 pb-12">
          <button className="bg-transparent border-[1.5px] border-primary text-primary hover:bg-primary hover:text-on-primary px-8 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02] cursor-pointer">
            Muat Lebih Banyak
          </button>
        </div>
      </main>
    </div>
  );
}
