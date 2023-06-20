import Link from 'next/link'
import clsx from 'clsx'

import { Heading } from '@/components/Heading'
import { Button } from '@/components/Button'
import { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { Tag } from '@/components/Tag'

export const a = Link
export { Button } from '@/components/Button'
export { CodeGroup, Code as code, Pre as pre } from '@/components/Code'
export { GuidesGrid, Guide } from '@/components/GuidesGrid'
export { Tag } from '@/components/Tag'

export const h2 = function H2(props) {
  return <Heading level={2} {...props} />
}

function InfoIcon(props) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="8" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.75 7.75h1.5v3.5"
      />
      <circle cx="8" cy="4" r=".5" fill="none" />
    </svg>
  )
}

export function Note({ children }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-primary-500/20 bg-primary-50/50 p-4 leading-6 text-primary-900 dark:border-primary-500/30 dark:bg-primary-500/5 dark:text-primary-200 dark:[--tw-prose-links-hover:theme(colors.primary.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-primary-500 stroke-white dark:fill-primary-200/20 dark:stroke-primary-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Row({ children }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({ children, sticky = false }) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24'
      )}
    >
      {children}
    </div>
  )
}

export function Properties({ children, nested }) {
  const [open, setOpen] = useState(false)

  const content = (
    <ul
      role="list"
      className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
    >
      {children}
    </ul>
  )

  return nested ? (
    <li>
      <Button
        onClick={() => setOpen(!open)}
        variant="outline"
        className="mt-4 flex items-center gap-2"
      >
        {open ? (
          <MinusCircleIcon className="mt-0.5 h-5 w-5" />
        ) : (
          <PlusCircleIcon className="mt-0.5 h-5 w-5" />
        )}
        {open ? 'Hide' : 'Show'} accepted values
      </Button>
      <div
        className={clsx(
          'mt-4 rounded-lg border p-4 dark:border-zinc-600',
          !open && 'sr-only'
        )}
      >
        {content}
      </div>
    </li>
  ) : (
    <div className={'my-6'}>{content}</div>
  )
}

export function Property({ name, type, children, required }) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        <dt className="sr-only">{required ? 'Required' : 'Optional'}</dt>
        <dd>
          {required ? (
            <Tag color="amber" className="rounded-md py-0.5 uppercase">
              Required
            </Tag>
          ) : (
            <span className="mt-0.5 font-mono text-xs text-zinc-400 dark:text-zinc-500">
              Optional
            </span>
          )}
        </dd>
        <dt className="sr-only">Type</dt>
        <dd className="mt-0.5 flex font-mono text-xs text-zinc-400 dark:text-zinc-500">
          {type}
        </dd>
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}
