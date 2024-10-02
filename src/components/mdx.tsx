import Link from 'next/link'
import clsx from 'clsx'
//import { Table } from '@/components/ui/table'
import { Feedback } from '@/components/Feedback'

import { Prose } from '@/components/Prose'

// export {
//   TableHead as th,
//   TableHeader as thead,
//   TableRow as tr,
//   TableBody as tbody,
//   TableCell as td,
//   TableFooter as tfoot,
// } from './ui/table'

// export function wrapper({ children }: { children: React.ReactNode }) {
//   return (
//     <article className="flex h-full flex-col pb-10 pt-16">
//       <Prose className="flex-auto">{children}</Prose>
//       <footer className="mx-auto mt-16 w-full max-w-2xl lg:max-w-5xl">
//         <Feedback />
//       </footer>
//     </article>
//   )
// }

// export const table = (props: React.ComponentPropsWithoutRef<typeof Table>) => (
//   <Table {...props} className="text-base" />
// )

export function a({
  href,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link>) {
  const isExternal = href.toString().startsWith('http')

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      {...props}
    >
      {children}
    </Link>
  )
}

export { Code } from './code/Code'

export { CodeWithTabs } from './code/CodeWithTabs'

export { CodeSwitcher } from './code/CodeSwitcher'

function InfoIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
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

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-primary-500/20 bg-primary-50/50 p-4 leading-6 text-primary-900 dark:border-primary-500/30 dark:bg-primary-500/5 dark:text-primary-200">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-primary-500 stroke-white dark:fill-primary-200/20 dark:stroke-primary-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({
  children,
  sticky = false,
}: {
  children: React.ReactNode
  sticky?: boolean
}) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24',
      )}
    >
      {children}
    </div>
  )
}

export function Properties({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
      >
        {children}
      </ul>
    </div>
  )
}

export function Property({
  name,
  children,
  type,
}: {
  name: string
  children: React.ReactNode
  type?: string
}) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {type}
            </dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}

export { InstallNitric } from '@/components/InstallNitric'

export { HomeHeader } from '@/components/HomeHeader'

export { ShowIfLang } from '@/components/ShowIfLang'

export { Libraries } from '@/components/Libraries'

export { ImportCode } from '@/components/code/ImportCode'
