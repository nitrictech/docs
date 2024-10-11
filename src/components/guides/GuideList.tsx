'use client'

import React from 'react'
import GuideItem from './GuideItem'
import { Doc } from '@/content'
import { cn } from '@/lib/utils'
import useParams from '@/hooks/useParams'
import useLang from '@/hooks/useLang'

const langPathMap: Record<string, string> = {
  javascript: 'guides/nodejs',
  typescript: 'guides/nodejs',
  python: 'guides/python',
  go: 'guides/go',
  dart: 'guides/dart',
}

const isLangSlug = (slug: string) => {
  return Object.values(langPathMap).some((path) => slug.startsWith(path))
}

interface Props {
  guides: Doc[]
  className?: string
}

const GuideList: React.FC<Props> = ({ className, guides }) => {
  const { searchParams } = useParams()
  const selectedTags = searchParams?.get('tags')?.split(',') || []
  const { currentLanguage } = useLang()
  const filteredGuides = guides
    .filter((guide) => {
      let include = true

      if (isLangSlug(guide.slug)) {
        include = guide.slug.startsWith(langPathMap[currentLanguage])
      }

      if (!selectedTags.length) return include

      return include && selectedTags.some((tag) => guide.tags?.includes(tag))
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return filteredGuides.length === 0 ? (
    <div className={className}>
      <p className="text-lg">
        No guides found. Please try selecting different filters.
      </p>
    </div>
  ) : (
    <ul className={cn('space-y-4', className)}>
      {filteredGuides.map((guide) => (
        <li key={guide.slug}>
          <GuideItem guide={guide} />
        </li>
      ))}
    </ul>
  )
}

export default GuideList
