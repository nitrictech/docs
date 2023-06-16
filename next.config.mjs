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
    domains: ['github.com', 'raw.githubusercontent.com']
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
        permanent: false,
      },
      {
        source: '/docs/reference',
        destination: '/docs#libraries',
        basePath: false,
        permanent: false,
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
