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
import { CodeBracketIcon, WrenchScrewdriverIcon, ChatBubbleLeftRightIcon, PaintBrushIcon } from '@heroicons/react/24/outline'
import portraitImage from '@/images/photos/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-greptile-green dark:text-zinc-200 dark:hover:text-greptile-green"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-greptile-green" />
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
          content="Empowering people through technology is my mission."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Dillon posing with golden doodle dog"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              My Engineering Philosophy
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 font-mono">
              <p>
                I believe in pragmatic engineering balanced with
                product-thinking. My approach combines technical excellence with
                a deep understanding of user needs and business impact. I&apos;m
                passionate about developer experience and tooling, creating
                workflows and systems that make developers more productive and
                joyful. Above all, I&apos;m passionate about shipping products
                that people actually use, not just building them. Every line of
                code should serve a purpose in creating meaningful user
                experiences.
              </p>

              <div>
                <div className="space-y-12">
                  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <ChatBubbleLeftRightIcon className="h-6 w-6 text-greptile-green" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                          Code Reviews & Collaboration
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                          I view thorough, collaborative code reviews as essential
                          to helping fellow developers grow. My reviews focus on
                          knowledge sharing, best practices, and building stronger
                          teams while maintaining high code quality.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <WrenchScrewdriverIcon className="h-6 w-6 text-emerald-500" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                          Developer Experience & Tooling
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                          I&apos;m passionate about improving developer workflows through
                          thoughtful tooling, strict TypeScript configurations, and
                          systems that catch errors early and make developers more
                          productive.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <PaintBrushIcon className="h-6 w-6 text-purple-500" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                          Beautiful, Usable Interfaces
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                          I design and build interfaces that are both beautiful and
                          highly functional, focusing on user experience and
                          accessibility to create products people love to use.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <CodeBracketIcon className="h-6 w-6 text-cyan-500" />
                      </div>
                      <div>
                        <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                          End-to-End Development
                        </h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 font-mono">
                          From PostgreSQL schemas and API design to React
                          components and deployment pipelines, I handle the
                          complete stack with confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
