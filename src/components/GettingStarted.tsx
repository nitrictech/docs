import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { PlayIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export function GettingStarted() {
  return (
    <div className="not-prose my-16 xl:max-w-none">
      <Link
        href={'/guides/getting-started'}
        className="group relative flex gap-8 rounded-2xl bg-zinc-50 p-6 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
      >
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-secondary-900/40 bg-secondary-200 dark:border-secondary-900/60 dark:bg-secondary-300">
          <PlayIcon className="h-8 w-8 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Getting Started
          </h2>
          <p className="mt-1 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            Get started with Nitric and unleash the power of rapid cloud and
            serverless application development in just a few simple steps.
          </p>
        </div>
      </Link>
    </div>
  )
}
