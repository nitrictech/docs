import React from 'react'
import clsx from 'clsx'

interface ProseProps extends React.PropsWithChildren {
  as?: React.ElementType
  className?: string
}

export function Prose({
  as: Component = 'div',
  className,
  ...props
}: ProseProps) {
  return (
    <Component
      className={clsx(className, 'prose dark:prose-invert')}
      {...props}
    />
  )
}
