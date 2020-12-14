const ReactMarkdown = require('react-markdown')

function flatten (text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text)
}

function HeadingRenderer (props) {
  var children = React.Children.toArray(props.children)
  var text = children.reduce(flatten, '')
  var slug = text.toLowerCase().replace(/\W/g, '-')
  return React.createElement('h' + props.level, { id: slug }, props.children)
}

function LinkRenderer (props) {
  return React.createElement('a', { href: props.href, target: '_blank', rel: 'nofollow' }, props.children)
}

const renderers = {
  heading: HeadingRenderer,
  link: LinkRenderer,
}

export default function handleMarkdown (text) {
  return (
    <ReactMarkdown
      source={text}
      escapeHtml={false}
      linkTarget="_blank"
      renderers={renderers}
    />
  )
}
