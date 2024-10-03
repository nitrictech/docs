import { highlight, RawCode } from 'codehike/code'
import Pre from './Pre'
import CodeContainer from './CodeContainer'
import CODE_THEME from './theme'
import { meta } from './meta'

export async function Code({
  codeblock,
}: {
  codeblock: RawCode
  isPanel?: boolean
}) {
  const highlighted = await highlight(codeblock, CODE_THEME)

  const fileName = meta(codeblock).file

  const isPanel = !!fileName

  return (
    <CodeContainer>
      <Pre highlighted={highlighted} showPanel={isPanel} />
    </CodeContainer>
  )
}
