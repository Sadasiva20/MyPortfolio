

import {Providers} from "../providers";
import Nav from '../components/nav';
import Home from '../components/home';
import Experience from '../components/experience';
import Contact from '../components/contact';
import Scroll from '../components/scroll';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'About - Siva\'s Portfolio',
  description: 'Learn more about Siva, including background, skills, and interests.',
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
            <Home />
          </div>
          <div id="about" className="section">
            {children}
          </div>
          <div id="experience" className="section">
            <Experience/>
          </div>
          <div id="contact" className="section">
            <Contact/>
          </div>
        </div>
      </Providers>
    </body>
  );
}
