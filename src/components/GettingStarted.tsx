import Link from 'next/link'
import { useMotionValue } from 'framer-motion'

import clsx from 'clsx'
import { cn } from '@/lib/utils'
import {
  InformationCircleIcon,
  RocketLaunchIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import { ResourcePattern } from './ResourcePattern'

function Block({ block }) {
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
      className={
        'group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5'
      }
    >
      <ResourcePattern {...block.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative w-full rounded-2xl p-8">
        <div
          className={clsx(
            'flex items-center gap-2.5',
            block.description && 'mb-4'
          )}
        >
          {block.icon && (
            <block.icon
              className={cn('h-6 w-6 text-primary-light', block.iconClassName)}
            />
          )}
          <h3 className="text-lg font-semibold leading-7 text-zinc-900 dark:text-white">
            <Link href={block.href}>
              <span className="absolute inset-0 rounded-2xl" />
              {block.name}
            </Link>
          </h3>
        </div>
        {block.description && (
          <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
            {block.description}
          </p>
        )}
      </div>
    </div>
  )
}

const gettingStartedBlocks = [
  {
    href: '/concepts/introduction',
    name: 'What is Nitric',
    icon: InformationCircleIcon,
    description:
      'Learn about the Nitric architecture and how the framework works under the hood.',
  },
  {
    href: '/getting-started/quickstart',
    name: 'Get started with Nitric',
    icon: RocketLaunchIcon,
    description:
      'Start building and deploy in minutes with our Quick Start guide.',
  },
  {
    href: '/reference/providers/custom/building-custom-provider',
    name: 'Customize and extend Nitric',
    icon: WrenchScrewdriverIcon,
    description: 'Build your own cloud providers or extend ours.',
  },
]

export function GettingStarted() {
  return (
    <div className="my-16 xl:max-w-none">
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {gettingStartedBlocks.map((box) => (
          <Block key={box.href} block={box} />
        ))}
      </div>
    </div>
  )
}
