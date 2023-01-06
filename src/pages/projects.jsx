import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoGems from '@/images/logos/gem.svg'
import logoPortfolio2 from '@/images/logos/portfolio2.svg'
import logoTypewise from '@/images/logos/typewise.svg'
import logoPortfolio1 from '@/images/logos/portfolio1.svg'
import logoWaterLog from '@/images/logos/water.svg'

const projects = [
  {
    name: 'Water Log',
    description: 'A simple water intake tracker to help you stay hydrated.',
    link: {
      href: 'https://github.com/dillonemorris/water-log',
      label: 'github.com',
    },
    logo: logoWaterLog,
  },
  {
    name: 'UI Gems',
    description: 'Bringing you the best of the best UI designs on the web. ',
    link: {
      href: 'https://github.com/dillonemorris/ui-gems',
      label: 'github.com',
    },
    logo: logoGems,
  },
  {
    name: 'Portfolio site v2',
    description:
      'A nifty looking portfolio site with cool shapes and fancy page transitions.',
    link: {
      href: 'https://github.com/dillonemorris/portfolio',
      label: 'github.com',
    },
    logo: logoPortfolio2,
  },
  {
    name: 'Portfolio site v1',
    description:
      'A snappy portfolio site I designed and built straight outta scratch.',
    link: {
      href: 'https://happy-mahavira-5cd669.netlify.app/',
      label: 'Visit site',
    },
    logo: logoPortfolio1,
  },
  {
    name: 'Typewise',
    description: 'A curated assortment of the best Google Fonts.',
    link: {
      href: 'https://github.com/dillonemorris/typewise',
      label: 'github.com',
    },
    logo: logoTypewise,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Dillon Morris</title>
        <meta
          name="description"
          content="Things I’ve made outside of work, for fun and for growth"
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made growing my skills outside of work."
        intro="Breakable toys created while	deliberately working in a low-stakes environment where I can fail without real consequence. Sometimes I’m experimenting with a new library or framework or just keeping my coding (nunchuk) skills sharp. Feel free to peek at any of the code, it’s all open-source.
"
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
