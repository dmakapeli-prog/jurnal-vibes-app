import { Poll, Reel } from '@/types';

export const DUMMY_POLL: Poll = {
  id: 'poll-1',
  question: 'Menurut kamu, fasilitas publik mana yang paling perlu diperbaiki di Sukabumi tahun ini?',
  options: [
    { id: 'opt-1', text: 'Taman Kota', votes: 142 },
    { id: 'opt-2', text: 'Transportasi Umum', votes: 310 },
    { id: 'opt-3', text: 'Jalur Pedestrian', votes: 215 }
  ]
};

export const DUMMY_REELS: Reel[] = [
  {
    id: 'reel-1',
    title: 'Jajanan Hits & Street Food Alun-Alun',
    category: 'Kuliner',
    creator: '@kuliner_smi',
    location: 'Alun-Alun Sukabumi',
    viewsCount: '18.4k',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Jajanan Hits Alun-Alun Sukabumi'
  },
  {
    id: 'reel-2',
    title: 'Golden Sunset Aesthetic Bukit Baros',
    category: 'Wisata',
    creator: '@exploresukabumi',
    location: 'Bukit Baros',
    viewsCount: '24.1k',
    thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Sunset di Bukit Baros'
  },
  {
    id: 'reel-3',
    title: 'Skatepark Vibes & Youth Culture Weekend',
    category: 'Lifestyle',
    creator: '@skate_smi',
    location: 'Lapang Merdeka',
    viewsCount: '12.9k',
    thumbnailUrl: 'https://images.unsplash.com/photo-1520045892732-304bc3ac5d8e?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Skatepark Vibes Weekend Sukabumi'
  },
  {
    id: 'reel-4',
    title: 'Hidden Gem Coffee Shop Cikole Vintage',
    category: 'Kuliner',
    creator: '@coffeetime_smi',
    location: 'Cikole, Sukabumi',
    viewsCount: '9.8k',
    thumbnailUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Coffee Shop Hidden Gem'
  },
  {
    id: 'reel-5',
    title: 'Keindahan Alam Curug Cikaso Surade',
    category: 'Wisata',
    creator: '@nature_sukabumi',
    location: 'Surade, Sukabumi',
    viewsCount: '31.5k',
    thumbnailUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Curug Cikaso Sukabumi'
  },
  {
    id: 'reel-6',
    title: 'Sukabumi Night Run Community Challenge',
    category: 'Sport',
    creator: '@smi_runners',
    location: 'Kota Sukabumi',
    viewsCount: '15.2k',
    thumbnailUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=700&q=80',
    imageAlt: 'Night Run Sukabumi'
  }
];

