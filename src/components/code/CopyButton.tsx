'use client'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { ClipboardIcon } from '../icons/ClipboardIcon'

export function CopyButton({
  code,
  showPanel,
  className,
}: {
  code: string
  showPanel?: boolean
  className?: string
}) {
  const [copyCount, setCopyCount] = useState(0)
  const copied = copyCount > 0

  useEffect(() => {
    if (copyCount > 0) {
      const timeout = setTimeout(() => setCopyCount(0), 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copyCount])

  return (
    <button
      type="button"
      className={clsx(
        'group/button absolute right-2 h-8 rounded-md px-1.5 py-1 text-2xs font-medium backdrop-blur transition',
        showPanel ? 'top-1.5' : 'top-2.5',
        copied
          ? 'bg-primary-400/10 ring-primary-400/20'
          : 'bg-white/5 ring-1 ring-inset ring-zinc-300/10 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5',
        !showPanel &&
          'opacity-0 focus:opacity-100 group-hover:opacity-100 group-focus:opacity-100',
        className,
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount((count) => count + 1)
        })
      }}
    >
      <span
        aria-hidden={copied}
        className={clsx(
          'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
          copied && '-translate-y-1.5 opacity-0',
        )}
      >
        <ClipboardIcon className="size-4 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={clsx(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-primary-400 transition duration-300',
          !copied && 'translate-y-1.5 opacity-0',
        )}
      >
        Copied
      </span>
    </button>
  )
}
