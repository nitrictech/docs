import { visit } from 'unist-util-visit'
import { toString } from 'mdast-util-to-string'
import { remark } from 'remark'
import slugify from 'slugify'

/**
 * Extracts TOC headings from markdown file and adds it to the file's data object.
 */
export function remarkTocHeadings() {
  return (tree, file) => {
    const toc = []
    visit(tree, 'heading', (node) => {
      if (node.depth !== 2) return // ignore h1 and h3+

      const textContent = toString(node)
      toc.push({
        value: textContent,
        url:
          '#' +
          slugify(textContent, {
            lower: true,
            strict: true,
          }),
        depth: node.depth,
      })
    })
    file.data.toc = toc
  }
}

/**
 * Passes markdown file through remark to extract TOC headings
 *
 * @param {string} markdown
 * @return {*}  {Promise<Toc>}
 */
export async function extractTocHeadings(markdown) {
  const vfile = await remark().use(remarkTocHeadings).process(markdown)
  // @ts-ignore
  return vfile.data.toc
}
