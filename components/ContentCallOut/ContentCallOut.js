import PropTypes from 'prop-types'
import styles from './ContentCallOut.module.css'
export default function ContentCallOut ({ callOutInfo, color = 'blue' }) {
  const backgroundColor = {
    blue: 'rgba(25,110,171,0.9990371148459384)'
  }[color]

  return (
    <div style={{ background: backgroundColor }} className={styles.sponsoredContentContainer}>
      <div className={styles.sponsorTitle}>
        {callOutInfo.title}
      </div>
      <div className={styles.sponsorBody}>
        {callOutInfo.body}
      </div>
    </div>
  )
}

ContentCallOut.propTypes = {
  callOutInfo: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string,
  color: PropTypes.string
}
