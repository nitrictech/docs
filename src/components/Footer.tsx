import { forwardRef, Fragment, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Transition } from '@headlessui/react'

import { Button } from '@/components/Button'
import { useCurrentNav } from '@/nav.config'
import FeedbackForm from './FeedbackForm'
import { GitHubIcon } from './icons/GitHubIcon'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import type { FeedbackRequestBody } from '@/pages/api/feedback'

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="10" strokeWidth="0" />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m6.75 10.813 2.438 2.437c1.218-4.469 4.062-6.5 4.062-6.5"
      />
    </svg>
  )
}

const FeedbackThanks = forwardRef(function FeedbackThanks(_props, ref) {
  return (
    <div
      ref={ref as any}
      className="absolute inset-0 flex justify-center md:justify-start"
    >
      <div className="flex items-center gap-3 rounded-full bg-primary-50/50 py-1 pl-1.5 pr-3 text-sm text-primary-900 ring-1 ring-inset ring-primary-500/20 dark:bg-primary-500/5 dark:text-primary-200 dark:ring-primary-500/30">
        <CheckIcon className="h-5 w-5 flex-none fill-primary-500 stroke-white dark:fill-primary-200/20 dark:stroke-primary-200" />
        Thanks for your feedback!
      </div>
    </div>
  )
})

function Feedback() {
  let [submitted, setSubmitted] = useState(false)

  async function onSubmit(event) {
    event.preventDefault()

    const data: FeedbackRequestBody = {
      url: window.location.href,
      ua: navigator.userAgent,
      // "yes" or "no"
      answer: event.nativeEvent.submitter.dataset.response,
    }

    await fetch('/docs/api/feedback', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    setSubmitted(true)
  }

  return (
    <div className="relative h-8">
      <Transition
        show={!submitted}
        as={Fragment}
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        leave="pointer-events-none duration-300"
      >
        <FeedbackForm onSubmit={onSubmit} />
      </Transition>
      <Transition
        show={submitted}
        as={Fragment}
        enterFrom="opacity-0"
        enterTo="opacity-100"
        enter="delay-150 duration-300"
      >
        <FeedbackThanks />
      </Transition>
    </div>
  )
}

function PageLink({ label, page, previous = false }) {
  return (
    <>
      <Button
        href={page.href}
        aria-label={`${label}: ${page.title}`}
        variant="secondary"
        arrow={previous ? 'left' : 'right'}
      >
        {label}
      </Button>
      <Link
        href={page.href}
        tabIndex={-1}
        aria-hidden="true"
        className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
      >
        {page.title}
      </Link>
    </>
  )
}

function PageNavigation() {
  let router = useRouter()
  let { navigation: currentNav } = useCurrentNav()

  if (!currentNav) return null

  let allPages = currentNav.flatMap((group) => group.links)
  let currentPageIndex = allPages.findIndex(
    (page) => page.href === router.pathname
  )

  if (currentPageIndex === -1) {
    return null
  }

  let previousPage = allPages[currentPageIndex - 1]
  let nextPage = allPages[currentPageIndex + 1]

  if (!previousPage && !nextPage) {
    return null
  }

  return (
    <div className="flex">
      {previousPage && (
        <div className="flex flex-col items-start gap-3">
          <PageLink label="Previous" page={previousPage} previous />
        </div>
      )}
      {nextPage && (
        <div className="ml-auto flex flex-col items-end gap-3">
          <PageLink label="Next" page={nextPage} />
        </div>
      )}
    </div>
  )
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z" />
    </svg>
  )
}

function DiscordIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z" />
    </svg>
  )
}

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 576 512" aria-hidden="true" {...props}>
      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
    </svg>
  )
}

function SocialLink({ href, icon: Icon, children }) {
  return (
    <Link href={href} className="group" target="_blank" rel="noopener">
      <span className="sr-only">{children}</span>
      <Icon className="h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500" />
    </Link>
  )
}

function SmallPrint() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row">
      <div className="flex gap-4">
        <p className="text-xs text-zinc-500 dark:text-zinc-300">
          &copy; {new Date().getFullYear()} Nitric Inc.
        </p>
        <span className="text-xs text-zinc-500">—</span>
        <Link
          href={'/contributions'}
          className="text-xs text-zinc-600 hover:underline dark:text-zinc-400"
        >
          Contributions
        </Link>
        <Link
          href={'/support'}
          className="text-xs text-zinc-600 hover:underline dark:text-zinc-400"
        >
          Support
        </Link>
      </div>
      <div className="flex gap-4">
        <SocialLink href="https://twitter.com/nitric_io" icon={TwitterIcon}>
          Follow us on Twitter
        </SocialLink>
        <SocialLink
          href="https://github.com/nitrictech/nitric"
          icon={GitHubIcon}
        >
          Follow us on GitHub
        </SocialLink>
        <SocialLink href="https://discord.gg/Webemece5C" icon={DiscordIcon}>
          Join our Discord server
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/channel/UCZIWNF4ck7zcEdtwq2qQ2lg"
          icon={YouTubeIcon}
        >
          YouTube
        </SocialLink>
      </div>
    </div>
  )
}

export function Footer({ disableEditGithub }) {
  const router = useRouter()

  const branch = process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'

  return (
    <footer className="mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-full">
          <Feedback key={router.pathname} />
        </div>
        {!disableEditGithub && (
          <div className="flex w-full items-center justify-center">
            <Link
              href={`https://github.com/nitrictech/docs/edit/${branch}/src/pages${router.pathname}.mdx`}
              className="flex items-center gap-1 text-sm text-zinc-600 hover:underline dark:text-zinc-400 md:ml-auto"
            >
              Edit this page on GitHub
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
      <PageNavigation />
      <SmallPrint />
    </footer>
  )
}
