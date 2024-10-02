'use client'

import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../ui/collapsible'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { NavLink } from './NavLink'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import { NavigationGroup } from './NavigationGroup'
import { NavGroup } from '@/config/types'

interface Props {
  group: NavGroup
  className?: string
}

const CollapsibleNavItem: React.FC<Props> = ({ group, className }) => {
  const pathname = usePathname()

  const { title, items, icon: Icon } = group

  const isActive = items.some(
    (link) => 'href' in link && link.href === pathname,
  )
  const [isOpen, setIsOpen] = React.useState(isActive)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn('space-y-2 pl-2', className)}
    >
      <CollapsibleTrigger asChild>
        <Button
          variant="link"
          className={cn(
            'flex w-full justify-between gap-2 py-1 pl-0 pr-3 text-sm transition hover:no-underline',
            isOpen
              ? 'text-zinc-900 dark:text-white'
              : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
          )}
        >
          <div className="flex items-center">
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            <span>{title}</span>
          </div>
          <ChevronDownIcon className={cn('h-4 w-4', isOpen && 'rotate-180')} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="relative mt-2 space-y-2">
        <ul role="list">
          {items.map((entry, idx) =>
            'href' in entry ? (
              <li key={entry.title}>
                <NavLink
                  isAnchorLink
                  key={entry.title}
                  href={entry.href}
                  active={entry.href === pathname}
                >
                  {entry.title}
                </NavLink>
              </li>
            ) : (
              <li key={entry.title}>
                <div
                  aria-hidden="true"
                  className={cn(
                    'absolute bottom-0 left-2 top-0 w-[1px]',
                    'bg-zinc-300 dark:bg-zinc-700',
                  )}
                />{' '}
                <CollapsibleNavItem group={entry} className="pl-7" />
              </li>
            ),
          )}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  )
}

export default CollapsibleNavItem
