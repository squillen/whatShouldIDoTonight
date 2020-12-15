import Link from 'next/link'
import PropTypes from 'prop-types'
import { handleName } from '../../lib/helpers/dataHelpers'
import styles from './ArticleContent.module.css'

export default function ArticleContent ({ articles, banner = 'THE LATEST', source }) {
  const getContentURL = currContent => currContent && currContent.name
    ? currContent.pagePath || `/${source}/activity/${currContent.lookup}`
    : ''
  const displayedArticles = articles && articles.length ? articles.slice(0, articles.length) : []
  return (
    displayedArticles.length
      ? (
        <div className={styles.articleContentContainer}>
          <div className={styles.articleContentBanner}>{banner}</div>
          {/* <div className={styles.infoContainer}>
            <div className={styles.infoHeader}>{banner}</div>
          </div> */}
          <div className={styles.articlesContainer}>
            {
              displayedArticles.map(article => {
                const style = { background: `url(${article.image}) center no-repeat`, backgroundSize: 'cover' }
                return (
                  <div key={article.name || article.tagline} style={style} className={styles.articleContainer}>
                    <div className={styles.overlay} />
                    <Link href={getContentURL(article)}>
                      <a>
                        <div className={styles.articleTitleContainer}>
                          <div className={styles.articleTitleText}>
                            {handleName(article.name || article.tagline)}
                          </div>
                        </div>
                      </a>
                    </Link>
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
