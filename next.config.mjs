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
        destination: `/docs/guides/nodejs${source.replace(
          /^(\/docs\/guides\/|\/docs\/)/,
          '/'
        )}`,
        basePath: false,
        permanent: true,
      })),
      ...[
        '/docs/local-dashboard',
        '/docs/installation',
        '/docs/deployment',
        '/docs/language-support',
        '/docs/guides/deploy',
        '/docs/guides/github-actions',
      ].map((source) => ({
        source: source,
        destination: `/docs/getting-started${source.replace(
          /^(\/docs\/guides\/|\/docs\/)/,
          '/'
        )}`,
        basePath: false,
        permanent: true,
      })),
      ...['/docs/guides/text-prediction', '/docs/guides/create-histogram'].map(
        (source) => ({
          source: source,
          destination: `/docs/guides/python${source.replace(
            /^(\/docs\/guides\/|\/docs\/)/,
            '/'
          )}`,
          basePath: false,
          permanent: true,
        })
      ),
      {
        source: '/docs/comparison/:slug',
        destination: '/docs/concepts/comparison/:slug',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/assets/faq',
        destination: '/docs/faq',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/assets',
        destination: '/docs/concepts/introduction',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/concepts',
        destination: '/docs/concepts/introduction',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/env',
        destination: '/docs/reference/env',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/support/eject',
        destination: '/docs/concepts/eject',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/access-control',
        destination: '/docs/concepts/access-control',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/assets/comparison/:path*',
        destination: '/docs/faq/comparison/:path*',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/getting-started',
        destination: '/docs/getting-started/introduction',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started',
        destination: '/docs/getting-started/quickstart',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started/concepts',
        destination: '/docs/concepts/introduction',
        basePath: false,
        permanent: true,
      },
      ...[
        '/docs/guides/getting-started/quickstart',
        '/docs/guides/getting-started/language-support',
        '/docs/guides/getting-started/installation',
        '/docs/guides/getting-started/local-dashboard',
        '/docs/guides/getting-started/deployment',
        '/docs/guides/getting-started/github-actions',
        '/docs/guides/getting-started/gitlab-ci',
        '/docs/guides/getting-started/azure-pipelines',
        '/docs/guides/getting-started/google-cloud-build',
      ].map((source) => ({
        source: source,
        destination: `/docs/${source.replace(
          /^(\/docs\/guides\/|\/docs\/)/,
          ''
        )}`,
        basePath: false,
        permanent: true,
      })),
      {
        source: '/docs/faq/common-questions',
        destination: '/docs/faq',
        basePath: false,
        permanent: true,
      },
      ...[
        'aws-cdk',
        'aws-sam',
        'gcp-deployment-manager',
        'bicep',
        'pulumi',
        'terraform',
        'sst',
        'encore',
        'winglang',
        'ampt',
      ].map((page) => ({
        source: `/docs/faq/comparison/${page}`,
        destination: `/docs/concepts/comparison/${page}`,
        basePath: false,
        permanent: true,
      })),
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
