import { Doc } from '@/content'
import React, { Suspense } from 'react'

import { GuideFilters } from './GuideFilters'
import GuideList from './GuideList'

interface Props {
  guides: Doc[]
  allTags: string[]
}

// TODO change this to use server actions
const GuidePage: React.FC<Props> = ({ guides, allTags }) => {
  return (
    <div>
      <div className="gap-x-4 lg:grid lg:grid-cols-[280px,1fr]">
        <div className="border-r">
          <aside
            aria-label="Sidebar"
            className="sticky top-[calc(var(--header-height)+1px+2rem)] mt-10 hidden max-h-[calc(100vh-var(--header-height)-3rem)] w-80 space-y-10 overflow-y-auto lg:block"
          >
            <GuideFilters allTags={allTags} />
          </aside>
        </div>
        <Suspense>
          <GuideList guides={guides} className="relative mx-8 mt-10 w-full" />
        </Suspense>
      </div>
    </div>
  )
}

export default GuidePage
