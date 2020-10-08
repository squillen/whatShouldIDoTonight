import { connect } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './SplashContent.module.css'

function SplashContent ({ content = [], banner, source }) {
  const [content1, content2, content3] = content
  const getBackground = currContent => currContent ? `url(${currContent.image}) center no-repeat` : ''
  const getContentURL = currContent => currContent && currContent.name
    ? currContent.pagePath || `/${source}/activity?id=${currContent._id}`
    : ''
  const getContentDiv = currContent => (
    <div className={styles.background} style={{ background: getBackground(currContent), backgroundSize: 'cover' }}>
      <div className={styles.overlay} />
      <Link href={getContentURL(currContent)} passHref>
        <a>
          <div className={styles.text}>{currContent.name || ''}</div>
        </a>
      </Link>
    </div>
  )
  return (
    <div className={styles.splashContentContainer}>
      {
        banner
          ? (
            <div className={styles.banner}>{banner}</div>
          )
          : null
      }
      <div className={styles.imagesContainer}>
        <div className={styles.largeImageContainer}>
          <div
            className={styles.largeImage}
            key={content1.name}
          >
            {getContentDiv(content1)}
          </div>
        </div>
        <div className={styles.smallImagesContainer}>
          <div
            className={styles.smallImage}
            key={content2.name}
          >
            {getContentDiv(content2)}
          </div>
          <div
            className={styles.smallImage}
            key={content3.name}
          >
            {getContentDiv(content3)}
          </div>
        </div>
      </div>
    </div>
  )
}

SplashContent.propTypes = {
  content: PropTypes.array,
  banner: PropTypes.string,
  source: PropTypes.string,
}

export default connect((state) => state)(SplashContent)
