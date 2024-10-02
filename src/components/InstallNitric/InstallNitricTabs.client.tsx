'use client'

import React from 'react'
import { HighlightedCode, RawCode } from 'codehike/code'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import Pre from '../code/Pre'
import { OS, useOS } from './OSContext'

interface InstallNitricProps {
  highlighted: HighlightedCode[]
  tabs: RawCode[]
}

export const InstallNitricTabs: React.FC<InstallNitricProps> = ({
  highlighted,
  tabs,
}) => {
  const { currentOS, setCurrentOS } = useOS()

  return (
    <Tabs value={currentOS} onValueChange={(val) => setCurrentOS(val as OS)}>
      <TabsList className="mt-auto h-10 bg-transparent">
        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.meta}
            value={tab.meta}
            className="group/tab relative hover:text-zinc-200 data-[state=active]:bg-transparent data-[state=active]:text-primary-300"
          >
            {tab.meta}
            <div className="absolute inset-x-2 -bottom-[4.5px] h-px bg-primary-300 opacity-0 transition-opacity group-data-[state=active]/tab:opacity-100" />
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab, i) => (
        <TabsContent
          key={tab.meta}
          value={tab.meta}
          className="m-0 border-t border-zinc-300/10"
        >
          <Pre highlighted={highlighted[i]} />
        </TabsContent>
      ))}
    </Tabs>
  )
}
