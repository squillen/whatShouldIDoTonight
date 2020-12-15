import React, { useEffect } from 'react'
import styles from './ArticleDisplay.module.css'
import Link from 'next/link'
import PropTypes from 'prop-types'
import IFrame from '../IFrame/IFrame'
import HelpfulCounter from '../HelpfulCounter/HelpfulCounter'
import RelatedContent from '../RelatedContent/RelatedContent'
import Disqus from '../Disqus/Disqus'
import SocialIcons from '../socialIcons/socialIcons'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import ArticleHead from '../ArticleHead'
import SVGGrabber from '../SVGGrabber'
import BackButton from '../BackButton/BackButton'
import handleMarkdown from '../../lib/helpers/handleMarkdown'
import Photo from '../photo/photo'
import { convertIdToDate, makeDatePretty } from '../../lib/helpers/dataHelpers'
import checkForAdBlocker from '../../lib/helpers/hooks/checkForAdBlocker'
import GoogleAd from '../GoogleAd/GoogleAd'
import NextSEO from '../nextSEO'
import DefaultHead from '../defaultHead'

export default function ArticleDisplay ({ article, source }) {
  const pageURL = window.location.href
  const style = { background: `url(${article.image}) center no-repeat`, backgroundSize: 'cover' }
  const articleHeaders = []
  const firstBodySection = article.body && article.body.shift()
  const remainingBody = article.body
  const toc = firstBodySection.toc
  if (toc) {
    remainingBody.map((obj, idx) => {
      const name = obj.name || ''
      articleHeaders.push(name)
    })
  }

  useEffect(() => {
    checkForAdBlocker()
  }, [source])

  const makeID = (name) => {
    const array = name.split(' ')
    return array.slice(1, array.length).join('-').replace(')', '-').replace(/[/]/g, '-').toLowerCase()
  }

  function showAdIf (idx) {
    const bodyLength = article.body.length || 0
    const showEveryX = Math.ceil(bodyLength / 4)
    const showAd = idx !== 0 && idx % showEveryX === 0
    return showAd && <GoogleAd type="square" />
  }

  const handleHeading = (name, idx) => (
    <div className={styles.suggestionHeader}>
      <div className={styles.blob}>
        {<SVGGrabber type="circle" />}
      </div>
      {handleMarkdown(name)}
      {
        idx !== 0 && (
          <a href="#home">
            <div className={styles.homeIcon}>
              <i className="fas fa-chevron-up"></i>
            </div>
          </a>
        )
      }
    </div>
  )

  const handleBody = (item, idx) => (
    <div key={item.name || idx} className={styles.bodyContainer}>
      {
        item.name && handleHeading(item.name, idx)
      }
      <div className={styles.itemContents}>
        {mapContents(item.contents, source)}
      </div>
      {
        showAdIf(idx)
      }
      {
        idx === 0 && articleHeaders.length
          ? (
            <div className={styles.tocContainer}>
              <h4 className={styles.tocHeader}>{typeof toc === 'string' ? `${toc}:` : 'Table of Contents:'}</h4>
              <div className={styles.toc}>
                {
                  articleHeaders.map(header => {
                    return (
                      <a href={`#${makeID(header)}`} key={header} className={styles.tocItem}>{header.split('# ')[1] || header.split('## ')[1]}</a>
                    )
                  })
                }
              </div>
            </div>
          )
          : null
      }
    </div>
  )

  const title = article.name || article.tagline
  // title = title.split(': ')[1] ? title.split(': ').join(': <br>') : title

  return (
    article &&
    <>
      <DefaultHead title={article.name} description={article.pageDescription} />
      <ArticleHead activity={article} />
      <NextSEO url={pageURL} title={article.name} description={article.pageDescription} />
      <div className={styles.articleContainer}>
        <div style={style} className={styles.header}>
          <div className={styles.overlay} />
          <div className={styles.headerTextContainer} id="home">
            {handleMarkdown((title).startsWith('# ') ? title : `# ${title}`)}
            {
              !article.dateModified && <h4 className={styles.dateModified}>Published {makeDatePretty(convertIdToDate(article._id))}</h4>
            }
            {article.dateModified && <h4 className={styles.dateModified}>Updated {makeDatePretty(article.dateModified)}</h4>}
            <div className={styles.socialIconsMobile}>
              <SocialIcons pageURL={pageURL} pageTitle={article.name} image={article.image} description={article.pageDescription} horizontal/>
            </div>
          </div>
        </div>
        {/* <BackButton /> */}
        <div className={styles.socialIconsDesktop}>
          <SocialIcons pageURL={pageURL} pageTitle={article.name} image={article.image} description={article.pageDescription} />
        </div>
        <div className={styles.articleBody}>
          <div className={styles.articleIntro}>
            {handleBody(firstBodySection, 0)}
          </div>
          {
            remainingBody.map((item, idx) => {
              return (
                handleBody(item, idx + 1)
              )
            })
          }
          {/* <AuthorInfo article={article} /> */}
        </div>
        {/* <HelpfulCounter activity={article} source={source} /> */}
        <Disqus article={article} url={pageURL} />
      </div>
    </>
  )
}

