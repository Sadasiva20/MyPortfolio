"use client";

import { Card, CardBody,  CardFooter, Button } from "@heroui/react";
import github from '../Icons/github.svg';
import UpCancer from '../Images/UpCancer.webp';
import linkedin from '../Icons/linkedin.svg';
import Jpass from '../Images/Jpass.webp';
import NGame from'../Images/NGame.webp';
import Oppia from '../Images/oppia.webp';
import SAS from '../Images/SAS.webp'; 
import Image from 'next/image';
import Head from 'next/head';

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Experience - Siva Sankar',
  description: 'A comprehensive showcase of Siva Sankar\'s projects, demonstrating both frontend and backend development solutions using various technologies such as React, Node.js, JavaScript, Python, and Java.',
  keywords: ['Projects', 'Siva Sankar', 'Frontend', 'Backend', 'React', 'Node.js', 'JavaScript', 'Python', 'Java' , 'GitHub'],
}


const cardData = [
  { id: 1, src: UpCancer, title: "Up Cancer", details: "Technologies: React, node.js , Dynamodb, JavaScript", description: "A comprehensive showcase of my projects, demonstrating both frontend and backend development solutions."
   , link: "https://github.com/Sadasiva20/Up-Cancer-Workspace", linktitle: "Github link" },
  { id: 2, src: Oppia, title: "Oppia", details: "Technologies: Python, CSS, HTML, JavaScript", description: "A showcase of my projects, highlighting front-end and back-end development along with relevant documentation."
  ,link: "https://github.com/Sadasiva20/oppia/tree/develop", linktitle: "Github link" },
  { id: 3,src: SAS , title: "SAS Titanic Supervised Learning", details: "Technologies: SAS, .sas7bdat, PDF, HTML", description: "A supervised learning project using the Titanic dataset in SAS. Includes data preparation, model building (logistic regression, decision trees), evaluation, and reporting. Features reproducible code, datasets, workflow outputs, and analysis reports.", link: "https://github.com/Sadasiva20/SAS", linktitle: "GitHub link" },
  { id: 4, src: Jpass, title: "JPass", details: "Technologies: Java ",description: "A Password Manager app that allows users to generate secure passwords by defining their length."
  , link: "https://github.com/Sadasiva20/PasswordGenerator", linktitle: "Github link" },
  { id: 5, src: NGame, title: "GuessIt!", details: "Technologies: Java" ,description: 
  "A Java-based Number Guessing game where users try to guess a number across four escalating difficulty levels." 
  , link: "https://github.com/Sadasiva20/NGuess", linktitle: "Github link" }
  ];


export default function Experience() {
 

  return (
    <div className="flex flex-col min-h-screen bg-primary overflow-hidden">
    <Head>
      <title>Experience | Siva Sankar Portfolio</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="A comprehensive showcase of Siva Sankar's projects, demonstrating both frontend and backend development solutions using various technologies such as React, Node.js, JavaScript, Python, and Java." />
      <meta name="keywords" content="Projects, Siva Sankar, Frontend, Backend, React, Node.js, JavaScript, Python, Java, GitHub" />
      <link rel="canonical" href="https://sivasan29.com/experience" />
      <meta property="og:title" content="Experience | Siva Sankar Portfolio" />
      <meta property="og:description" content="A comprehensive showcase of Siva Sankar's projects, demonstrating both frontend and backend development solutions." />
      <meta property="og:image" content="https://sivasan29.com/your-image-path.jpg" />
      <meta property="og:url" content="https://sivasan29.com/experience" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
     <h1 className="text-3xl md:text-4xl font-bold text-white text-center font-custom2">Experience</h1>
    <main className="grow flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {cardData.map(card => (
          <Card key={card.id} className="w-full max-w-[520px] border-none transition-transform transform hover:scale-105 relative bg-transparent">
            
            <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap bg-transparent">
              <Image
                alt={card.title}
                className="h-auto w-full flex-none object-cover object-top md:w-48"
                src={card.src}
              />
  
              <div className="px-4 py-5 bg-transparent">
                <h3 className="text-lg font-custom2 text-white">{card.title}</h3>
                <div className="flex flex-col gap-1 pt-2 text-sm text-default-400 font-custom2">
                  <p>{card.details}</p>
                  <p>{card.description}</p>
                </div>
              </div>
            </CardBody>
  
            <CardFooter className="absolute bottom-0 right-0 w-auto flex justify-end p-4 bg-transparent z-10">
              <Button
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
                onPress={() => window.open(card.link, "_blank")}
                className="text-sm text-white bg-blue-600 opacity-100 hover:bg-blue-700"
              >
                {card.linktitle}
              </Button>
            </CardFooter>
          </Card>
        ))}
     </div>
      
    </main>
  
    <footer className="bg-primary text-white py-6 text-center">
      <p className="flex justify-center items-center space-x-8 mb-0">
        <span className="text-lg font-custom2">&copy; {new Date().getFullYear()} Siva Sankar</span>
    
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
