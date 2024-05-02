import { mdxAnnotations } from 'mdx-annotations'
import remarkGfm from 'remark-gfm'
import codeImport from 'remark-code-import'

export const remarkPlugins = [mdxAnnotations.remark, remarkGfm, codeImport]
