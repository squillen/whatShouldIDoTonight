import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import styles from './BackButton.module.css'

export default function BackButton ({ backText = 'back' }) {
  const router = useRouter()
  return (
    <a className={styles.backButtonContainer} onClick={router.back}>
      <span className={styles.backButton}>
        <i className="fas fa-arrow-left"></i>
        <span className={styles.backText}>{backText}</span>
      </span>
    </a>
  )
}

BackButton.propTypes = {
  backText: PropTypes.string,
}
