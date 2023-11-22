/* eslint-disable react/no-unescaped-entities */
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
        title="My Essential Digital Toolkit"
        intro="As a tech enthusiast, I am often asked about the tools I use to power my productivity and creativity. That's why I've compiled a comprehensive list of my favorite tech tools and gadgets. From my trusty ergonomic keyboard to the sleek and powerful laptop that fuels my coding sessions, this page is a peek into my tech arsenal. Discover the tools that keep me in the zone and see if any of them might enhance your own tech setup."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="14” MacBook Pro, M1 Pro, 32GB RAM (14-inch, 2021)">
              While I may not be a gearhead, I'm constantly amazed by how
              effortlessly it handles everything I throw at it. I feel
              incredibly lucky to have this tool in my arsenal and can't imagine
              getting my work done without it.
            </Tool>
            <Tool title="LG 4K Monitor 32” UHD LED Display">
              This big guy provides me with all the screen real estate I need to
              get my work done efficiently. Plus, I have it mounted on an
              Ergotron – LX Single Monitor Arm, which means I can easily adjust
              the height and angle to suit my preferences.
            </Tool>
            <Tool title="Logitech ERGO K860 Wireless Split Keyboard">
              With its ergonomic design, it's like a custom fit for my hands.
              It's not too flat, not too split - it's just right. And the keys?
              They feel like butter. Typing has never been so smooth and
              effortless.
            </Tool>
            <Tool title="Capisco Chair by HÅG">
              While I try to stand at my desk as much as possible, I can't
              resist the comfort and versatility this beauty provides. Its sleek
              design is easy on the eyes, making it a perfect fit for my
              workspace.
            </Tool>
            <Tool title="AirPods Pro 2">
              My AirPods Pro 2 have been a game changer for me. These AirPods
              are so comfortable that I can wear them all day long for calls,
              meetings, and even when I'm deep in coding mode with some
              low-volume white noise in the background. It's the perfect blend
              of convenience, comfort, and quality sound that I didn't even know
              I needed until I tried them out.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Webstorm by JetBrains">
              I owe a lot to my friend who introduced me to WebStorm - this IDE
              has truly become my coding companion. From the moment I opened it,
              I was hooked. The smooth performance and lightning-fast
              responsiveness blew me away, especially after experiencing lag
              issues with other IDEs. The refactor/renaming tools in WebStorm
              make code maintenance a breeze, saving me precious time and
              energy.
            </Tool>
            <Tool title="DankMono typeface">
              Dank Mono is the typeface I use in my IDE and it's honestly a game
              changer. The font is easy on the eyes and the ligatures are a nice
              touch. It makes coding a more enjoyable experience. Overall, Dank
              Mono is a great choice for anyone looking for a stylish and
              functional typeface in their IDE.
            </Tool>
            <Tool title="Github Desktop">
              Even though I know how to use Git from the command line, I find
              that the Desktop interface gives me more confidence and visual
              clarity when performing Git operations. It's especially useful for
              reviewing changes and committing code. Plus, it's user-friendly
              and saves me time compared to typing out every command.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Figma is my go-to tool for designing and prototyping. As a
              web-based platform, it's easy to collaborate with team members and
              clients, and I love that I can access my designs from any device
              with an internet connection. Plus, Figma's built-in prototyping
              capabilities make it easy to create interactive mockups and get
              feedback quickly.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Horo">
              Horo is my go-to countdown timer app for Mac. It's a simple and
              free tool that lives in the menu bar, so I can easily set timers
              for work sprints or breaks. I especially love using it for those
              days when I'm feeling particularly scatterbrained - setting a
              timer helps me stay focused and accomplish my tasks without
              getting sidetracked.
            </Tool>
            <Tool title="Mac Notes App">
              When it comes to taking notes, I've tried them all – Evernote,
              Google Keep, OneNote, you name it. But eventually, I found myself
              gravitating back to the good old-fashioned Notes app on my Mac.
              It's simple, reliable, and gets the job done without any fuss.
              Plus, I love the integration with iCloud, so my notes are always
              synced across all my devices. Whether I'm jotting down a quick
              idea or outlining a new project, the Mac Notes app has become my
              go-to tool.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
