
import "./styles/globals.css";
import {Providers} from "./providers";
import { Metadata } from 'next';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Siva\'s portfolio website showcasing projects, experience, and contact information.',
  keywords: ['portfolio', 'Siva', 'developer', 'projects', 'experience'],
  authors: [{ name: 'Siva' }],
  alternates: {
    canonical: 'https://sivasan29.com',
  },
  openGraph: {
    title: 'Siva\'s Portfolio',
    description: 'Explore Siva\'s portfolio featuring innovative projects and professional experience.',
    url: 'https://sivasan29.com',
    siteName: 'Siva\'s Portfolio',
    images: [
      {
        url: 'https://sivasan29.com/og-image.jpg',
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
    images: ['https://sivasan29.com/twitter-image.jpg'],
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
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://sivasan29.com/#person",
        "name": "Siva",
        "alternateName": "Sadasiva",
        "description": "Full-stack developer and software engineer with expertise in modern web technologies",
        "url": "https://sivasan29.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://sivasan29.com/Images/pic.jpeg",
          "width": 400,
          "height": 400
        },
        "sameAs": [
          "https://github.com/Sadasiva20",
          "https://www.linkedin.com/in/ssank31"
        ],
        "knowsAbout": [
          "Full-Stack Development",
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
          "JavaScript",
          "Web Development",
          "Software Engineering"
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Software Developer",
          "occupationLocation": {
            "@type": "Country",
            "name": "India"
          }
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://sivasan29.com/#website",
        "url": "https://sivasan29.com",
        "name": "Siva's Portfolio",
        "description": "Modern portfolio website showcasing full-stack development expertise with cutting-edge technologies",
        "publisher": {
          "@id": "https://sivasan29.com/#person"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://sivasan29.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://sivasan29.com/#webpage",
        "url": "https://sivasan29.com",
        "name": "Siva's Portfolio - Full-Stack Developer",
        "isPartOf": {
          "@id": "https://sivasan29.com/#website"
        },
        "about": {
          "@id": "https://sivasan29.com/#person"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://sivasan29.com/Images/pic.jpeg"
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-01"
      }
    ]
  };

  return (
    <html lang="en" className='dark'>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
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
