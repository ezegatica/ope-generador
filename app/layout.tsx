import type { Metadata } from 'next';
import { Tinos } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const tinos = Tinos({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Generador de Comunicados de Prensa',
  description:
    'Genera tus propios comunicados de prensa de la oficina del Presidente Electo de la Republica Argentina a forma de meme.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={tinos.className}>{children}</body>
      <Analytics />
    </html>
  );
}
