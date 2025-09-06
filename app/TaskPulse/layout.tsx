import {Providers} from "../providers";
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'TaskPulse - Siva\'s Portfolio',
  description: 'Explore Siva\'s TaskPulse project, showcasing task management and productivity features.',
  keywords: ['taskpulse', 'tasks', 'productivity', 'Siva', 'portfolio'],
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
