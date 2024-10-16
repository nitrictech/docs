'use client'

import React from 'react'
import { GuideItem } from './GuideItem'
import { Doc } from '@/content'
import { cn } from '@/lib/utils'
import useParams from '@/hooks/useParams'

interface Props {
  guides: Doc[]
  className?: string
}

const GuideList: React.FC<Props> = ({ className, guides }) => {
  const { searchParams } = useParams()
  const selectedTags = searchParams?.get('tags')?.split(',') || []
  const selectedLangs = searchParams?.get('langs')?.split(',') || []

  const filteredGuides = guides
    .filter((guide) => {
      let include = true

      if (selectedLangs.length) {
        include = selectedLangs.some((lang) => guide.languages?.includes(lang))
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
