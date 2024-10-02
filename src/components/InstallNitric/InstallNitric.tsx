import React, { Suspense } from 'react'
import { highlight } from 'codehike/code'
import { Schema } from '../code/CodeWithTabs'
import { parseProps } from 'codehike/blocks'
import CODE_THEME from '@/components/code/theme'
import { InstallNitricTabs } from './InstallNitricTabs.client'
import Pre from '../code/Pre'
import CodeContainer from '../code/CodeContainer'

export const InstallNitric: React.FC = async (props) => {
  const { tabs } = parseProps(props, Schema)

  const highlighted = await Promise.all(
    tabs.map((tab) => highlight(tab, CODE_THEME)),
  )

  return (
    <CodeContainer>
      <Suspense fallback={<Pre highlighted={highlighted[0]} {...props} />}>
        <InstallNitricTabs highlighted={highlighted} tabs={tabs} />
      </Suspense>
    </CodeContainer>
  )
}
