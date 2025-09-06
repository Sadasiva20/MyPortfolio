
import "./styles/globals.css";
import {Providers} from "./providers";
import { Metadata } from 'next';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Siva\'s Portfolio',
  description: 'Welcome to Siva\'s portfolio website showcasing projects, experience, and contact information.',
  keywords: ['portfolio', 'Siva', 'developer', 'projects', 'experience'],
  authors: [{ name: 'Siva' }],
  openGraph: {
    title: 'Siva\'s Portfolio',
    description: 'Explore Siva\'s portfolio featuring innovative projects and professional experience.',
    url: 'https://your-domain.com',
    siteName: 'Siva\'s Portfolio',
    images: [
      {
        url: 'https://your-domain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Siva\'s Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siva\'s Portfolio',
    description: 'Explore Siva\'s portfolio featuring innovative projects and professional experience.',
    images: ['https://your-domain.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
        <SpeedInsights/>
        <Analytics/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
