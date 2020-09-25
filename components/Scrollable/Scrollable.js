import { connect } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './Scrollable.module.css'

function Scrollable ({ content = [] }) {
  console.log('content :>> ', content)
  const getBackground = el => `url(${el.image}) center no-repeat`
  const getContentURL = el => `/tv/show?id=${el._id}`
  return (
    <div className={styles.scrollableContainer}>
      {
        content && content.map(el => (
          <div className={styles.contentCard} key={el.name}>
            <Link href={getContentURL(el)} passHref>
              <a className={styles.cardLink}>
                <div className={styles.topHalf} style={{ background: getBackground(el), backgroundSize: 'cover' }} />
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
  content: PropTypes.array
}

export default connect((state) => state)(Scrollable)
