import React, { Suspense } from 'react'
import { highlight, RawCode } from 'codehike/code'
import CodeContainer from './CodeContainer'
import { CodeSwitcherSelect } from './CodeSwitcherSelect'
import CODE_THEME from './theme'
import Pre, { HandlerProps } from './Pre'

export async function CodeSwitcher({
  code,
  ...props
}: {
  code: RawCode[]
  showPanel?: boolean
  className?: string
} & HandlerProps) {
  const highlighted = await Promise.all(
    code.map((codeblock) => highlight(codeblock, CODE_THEME)),
  )

  return (
    <CodeContainer>
      <Suspense
        fallback={<Pre highlighted={highlighted[0]} {...props} showPanel />}
      >
        <CodeSwitcherSelect highlighted={highlighted} {...props} />
      </Suspense>
    </CodeContainer>
  )
}
