import Breadcrumbs from '@/components/Breadcrumbs'
import GuideList from '@/components/guides/GuideList'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Heading } from '@/components/ui/heading'
import { allDocs } from '@/content'
import Link from 'next/link'

export default function GuidesPage() {
  const allGuides = allDocs.filter((doc) => doc.slug.startsWith('guides/'))

  const allTags = allGuides
    .reduce((acc: string[], guide) => {
      if (guide.tags) {
        guide.tags.forEach((tag) => {
          if (!acc.includes(tag)) {
            acc.push(tag)
          }
        })
      }
      return acc
    }, [])
    .sort()

  return (
    <>
      <div className="mx-auto flex h-full max-w-7xl flex-col gap-y-10 px-4 py-16">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={'/'}>Docs</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Guides</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Heading level={1}>Guides</Heading>
      </div>
      <div className="-mx-2 border-t px-4 sm:-mx-6 lg:-mx-8">
        <div className="mx-auto max-w-7xl px-4">
          <GuideList guides={allGuides} allTags={allTags} />
        </div>
      </div>
    </>
  )
}
