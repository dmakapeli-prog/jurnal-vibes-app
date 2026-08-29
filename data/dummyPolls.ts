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
    title: 'Jajanan Hits Alun-Alun',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYOIpyLSsITpuL59O5oL3TRPSQI4Xir7uCYSkdL7R60-ntVxJ1jU8XG3F4bp7egxfcA_u4VxOQt2o7CouWa1vHsb0NiITIpppWy9eGq1T9vVq2taDntyRI7GQZiqtOEsaI39lgYVwd2m_oIiqmSfP2TgJIkMfsRnDZeHBWhC7ThKDltvXRQSMYL6925qNsYB8doclo00YMrpFWxKb7zB5oeE3HxZlXsAWMnwIEGugBzYZg4YHNcQSn7w',
    imageAlt: 'Jajanan Hits Alun-Alun Sukabumi'
  },
  {
    id: 'reel-2',
    title: 'Sunset di Bukit Baros',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBolGvQx2gm_Koh-RXrR_ky7cq0t215_f0xTHR0elVFKd5UiXFAWoL08nvd2s_Ut-o2icuM9D-XlhjNCsruAM7gGP3omS7zbRxX0zyorCZm9CPmwoCKrXCkWICv8WZYI7atDokXStolwjHGOz1kAueKXZVSIEHe_ofd5x2gtUPFj0pd-hVmil7_58kww7oFfrnZwuB8Nx9Yv-_O5vLJWR5frGjJnVzzG9ap_LEJV-fbE3GYDxcUikK6rg',
    imageAlt: 'Sunset di Bukit Baros'
  },
  {
    id: 'reel-3',
    title: 'Skatepark Vibes Weekend',
    thumbnailUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd858F-OiKmC4Dqt_DJo72ci8-H4kMVoTcr4sm1D4hYELRuVJQg14yDHpD8C0CPk3c-FXA-dnjw8WTXyZeYzikPKKYrlcHBL709GGRl0QKtrRJP86lV2CDn3oWzALMeBVrNq6SMnCOrOrAmGo1iSGKy2NJqx90EZ17qi61l7mPLei3JNoJ3uuCPnmMUQp43S7AKhFGDpitFepsacDKdQwEFqxs3yom_u3XP9womgljTZyO8B3ueTRCwQ',
    imageAlt: 'Skatepark Vibes Weekend Sukabumi'
  }
];
