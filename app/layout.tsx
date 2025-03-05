
import "./globals.css";
import {Providers} from "./providers";

import { Analytics } from "@vercel/analytics/react"





export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <meta charSet="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>Home</title>
       
      <body>
        <Analytics/>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}