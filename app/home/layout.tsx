
import {Providers} from "../providers";
import Nav from '../components/nav';
import About from '../components/about';
import Experience from '../components/experience';
import Scroll from '../components/scroll';
import Contact from '../components/contact';
import { Metadata } from 'next';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Home - Siva\'s Portfolio',
  description: 'Welcome to the home page of Siva\'s portfolio. Discover who I am and my key highlights.',
  alternates: {
    canonical: 'https://sivasan29.com/home',
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
            {children}
          </div>
          <div id="about" className="section">
            <About />
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
