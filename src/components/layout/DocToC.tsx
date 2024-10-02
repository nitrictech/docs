'use client'

import type { Doc } from '@/content'
import React, { useRef } from 'react'
import { Badge } from '../ui/badge'
import Link from 'next/link'
import { FaFacebook, FaFilePdf, FaLinkedin } from 'react-icons/fa'
import { DocTracingBeam } from './DocTracingBeam'
import { BASE_URL } from '@/lib/constants'
import { title } from 'radash'
import { Button } from '../ui/button'
import { GitHubIcon } from '../icons/GitHubIcon'

interface Props {
  doc: Doc
  articleRef?: React.RefObject<HTMLDivElement>
}

interface Toc {
  url: string
  value: string
  depth: number
}

const DocToC: React.FC<Props> = ({ doc }) => {
  const articleRef = useRef<HTMLDivElement>(null)

  return (
    <div className="h-full min-w-52" ref={articleRef}>
      <aside className="sticky top-[calc(var(--header-height)+1px+2rem)] hidden max-h-[calc(100vh-var(--header-height)-3rem)] min-w-40 space-y-6 md:block">
        {doc.toc.length ? (
          <div className="relative flex flex-col">
            <p className="mb-2 font-mono text-sm uppercase dark:text-zinc-300">
              On this page
            </p>
            <DocTracingBeam targetRef={articleRef}>
              <ol className="flex flex-col gap-y-1 pl-4 text-sm font-medium">
                {doc.toc.map((item: Toc, i: number) => {
                  return (
                    <li key={item.url + i}>
                      <Link
                        href={item.url}
                        className="text-2xs text-muted-foreground transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
                      >
                        {item.value}
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </DocTracingBeam>
          </div>
        ) : null}
        <div>
          <Button asChild variant="unstyled">
            <a
              href={doc.editUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-x-2 text-xs dark:text-zinc-300 dark:hover:text-white"
            >
              <GitHubIcon className="h-5 w-5 fill-zinc-800 transition group-hover:fill-zinc-900 dark:fill-zinc-300 dark:group-hover:fill-white" />
              Edit this page on GitHub
            </a>
          </Button>
        </div>
      </aside>
    </div>
  )
}

export default DocToC
