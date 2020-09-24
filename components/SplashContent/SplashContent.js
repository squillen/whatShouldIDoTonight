import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './SplashContent.module.css'

function SplashContent ({ todaysArticles }) {
  console.log('todaysArticles :>> ', todaysArticles)
  const [article1, article2, article3] = todaysArticles
  const getBackground = article => `url(https://what-should-i-do-tonight.s3.us-east-2.amazonaws.com/images/${article.id}.jpg) center no-repeat`
  return (
    <div className={styles.splashContentContainer}>
      <div className={styles.largeImageContainer}>
        <div
          className={styles.largeImage}
          key={article1.id}
        >
          <div className={styles.background} style={{ background: getBackground(article1), backgroundSize: 'cover' }}>
            <div className={styles.overlay} />
            <div className={styles.text}>{article1.id.split('-').join(' ')}</div>
          </div>
        </div>
      </div>
      <div className={styles.smallImagesContainer}>
        <div
          className={styles.smallImage}
          key={article2.id}
        >
          <div className={styles.background} style={{ background: getBackground(article2), backgroundSize: 'cover' }}>
            <div className={styles.overlay} />
            <div className={styles.text}>{article2.id.split('-').join(' ')}</div>
          </div>
        </div>
        <div
          className={styles.smallImage}
          key={article3.id}
        >
          <div className={styles.background} style={{ background: getBackground(article3), backgroundSize: 'cover' }}>
            <div className={styles.overlay} />
            <div className={styles.text}>{article3.id.split('-').join(' ')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

SplashContent.propTypes = {
  todaysArticles: PropTypes.array
}

export default connect((state) => state)(SplashContent)
