import PropTypes from 'prop-types'
import styles from './loading.module.css'

export default function Loading ({ loading, message = 'loading' }) {
  return (
    loading
      ? (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingDiv}>
            {message}
          </div>
        </div>
      )
      : null
  )
}

Loading.propTypes = {
  loading: PropTypes.bool,
  message: PropTypes.string
}
