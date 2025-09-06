

import {Providers} from "../providers";
import Nav from '../components/nav';
import Home from '../components/home';
import About from '../components/about';
import Experience from '../components/experience';
import Scroll from '../components/scroll';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Siva. Find contact information and ways to connect.',
  alternates: {
    canonical: 'https://sivasan29.com/contact',
  },
};

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <body>
      <SpeedInsights/>
      <Analytics/>
      <Providers>
        <div>
          <Nav/>
          <Scroll/>
          <div id="home" className="section">
            <Home/>
          </div>
          <div id="about" className="section">
            <About />
          </div>
          <div id="experience" className="section">
            <Experience/>
          </div>
          <div id="contact" className="section">
            {children}
          </div>
        </div>
      </Providers>
    </body>
  );
}
