'use client'

import React, { useMemo } from 'react'
import { GuideItem } from './GuideItem'
import { cn } from '@/lib/utils'
import useParams from '@/hooks/useParams'
import type { Guide } from '@/content'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

interface Props {
  className?: string
  allGuides: Guide[]
}

const GuideList: React.FC<Props> = ({ className, allGuides }) => {
  const { searchParams, setParams } = useParams()
  const sortBy = searchParams?.get('sort') || 'published_date'
  const selectedTags = searchParams?.get('tags')?.split(',') || []
  const selectedLangs = searchParams?.get('langs')?.split(',') || []

  const filteredGuides = useMemo(() => {
    return allGuides
      .filter((guide) => {
        let include = true

        if (selectedLangs.length) {
          include = selectedLangs.some((lang) =>
            guide.languages?.includes(lang),
          )
        }

        if (!selectedTags.length) return include

        return include && selectedTags.some((tag) => guide.tags?.includes(tag))
      })
      .sort((a, b) => {
        if (sortBy === 'published_date') {
          const dateDiff =
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()

          return dateDiff !== 0 ? dateDiff : a.title.localeCompare(b.title)
        }

        return sortBy === 'alpha-reverse'
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title)
      })
  }, [allGuides, selectedTags, selectedLangs, sortBy])

  return filteredGuides.length === 0 ? (
    <div className={className}>
      <p className="text-lg">
        No guides found. Please try selecting different filters.
      </p>
    </div>
  ) : (
    <div className={cn('flex flex-col gap-4', className)}>
      <Select
        value={sortBy}
        onValueChange={(val) => {
          // This is necessary to fix a ui update delay causing 200ms lag
          setTimeout(() => setParams('sort', val), 0)
        }}
      >
        <SelectTrigger
          aria-label="Sort options"
          className="ml-auto max-w-52 bg-white/5 text-xs font-medium ring-1 ring-inset ring-zinc-300/10 hover:bg-white/7.5 dark:bg-white/2.5 dark:text-zinc-400 dark:hover:bg-white/5 md:flex"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent position="item-aligned">
          <SelectItem value="published_date">Sort by Date Published</SelectItem>
          <SelectItem value="alpha">Sort Alphabetically (A-Z)</SelectItem>
          <SelectItem value="alpha-reverse">
            Sort Alphabetically (Z-A)
          </SelectItem>
        </SelectContent>
      </Select>
      <ul className={'space-y-4'}>
        {filteredGuides.map((guide) => (
          <li key={guide.slug}>
            <GuideItem guide={guide} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GuideList
