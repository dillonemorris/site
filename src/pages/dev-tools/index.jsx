import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllDevTools } from '@/lib/getAllDevTools'

function DevTool({ devTool }) {
  return (
    <Card as="li">
      <Card.Title href={`/dev-tools/${devTool.slug}`}>
        {devTool.title}
      </Card.Title>
      <Card.Description>{devTool.description}</Card.Description>
      <Card.Cta>View tool</Card.Cta>
    </Card>
  )
}

export default function DevToolsIndex({ devTools }) {
  return (
    <>
      <Head>
        <title>Dev Tools - Dillon Morris</title>
        <meta
          name="description"
          content="A collection of developer tools, snippets, and resources to help improve your development workflow."
        />
      </Head>
      <SimpleLayout
        title="Developer Tools & Resources"
        intro="A curated collection of tools, snippets, and resources to enhance your development workflow and boost productivity."
      >
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {devTools.map((devTool) => (
            <DevTool key={devTool.slug} devTool={devTool} />
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      devTools: (await getAllDevTools()).map(({ component, ...meta }) => meta),
    },
  }
}
