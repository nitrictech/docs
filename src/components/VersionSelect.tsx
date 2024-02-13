import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { Version } from '@/nav.config'
import { useRouter } from 'next/router'
import { useVersions } from '@/lib/hooks/use-versions'
import { Badge } from './ui/badge'
import { cn } from '@/lib/utils'

export function VersionSelect({
  versions,
  className,
}: {
  versions: Version[]
  className?: string
}) {
  const router = useRouter()
  const { currentVersion, currentSdk, latestVersion, latestLink } =
    useVersions(versions)

  const handleVersionSelect = React.useCallback(
    (newVersion: string) => {
      router.push(
        latestVersion === newVersion
          ? latestLink
          : `/reference/${currentSdk}/${newVersion}`
      )
    },
    [versions]
  )

  return (
    <Select value={currentVersion || ''} onValueChange={handleVersionSelect}>
      <SelectTrigger
        name="version-select"
        aria-label="Select a version"
        className={'font-semi-bold ml-auto w-[80px] font-mono text-sm'}
      >
        <SelectValue placeholder="Select a version">
          {currentVersion}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Stable releases</SelectLabel>
          {versions.map((version) => (
            <SelectItem
              key={version}
              value={version}
              className={cn(
                'text-xs',
                currentVersion === version && 'font-semibold'
              )}
            >
              Version {version}{' '}
              {version === latestVersion && (
                <Badge variant="default" className="ml-2 text-white">
                  Latest
                </Badge>
              )}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
