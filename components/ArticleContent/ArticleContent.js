import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './ArticleContent.module.css'

export default function ArticleContent ({ articles, banner = 'THE LATEST', source }) {
  const getContentURL = currContent => currContent && currContent.name
    ? currContent.pagePath || `/${source}/${source === 'watch' ? 'article' : 'activity'}?id=${currContent._id}`
    : ''
  const start = articles.length > 3 ? articles.length - 4 : articles.length > 2 ? articles.length - 3 : null
  let displayedArticles = start ? articles.slice(start, articles.length) : []
  displayedArticles = displayedArticles.reverse()
  return (
    displayedArticles.length
      ? (
        <div className={styles.articleContentContainer}>
          <div className={styles.articleContentBanner}>{banner}</div>
          <div className={styles.articlesContainer}>
            {
              displayedArticles.map(article => {
                const style = { background: `url(${article.image}) center no-repeat`, backgroundSize: 'cover' }
                return (
                  <div key={article.name || article.tagline} style={style} className={styles.articleContainer}>
                    <div className={styles.overlay} />
                    <div className={styles.articleTitleContainer}>
                      <div className={styles.articleTitleText}>
                        <Link href={getContentURL(article)}>
                          <a>
                            {article.name || article.tagline}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
      : null
  )
}

ArticleContent.propTypes = {
  articles: PropTypes.array,
  banner: PropTypes.string,
  source: PropTypes.string,
}
