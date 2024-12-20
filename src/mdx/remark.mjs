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
        // TODO: Relocate theme config
        themeVariables: {
          primaryColor: '#242037',
          lineColor: '#cad3f5',
          secondaryColor: '#42424a',
          tertiaryColor: '#0000ff',
          primaryTextColor: '#cad3f5',
          fontSize: '14px',
          fontFamily: 'Fira Code, monospace',
        },
      },
    },
  ],
]
