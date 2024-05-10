import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'
import { FaDiscord } from 'react-icons/fa'
import logoX from '@/images/logos/x.svg'
import { ResourcePattern } from './ResourcePattern'

const items = [
  {
    href: 'https://nitric.io/chat',
    name: 'Join our Discord Server',
    description:
      'The help forum is a great place to get help with any questions about Nitric.',
    icon: FaDiscord,
    iconClassName: 'text-[#5865F2]',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://x.com/nitric_io',
    name: 'Follow us on X (Twitter)',
    description: 'Follow us on X (Twitter) to get the latest updates and news.',
    logo: logoX,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://calendly.com/d/2hs-96w-9gd/nitric-demo-30-min',
    name: 'Book a Chat',
    description:
      'Arrange a chat with one of our team. We can help answer questions and give 1-on-1 help.',
    icon: ChatBubbleLeftIcon,
    iconClassName: 'text-secondary-light',
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://github.com/nitrictech/nitric',
    name: 'Give us a star on GitHub',
    description: 'Show your support with a Star at nitrictech/nitric.',
    icon: StarIcon,
    iconClassName: 'text-amber-500',
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
]

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
        <div className="flex flex-col gap-2.5">
          {block.icon ? (
            <block.icon className={cn('h-6 w-6', block.iconClassName)} />
          ) : (
            <Image
              src={block.logo}
              alt={block.name + ' Logo'}
              className={`h-6 w-6`}
              unoptimized
            />
          )}
          <h3 className="text-lg font-semibold leading-7 text-zinc-900 dark:text-white">
            <Link href={block.href} target="_blank">
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

export function Community() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="community">
        Join the community
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2">
        {items.map((block) => (
          <Asset key={block.href} block={block} />
        ))}
      </div>
    </div>
  )
}
