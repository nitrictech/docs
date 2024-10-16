import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import { extractTocHeadings } from './src/mdx/remark-toc-headings.mjs'
import path from 'path'
import fs from 'fs'

const contentDirPath = 'docs'

const branch = process.env.NEXT_PUBLIC_GITHUB_BRANCH || 'main'

const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: '**/*.mdx',
  fields: {
    title_seo: {
      type: 'string',
      description:
        'The meta title of the doc, this will override the title extracted from the markdown and the nav title',
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
    tags: {
      type: 'list',
      of: {
        type: 'string',
      },
      description: 'The tags of the post, used by guides',
    },
    languages: {
      type: 'list',
      of: {
        type: 'string',
      },
      description: 'The languages of the content, used by guides',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath,
    },
    toc: { type: 'json', resolve: (doc) => extractTocHeadings(doc.body.raw) },
    title: {
      type: 'string',
      resolve: async (doc) => {
        const headings = await extractTocHeadings(doc.body.raw, [1])

        return headings[0]?.value
      },
    },
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
