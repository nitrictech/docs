import { Prose } from '@/components/Prose'

import React from 'react'
import { allDocs } from '@/content'
import DocToc from '@/components/layout/DocToC'
import { Feedback } from '@/components/Feedback'
import { Button } from '@/components/ui/button'
import { GitHubIcon } from '@/components/icons/GitHubIcon'
import Breadcrumbs from '@/components/Breadcrumbs'
import FeedbackForm from '@/components/FeedbackForm'

export default function DocLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { slug: string[] }
}) {
  const slug = params.slug ? decodeURI(params.slug.join('/')) : ''
  const doc = allDocs.find((p) => p.slug === slug)

  if (!doc) {
    return <>{children}</>
  }

  return (
    <article className="mx-auto flex h-full max-w-7xl flex-col gap-y-10 px-4 pb-10 pt-16">
      <div className="relative grid grid-cols-12 gap-10">
        <div className="col-span-12 w-full flex-auto space-y-20 md:col-span-9">
          <div>
            <Breadcrumbs doc={doc} className="mb-4" />
            <Prose>{children}</Prose>
          </div>
          <div className="md:hidden">
            <Button asChild variant="unstyled">
              <a
                href={doc.editUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-x-2 text-sm dark:text-zinc-300 dark:hover:text-white"
              >
                <GitHubIcon className="h-5 w-5 fill-zinc-800 transition group-hover:fill-zinc-900 dark:fill-zinc-300 dark:group-hover:fill-white" />
                Edit this page on GitHub
              </a>
            </Button>
          </div>
          <div className="w-full">
            <FeedbackForm />
          </div>
          <div className="text-2xs text-muted-foreground">
            Last updated on{' '}
            {new Date(doc.lastModified).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </div>
        </div>
        <DocToc doc={doc} />
      </div>
    </article>
  )
}
