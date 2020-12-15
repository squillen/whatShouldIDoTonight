import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './SplashContent.module.css'
import { handleName } from '../../lib/helpers/dataHelpers'

function SplashContent ({ content = [], banner, source }) {
  const [randomContents, setRandomContents] = useState([])
  const getRandomContents = () => {
    let n = 0
    const tempContents = []
    const contentCopy = [...content]
    while (n < 3) {
      const randomIndex = Math.floor(Math.random() * contentCopy.length)
      tempContents.push(contentCopy.splice(randomIndex, 1)[0])
      n++
    }
    setRandomContents(tempContents)
  }
  useEffect(() => {
    if (content.length && !randomContents.length) getRandomContents()
  }, [content])

  const getBackground = currContent => currContent ? `url(${currContent.image}) center no-repeat` : ''
  const getContentURL = currContent => currContent && currContent.name
    ? currContent.pagePath || `/${source}/activity/${currContent.lookup}`
    : ''
  const getContentDiv = currContent => (
    <div className={styles.background} style={{ background: getBackground(currContent), backgroundSize: 'cover' }}>
      <div className={styles.overlay} />
      <Link href={getContentURL(currContent)} as={getContentURL(currContent)}>
        <a>
          <div className={styles.textContainer}>
            <div className={styles.text}>{handleName(currContent.name) || ''}</div>
          </div>
        </a>
      </Link>
    </div>
  )
  const style = banner ? null : { height: '100%' }
  return (
    randomContents.length
      ? (
        <div className={styles.splashContentContainer}>
          {banner && <h1 className={styles.banner}>{banner}</h1>}
          <div style={style} className={styles.imagesContainer}>
            <div className={styles.largeImageContainer}>
              <div
                className={styles.largeImage}
                key={(randomContents[0] && randomContents[0].name) || 'content1Key'}
              >
                {getContentDiv(randomContents[0])}
              </div>
            </div>
            <div className={styles.smallImagesContainer}>
              <div
                className={styles.smallImage}
                key={(randomContents[1] && randomContents[1].name) || 'content2Key'}
              >
                {getContentDiv(randomContents[1])}
              </div>
              <div
                className={styles.smallImage}
                key={(randomContents[2] && randomContents[2].name) || 'content3Key'}
              >
                {getContentDiv(randomContents[2])}
              </div>
            </div>
          </div>
        </div>
      )
      : null
  )
}

SplashContent.propTypes = {
  content: PropTypes.array,
  banner: PropTypes.string,
  source: PropTypes.string,
}

export default connect((state) => state)(SplashContent)
