"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";
import github from '../Icons/github.svg';
import UpCancer from '../Images/UpCancer.webp';
import linkedin from '../Icons/linkedin.svg';
import NexusHub from'../Images/NexusHub.webp';
import Oppia from '../Images/oppia.webp';
import SAS from '../Images/SAS.webp'; 
import Image from 'next/image';
import Head from 'next/head';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Experience - Siva Sankar',
  description: 'A comprehensive showcase of Sadasiva Sankar\'s projects, demonstrating both frontend and backend development solutions using various technologies such as React, Node.js, JavaScript, Python, and Java.',
  keywords: ['Projects', 'Siva Sankar', 'Frontend', 'Backend', 'React', 'Node.js', 'JavaScript', 'Python', 'Java' , 'GitHub'],
}


const cardData = [
  { id: 1, src: UpCancer, title: "Up Cancer", details: "Technologies: React, node.js , Dynamodb, JavaScript", description: "A comprehensive showcase of my projects, demonstrating both frontend and backend development solutions."
   , link: "https://github.com/Sadasiva20/Up-Cancer-Workspace", linktitle: "Github link" },
  { id: 2, src: Oppia, title: "Oppia", details: "Technologies: Python, CSS, HTML, JavaScript", description: "A showcase of my projects, highlighting front-end and back-end development along with relevant documentation."
  ,link: "https://github.com/Sadasiva20/oppia/tree/develop", linktitle: "Github link" },
  { id: 3,src:  SAS, title: "SAS Titanic Supervised Learning", details: "Technologies: SAS, .sas7bdat, PDF, HTML, SAS Viya", description: "A supervised learning project using the Titanic dataset in SAS. Includes data preparation, model building (logistic regression, decision trees), evaluation, and reporting. Features reproducible code, datasets, workflow outputs, and analysis reports.", link: "https://github.com/Sadasiva20/SAS", linktitle: "GitHub link" },
{
  id: 4,
  src: NexusHub, // your thumbnail image variable
  title: "NexusHub",
  details: "Technologies: Next.js, React, Tailwind CSS, Node.js, TypeScript, Supabase, Vercel",
  description: "A collaborative schema editor with real-time editing, AI-powered suggestions, versioning, and undo/redo functionality. Designed to help teams manage and visualize schemas efficiently, demonstrating full-stack development and complex problem-solving.",
  link: "https://github.com/Sadasiva20/NexusHub",  
  linktitle: "GitHub link"
}
]; 


export default function Experience() {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-primary overflow-hidden">
    <Head>
      <title>Experience | Sadasiva Sankar Portfolio</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="A comprehensive showcase of Siva Sankar's projects, demonstrating both frontend and backend development solutions using various technologies such as React, Node.js, JavaScript, Python, and Java." />
      <meta name="keywords" content="Projects, Sadasiva Sankar, Frontend, Backend, React, Node.js, JavaScript, Python, Java, GitHub" />
      <link rel="canonical" href="https://sivasan29.com/experience" />
      <meta property="og:title" content="Experience | Siva Sankar Portfolio" />
      <meta property="og:description" content="A comprehensive showcase of Siva Sankar's projects, demonstrating both frontend and backend development solutions." />
      <meta property="og:image" content="https://sivasan29.com/your-image-path.jpg" />
      <meta property="og:url" content="https://sivasan29.com/experience" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
     <h1 className="text-3xl md:text-4xl font-bold text-white text-center font-custom2">Projects</h1>
    <main className="grow flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cardData.map(card => (
          <Card
            key={card.id}
            onClick={() => setSelectedCardId(card.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedCardId(card.id);
              }
            }}
            tabIndex={0}
            role="button"
            className={`w-full max-w-[520px] border bg-contact/90 shadow-lg transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
              selectedCardId === card.id
                ? 'border-blue-400/60 shadow-blue-700/50 ring-2 ring-blue-500/30'
                : 'border-white/10 shadow-blue-950/20'
            }`}
          >
            <Card.Content className="space-y-4 p-5">
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  alt={card.title}
                  src={card.src}
                  width={520}
                  height={260}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-3 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-accent/75">Project</p>
                <h3 className="text-xl font-bold font-custom2">{card.title}</h3>
                <p className="text-sm text-white/70">{card.details}</p>
                <p className="text-sm leading-relaxed text-white/75">{card.description}</p>
              </div>
            </Card.Content>

            <Card.Footer className="flex justify-end gap-3 px-5 pb-5 pt-0">
              <Button
                className="rounded-full bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
                onPress={() => window.open(card.link, "_blank")}
              >
                {card.linktitle}
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </main>
  
    <footer className="bg-primary text-white py-6 text-center">
      <p className="flex justify-center items-center space-x-8 mb-0">
        <span className="text-lg font-custom2">&copy; {new Date().getFullYear()} Sadasiva Sankar</span>
    
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
                  width={48}
                  height={48}
                  loading="lazy"
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
                  width={48}
                  height={48}
                  loading="lazy"
                />
              </a>
            </span>
          </p>
    </footer>
  </div>
    );
  }
