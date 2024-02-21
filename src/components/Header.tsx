import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { ModeToggle } from '@/components/ModeToggle'
import { Search } from '@/components/Search'
import { topLevelNavigation } from '@/nav.config'
import { GitHubIcon } from './icons/GitHubIcon'
import { FaDiscord } from 'react-icons/fa'
import { StarIcon } from '@heroicons/react/24/outline'

function TopLevelNavItem({ href, children }) {
  const external = href.startsWith('http')

  return (
    <li className="flex">
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        className="group flex text-sm font-semibold leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef<HTMLDivElement, { className?: string }>(
  function Header({ className }, ref) {
    let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
    let isInsideMobileNavigation = useIsInsideMobileNavigation()

    let { scrollY } = useScroll()
    let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
    let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

    return (
      <motion.div
        ref={ref}
        className={clsx(
          className,
          'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80',
          !isInsideMobileNavigation &&
            'backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80',
          isInsideMobileNavigation
            ? 'bg-white dark:bg-gray-800'
            : 'bg-white/[var(--bg-opacity-light)] dark:bg-gray-800/[var(--bg-opacity-dark)]'
        )}
        style={
          {
            '--bg-opacity-light': bgOpacityLight,
            '--bg-opacity-dark': bgOpacityDark,
          } as any
        }
      >
        <div
          className={clsx(
            'absolute inset-x-0 top-full h-px transition',
            (isInsideMobileNavigation || !mobileNavIsOpen) &&
              'bg-gray-800/7.5 dark:bg-white/7.5'
          )}
        />
        <div className="hidden lg:block">
          <Search />
        </div>
        <div className="flex items-center gap-5 lg:hidden">
          <MobileNavigation />
          <Link href="/" aria-label="Home">
            <Logo className="h-6" />
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <nav className="hidden md:block">
            <ul role="list" className="flex items-center gap-8">
              {topLevelNavigation.map(({ text, href }) => (
                <TopLevelNavItem key={href} href={href}>
                  {text}
                </TopLevelNavItem>
              ))}

              <TopLevelNavItem href="https://github.com/nitrictech/nitric">
                <StarIcon className="mr-1 h-5 w-5 text-zinc-600 group-hover:scale-105 dark:text-gray" />
                Star on GitHub
              </TopLevelNavItem>
            </ul>
          </nav>
          <div className="hidden md:block md:h-5 md:w-px md:bg-gray-800/10 md:dark:bg-white/15" />
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <Search />
            </div>
            <Link
              className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-gray-800/5 dark:hover:bg-white/5"
              href="https://nitric.io/chat"
              target="_blank"
            >
              <FaDiscord className="h-5 w-5 fill-zinc-600 dark:fill-gray" />
            </Link>
            <Link
              className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-gray-800/5 dark:hover:bg-white/5 md:hidden"
              href="https://github.com/nitrictech/nitric"
              target="_blank"
            >
              <GitHubIcon className="h-5 w-5 fill-zinc-600 dark:fill-gray" />
            </Link>
            <ModeToggle />
          </div>
        </div>
      </motion.div>
    )
  }
)
