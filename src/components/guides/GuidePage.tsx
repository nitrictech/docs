import { Doc } from '@/content'
import React, { Suspense } from 'react'

import { GuideFilters } from './GuideFilters'
import GuideList from './GuideList'
import { Button } from '../ui/button'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import GuideMobileFilters from './GuideMobileFilters'

interface Props {
  guides: Doc[]
  allTags: string[]
}

const GuidePage: React.FC<Props> = ({ guides, allTags }) => {
  return (
    <div className="gap-x-4 lg:grid lg:grid-cols-[280px,1fr]">
      <div className="hidden border-r pb-10 lg:block">
        <aside
          aria-label="Sidebar"
          className="sticky top-[calc(var(--header-height)+1px+2rem)] mt-10 max-h-[calc(100vh-var(--header-height)-3rem)] w-80 space-y-10 overflow-y-auto"
        >
          <GuideFilters allTags={allTags} />
        </aside>
      </div>
      <div className="relative -top-5 lg:hidden">
        <GuideMobileFilters allTags={allTags} />
      </div>
      <Suspense>
        <GuideList
          guides={guides}
          className="relative mx-2 my-4 w-full lg:mx-8 lg:my-10"
        />
      </Suspense>
    </div>
  )
}

export default GuidePage