function handleList (item, depth = 0) {
  const { header, contents } = item
  return (
    <div className={styles.listContainer}>
      {header && (
        <div className={styles.listHeader}>
          {handleMarkdown(header)}
          {
            depth === 0 && (
              <div className={styles.listHeaderBlob}>
                {<SVGGrabber type="square" />}
              </div>
            )
          }
        </div>
      )}
      <ul className={styles.list}>
        {
          contents.map(item => (
            item.contents
              ? handleList(item, depth + 1)
              : handleMarkdown(item)
          ))
        }
      </ul>
    </div>
  )
}

function handleRecipe ({ ingredients, info, directions }) {
  return (
    <div className={styles.recipeContainer}>
      {
        info && (
          <div className={styles.recipeInfo}>
            {
              info.map(el => (
                <div key={el.header} className={styles.level}>
                  <span className={styles.infoLabel}>{`${el.header}: `}</span>
                  {' '}
                  <span className={styles.info}>{el.content}</span>
                </div>
              ))
            }

          </div>
        )
      }
      <div className={styles.recipeContainer}>
        <div className={styles.recipeHeader}>
          {ingredients.header || 'Ingredients'}:
          <div className={styles.underline} />
        </div>
        <div className={styles.recipeIngredients}>
          {
            ingredients.contents.map(item => (
              item.ingredients
                ? handleRecipe(item)
                : handleMarkdown(item)
            ))
          }
        </div>
      </div>
      {
        directions && (
          <div className={styles.subContainer}>
            <div className={styles.recipeHeader}>
              {directions.header || 'Directions'}:
              <div className={styles.underline} />
            </div>
            <ol className={styles.recipeDirectionsList}>
              {directions.contents.map(el => (
                <li className={styles.recipeStep} key={el}>
                  {el}
                </li>
              ))}
            </ol>
          </div>
        )
      }
    </div>
  )
}

function mapContents (array, source) {
  return (
    array.map((c, idx) => (
      // <div key={`${c}-${idx}`} className={styles.content}>
      // {
      c.iframe
        ? <div className={styles.iframe}><IFrame src={c.iframe} /></div>
        : c.image
          ? c.image[3]
            ? (
              <Link href={c.image[3]}>
                <a target="_blank">
                  <Photo src={c.image[0]} alt={c.image[1]} caption={c.image[2]} />
                </a>
              </Link>
            )
            : <Photo src={c.image[0]} alt={c.image[1]} caption={c.image[2]} />
          : c.related
            ? <RelatedContent articles={c.related} source={source} />
            : c.name && c.contents
              ? (
                <div>
                  <div className={styles.subHeader}>
                    {handleMarkdown(c.name)}
                    <div className={styles.border} />
                  </div>
                  {mapContents(c.contents, source)}
                </div>
              )
              : c.ad
                ? <GoogleAd type="inArticle" />
                : c.list
                  ? handleList(c.list)
                  : c.recipe
                    ? handleRecipe(c.recipe)
                    : (
                      c.slice(0, 3) === '## '
                        ? (
                          <div className={styles.subSuggestionHeader}>
                            <div className={styles.subBlob}>
                              {<SVGGrabber type="circle" />}
                            </div>
                            {handleMarkdown(c)}
                            <a href="#home">
                              <div className={styles.homeIcon}>
                                <i className="fas fa-chevron-up"></i>
                              </div>
                            </a>
                          </div>
                        )
                        : c.slice(0, 4) === '### '
                          ? (
                            <div className={styles.subSuggestionHeader}>
                              <div className={styles.h3Blob}>
                                {<SVGGrabber type="square" />}
                              </div>
                              <div className={styles.subHeaderText}>
                                {handleMarkdown(c)}
                              </div>
                            </div>
                          )
                          : handleMarkdown(c)
                    )
      // }
      // </div>
    ))
  )
}

ArticleDisplay.propTypes = {
  article: PropTypes.object,
  source: PropTypes.string,
}
