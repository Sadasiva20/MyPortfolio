
"use client";

import github from '../Icons/github.svg';
import  linkedin from '../Icons/linkedin.svg';
import picture from '../Images/Picture3.webp'
import  Image from 'next/image';
import type { Metadata } from 'next' 
import Head from 'next/head';
import {Button} from  "@heroui/react";
import { useRouter } from 'next/navigation'


export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to the portfolio of Sadasiva Sankar, a software engineer. Explore selected projects, experience, and technical interests.',
  keywords: ['Introduction', 'Interests', 'Occupation', 'Sadasiva Sankar', 'Software Engineer', 'Projects', 'Portfolio'],
} 



export default function Home() {
        
  const router = useRouter()



    return (
        <div className="flex flex-col min-h-screen bg-primary">
          
        <Head>
          <title>Home | Sadasiva Sankar Portfolio</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Welcome to the portfolio of Sadasiva Sankar, a software engineer. Explore selected projects, experience, and technical interests." />
          <meta name="keywords" content="Siva Sankar, Software Engineer, Portfolio, React, Node.js, Projects, Web Development" />
          <link rel="canonical" href="https://sivasan29.com/home" />
          <meta property="og:title" content="Siva Sankar Portfolio" />
          <meta property="og:description" content="Software engineering projects and experience across web applications, backend systems, and AI-assisted workflows." />
          <meta property="og:image" content="https://sivasan29.com/your-image-path.jpg" />
          <meta property="og:url" content="https://sivasan29.com/home" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
    
           
    
<main className="bg-primary text-white grow flex flex-col items-center justify-center px-4 py-12 font-sans">
    <section className="max-w-2xl text-center mb-8">
    <div className="flex justify-center items-center ">
    <Image src= {picture} alt="Picture of me." />
   </div>
    <h3 className="text-xl sm:text-2xl mt-2 text-center font-semibold tracking-wide font-custom2">
      I build software around clear scope, careful execution, and steady iteration.
    </h3>
        <p className="text-base mb-6 leading-relaxed font-custom2 text-white/80 max-w-xl mx-auto">
        I’m a software engineer working across full-stack applications, backend services, cloud-based systems, and AI-assisted workflows. I focus on turning problems into code that is dependable, readable, and suited to the task.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-lg" type="button" onPress={() => router.push('/experience')}>
       View Selected Projects
    </Button>
    </section>
</main>
<footer className="bg-primary text-white py-6 text-center">
        <p className="flex justify-center items-center space-x-8 mb-0">
          <span className="text-sm">&copy; {new Date().getFullYear()} Sadasiva Sankar</span>
          
         
          <span className="mx-2">
            <a
              href="https://github.com/Sadasiva20?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <Image
                src={github}
                alt="GitHub"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-transform transform hover:scale-125"
              />
            </a>
          </span>

     
          <span className="mx-2">
            <a
              href="https://www.linkedin.com/in/ssank31/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500"
            >
              <Image
                src={linkedin}
                alt="LinkedIn"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-transform transform hover:scale-125"
              />
            </a>
          </span>
        </p>
      </footer>
    </div>
  );
}
