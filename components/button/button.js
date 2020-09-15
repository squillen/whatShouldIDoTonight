import styles from './button.module.css'
import Link from 'next/link'

export default function Button (props) {
  const {
    as = '',
    customStyle,
    href,
    inlineStyle,
    label = 'click',
    onClick = () => {}
  } = props
  const button = (
    <div className={customStyle || styles.button} style={inlineStyle} onClick={onClick}>
      {label}
    </div>
  )
  return (
    href
      ? (
        <Link href={href} as={as}>
          <a onClick={onClick} className={styles.link}>
            {button}
          </a>
        </Link>
      )
      : button
  )
}
