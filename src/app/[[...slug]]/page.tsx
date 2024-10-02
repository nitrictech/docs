import { notFound } from 'next/navigation'
import MDXContent from '@/components/MDXContent'
import { Metadata } from 'next/types'
import { BASE_URL } from '@/lib/constants'
import { allDocs } from '@/content'
import { getNavInfo } from '@/lib/getNavInfo'
import { title } from 'radash'
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] }
}): Promise<Metadata | undefined> {
  const slug = params.slug ? decodeURI(params.slug.join('/')) : ''
  const doc = allDocs.find((p) => p.slug === slug)

  if (!doc) {
    return
  }

  const { navItem } = getNavInfo(doc)

  let seoTitle = doc.slug
    ? `${title(doc.slug.split('/')[0])}: ${navItem?.title}`
    : 'Welcome to Nitric Docs'

  if (navItem && navItem.breadcrumbParentItem?.title) {
    seoTitle = `${navItem.breadcrumbParentItem.title}: ${navItem.title}`
  }

  const openGraph: OpenGraph = {
    siteName: 'Nitric Docs',
    locale: 'en_US',
    url: `${BASE_URL}/docs/${doc.slug}`,
    images: [
      {
        url: `${BASE_URL}/docs/og?title=${encodeURIComponent(doc.title || 'Nitric Docs')}&description=${encodeURIComponent(doc.description || '')}`,
        alt: 'Nitric Docs',
      },
    ],
  }

  if (doc.image && doc.image_alt) {
    openGraph.images = [
      {
        url: doc.image,
        alt: doc.image_alt,
      },
    ]
  }

  return {
    title: seoTitle,
    description: doc.description,
    openGraph,
    twitter: {
      card: 'summary_large_image',
    },
    alternates: {
      canonical: `${BASE_URL}/docs/${doc.slug}`,
    },
  }
}

export const generateStaticParams = async () => {
  return allDocs.map((p) => ({
    slug: p.slug.split('/').map((name) => decodeURI(name)),
  }))
}

export default function Page({ params }: { params: { slug: string[] } }) {
  const slug = params.slug ? decodeURI(params.slug.join('/')) : ''

  const doc = allDocs.find((p) => p.slug === slug)

  if (!doc) {
    return notFound()
  }

  return <MDXContent mdx={doc.body.raw} />
}
