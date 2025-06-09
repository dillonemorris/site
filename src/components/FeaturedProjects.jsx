import { Card } from '@/components/Card'
import { LinkIcon, SparklesIcon } from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'Hey Brevity',
    description:
      'An AI-powered writing assistant for personal and professional communication.',
    screenshots: [],
    videoLink: '',
    stack: ['Next.js', 'Supabase', 'OpenAI'],
    liveUrl: 'https://www.heybrevity.com/',
    githubUrl: '#',
  },
  {
    title: 'Wrapped',
    description:
      'A thoughtful relationship app with smart reminders and lightweight recipient profiles.',
    screenshots: [],
    videoLink: '',
    stack: ['React Native', 'Supabase', 'OpenAI'],
    liveUrl: 'https://www.getwrapped.app/',
    githubUrl: '#',
  },
]

function TechBadge({ tech, isHighlighted = false }) {
  const baseClasses =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'

  if (isHighlighted) {
    return (
      <span
        className={`${baseClasses} bg-gradient-to-r from-blue-500 to-purple-600 text-white`}
      >
        <SparklesIcon className="mr-1 h-3 w-3" />
        {tech}
      </span>
    )
  }

  const colorMap = {
    'Next.js': 'bg-black text-white dark:bg-white dark:text-black',
    Vercel: 'bg-black text-white dark:bg-white dark:text-black',
    Supabase:
      'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
    Stripe:
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
    React: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200',
    TypeScript: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    Tailwind: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200',
  }

  const colorClass =
    colorMap[tech] ||
    'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'

  return <span className={`${baseClasses} ${colorClass}`}>{tech}</span>
}

function ProjectCard({ project }) {
  const highlightedTechs = ['OpenAI', 'Serverless', 'AI', 'Machine Learning']

  return (
    <Card as="li">
      <Card.Title as="h3" href={project.liveUrl}>
        {project.title}
      </Card.Title>
      <Card.Description>{project.description}</Card.Description>
      <div className="relative z-10 mt-6">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
              isHighlighted={highlightedTechs.includes(tech)}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 mt-4 flex items-center space-x-4 text-sm font-medium text-blue-500">
        {project.liveUrl && project.liveUrl !== '#' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Live Site
          </a>
        )}
        {project.githubUrl && project.githubUrl !== '#' && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        )}
      </div>
    </Card>
  )
}

export function FeaturedProjects() {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        Featured Projects
      </h2>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
        Here are some of the projects I&apos;m most proud of.
      </p>
      <ul
        role="list"
        className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </div>
  )
}
