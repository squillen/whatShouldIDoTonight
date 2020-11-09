import styles from './ArticleDisplay.module.css'
import PropTypes from 'prop-types'
import IFrame from '../IFrame/IFrame'
import HelpfulCounter from '../HelpfulCounter/HelpfulCounter'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import ArticleHead from '../ArticleHead'
import SVGGrabber from '../SVGGrabber'
import BackButton from '../BackButton/BackButton'
import handleMarkdown from '../../lib/helpers/handleMarkdown'

export default function ArticleDisplay ({ article, source }) {
  const style = { background: `url(${article.image}) center no-repeat`, backgroundSize: 'cover' }
  return (
    article &&
    <>
      <ArticleHead activity={article}/>
      <div className={styles.articleContainer}>
        <div style={style} className={styles.header}>
          <div className={styles.overlay} />
          <h1 className={styles.headerText}>{article.name || article.tagline}</h1>
          <h1 className={styles.hidden}>what should i we do tonight</h1>
          <h1 className={styles.hidden}>i we are bored</h1>
        </div>
        <BackButton />
        <div className={styles.articleBody}>
          {
            article.body.map((item, idx) => (
              <div key={item.name || idx} className={styles.bodyContainer}>
                {
                  item.name && (
                    <div className={styles.suggestionHeader}>
                      <div className={styles.blob}>
                        {<SVGGrabber type="circle" />}
                      </div>
                      {handleMarkdown(item.name[0] === '#' ? item.name : `# ${item.name}`)}
                    </div>
                  )
                }
                <div className={styles.itemContents}>
                  {
                    item.contents.map((c, idx) => (
                      <div key={`${c}-${idx}`} className={styles.content}>
                        {
                          c.iframe
                            ? <div className={styles.iframe}><IFrame src={c.iframe} /></div>
                            : c.image
                              ? <div className={styles.imageContainer}><img className={styles.image} src={c.image[0]} alt={c.image[1]} /></div>
                              : handleMarkdown(c)
                        }
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
          {/* <AuthorInfo article={article} /> */}
        </div>

        <HelpfulCounter activity={article} source={source} />
      </div>
    </>
  )
}

ArticleDisplay.propTypes = {
  article: PropTypes.object,
  source: PropTypes.string,
}
