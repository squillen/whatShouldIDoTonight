import remark from 'remark'
import html from 'remark-html'

export default async function handleMarkdown (text) {
  const processedContent = await remark()
    .use(html)
    .process(text)
  return processedContent.toString()
}
