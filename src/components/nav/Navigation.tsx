'use client'

import { usePathname } from 'next/navigation'

import { NavLink } from './NavLink'
import { cn } from '@/lib/utils'
import { NavigationGroup } from './NavigationGroup'
import { navigation } from '@/config'

export function Navigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  const pathname = usePathname()

  return (
    <nav {...props}>
      <ul role="list">
        {navigation.map((entry, groupIndex) =>
          'href' in entry ? (
            <NavLink
              className={cn('pl-2', groupIndex === 0 ? 'md:mt-0' : '')}
              key={entry.title}
              active={entry.href === pathname}
              {...entry}
            >
              {entry.title}
            </NavLink>
          ) : (
            <NavigationGroup
              key={entry.title}
              group={entry}
              className={groupIndex === 0 ? 'md:mt-0' : ''}
            />
          ),
        )}
      </ul>
    </nav>
  )
}
