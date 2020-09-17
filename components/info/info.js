import PropTypes from 'prop-types'
import styles from './info.module.css'

export default function Info ({ label }) {
  return (
    <div className={styles.infoContainer}>
      <span>
        <span className={styles.iconContainer}>
          <i className="fas fa-exclamation"></i>
        </span>
        <span className={styles.textContainer}>{label}</span>
      </span>
    </div>
  )
}

Info.propTypes = {
  label: PropTypes.string.isRequired
}
