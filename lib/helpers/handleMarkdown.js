import remark from 'remark'
import html from 'remark-html'
import * as guide from 'remark-preset-lint-markdown-style-guide'
import * as breaks from 'remark-breaks'

export default async function handleMarkdown (markdown) {
  try {
    const cleanedMarkdown = markdown.replace(/<br\s*\/?>/g, '\n')
    const processedContent = await remark()
      .use(guide)
      .use(breaks)
      .use(html)
      .process(cleanedMarkdown)
    return processedContent.toString()
  } catch (e) {
    console.error(e)
  }
}
