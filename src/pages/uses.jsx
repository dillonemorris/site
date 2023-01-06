import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Dillon Morris</title>
        <meta
          name="description"
          content="Software tools and gadgets I use, and other things that help me code."
        />
      </Head>
      <SimpleLayout
        title="Software tools and gadgets I use, and other things that help me code."
        intro="I wanted to create this list of things I use in case someone asks what my setup is like (still waiting),
         and for the sheer joy of sharing (bragging about) what tools I fancy. Here’s an up-to-date list of the curious things I use and recommend."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1 Pro, 32GB RAM (14-inch, 2021)">
              The specs are wasted on me as I’m not much of a gear head but this
              thing never shows signs of struggle. I’m very fortunate to call
              this machine my own.
            </Tool>
            <Tool title="LG 4K Monitor 32” UHD LED Display">
              This big guy is all the screen real estate I need. I have it
              mounted on an Ergotron – LX Single Monitor Arm.
            </Tool>
            <Tool title="Logitech ERGO K860 Wireless Split Keyboard">
              I love this ergonomic keyboard. It’s a happy middle ground between
              your typical flat keyboard and a completely split one. It didn’t
              take much getting used to the slight split and the keys feel
              great.
            </Tool>
            <Tool title="Capisco Chair by HÅG">
              I try to stand at my desk as much as I can (laziness is a factor)
              but I love this versatile chair. The design is beautiful, it’s
              very easy on the eyes.
            </Tool>
            <Tool title="AirPods Pro 2">
              I previously wore a pair of Bose QC35’s which are great but I
              haven’t used those since getting the AirPods, mostly for comfort.
              I wear them all day long for calls/meetings and like to have low
              volume white noise going while coding/writing.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Webstorm by JetBrains">
              A couple of years ago a friend of mine turned me onto WebStorm and
              I haven’t looked back. I had been using VSCode before but was
              having some lag issues which I have not experienced since making
              the switch. I also love the rename/refactoring capabilities.
            </Tool>
            <Tool title="DankMono typeface">
              This has been my IDE’s typeface for several years. Branded as “a
              typeface designed for coding aesthetes with modern displays in
              mind,” it does not disappoint. Fun fact, the type designer is Phil
              Pluckthun who I crossed paths with at Formidable Labs.
            </Tool>
            <Tool title="Github Desktop">
              After learning basic git commands a friend introduced me to this
              user-friendly GUI and I’ve used it shamelessly since. I’ve never
              been a super fast typer and as a visual learner this tool gives me
              more confidence when performing git operations.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              I don’t do a ton of designing/prototyping these days, but when I
              do, I love using Figma. Like many, I previously used Sketch (and
              loved it) but I now prefer the convenience of prototyping in the
              browser.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Horo">
              A simple and free countdown timer app for the Mac menu bar. I like
              setting timers before a work bout, it tricks my easily distracted
              brain into being locked in to the task at hand.
            </Tool>
            <Tool title="Mac Notes App">
              I used to use Notion for note-taking, record keeping, etc., but
              one day realized I didn’t need all the bells and whistles. I love
              the simplicity of this app and use it almost daily.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
