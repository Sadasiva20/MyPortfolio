
import { Metadata } from 'next';
// Analytics and SpeedInsights are provided by the root layout; remove duplicates here

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
    <>
      {children}
    </>
  );
}
