import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInFromLeft } from '../../animations/default'
import { makeDatePretty, convertIdToDate } from '../../lib/helpers/dataHelpers'
import styles from './ContentCard.module.css'

export default function ContentCard ({ activities, source, span }) {
  const currentURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.SITE_URI || 'https://whatshouldidotonight.com'
  const getBackground = el => `url(${el.image}) center no-repeat`
  const getContentURL = el => el.pagePath ? `${currentURL}${el.pagePath}` : el.name && `/${source}/a?lookup=${el.lookup}`
  function handleDate (activity) {
    const { dateModified } = activity
    if (dateModified) return makeDatePretty(dateModified)
    const date = convertIdToDate(activity._id)
    return makeDatePretty(date)
  }
  return (
    activities && activities.length
      ? (
        activities.map((activity, idx) => (
          <li
            className={styles[span ? 'span' : 'cardListItem']}
            style={idx + 1 % 3 !== 0 ? { marginRight: '1rem' } : null}
            key={activity.name}
          >
            <Link href={getContentURL(activity)} as={getContentURL(activity)}>
              <a className={styles.cardLink}>
                <motion.div
                  className={styles[span ? 'spanContentCard' : 'contentCard']}
                  key={activity.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  variants={fadeInFromLeft}
                >
                  <div className={styles[span ? 'leftHalf' : 'topHalf']} style={{ background: getBackground(activity), backgroundSize: 'cover' }}>
                    <div className={styles.ribbon}>
                      <span className={styles.ribbonText}>{activity.free && 'FREE'}</span>
                    </div>
                  </div>
                  <div className={styles[span ? 'rightHalf' : 'bottomHalf']}>
                    <div className={styles.infoContainer}>
                      {source !== 'watch' && <div className={styles.publishDate}>{handleDate(activity)}</div>}
                      <div style={source === 'watch' ? { height: 'auto' } : {}} className={styles.cardName}>{activity.name}</div>
                    </div>
                    {/* <div className={styles.tagline}>{activity.tagline}</div> */}
                  </div>
                </motion.div>
              </a>
            </Link>
          </li>
        ))
      )
      : null
  )
}

ContentCard.propTypes = {
  activity: PropTypes.object,
  source: PropTypes.string,
}
