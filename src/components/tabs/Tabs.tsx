'use client'

import React, { PropsWithChildren, ReactElement } from 'react'
import {
  Tabs as BaseTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'
import { useTabs } from './TabsContext'

export interface TabProps extends PropsWithChildren {
  syncKey?: string
  value?: string
  ref?: React.Ref<HTMLDivElement>
}

export interface TabItemProps extends PropsWithChildren {
  label: string
}

export const Tabs: React.FC<TabProps> = ({ children, value, ref, syncKey }) => {
  const tabs = React.Children.toArray(children) as ReactElement<TabItemProps>[]

  const { set, get } = useTabs()

  return (
    <BaseTabs
      defaultValue={tabs[0] ? tabs[0].props.label : undefined}
      value={syncKey ? get(syncKey) : undefined}
      onValueChange={syncKey ? (value) => set(syncKey, value) : undefined}
      ref={ref}
    >
      <TabsList className="relative mx-0 mt-auto h-12 w-full rounded-b-none bg-transparent p-0">
        {tabs.map((tab) => (
          <TabsTrigger
            value={tab.props.label}
            key={tab.props.label}
            className="group/tab relative h-12 data-[state=active]:bg-transparent data-[state=active]:text-primary dark:hover:text-zinc-200 dark:data-[state=active]:text-primary-300"
          >
            {tab.props.label}
            <div className="absolute inset-x-2 bottom-0 h-px bg-primary opacity-0 transition-opacity group-data-[state=active]/tab:opacity-100 dark:bg-primary-300" />
          </TabsTrigger>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-px bg-zinc-300/10" />
      </TabsList>
      {children}
    </BaseTabs>
  )
}

export const TabItem: React.FC<TabItemProps> = ({ children, label }) => {
  return <TabsContent value={label}>{children}</TabsContent>
}
