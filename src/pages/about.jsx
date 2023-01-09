import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Dillon Morris</title>
        <meta
          name="description"
          content="I’m Dillon Morris. I build apps with React and Typescript."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Helping people through technology is my mission.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am a developer specializing in React, Next and Typescript. I
                also have experience in React Native, having worked on a mobile
                app at{' '}
                <a
                  className="font-bold text-teal-600"
                  href={'https://www.synapsestudios.com'}
                >
                  Synapse Studios
                </a>
                . Most recently, I got to grow at{' '}
                <a
                  className="font-bold text-teal-600"
                  href={'https://formidable.com/'}
                >
                  Formidable
                </a>{' '}
                as a consultant, working on a pair of projects at companies that
                have global reach. I worked on a geo-spatial Data analysis app
                before helping to migrate an E-Commerce site to more current
                technologies. My biggest source of pride however is the frenetic
                {/* eslint-disable-next-line react/no-unescaped-entities */}{' '}
                wagging of this dog's tail after a nice long walk (pictured is
                me and said good boy, Bowie).
              </p>
              <p>
                I also take pride in helping others level up where I can, and{' '}
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm a sponge for the teachings of those willing to fill my own
                gaps. I’m a former customer service professional and have
                ingrained empathy for people. Things move fast so my aim is to
                challenge{' '}
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                my own assumptions and consistently and honestly assess my own
                abilities. I still feel I have a lot to learn and hope that
                feeling never goes away.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/dillonemorris"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/dillonmorrisdev/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/dillonemorris/"
                icon={InstagramIcon}
                className="mt-4"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="mailto:dillonmorris91@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                dillonmorris91@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
