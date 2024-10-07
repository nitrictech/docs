import type { Doc } from '@/content'
import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface Props {
  guide: Doc
  featured?: boolean
}

const guide: React.FC<Props> = ({ guide, featured }) => {
  return (
    <Link
      href={`/${guide.slug}`}
      className={
        'group flex overflow-hidden rounded-lg p-3 transition-colors hover:bg-gray-700/30 hover:text-white dark:text-white ' +
        (featured ? 'flex-col lg:flex-row' : 'flex-col')
      }
    >
      <div>
        <p
          className={cn(
            'font-display text-xl font-semibold',
            featured ? 'lg:text-2xl xl:text-3xl' : '',
          )}
        >
          {guide.title}
        </p>
        <p
          className={cn(
            'text-md mt-3 text-base text-foreground-light',
            featured ? 'lg:text-md' : '',
          )}
        >
          {guide.description}
        </p>
      </div>
    </Link>
  )
}

export default guide
