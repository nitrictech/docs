import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'
import * as Fathom from 'fathom-client'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'
import { useEffect } from 'react'
import { useVersions } from '@/lib/hooks/use-versions'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('routeChangeStart', onRouteChange)
Router.events.on('hashChangeStart', onRouteChange)

// Record a pageview when route changes
Router.events.on('routeChangeComplete', (url: string, routeProps) => {
  if (!routeProps.shallow && process.env.NEXT_PUBLIC_FATHOM_SITE_ID) {
    Fathom.trackPageview({ url })
  }
})

export default function App({ Component, pageProps }) {
  const router = useRouter()

  // Initialize Fathom when the app loads
  useEffect(() => {
    Fathom.load(`${process.env.NEXT_PUBLIC_FATHOM_SITE_ID}`, {
      // disable for preview branches in Vercel
      excludedDomains: ['vercel.app'],
    })
  }, [])

  const { isNotLatest, isReferenceDocs, currentVersion } = useVersions()

  const titleSuffix =
    isReferenceDocs && isNotLatest
      ? `Nitric ${currentVersion} Documentation`
      : 'Nitric Documentation'

  const title =
    router.pathname === '/'
      ? 'Nitric Documentation'
      : `${pageProps.title_meta || pageProps.title} - ${titleSuffix}`
  const description =
    pageProps.description ||
    'Documentation for the Nitric cloud application framework.'

  const baseUrl =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? 'https://nitric.io'
      : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`

  const cleanedPath = router.asPath.split('#')[0].split('?')[0]

  const ogTitle =
    router.pathname === '/' ? 'Nitric Docs' : title.split(' - ')[0]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://nitric.io/docs" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Nitric Docs" />
        <meta
          property="og:image"
          content={`${baseUrl}/docs/api/og?title=${encodeURIComponent(
            ogTitle
          )}&description=${encodeURIComponent(description)}`}
        />
        <meta property="og:image:alt" content="Nitric Docs Og Image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@nitric_io" />
        <meta property="twitter:creator" content="@nitric_io" />
        <meta
          name="robots"
          content={
            process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
              ? 'index,follow'
              : 'noindex,nofollow'
          }
        />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} />
        <link
          rel="canonical"
          href={
            baseUrl + (cleanedPath === '/' ? '/docs' : `/docs${cleanedPath}`)
          }
        />
        <link
          rel="alternate"
          title="RSS feed for blog posts"
          type="application/rss+xml"
          href={`${baseUrl}/rss.xml`}
        />
      </Head>
      <MDXProvider components={mdxComponents as any}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
