import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './BackButton.module.css'

export default function BackButton ({ back = '', backText = 'back' }) {
  return (
    <Link href={back} as={back}>
      <a className={styles.backButtonContainer}>
        <span className={styles.backButton}>
          <i className="fas fa-arrow-left"></i>
          <span className={styles.backText}>{backText}</span>
        </span>
      </a>
    </Link>
  )
}

BackButton.propTypes = {
  back: PropTypes.string,
  backText: PropTypes.string,
}
