import React from 'react'
import { Heading } from '../ui/heading'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'
import { allGuides, Guide } from '@/content'

type RequiredFeaturedGuide = Guide & {
  featured: NonNullable<Guide['featured']>
}

const GuidesFeatured: React.FC = ({ take = 3 }: { take?: number }) => {
  const featuredGuides = allGuides
    .filter((guide): guide is RequiredFeaturedGuide => !!guide.featured)
    .sort((a, b) => {
      if (a.published_at && b.published_at) {
        return a.published_at > b.published_at ? -1 : 1
      }

      return 0
    })
    .slice(0, take)

  return featuredGuides.length === 0 ? null : (
    <div>
      <Heading level={2} className="sr-only">
        Featured
      </Heading>
      <div className="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-4 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {featuredGuides.map((guide) => (
          <article
            key={guide.slug}
            className="group relative isolate flex flex-col justify-end overflow-hidden rounded-lg bg-zinc-900 px-8 pb-8 pt-48"
          >
            <Image
              alt={guide.featured.image_alt}
              src={guide.featured.image}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-primary-300/50 via-secondary-400/30 to-primary-500/40 dark:from-primary-700/50 dark:via-secondary-800/40 dark:to-primary-900/50" />
            <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-primary-500/10 dark:ring-primary-900/10" />

            <h3 className="mt-3 text-lg/6 font-semibold tracking-wide text-white">
              <Link href={`/${guide.slug}`}>
                <span className="absolute inset-0" />
                {guide.title}
              </Link>
            </h3>
            <p className="mt-1 text-base leading-5 text-white dark:text-muted-foreground">
              {guide.description}
            </p>
            <ArrowUpRightIcon
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 m-4 size-6 text-white transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 dark:text-primary-light/70"
            />
          </article>
        ))}
      </div>
    </div>
  )
}

export default GuidesFeatured
