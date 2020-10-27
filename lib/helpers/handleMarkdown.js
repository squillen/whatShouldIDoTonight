const ReactMarkdown = require('react-markdown')

export default function handleMarkdown (text) {
  return <ReactMarkdown
    source={text}
    escapeHtml={false}
    linkTarget="_blank"
  />
}
