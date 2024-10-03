import { HighlightedCode, Pre as CodeHikePre } from 'codehike/code'
import React from 'react'
import { callout } from './annotations/callout'
import { CopyButton } from './CopyButton'
import { className } from './annotations/classname'
import { fold } from './annotations/fold'
import {
  collapse,
  collapseContent,
  collapseTrigger,
} from './annotations/collapse'
import { tokenTransitions } from './annotations/token-transitions'
import { cn } from '@/lib/utils'
import { meta } from './meta'

export interface HandlerProps {
  enableTransitions?: boolean
}

type Props = {
  highlighted: HighlightedCode
  showPanel?: boolean
  className?: string
  copyButtonClassName?: string
} & HandlerProps

const Pre: React.FC<Props> = ({
  highlighted,
  showPanel,
  enableTransitions,
  className,
  copyButtonClassName,
}) => {
  const fileName = meta(highlighted).file

  let handlers = [callout, fold, collapse, collapseTrigger, collapseContent]
  // TODO: Fix transitions, they currently break colours in the code when switching languages
  if (enableTransitions) {
    handlers = [...handlers, tokenTransitions]
  }

  const showFileNamePanel = showPanel && !!fileName

  return (
    <>
      {showFileNamePanel && (
        <div className="flex h-12 items-center justify-start border-b border-zinc-300/10 pr-12 font-display text-xs font-semibold text-zinc-300">
          {/* one-off breakpoint to hide the filename on extremely narrow screens - to avoid interfering with the lang select */}
          <span className="hidden whitespace-nowrap px-4 py-2 min-[320px]:block">
            {fileName}
          </span>
        </div>
      )}
      <CopyButton
        code={highlighted.code}
        showPanel={showPanel}
        className={copyButtonClassName}
      />
      <CodeHikePre
        code={highlighted}
        handlers={handlers}
        className={cn(
          'overflow-auto overscroll-x-contain p-4',
          !showFileNamePanel && 'pt-8', // add padding to ensure the code doesn't touch the top of the panel
          className,
        )}
        style={{
          ...highlighted.style,
          fontSize: '0.875rem',
          background: 'transparent !important',
        }}
      />
    </>
  )
}

export default Pre
