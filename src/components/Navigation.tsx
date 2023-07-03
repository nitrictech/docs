import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'
import { DocNavGroup, topLevelNavigation, useCurrentNav } from '@/nav.config'
import { ArrowLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'

function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children }) {
  const external = href.startsWith('http')

  return (
    <li className="md:hidden">
      <Link
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

interface NavLinkProps {
  href: string
  tag?: string
  active?: boolean
  isAnchorLink?: boolean
  children: React.ReactNode
  className?: string
  iconClassName?: string
  icon?: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
      title?: string
      titleId?: string
    }
  >
}

function NavLink({
  href,
  tag,
  active,
  children,
  className,
  iconClassName,
  isAnchorLink,
  icon: Icon,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : Icon ? '' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
        Icon ? 'items-center justify-start' : 'justify-between',
        className
      )}
    >
      {Icon && <Icon className={clsx('h-4 w-4', iconClassName)} />}
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({ group, pathname }) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0]
    )
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"
      style={{ borderRadius: 8, height, top }}
    />
  )
}

function ActivePageMarker({ group, pathname }) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex = group.links.findIndex((link) => link.href === pathname)
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-primary-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({ group, className }) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation
  )

  let isActiveGroup =
    group.links.findIndex((link) => link.href === router.pathname) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-gray-800/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker group={group} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === router.pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {sections.map((section) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

function HomeNavigationGroup({
  group,
  className,
}: {
  className?: string
  group: DocNavGroup
}) {
  const router = useRouter()

  return (
    <li
      className={clsx(
        'relative',
        group.showDividerAbove ? 'mt-3' : 'mt-6',
        className
      )}
    >
      {group.title && (
        <motion.h2
          layout="position"
          className="text-xs font-semibold text-zinc-900 dark:text-white"
        >
          {group.title}
        </motion.h2>
      )}
      {group.showDividerAbove && (
        <div className="mx-1 h-[1px] w-1/2 bg-zinc-800/90" />
      )}
      <div className="relative mt-3 pl-1">
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink
                icon={link.icon}
                href={link.href}
                active={link.href === router.pathname}
              >
                {link.title}
              </NavLink>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function Navigation(props) {
  const { navigation, displayDocsMenu, parent, pathname } = useCurrentNav()

  useEffect(() => {
    const currentLink = document.querySelector(
      `#doc-nav [href="/docs${pathname}"]`
    )
    if (currentLink) {
      const elementTop = currentLink.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      if (
        elementTop > windowHeight ||
        elementTop + currentLink.scrollHeight < 0
      ) {
        // Perform any desired action when the element is not visible
        currentLink.scrollIntoView()
      }
    }
  }, [])

  return (
    <nav {...props} id="doc-nav">
      {!displayDocsMenu && (
        <div className="mb-4 flex flex-col gap-4">
          <Link
            href="/"
            className="group flex items-center text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400"
          >
            <ChevronLeftIcon className="mr-0.5 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          {parent && (
            <NavLink
              icon={parent.icon}
              href={parent.href}
              active={parent.href === pathname}
              className="text-lg"
              iconClassName="w-5 h-5"
            >
              {parent.title}
            </NavLink>
          )}
        </div>
      )}

      <ul role="list">
        {!displayDocsMenu ? (
          <>
            {topLevelNavigation.map(({ text, href }) => (
              <TopLevelNavItem key={href} href={href}>
                {text}
              </TopLevelNavItem>
            ))}
            {navigation.map((group, groupIndex) => (
              <NavigationGroup
                key={groupIndex}
                group={group}
                className={groupIndex === 0 && 'md:mt-0'}
              />
            ))}
          </>
        ) : (
          navigation.map((group, groupIndex) => (
            <HomeNavigationGroup
              key={groupIndex}
              group={group}
              className={groupIndex === 0 ? 'md:mt-0' : undefined}
            />
          ))
        )}
      </ul>
    </nav>
  )
}
