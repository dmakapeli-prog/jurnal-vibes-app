import type { Metadata } from 'next';
import { Inter, Literata } from 'next/font/google';
import './globals.css';
import { HeaderNav } from '@/components/layout/HeaderNav';
import { Footer } from '@/components/layout/Footer';
import { BottomNav } from '@/components/layout/BottomNav';
import { ChatbotButton } from '@/components/ui/ChatbotButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jurnal Vibes - Portal Berita & Lifestyle Sukabumi',
  description: 'Portal berita, lifestyle, loker, otomotif, tech, dan informasi harian Sukabumi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${literata.variable} light`}>
      <body className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased relative overflow-x-hidden">
        <HeaderNav />
        {children}
        <Footer />
        <BottomNav />
        <ChatbotButton />
      </body>
    </html>
  );
}
