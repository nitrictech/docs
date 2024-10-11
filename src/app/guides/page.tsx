import GuidePage from '@/components/guides/GuidePage'
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
import { BASE_URL } from '@/lib/constants'
import Link from 'next/link'
import { Metadata } from 'next/types'

export const metadata: Metadata = {
  title: 'Guides',
  description:
    'Guides and tutorials for the Nitric cloud application framework.',
  openGraph: {
    siteName: 'Nitric Docs',
    locale: 'en_US',
    url: `${BASE_URL}/docs/guides`,
    images: [
      {
        url: `${BASE_URL}/docs/og?title=${encodeURIComponent('Guides')}&description=${encodeURIComponent('Guides and tutorials for the Nitric cloud application framework.')}`,
        alt: 'Nitric Docs',
      },
    ],
  },
  alternates: {
    canonical: `${BASE_URL}/docs/guides`,
  },
}

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
          <GuidePage guides={allGuides} allTags={allTags} />
        </div>
      </div>
    </>
  )
}
