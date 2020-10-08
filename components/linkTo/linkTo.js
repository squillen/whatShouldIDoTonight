
import PropTypes from 'prop-types'
import Link from 'next/link'

export default function Layout ({ href, label, target = '_blank' }) {
  return (
    <Link href={href} as={href}>
      {
        target
          ? <a target={target}>{label}</a>
          : <a>{label}</a>
      }
    </Link>
  )
}

Layout.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  target: PropTypes.bool
}
