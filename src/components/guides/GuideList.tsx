'use client'

import { Doc } from '@/content'
import React from 'react'
import GuideItem from './GuideItem'
import { Checkbox } from '../ui/checkbox'
import useParams from '@/hooks/useParams'

interface Props {
  guides: Doc[]
  allTags: string[]
}

const GuideList: React.FC<Props> = ({ guides, allTags }) => {
  const { searchParams, setParams } = useParams()
  const selectedTags = searchParams.get('tags')?.split(',') || []

  const filteredGuides = guides.filter((guide) => {
    if (!selectedTags.length) return true
    return selectedTags.some((tag) => guide.tags?.includes(tag))
  })

  return (
    <div className="mt-10 grid grid-cols-[280px,1fr]">
      <aside
        aria-label="Sidebar"
        className="sticky top-[calc(var(--header-height)+1px+2rem)] max-h-[calc(100vh-var(--header-height)-3rem)] w-80 overflow-y-auto"
      >
        <ul className="space-y-4">
          {allTags.map((tag) => (
            <li key={tag}>
              <div className="flex items-center space-x-4">
                <Checkbox
                  id={tag}
                  checked={selectedTags.includes(tag)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      setParams('tags', [...selectedTags, tag].join(','))
                    } else {
                      setParams(
                        'tags',
                        selectedTags
                          .filter((selectedTag) => selectedTag !== tag)
                          .join(','),
                      )
                    }
                  }}
                  className="h-5 w-5 border-primary-400 data-[state=checked]:bg-primary"
                />
                <label
                  htmlFor={tag}
                  className="cursor-pointer text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {tag}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      <ul className="space-y-4">
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
