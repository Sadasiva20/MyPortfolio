
import { Metadata } from 'next';
// Analytics and SpeedInsights are provided by the root layout; remove duplicates here

export const metadata: Metadata = {
  title: 'TaskPulse - Siva\'s Portfolio',
  description: 'Explore Siva\'s TaskPulse project, showcasing task management and productivity features.',
  keywords: ['taskpulse', 'tasks', 'productivity', 'Siva', 'portfolio'],
  alternates: {
    canonical: 'https://sivasan29.com/TaskPulse',
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}
