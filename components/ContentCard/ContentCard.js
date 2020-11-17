import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInFromLeft } from '../../animations/default'
import { makeDatePretty, convertIdToDate } from '../../lib/helpers/dataHelpers'
import styles from './ContentCard.module.css'

export default function ContentCard ({ activity, source }) {
  const currentURL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.SITE_URI || 'https://whatshouldidotonight.com'
  const getBackground = el => `url(${el.image}) center no-repeat`
  const getContentURL = el => el.pagePath ? `${currentURL}${el.pagePath}` : el.name && `/${source}/activity?name=${el.name.split(' ').join('_')}`
  function handleDate (id) {
    const date = convertIdToDate(id)
    const prettyDate = makeDatePretty(date)
    return prettyDate
  }
  return (
    activity.name
      ? (
        <Link href={getContentURL(activity)} as={getContentURL(activity)}>
          <a className={styles.cardLink}>
            <motion.div
              className={styles.contentCard}
              key={activity.name}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              variants={fadeInFromLeft}
            >
              <div className={styles.topHalf} style={{ background: getBackground(activity), backgroundSize: 'cover' }}>
                <div className={styles.ribbon}>
                  <span className={styles.ribbonText}>{activity.free && 'FREE'}</span>
                </div>
              </div>
              <div className={styles.bottomHalf}>
                <div className={styles.infoContainer}>
                  <div className={styles.cardName}>{activity.name}</div>
                  <div className={styles.publishDate}>{handleDate(activity._id)}</div>
                </div>
                <div className={styles.tagline}>{activity.tagline}</div>
              </div>
            </motion.div>
          </a>
        </Link>
      )
      : null
  )
}

ContentCard.propTypes = {
  activity: PropTypes.object,
  source: PropTypes.string,
}
