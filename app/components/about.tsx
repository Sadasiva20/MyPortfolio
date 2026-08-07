
"use client";

import github from '../Icons/github.svg';
import  linkedin from '../Icons/linkedin.svg';
import Image from 'next/image';
import type { Metadata } from 'next';
import Head from 'next/head';

export const metadata: Metadata = {
  title:'About',
  description: 'Learn more about Sadasiva Sankar, a recent graduate with a master’s degree in Computer Science, a Software Engineer with experience at Up Cancer, and a Coder at Outlier AI. Discover his education, work experience, and hobbies.',
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
                  I’m a software engineer who enjoys building products that are practical, dependable, and easy to evolve. My work spans full-stack applications, REST APIs, cloud-enabled services, and AI-assisted workflows, with a strong focus on turning complex requirements into clear, maintainable solutions.
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
                <p className="text-base text-white mb-6 font-custom2">
                    I previously worked as a <span className="font-bold">Software Engineer</span> at <span className="font-bold">Up Cancer</span>, where I built interfaces and backend services that supported workflow and user-management tools.
                </p>
                <ul className="list-disc list-inside text-base text-white mb-6 font-custom2">
                <li>Developed React-based interfaces and Node.js APIs for user-management and operational workflows.</li>
                <li>Built data-backed services and integrations to support secure, scalable access and coordination.</li>
                <li>Collaborated with cross-functional teams to ship features that improved visibility and reliability.</li>
                </ul>
                <p className="text-base text-white mb-6 font-custom2">

                I also contributed to <span className="font-bold">Oppia</span>, a nonprofit focused on accessible education, where I helped improve web experiences and documentation for a global audience.
                </p>
                <ul className="list-disc list-inside text-base text-white mb-6 font-custom2">
                <li>Implemented frontend and documentation improvements that strengthened usability and contributor support.</li>
                <li>Delivered reliable updates using Python, HTML, JavaScript, and CSS in a collaborative open-source environment.</li>
                </ul>

                <p className="text-base text-white mb-6 font-custom2">

                At <span className="font-bold">Outlier AI</span>, I supported AI training workflows and evaluation practices, gaining hands-on experience with practical machine learning and data quality processes.

                </p>
            </section>

            <section className="max-w-2xl mb-8">
                <h2 className="text-4xl font-bold text-white mb-4 font-custom1">How I Approach Work</h2>
                <p className="text-base text-white mb-6 font-custom2">
                I’m motivated by work that blends thoughtful problem-solving with strong execution. I enjoy understanding the user or business need, shaping a practical solution, and building it in a way that is durable, maintainable, and useful over time.
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
