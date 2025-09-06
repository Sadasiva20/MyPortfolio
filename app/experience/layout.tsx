

import {Providers} from "../providers";
import Nav from '../components/nav';
import Home from '../components/home';
import About from '../components/about';
import Scroll from '../components/scroll';
import Contact from '../components/contact';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Experience - Siva\'s Portfolio',
  description: 'Explore Siva\'s professional experience, projects, and achievements.',
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
            <About />
          </div>
          <div id="experience" className="section">
            {children}
          </div>
          <div id="contact" className="section">
            <Contact/>
          </div>
        </div>
      </Providers>
    </body>
  );
}
