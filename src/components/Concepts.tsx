import Link from 'next/link'
import { useMotionValue } from 'framer-motion'

import { Heading } from '@/components/Heading'
import {
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
} from '@heroicons/react/24/outline'

import { cn } from '@/lib/utils'
import { ResourcePattern } from './ResourcePattern'

const items = [
  {
    href: '/concepts/how-nitric-works',
    name: 'How Nitric works',
    description:
      'Learn about the components of Nitric and how it works for development and deployment.',
    icon: Square3Stack3DIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/concepts/comparison',
    name: 'Comparison with other tools',
    description: 'See how Nitric differs and fits alongside other solutions.',
    icon: MagnifyingGlassIcon,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
]

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
          className={cn(
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

export function Concepts() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="concepts">
        Concepts
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2">
        {items.map((block) => (
          <Block key={block.href} block={block} />
        ))}
      </div>
    </div>
  )
}
