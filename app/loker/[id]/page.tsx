'use client';

import React, { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Banknote, Bookmark } from 'lucide-react';
import { LeftSidebar } from '@/components/layout/LeftSidebar';
import { DUMMY_JOBS } from '@/data/dummyJobs';
import { DUMMY_ARTICLES } from '@/data/dummyArticles';

interface JobDetailPageProps {
  params: Promise<{ id: string }>;
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const { id } = use(params);

  const job = DUMMY_JOBS.find(j => j.id === id) || DUMMY_JOBS[0];

  return (
    <div className="flex flex-1 mx-auto max-w-container-max w-full px-margin-mobile md:px-margin-desktop gap-gutter py-stack-lg">
      <LeftSidebar articles={DUMMY_ARTICLES} />

      <main className="flex-1 flex flex-col min-w-0">
        <div className="flex flex-col gap-stack-lg">
          {/* Back Button */}
          <Link
            href="/loker"
            className="flex items-center gap-2 text-primary font-button font-semibold hover:underline group text-sm"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Kembali ke Daftar Loker
          </Link>

          {/* Job Header */}
          <header className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl md:text-5xl font-bold font-headline-xl text-on-background">
                {job.title}
              </h1>
              <p className="text-xl md:text-2xl font-bold text-primary">{job.company}</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-on-surface-variant text-body-md text-sm md:text-base">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {job.location}
              </div>
              <div className="flex items-center gap-2">
                <Banknote className="w-5 h-5 text-primary" />
                {job.salaryRange}
              </div>
              <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface-variant text-xs font-bold uppercase tracking-wider">
                {job.type}
              </span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
            {/* Main Content Column */}
            <div className="lg:col-span-2 flex flex-col gap-stack-lg">
              <section>
                <h2 className="text-2xl font-bold text-on-background mb-4">
                  Deskripsi Pekerjaan
                </h2>
                <div className="text-body-lg text-on-surface-variant flex flex-col gap-4 leading-relaxed">
                  {job.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-background mb-4">
                  Persyaratan / Kualifikasi
                </h2>
                <ul className="list-disc pl-5 text-body-lg text-on-surface-variant flex flex-col gap-2 leading-relaxed">
                  {job.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-on-background mb-4">
                  Fasilitas & Benefit
                </h2>
                <ul className="list-disc pl-5 text-body-lg text-on-surface-variant flex flex-col gap-2 leading-relaxed">
                  {job.benefits.map((ben, idx) => (
                    <li key={idx}>{ben}</li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Sidebar Info Box */}
            <div className="lg:col-span-1">
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6 flex flex-col gap-6 sticky top-24">
                <div>
                  <h3 className="text-xl font-bold text-on-background mb-3">Cara Melamar</h3>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Kirimkan CV dan Portofolio terbaru Anda ke email: <br />
                    <span className="font-bold text-primary block my-1">{job.applyEmail}</span>
                    dengan subjek{' '}
                    <span className="font-mono bg-surface-container-high px-1 rounded">
                      [Loker-{job.title.substring(0, 2)}] Nama Anda
                    </span>
                    .
                  </p>
                </div>
                <button
                  onClick={() => alert('Lowongan berhasil disimpan!')}
                  className="w-full flex items-center justify-center gap-2 bg-transparent border-[1.5px] border-primary text-primary hover:bg-primary hover:text-on-primary px-6 py-3 rounded-full font-button font-semibold text-sm transition-all duration-200 cursor-pointer"
                >
                  <Bookmark className="w-5 h-5" />
                  Simpan Lowongan
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
