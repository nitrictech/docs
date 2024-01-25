import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import {
  CloudIcon,
  CodeBracketSquareIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'
import { SiPulumi } from 'react-icons/si'

const additionalAssets = [
  {
    href: '/reference/cli',
    name: 'Nitric CLI',
    description: 'Use the CLI to develop, test and deploy your cloud projects.',
    icon: CommandLineIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/reference/providers',
    name: 'Cloud Providers',
    description:
      'Uncover the Nitric feature-to-cloud service mapping, revealing the powerful integration between Nitric and primary cloud services.',
    icon: CloudIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/reference/pulumi',
    name: 'Pulumi',
    description:
      'Learn how to extend and create custom Nitric providers using the Pulumi Automation API.',
    icon: SiPulumi,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/guides/getting-started/v0/local-dashboard',
    name: 'Local Dashboard',
    description:
      "Streamline your local development workflow with Nitric's intuitive Local Development Dashboard.",
    icon: CodeBracketSquareIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-800/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-primary-300/10 dark:group-hover:ring-primary-400">
      <Icon className="h-5 w-5 fill-zinc-700/40 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-primary-400/40 dark:group-hover:stroke-primary-400" />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-100 to-secondary-100 opacity-0 transition duration-300 group-hover:opacity-100 dark:from-primary/10 dark:to-secondary/10"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Asset({ block }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={block.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...block.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl p-8">
        <div className="mb-4 flex items-center gap-2.5">
          <ResourceIcon icon={block.icon} />
          <h3 className="text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
            <Link href={block.href}>
              <span className="absolute inset-0 rounded-2xl" />
              {block.name}
            </Link>
          </h3>
        </div>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {block.description}
        </p>
      </div>
    </div>
  )
}

export function AdditionalAssets() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="assets">
        Additional Assets
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {additionalAssets.map((block) => (
          <Asset key={block.href} block={block} />
        ))}
      </div>
    </div>
  )
}
