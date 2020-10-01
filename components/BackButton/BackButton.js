import PropTypes from 'prop-types'
import styles from './BackButton.module.css'

export default function BackButton ({ back = '', backText = 'back' }) {
  return (
    <a className={styles.backButton} onClick={back}>
      <span><i className="fas fa-arrow-left"></i><span className={styles.backText}>{backText}</span></span>
    </a>
  )
}

BackButton.propTypes = {
  back: PropTypes.func,
  backText: PropTypes.string
}
