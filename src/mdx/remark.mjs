import { mdxAnnotations } from 'mdx-annotations'
import remarkGfm from 'remark-gfm'
import mdxMermaid from 'mdx-mermaid'

export const remarkPlugins = [
  mdxAnnotations.remark,
  remarkGfm,
  [
    mdxMermaid,
    {
      output: 'svg',
      mermaid: {
        theme: 'base',
        themeVariables: {
          primaryColor: '#ff0000',
          secondaryColor: '#00ff00',
          tertiaryColor: '#0000ff',
          textColor: '#000000',
          fontSize: '14px',
          fontFamily: 'Fira Code, monospace',
        },
      },
    },
  ],
]
