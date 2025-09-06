import {Providers} from "../providers";
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'TaskList - Siva\'s Portfolio',
  description: 'Check out Siva\'s TaskList project, a tool for managing tasks efficiently.',
  keywords: ['tasklist', 'tasks', 'productivity', 'Siva', 'portfolio'],
  alternates: {
    canonical: 'https://sivasan29.com/tasklist',
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <body>
      <SpeedInsights/>
      <Analytics/>
      <Providers>
        {children}
      </Providers>
    </body>
  );
}
