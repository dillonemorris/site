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
                  July 2024 - Present • 1 year
                </p>
              </div>
              
              <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  When SmartRent faced company-wide layoffs in 2023, I stepped up to become the bridge between engineering and product teams during one of the most challenging periods in the company{"'"}s history. With reduced headcount, I took on cross-functional responsibilities that went far beyond my original role scope.
                </p>
                
                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
                    Key Impact During Crisis
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>Maintained critical system stability while team size was reduced by 40%, ensuring zero downtime for property management customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>Created comprehensive technical documentation that became the onboarding standard for new team members</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 font-bold">•</span>
                      <span>Mentored 3 junior developers through complex full-stack features, accelerating their contribution timeline by 2-3 months</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  Beyond crisis management, I owned the end-to-end development of SmartRent{"'"}s resident portal features. This included designing React components that scaled across multiple property types, optimizing PostgreSQL queries that reduced page load times by 60%, and implementing real-time notification systems using WebSockets and Redis.
                </p>
                
                <p>
                  Working directly with product managers and UX designers, I transformed complex property management workflows into intuitive user experiences. I became the go-to engineer for cross-functional projects because I could translate business requirements into technical solutions while keeping user experience at the forefront.
                </p>
              </div>
            </div>

            {/* Previous Experience Section */}
            <div className="border-l-4 border-emerald-500 pl-6">
              <div className="flex flex-col gap-2 mb-6">
                <h2 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                  Full-Stack Developer
                </h2>
                <h3 className="text-xl text-emerald-600 dark:text-emerald-400 font-semibold">
                  Previous Roles & Consulting
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  2019 - 2021 • 2 years
                </p>
              </div>
              
              <div className="space-y-6 text-base text-zinc-600 dark:text-zinc-400">
                <p>
                  Before SmartRent, I cut my teeth building production applications under tight deadlines for startups and established companies. This period taught me the importance of shipping quickly while maintaining code quality—a balance I{"'"}ve carried throughout my career.
                </p>
                
                <div className="bg-zinc-50 dark:bg-zinc-800/50 rounded-lg p-6">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
                    Foundation-Building Experience
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Built and deployed 5+ full-stack applications using modern JavaScript frameworks and cloud infrastructure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Established DevOps practices including CI/CD pipelines and automated testing that reduced deployment errors by 80%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>Collaborated with non-technical stakeholders to scope and deliver MVP features under aggressive timelines</span>
                    </li>
                  </ul>
                </div>
                
                <p>
                  This experience foundation proved invaluable when facing the challenges at SmartRent. Having already navigated the pressures of startup environments, I was prepared to step up when the team needed leadership and stability.
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
                  I thrive in environments where I can take ownership of problems and see them through to completion. Whether it{"'"}s stepping up during layoffs, mentoring team members, or shipping features under pressure, I{"'"}m motivated by creating impact that extends beyond just writing code.
                </p>
                <p>
                  The combination of technical depth and cross-functional collaboration has become my signature approach. I don{"'"}t just build what{"'"}s asked—I partner with teams to build what{"'"}s needed, often anticipating requirements before they{"'"}re articulated.
                </p>
                <p>
                  This mindset has prepared me for senior engineering roles where product ownership, team leadership, and autonomous execution are not just valued—they{"'"}re essential.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </>
  )
} 