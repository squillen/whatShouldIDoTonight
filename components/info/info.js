import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamation } from '@fortawesome/free-solid-svg-icons'
import styles from './info.module.css'

export default function Info ({ label }) {
  return (
    <div className={styles.infoContainer}>
      <span>
        <span className={styles.iconContainer}>
          <FontAwesomeIcon size="1x" icon={faExclamation} />
        </span>
        <span className={styles.textContainer}>{label}</span>
      </span>
    </div>
  )
}

Info.propTypes = {
  label: PropTypes.string.isRequired
}
