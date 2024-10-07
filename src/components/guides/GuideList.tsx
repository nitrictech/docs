import { Doc } from '@/content'
import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { title } from 'radash'
import GuideItem from './GuideItem'
import { Checkbox } from '../ui/checkbox'

interface Props {
  guides: Doc[]
  allTags: string[]
}

const GuideList: React.FC<Props> = ({ guides, allTags }) => {
  allTags = ['python', 'node', 'go']

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
                <Checkbox id={tag} />
                <label
                  htmlFor={tag}
                  className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {title(tag)}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      <ul className="space-y-4">
        {guides.map((guide) => (
          <li key={guide.title}>
            <GuideItem guide={guide} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GuideList
