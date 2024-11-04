'use client'

import React from 'react'
import { GuideItem } from './GuideItem'
import { cn } from '@/lib/utils'
import useParams from '@/hooks/useParams'
import { allGuides } from '@/content'

interface Props {
  className?: string
}

const GuideList: React.FC<Props> = ({ className }) => {
  const { searchParams } = useParams()
  const selectedTags = searchParams?.get('tags')?.split(',') || []
  const selectedLangs = searchParams?.get('langs')?.split(',') || []

  const filteredGuides = allGuides
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
