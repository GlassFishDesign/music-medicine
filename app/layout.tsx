import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Music as Medicine',
  description:
    'Create a microdosing playlist, Feeling Map, listening ritual, and rhythm for returning to what matters.',
  openGraph: {
    title: 'Music as Medicine',
    description: 'Build a playlist that helps you remember what matters.',
    images: [
      {
        url: '/og.png',
        width: 1728,
        height: 910,
        alt: 'Music as Medicine — Build a playlist that helps you remember what matters.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Music as Medicine',
    description: 'Build a playlist that helps you remember what matters.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
