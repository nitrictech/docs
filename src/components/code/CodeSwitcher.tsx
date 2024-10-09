import React, { Suspense } from 'react'
import { RawCode } from 'codehike/code'
import CodeContainer from './CodeContainer'
import { CodeSwitcherSelect } from './CodeSwitcherSelect'
import Pre, { HandlerProps } from './Pre'
import { highlight } from './highlight'

export async function CodeSwitcher({
  code,
  ...props
}: {
  code: RawCode[]
  showPanel?: boolean
  className?: string
} & HandlerProps) {
  const highlighted = await Promise.all(
    code.map((codeblock) => highlight(codeblock)),
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
