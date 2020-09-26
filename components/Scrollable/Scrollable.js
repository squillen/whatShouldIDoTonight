import { connect } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Scrollable.module.css'

function Scrollable ({ content = [], destination }) {
  console.log('content :>> ', content)
  const currentURL = process.env.NODE_ENV === 'production' ? process.env.SITE_URI : 'http://localhost:3000'
  const getBackground = el => `url(${el.image}) center no-repeat`
  const getContentURL = el => el.pagePath ? `${currentURL}${el.pagePath}` : `${destination}?id=${el._id}`
  return (
    <div className={styles.scrollableContainer}>
      {
        content && content.map(el => (
          <div className={styles.contentCard} key={el.name}>
            <Link href={getContentURL(el)}>
              <a className={styles.cardLink}>
                <div className={styles.topHalf} style={{ background: getBackground(el), backgroundSize: 'cover' }}>
                  <div className={styles.ribbon}>
                    <span className={styles.ribbonText}>{el.free && 'FREE'}</span>
                  </div>
                </div>
                <div className={styles.bottomHalf}>
                  <div className={styles.showName}>{el.name}</div>
                  <div className={styles.tagline}>{el.tagline}</div>
                </div>
              </a>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

Scrollable.propTypes = {
  content: PropTypes.array,
  destination: PropTypes.string
}

export default connect((state) => state)(Scrollable)
