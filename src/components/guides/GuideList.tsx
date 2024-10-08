'use client'

import { Doc } from '@/content'
import React from 'react'
import GuideItem from './GuideItem'
import { Checkbox } from '../ui/checkbox'
import useParams from '@/hooks/useParams'
import { LanguageSwitch } from './LanguageSwitch'
import useLang from '@/hooks/useLang'

interface Props {
  guides: Doc[]
  allTags: string[]
}

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

const GuideList: React.FC<Props> = ({ guides, allTags }) => {
  const { searchParams, setParams } = useParams()
  const selectedTags = searchParams.get('tags')?.split(',') || []
  const { currentLanguage } = useLang()

  const filteredGuides = guides.filter((guide) => {
    let include = true

    if (isLangSlug(guide.slug)) {
      include = guide.slug.startsWith(langPathMap[currentLanguage])
    }

    if (!selectedTags.length) return include

    return include && selectedTags.some((tag) => guide.tags?.includes(tag))
  })

  return (
    <div>
      <div className="gap-x-4 lg:grid lg:grid-cols-[280px,1fr]">
        <div className="border-r">
          <aside
            aria-label="Sidebar"
            className="sticky top-[calc(var(--header-height)+1px+2rem)] mt-10 hidden max-h-[calc(100vh-var(--header-height)-3rem)] w-80 space-y-10 overflow-y-auto lg:block"
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
            <LanguageSwitch />
          </aside>
        </div>
        <ul className="relative mx-8 mt-10 w-full space-y-4">
          {filteredGuides.map((guide) => (
            <li key={guide.slug}>
              <GuideItem guide={guide} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GuideList
