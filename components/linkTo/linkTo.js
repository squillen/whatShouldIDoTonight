
import PropTypes from 'prop-types'
import Link from 'next/link'

export default function Layout ({ href, label }) {
  return (
    <Link href={href}>
      <a target="_blank">{label}</a>
    </Link>
  )
}

Layout.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}
