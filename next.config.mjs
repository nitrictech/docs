import nextMDX from '@next/mdx'
import { createContentlayerPlugin } from 'next-contentlayer2'
import { mdxOptions } from './src/mdx/mdx-options.mjs'
import path from 'path'

const withMDX = nextMDX({
  options: mdxOptions,
})

const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/docs',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    outputFileTracingIncludes: {
      '/**/*': ['./src/app/**/*.mdx'],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
      },
    ],
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
        '/docs/reference/go/secrets/secret-version',
        '/docs/reference/go/secrets/secret-latest',
        '/docs/reference/go/secrets/secret-version-access',
        '/docs/reference/go/storage/bucket-file',
        '/docs/reference/go/storage/bucket-files',
        '/docs/reference/go/storage/bucket-file-read',
        '/docs/reference/go/storage/bucket-file-write',
        '/docs/reference/go/storage/bucket-file-delete',
        '/docs/reference/go/storage/bucket-file-downloadurl',
        '/docs/reference/go/storage/bucket-file-uploadurl',
      ].map((source) => ({
        source: source,
        destination: `/docs/reference/go`,
        basePath: false,
        permanent: true,
      })),
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
          '/',
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
          '/',
        )}`,
        basePath: false,
        permanent: true,
      })),
      ...['/docs/guides/text-prediction', '/docs/guides/create-histogram'].map(
        (source) => ({
          source: source,
          destination: `/docs/guides/python${source.replace(
            /^(\/docs\/guides\/|\/docs\/)/,
            '/',
          )}`,
          basePath: false,
          permanent: true,
        }),
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
        source: '/docs/assets/eject',
        destination: '/docs/faq',
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
        source: '/docs/assets/custom-containers',
        destination: '/docs/reference/custom-containers',
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
        destination: '/docs/getting-started/quickstart',
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
      {
        source: '/docs/getting-started/concepts',
        destination: '/docs/concepts/introduction',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/assets/env',
        destination: '/docs/reference/env',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/assets/resources-overview',
        destination: '/docs/getting-started/resources-overview',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/assets/examples',
        destination: '/docs/guides/examples',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/assets/access-control',
        destination: '/docs/concepts/access-control',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/concepts/eject',
        destination: '/docs/faq',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started/deploy',
        destination: '/docs/getting-started/deployment',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started/language-support',
        destination: '/docs/concepts/language-support',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started/nodejs/:slug*',
        destination: '/docs/guides/nodejs/:slug*',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started/dart/:slug*',
        destination: '/docs/guides/dart/:slug*',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started/go/:slug*',
        destination: '/docs/guides/go/:slug*',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started/jvm/:slug*',
        destination: '/docs/guides/jvm/:slug*',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/guides/getting-started/python/:slug*',
        destination: '/docs/guides/python/:slug*',
        basePath: false,
        permanent: true,
      },
      ...[
        'azure-pipelines',
        'gitlab-ci',
        'github-actions',
        'google-cloud-build',
      ].map((source) => ({
        source: `/docs/guides/getting-started/${source}`,
        destination: `/docs/guides/deploying/${source}`,
        basePath: false,
        permanent: true,
      })),
      ...[
        '/docs/guides/getting-started/quickstart',
        '/docs/guides/getting-started/installation',
        '/docs/guides/getting-started/local-dashboard',
        '/docs/guides/getting-started/deployment',
      ].map((source) => ({
        source: source,
        destination: `/docs/${source.replace(
          /^(\/docs\/guides\/|\/docs\/)/,
          '',
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
      {
        source: '/docs/reference/pulumi',
        destination: '/docs/reference/providers/pulumi',
        basePath: false,
        permanent: false,
      },
      {
        source: '/docs/reference/pulumi/custom-providers',
        destination: '/docs/reference/providers/pulumi/custom',
        basePath: false,
        permanent: false,
      },
      {
        source: '/docs/reference/pulumi/pulumi-cloud',
        destination: '/docs/reference/providers/pulumi#pulumi-cloud',
        basePath: false,
        permanent: false,
      },
      {
        source: '/docs/reference/dart/v1',
        destination: '/docs/reference/dart',
        basePath: false,
        permanent: true,
      },
      {
        source: '/docs/reference/go/api/api-details',
        destination: '/docs/reference/go',
        basePath: false,
        permanent: true,
      },
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

const withContentlayer = createContentlayerPlugin({
  configPath: path.resolve(process.cwd(), './contentlayer.config.ts'),
})

export default withContentlayer(withMDX(nextConfig))
