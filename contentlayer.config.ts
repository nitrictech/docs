import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { extractTocHeadings } from './src/mdx/remark-toc-headings.mjs'
import { title } from 'radash'
import path from 'path'
import fs from 'fs'

const contentDirPath = 'docs'

const branch = process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The meta title of the doc',
    },
    nav_title: {
      type: 'string',
      description: 'The title of the doc in the navigation',
    },
    description: {
      type: 'string',
      description: 'The description of the doc',
    },
    image: {
      type: 'string',
      description: 'The image of the doc',
    },
    image_alt: {
      type: 'string',
      description: 'The image alt of the doc',
    },
    disable_edit: {
      type: 'boolean',
      description: 'Disable the github edit button',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    toc: { type: 'json', resolve: (doc) => extractTocHeadings(doc.body.raw) },
    editUrl: {
      type: 'string',
      resolve: (doc) =>
        `https://github.com/nitrictech/docs/edit/${branch}/docs/${doc._raw.sourceFilePath}`,
    },
    lastModified: {
      type: 'date',
      resolve: (doc) => {
        // Get the full path to the markdown file
        const filePath = path.join(
          process.cwd(),
          contentDirPath,
          doc._raw.sourceFilePath,
        )
        // Extract and return the last modified date
        const stats = fs.statSync(filePath)
        return stats.mtime // This is the last modified date
      },
    },
  },
}))

export default makeSource({
  contentDirPath,
  documentTypes: [Doc],
})
