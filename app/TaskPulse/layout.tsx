import {Providers} from "../providers";

import { Analytics } from "@vercel/analytics/react"

import { SpeedInsights } from "@vercel/speed-insights/next"



export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" >
      <head>
      <meta charSet="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>TaskPulse</title>
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