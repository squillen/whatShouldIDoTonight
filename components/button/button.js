import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './button.module.css'

export default function Button (props) {
  const {
    as = '',
    customStyle,
    href,
    inlineStyle,
    label = 'click',
    onClick = () => {},
    size,
  } = props
  const button = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={customStyle || styles[size] || styles.button}
      style={inlineStyle}
      onClick={onClick}
    >
      {label}
    </motion.div>
  )
  return (
    href
      ? (
        <Link href={href} as={`${as || href}`}>
          <a onClick={onClick} className={styles.link}>
            {button}
          </a>
        </Link>
      )
      : button
  )
}

Button.propTypes = {
  as: PropTypes.string,
  customStyle: PropTypes.string,
  href: PropTypes.string,
  inlineStyle: PropTypes.object,
  label: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.string,
}
