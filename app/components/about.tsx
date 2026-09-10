
"use client";

import github from '../Icons/github.svg';
import  linkedin from '../Icons/linkedin.svg';
import Image from 'next/image';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title:'About',
  description: 'Learn more about Sadasiva Sankar’s software engineering background, education, and experience building web applications, APIs, and AI-assisted workflows.',
  keywords: ['Siva Sankar', 'Software Engineer', 'Computer Science', 'Up Cancer', 'Outlier AI', 'Education', 'Work Experience', 'Hobbies']
}


export default function About() {
    return (
        <div className="flex flex-col min-h-screen bg-primary  ">
        <Head>
          <title>About | Sadasiva Sankar Portfolio</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Learn more about Siva Sankar, a recent graduate with a master’s degree in Computer Science, a Software Engineer with experience at Up Cancer, and a Coder at Outlier AI. Discover his education, work experience, and hobbies." />
          <meta name="keywords" content="Sadasiva Sankar, Software Engineer, Computer Science, Up Cancer, Outlier AI, Education, Work Experience, Hobbies" />
          <link rel="canonical" href="https://sivasan29.com/about" />
          <meta property="og:title" content="About | Sadasiva Sankar Portfolio" />
          <meta property="og:description" content="Learn more about Siva Sankar, a recent graduate with a master’s degree in Computer Science, a Software Engineer with experience at Up Cancer, and a Coder at Outlier AI." />
          <meta property="og:image" content="https://sivasan29.com/your-image-path.jpg" />
          <meta property="og:url" content="https://sivasan29.com/about" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <h3 className="text-3xl md:text-4xl text-white font-bold text-center font-custom2">About</h3>

        <main className="grow flex flex-col items-center justify-center px-4 py-8">

            <section className="max-w-2xl mb-8">
                <h3 className="text-4xl font-bold text-white mb-4 font-custom2">Software Engineering Profile</h3>
                <p className="text-base text-white mb-6 font-custom2">
                  I’m a software engineer interested in building systems that are dependable, easy to extend, and straightforward to work with. My work spans full-stack applications, REST APIs, cloud-based services, and AI-assisted workflows, with attention to how code holds up as needs evolve.
                </p>
            </section>


            <section className="max-w-2xl mb-8">

                <h3 className="text-4xl font-bold text-white mb-4 font-custom2">Background</h3>
                <p className="text-base text-white mb-6 font-custom2">
                I hold a Master&apos;s degree in Computer Science from the University of Illinois Springfield and a Bachelor&apos;s degree in Information Technology from the University of North Carolina Wilmington. I am currently pursuing an MBA in Business Intelligence and Data Analytics at Fayetteville State University, which strengthens my ability to connect technical execution with business outcomes.
                </p>
            </section>

            <section className="max-w-2xl mb-8">
                <h3 className="text-4xl font-bold text-white mb-4 font-custom2">Work Experience</h3>
              <h4 className="text-2xl font-bold text-white mb-2 font-custom2">Software Engineer — Up Cancer</h4>
              <p className="text-base text-white mb-4 font-custom2">
                Built and improved full-stack application features spanning React frontends, Node.js backend services, REST APIs, and AWS infrastructure.
              </p>
              <ul className="list-disc list-inside text-base text-white mb-8 font-custom2">
              <li>Developed React interfaces and Node.js REST APIs supporting user-management and operational workflows.</li>
              <li>Optimized Node.js and AWS REST APIs, improving backend performance by approximately 40%.</li>
              <li>Built data-backed services and integrations to support reliable access to application and operational data.</li>
              <li>Collaborated with cross-functional stakeholders to deliver and refine features based on product and workflow requirements.</li>
              </ul>

              <h4 className="text-2xl font-bold text-white mb-2 font-custom2">Open Source Contributor — Oppia</h4>
              <p className="text-base text-white mb-4 font-custom2">
                Contributed to an open-source education platform focused on improving web experiences and supporting contributors.
              </p>
              <ul className="list-disc list-inside text-base text-white mb-8 font-custom2">
              <li>Implemented frontend improvements using JavaScript, HTML, and CSS to improve usability across the platform.</li>
              <li>Contributed documentation and contributor-facing improvements that made project workflows easier to understand and maintain.</li>
              <li>Worked within an existing Python-based codebase and collaborative open-source development workflow.</li>
              </ul>

              <h4 className="text-2xl font-bold text-white mb-2 font-custom2">AI Training / Evaluation — Outlier AI</h4>
              <p className="text-base text-white mb-4 font-custom2">
                Supported AI training and evaluation workflows focused on improving model quality and data reliability.
              </p>
              <ul className="list-disc list-inside text-base text-white font-custom2">
              <li>Evaluated AI-generated outputs against defined quality and technical criteria to identify errors and inconsistencies.</li>
              <li>Applied structured evaluation processes to improve data quality and provide useful feedback for AI model development.</li>
              <li>Developed practical experience with AI evaluation, data quality, and model-performance assessment.</li>
              </ul>
            </section>

            <section className="max-w-2xl mb-8">
                <h2 className="text-4xl font-bold text-white mb-4 font-custom1">How I Approach Work</h2>
                <p className="text-base text-white mb-6 font-custom2">
                I’m motivated by work that starts with a clear problem and leads to a careful build. I tend to break problems into manageable pieces, shape solutions around the constraints at hand, and refine them as the work progresses.
                </p>
            </section>
        </main>


        <footer className="bg-primary text-white py-6 text-center">
        <p className="flex justify-center items-center space-x-8 mb-0">
          <span className="text-sm">&copy; {new Date().getFullYear()} Sadasiva Sankar </span>


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
