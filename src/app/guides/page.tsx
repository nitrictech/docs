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

  return (
    <div className="mx-auto flex h-full max-w-7xl flex-col gap-y-10 px-4 pb-10 pt-16">
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
      <GuideList guides={allGuides} allTags={[]} />
    </div>
  )
}
