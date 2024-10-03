import React from 'react'
import { Block, CodeBlock, parseProps } from 'codehike/blocks'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { highlight, HighlightedCode, RawCode } from 'codehike/code'
import { z } from 'zod'
import Pre from './Pre'
import CodeContainer from './CodeContainer'
import CODE_THEME from './theme'
import { meta } from './meta'

export const Schema = Block.extend({ tabs: z.array(CodeBlock) })
export async function CodeWithTabs(props: unknown) {
  const { tabs } = parseProps(props, Schema)

  const highlighted = await Promise.all(
    tabs.map((tab) => highlight(tab, CODE_THEME)),
  )

  return <CodeTabs tabs={tabs} highlighted={highlighted} />
}

export function CodeTabs(props: {
  tabs: RawCode[]
  highlighted: HighlightedCode[]
}) {
  const { tabs, highlighted } = props

  return (
    <CodeContainer>
      <Tabs defaultValue={meta(tabs[0]).base}>
        <TabsList className="mt-auto h-12 bg-transparent">
          {tabs.map((tab) => (
            <TabsTrigger
              key={meta(tab).base}
              value={meta(tab).base}
              className="group/tab relative hover:text-zinc-200 data-[state=active]:bg-transparent data-[state=active]:text-primary-300"
            >
              {meta(tab).base}
              <div className="absolute inset-x-2 -bottom-[8px] h-px bg-primary-300 opacity-0 transition-opacity group-data-[state=active]/tab:opacity-100" />
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab, i) => (
          <TabsContent
            key={meta(tab).base}
            value={meta(tab).base}
            className="m-0 border-t border-zinc-300/10"
          >
            <Pre
              highlighted={highlighted[i]}
              showPanel={!!meta(tab).file}
              copyButtonClassName={'top-14'}
            />
          </TabsContent>
        ))}
      </Tabs>
    </CodeContainer>
  )
}
