import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './RelatedContent.module.css'
import { getArticleByID } from '../../lib/helpers/db/requests'

export default function RelatedContent ({ id, articleSource = 'do', source = 'do' }) {
  const [articleInfo, setArticleInfo] = useState({})
  async function getArticleInfo () {
    let article
    try {
      article = await getArticleByID(id, source)
      const { image, name, tagline } = article || {}
      const link = `/${articleSource}/activity?name=${name.split(' ').join('_')}`
      const newArticleInfo = { image, name, tagline, link }
      setArticleInfo(newArticleInfo)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    if (id && !articleInfo.link) getArticleInfo()
  }, [id])

  return (
    articleInfo.link
      ? (
        <div className={styles.relatedContentContainer}>
          <span>
            <span className={styles.relatedText}>Related:</span>
            {' '}
            <span className={styles.articleLink}>
              <Link href={articleInfo.link}>
                <a target="_blank">{articleInfo.name}</a>
              </Link>
            </span>
          </span>

        </div>
      )
      : null
  )
}

RelatedContent.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  articleSource: PropTypes.string.isRequired,
}
