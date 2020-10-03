import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInFromLeft } from '../../animations/default'
import styles from './ContentCard.module.css'

export default function ContentCard ({ activity, source }) {
  const [selectedActivities, setSelectedActivities] = useState([])
  const [userFilters, setUserFilters] = useState([])
  const currentURL = process.env.NODE_ENV === 'production' ? 'https://what-should-i-do-tonight-git-siteredesign11.squillen.vercel.app' : 'https://what-should-i-do-tonight-git-siteredesign11.squillen.vercel.app'
  // const currentURL = process.env.NODE_ENV === 'production' ? process.env.SITE_URI : 'http://localhost:3000'
  const getBackground = el => `url(${el.image}) center no-repeat`
  const getContentURL = el => el.pagePath ? `${currentURL}${el.pagePath}` : `/${source}/activity?id=${el._id}`
  return (
    <motion.div
      className={styles.contentCard}
      key={activity.name}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      variants={fadeInFromLeft}
    >
      <Link href={getContentURL(activity)}>
        <a className={styles.cardLink}>
          <div className={styles.topHalf} style={{ background: getBackground(activity), backgroundSize: 'cover' }}>
            <div className={styles.ribbon}>
              <span className={styles.ribbonText}>{activity.free && 'FREE'}</span>
            </div>
          </div>
          <div className={styles.bottomHalf}>
            <div className={styles.showName}>{activity.name}</div>
            <div className={styles.tagline}>{activity.tagline}</div>
          </div>
        </a>
      </Link>
    </motion.div>
  )
}

ContentCard.propTypes = {
  activity: PropTypes.object,
  source: PropTypes.string
}
