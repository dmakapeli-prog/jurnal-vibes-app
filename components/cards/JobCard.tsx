'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Bookmark, Building2, MapPin, Banknote } from 'lucide-react';
import { Job } from '@/types';

interface JobCardProps {
  job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [isSaved, setIsSaved] = useState<boolean>(job.isSaved || false);

  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-surface border border-outline-variant rounded-xl p-6 relative card-hover transition-all duration-300 flex flex-col gap-4">
      <button
        onClick={toggleBookmark}
        className="absolute top-4 right-4 text-tertiary hover:text-primary transition-colors"
      >
        <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-current text-primary' : ''}`} />
      </button>

      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0">
          <Building2 className="w-8 h-8 text-primary" />
        </div>
        <div className="flex-1">
          <Link href={`/loker/${job.id}`}>
            <h3 className="text-headline-md text-lg font-bold text-on-background hover:text-primary transition-colors leading-tight mb-1">
              {job.title}
            </h3>
          </Link>
          <p className="text-body-md font-medium text-primary">{job.company}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm text-on-surface-variant">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          {job.location}
        </div>
        <div className="flex items-center gap-2">
          <Banknote className="w-4 h-4 text-primary" />
          {job.salaryRange}
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-outline-variant">
        <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-bold uppercase tracking-wider">
          {job.type}
        </span>
      </div>
    </div>
  );
};
