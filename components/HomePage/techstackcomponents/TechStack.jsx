'use client';
import React, { useState } from 'react';
import TechStackCard from '@/components/HomePage/techstackcomponents/TechStackCard';

const TechStack = () => {
  const [shift, setShift] = useState(false);
  const webframeworks = [
    {
      id: 1,
      tech: 'Astro',
      image: '/assets/techstack/web/astro.svg',
    },
    {
      id: 2,
      tech: 'Nuxt',
      image: '/assets/techstack/web/nuxt.svg',
    },
    {
      id: 3,
      tech: 'Svelte',
      image: '/assets/techstack/web/swelte.svg',
    },
    {
      id: 4,
      tech: 'NextJS',
      image: '/assets/techstack/web/nextjs.svg',
    },
    {
      id: 5,
      tech: 'Gatsby',
      image: '/assets/techstack/web/gatsby.svg',
    },
    {
      id: 6,
      tech: 'React',
      image: '/assets/techstack/web/react.svg',
    },
  ];

  const mobileFrameworks = [
    {
      id: 1,
      tech: 'Flutter',
      image: '/assets/techstack/mobile/flutter.svg',
    },
    {
      id: 2,
      tech: 'React',
      image: '/assets/techstack/web/react.svg',
    },
  ];

  const cmsBackendFrameworks = [
    {
      id: 1,
      tech: 'Strapi',
      image: '/assets/techstack/cmsBackend/strapi.svg',
    },
    {
      id: 2,
      tech: 'Sanity',
      image: '/assets/techstack/cmsBackend/sanity.svg',
    },
    {
      id: 3,
      tech: 'Dato CMS',
      image: '/assets/techstack/cmsBackend/dato.svg',
    },
    {
      id: 4,
      tech: 'Prismic',
      image: '/assets/techstack/cmsBackend/prismic.svg',
    },
    {
      id: 5,
      tech: 'Directus',
      image: '/assets/techstack/cmsBackend/directus.svg',
    },
    {
      id: 6,
      tech: 'Node JS',
      image: '/assets/techstack/cmsBackend/nodejs.svg',
    },
    {
      id: 7,
      tech: 'Supabase',
      image: '/assets/techstack/cmsBackend/supabase.svg',
    },
    {
      id: 8,
      tech: 'Golang',
      image: '/assets/techstack/cmsBackend/golang.svg',
    },
  ];

  const deploymentFrameworks = [
    {
      id: 1,
      tech: 'Netlify',
      image: '/assets/techstack/deployment/netlify.svg',
    },
    {
      id: 2,
      tech: 'Vercel',
      image: '/assets/techstack/deployment/vercel.svg',
    },
    {
      id: 3,
      tech: 'Digital Ocean',
      image: '/assets/techstack/deployment/digitalocean.svg',
    },
    {
      id: 4,
      tech: 'AWS',
      image: '/assets/techstack/deployment/aws.svg',
    },
    {
      id: 5,
      tech: 'Firebase',
      image: '/assets/techstack/deployment/firebase.svg',
    },
  ];

  return (
    <div className="techStack w-full py-16 px-4 md:px-10 flex flex-col gap-5 md:gap-10 items-center justify-center">
      <div className="w-full max-w-screen-xl text-center flex flex-col gap-5 md:gap-10 items-center justify-center">
        <h1 className="lg:text-4xl text-3xl md:text-4xl font-bold text-white">
          How we <br className="block lg:hidden" /> develop for
        </h1>
        <div className="rounded-xl border w-64 h-12 border-gray-400 flex items-center justify-center">
          <div
            onClick={() => {
              setShift(!shift);
            }}
            className={`flex items-center justify-center font-semibold cursor-pointer text-md w-[50%] h-full rounded-l-xl ${
              shift ? 'bg-white text-black' : 'text-gray-300 '
            } `}
          >
            Web
          </div>
          <div
            onClick={() => {
              setShift(!shift);
            }}
            className={`flex items-center justify-center font-semibold cursor-pointer text-md w-[50%] h-full rounded-r-xl ${
              shift ? 'text-gray-300 ' : 'bg-white text-black'
            } `}
          >
            Mobile
          </div>
        </div>
      </div>
      <div className="techstackComponents max-w-screen-xl w-full flex flex-col items-center justify-center lg:gap-12 gap-8">
        {shift ? (
          <TechStackCard
            framework={webframeworks}
            title={'FRONTEND FRAMEWORKS'}
          />
        ) : (
          <TechStackCard
            framework={mobileFrameworks}
            title={'MOBILE FRAMEWORKS'}
          />
        )}
        <TechStackCard
          framework={cmsBackendFrameworks}
          title={'HEADLESS CMS AND BACKEND FRAMEWORKS'}
        />
        <TechStackCard
          framework={deploymentFrameworks}
          title={'DEPLOYMENT FRAMEWORKS'}
        />
      </div>
    </div>
  );
};

export default TechStack;
