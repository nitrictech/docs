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

  const title =
    router.pathname === '/'
      ? 'Nitric Documentation'
      : `${pageProps.title} - Nitric Documentation`
  const description =
    pageProps.description ||
    'Documentation for the Nitric cloud application framework.'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="og:title" content={title} />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <meta name="og:url" content="https://nitric.io/docs" />
        <meta
          name="og:image"
          content="https://nitric.io/images/og/og_image.png"
        />
        <meta name="og:type" content="website" />
        <link rel="icon" href={`${router.basePath}/favicon.ico`} />
      </Head>
      <MDXProvider components={mdxComponents as any}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
