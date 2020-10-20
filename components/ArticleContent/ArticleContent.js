import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './ArticleContent.module.css'

export default function ArticleContent ({ articles, banner = 'THE LATEST', source }) {
  const getContentURL = currContent => currContent && currContent.name
    ? currContent.pagePath || `/${source}/article?id=${currContent._id}`
    : ''
  return (
    <div className={styles.articleContentContainer}>
      <div className={styles.articleContentBanner}>{banner}</div>
      <div className={styles.articlesContainer}>
        {
          articles.map(article => {
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
}

ArticleContent.propTypes = {
  articles: PropTypes.array,
  banner: PropTypes.string,
  source: PropTypes.string,
}
