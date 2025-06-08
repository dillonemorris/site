import Head from 'next/head'
import { Container } from '@/components/Container'

export default function WorkHistory() {
  return (
    <>
      <Head>
        <title>Work History - Dillon Morris</title>
        <meta
          name="description"
          content="A narrative-driven look at my professional journey, highlighting impact and leadership in challenging environments."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Work History
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            A narrative-driven look at my professional journey, highlighting impact and leadership in challenging environments.
          </p>
        </header>
        
        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            
            {/* SmartRent Section */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  Senior Software Engineer
                </h2>
                <h3 className="text-xl text-blue-600 dark:text-blue-400 font-semibold">
                  SmartRent
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  2024 - Present
                </p>
              </div>
              
              <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  I own the frontend for SmartRent&apos;s flagship product, which is
                  responsible for the vast majority of the company&apos;s revenue. In
                  a short period, I&apos;ve established myself as an integral team
                  member and the go-to resource for frontend development, making
                  a significant impact on our most challenging projects.
                </p>
                
                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
                    Performance Highlights
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>
                        Executed a complete redesign of the product navigation,
                        handling 100% of the development to implement
                        breadcrumbs, page favorites, and a modern look and feel.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>
                        Delivered high-quality work on a large critical feature,
                        assisted other teams with their projects, and contributed
                        to the strategic planning of the company&apos;s
                        next-generation platform.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>
                        Improved codebase stability and team efficiency by
                        resolving longstanding frontend bugs and leading
                        critical dependency updates.
                      </span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  My manager recognized this impact, noting my contributions as
                  &quot;essential to our success&quot; and highlighting my rapid
                  growth into a technical leader on the team.
                </p>
              </div>
            </div>


            {/* Philosophy Section */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
                What Drives My Work
              </h2>
              <div className="space-y-4 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  I thrive in environments where I can take ownership of problems and see them through to completion. Whether it&apos;s stepping up during challenging times, mentoring team members, or shipping features under pressure, I&apos;m motivated by creating impact that extends beyond just writing code.
                </p>
                <p>
                  The combination of technical depth and cross-functional collaboration has become my signature approach. I don&apos;t just build what&apos;s asked—I partner with teams to build what&apos;s needed, often anticipating requirements before they&apos;re articulated.
                </p>
                <p>
                  This mindset has prepared me for senior engineering roles where product ownership, team leadership, and autonomous execution are not just valued—they&apos;re essential.
                </p>
              </div>
            </div>

            {/* American Express Section */}
            <div className="border-l-4 border-cyan-500 pl-6">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  UI Engineer
                </h2>
                <h3 className="text-xl text-cyan-600 dark:text-cyan-400 font-semibold">
                  American Express
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  June 2023 - July 2024
                </p>
              </div>

              <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  I spearheaded the design and development of the Federated
                  Single Sign-On (FSSO) feature, enabling third-party users to
                  seamlessly access their corporate banking through Amex. This
                  required close collaboration with backend engineers, a
                  Technical Program Manager (TPM), and other front-end
                  developers.
                </p>

                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
                    Key Contributions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span>
                        Led the front-end effort for the successful integration
                        of FSSO within the One App micro-frontend architecture.
                      </span>
                    </li>
                  </ul>
                </div>
                <p>
                  My approach is highly collaborative; I am always willing to
                  help teammates, pair on difficult problems, and provide
                  thoughtful code reviews. This team-first attitude fosters a
                  supportive environment and sets a strong example.
                </p>
              </div>
            </div>

            {/* Formidable Section */}
            <div className="border-l-4 border-rose-500 pl-6">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  Software Engineer
                </h2>
                <h3 className="text-xl text-rose-600 dark:text-rose-400 font-semibold">
                  Formidable
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  Dec 2020 - Dec 2022
                </p>
              </div>

              <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  As a consultant at a leading JavaScript firm, I delivered
                  high-impact solutions for enterprise clients.
                </p>

                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
                    Client Projects
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>
                        Successfully migrated Fabletics&apos; e-commerce
                        platform to React/Next.js, improving site performance
                        and user engagement.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>
                        Built a data analysis tool for the T-Mobile Home
                        Internet sales team, resulting in a 20% increase in
                        sales productivity.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Early Career Section */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  Frontend Developer
                </h2>
                <h3 className="text-xl text-emerald-600 dark:text-emerald-400 font-semibold">
                  Early Career
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  2018 - 2020
                </p>
              </div>

              <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  My early career was defined by building production
                  applications under tight deadlines for startups and agencies.
                  This period taught me the importance of shipping quickly
                  while maintaining code quality—a balance I&apos;ve carried
                  throughout my career.
                </p>

                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
                    Foundation-Building Experience
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>
                        Developed a React Native app serving 100k+ users for an
                        agency, improving user engagement and retention.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>
                        Created a design system and component library for a real
                        estate startup, resulting in a more consistent and
                        user-friendly design.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
} 