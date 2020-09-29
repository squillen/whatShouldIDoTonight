import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { fadeInFromLeft } from '../../animations/default'
import styles from './Scrollable.module.css'

function Scrollable ({ content = [], source }) {
  const currentURL = process.env.NODE_ENV === 'production' ? process.env.SITE_URI : 'http://localhost:3000'
  const getBackground = el => `url(${el.image}) center no-repeat`
  const getContentURL = el => el.pagePath ? `${currentURL}${el.pagePath}` : `/${source}/activity?id=${el._id}`
  return (
    <div className={styles.scrollableContainer}>
      {
        content && content.map(el => (
          <motion.div
            className={styles.contentCard}
            key={el.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            variants={fadeInFromLeft}
          >
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
          </motion.div>
        ))
      }
    </div>
  )
}

Scrollable.propTypes = {
  content: PropTypes.array,
  source: PropTypes.string
}

export default connect((state) => state)(Scrollable)
