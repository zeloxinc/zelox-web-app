import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zelox',
  description: 'We build software that runs your properties and your pipeline.',
  openGraph: {
    title: 'Zelox',
    description: 'We build software that runs your properties and your pipeline.',
    url: 'https://zelox.space',
    siteName: 'Zelox',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zelox preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zelox',
    description: 'We build software that runs your properties and your pipeline.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      '/favicon.ico',
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: ['/apple-touch-icon.png'],
    other: [
      {
        rel: 'icon',
        url: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
}


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black">{children}</body>
    </html>
  );
}
