import nextMDX from '@next/mdx'
import withSearch from './src/mdx/search.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { recmaPlugins } from './src/mdx/recma.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/docs',
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  images: {
    domains: ['github.com', 'raw.githubusercontent.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        basePath: false,
        permanent: false,
      },
      {
        source: '/docs/guides',
        destination: '/docs',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/reference',
        destination: '/docs#libraries',
        basePath: false,
        permanent: true,
      },
      // redirects from old docs
      ...[
        '/docs/testing',
        '/docs/guides/debugging',
        '/docs/guides/serverless-rest-api-example',
        '/docs/guides/graphql',
        '/docs/guides/serverless-api-with-planetscale-and-prisma',
        '/docs/guides/nitric-and-supabase',
        '/docs/guides/api-with-nextjs',
        '/docs/guides/twilio',
        '/docs/guides/stripe',
        '/docs/guides/secure-api-auth0',
        '/docs/guides/byo-database',
      ].map((source) => ({
        source: source,
        destination: `/docs/guides/getting-started/nodejs${source.replace(
          /^(\/docs\/guides\/|\/docs\/)/,
          '/'
        )}`,
        basePath: false,
        permanent: true,
      })),
      ...[
        '/docs/local-dashboard',
        '/docs/concepts',
        '/docs/installation',
        '/docs/deployment',
        '/docs/language-support',
        '/docs/guides/github-actions',
      ].map((source) => ({
        source: source,
        destination: `/docs/guides/getting-started${source.replace(
          /^(\/docs\/guides\/|\/docs\/)/,
          '/'
        )}`,
        basePath: false,
        permanent: true,
      })),
      ...['/docs/guides/text-prediction', '/docs/guides/create-histogram'].map(
        (source) => ({
          source: source,
          destination: `/docs/guides/getting-started/python${source.replace(
            /^(\/docs\/guides\/|\/docs\/)/,
            '/'
          )}`,
          basePath: false,
          permanent: true,
        })
      ),
      {
        source: '/docs/comparison/:slug',
        destination: '/docs/assets/comparison/:slug',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/faq',
        destination: '/docs/assets/faq',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/env',
        destination: '/docs/assets/env',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/support/eject',
        destination: '/docs/assets/eject',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/access-control',
        destination: '/docs/assets/access-control',
        basePath: false,
        permanent: true,
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: '',
          },
          {
            key: 'X-Robots-Tag',
            value: 'all',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
        ],
      },
    ]
  },
  experimental: {
    scrollRestoration: true,
  },
}

export default withSearch(withMDX(nextConfig))
