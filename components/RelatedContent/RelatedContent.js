import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './RelatedContent.module.css'
import { getArticleByID } from '../../lib/helpers/db/requests'

export default function RelatedContent ({ articles, source = 'do' }) {
  const [articlesFromDB, setArticlesFromDB] = useState([])
  async function getArticleInfo () {
    try {
      const promises = []
      const sources = []
      const handleCall = (id, articleSource) => getArticleByID(id, articleSource).catch(console.error)
      articles && articles.length && articles.forEach(article => {
        const [id, articleSource] = article
        sources.push(articleSource)
        promises.push(handleCall(id, articleSource))
      })

      const result = await Promise.all(promises)
      const newArticles = []
      result.forEach((article, idx) => {
        const { image, name, lookup, tagline } = article || {}
        const link = `/${sources[idx]}/a?lookup=${lookup}`
        newArticles.push({ image, name, tagline, link })
      })

      setArticlesFromDB(newArticles)
    } catch (e) {
      console.error(e)
    }
  }
  useEffect(() => {
    if (articles.length && !articlesFromDB.length) getArticleInfo()
  }, [articles])

  return (
    articlesFromDB.length
      ? (
        <div className={styles.relatedContentContainer}>
          <div>
            <div className={styles.relatedText}>RELATED:</div>
            {' '}

            {
              articlesFromDB.map(article => (
                <li key={article.name} className={styles.articleLink}>
                  <Link href={article.link}>
                    <a target="_blank">{article.name || article.title}</a>
                  </Link>
                </li>
              ))
            }
          </div>

        </div>
      )
      : null
  )
}

RelatedContent.propTypes = {
  articles: PropTypes.array.isRequired,
  source: PropTypes.string.isRequired,
}
