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
              I’m Dillon. I build apps with React and Typescript.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Creating quality software is my craft but I've always had
                diverse interests outside of technology. I love sports. As a kid
                I was obsessed with basketball and recently got back into it,
                playing pick-up games at my gym. I’m also a huge golf nerd and
                try to get out and play as much as I can. I’ve always had a
                passion for music and have played the guitar since the 6th grade
                (it doesn’t show). With these and other diverse interests,{' '}
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                I'm able to find common ground with anyone and see things from
                different perspectives.
              </p>
              <p>
                I’m a former customer service professional and have ingrained
                empathy for end users. I started in tech because that’s where I
                felt I could have the biggest impact helping people. I love this
                field because there is something new to learn every single day.
                I try not to make too many assumptions based on previous
                knowledge. You are never too good to go back to the drawing
                board, to see things in a new light.
              </p>
              <p>
                I am a developer specializing in React, Next and Typescript. I
                also have experience in React Native, having worked on a mobile
                app app at a previous company,{' '}
                <a
                  className="font-bold text-teal-600"
                  href={'https://www.synapsestudios.com'}
                >
                  Synapse Studios
                </a>
                . Most recently, I got to wield and grow my skills at{' '}
                <a
                  className="font-bold text-teal-600"
                  href={'https://formidable.com/'}
                >
                  Formidable
                </a>
                , working on a React app and an E-Commerce (next.js) site . I
                love being part of a team and take pride in helping others level
                up while learning from those who can help me fill my own
                knowledge gaps.
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
