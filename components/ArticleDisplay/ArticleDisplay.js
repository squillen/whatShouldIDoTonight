import React, { useEffect } from 'react'
import styles from './ArticleDisplay.module.css'
import Link from 'next/link'
import PropTypes from 'prop-types'
import IFrame from '../IFrame/IFrame'
import HelpfulCounter from '../HelpfulCounter/HelpfulCounter'
import RelatedContent from '../RelatedContent/RelatedContent'
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

export default function ArticleDisplay ({ article, source }) {
  const pageURL = window.location.href
  const style = { background: `url(${article.image}) center no-repeat`, backgroundSize: 'cover' }
  const articleHeaders = []
  const toc = article.body[0].toc
  if (toc) {
    article.body.map((obj, idx) => {
      if (idx !== 0) {
        const name = obj.name || ''
        articleHeaders.push(name)
      }
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

  return (
    article &&
    <>
      <ArticleHead activity={article} />
      <div className={styles.articleContainer}>
        <div style={style} className={styles.header}>
          <div className={styles.overlay} />
          <div className={styles.headerTextContainer} id="home">
            <h1 className={styles.headerText}>{article.name || article.tagline}</h1>
            {
              !article.dateModified && <h4 className={styles.dateModified}>Published {makeDatePretty(convertIdToDate(article._id))}</h4>
            }
            {article.dateModified && <h4 className={styles.dateModified}>Updated {makeDatePretty(article.dateModified)}</h4>}
            <div className={styles.socialIconsMobile}>
              <SocialIcons pageURL={pageURL} pageTitle={article.name} image={article.image} description={article.pageDescription} horizontal/>
            </div>
          </div>
          <h1 className={styles.hidden}>what should i we do tonight</h1>
          <h1 className={styles.hidden}>i we are bored</h1>
          <h1 className={styles.hidden}>bored</h1>
          <h1 className={styles.hidden}>things to do tonight</h1>
          <h1 className={styles.hidden}>what should i we watch tonight</h1>
          <h1 className={styles.hidden}>what to do when you&apos;re bored</h1>
        </div>
        <BackButton />
        <div className={styles.socialIconsDesktop}>
          <SocialIcons pageURL={pageURL} pageTitle={article.name} image={article.image} description={article.pageDescription} />
        </div>
        <div className={styles.articleBody}>
          {
            article.body.map((item, idx) => {
              return (
                <div key={item.name || idx} className={styles.bodyContainer}>
                  {
                    item.name && (
                      <div className={styles.suggestionHeader}>
                        <div className={styles.blob}>
                          {<SVGGrabber type="circle" />}
                        </div>
                        {handleMarkdown(item.name)}
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
            })
          }
          {/* <AuthorInfo article={article} /> */}
        </div>
        <HelpfulCounter activity={article} source={source} />
      </div>
    </>
  )
}

function handleList ({ header, contents }) {
  return (
    <div className={styles.listContainer}>
      {header && <div className={styles.listHeader}>{header}</div>}
      <ul className={styles.list}>
        {
          contents.map(item => (
            item.contents
              ? handleList(item)
              : <li key={item}>{item}</li>
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
      <div key={`${c}-${idx}`} className={styles.content}>
        {
          c.iframe
            ? <div className={styles.iframe}><IFrame src={c.iframe} /></div>
            : c.image
              ? <div className={styles.imageContainer}>
                {
                  c.image[3]
                    ? (
                      <Link href={c.image[3]}>
                        <a>
                          <Photo src={c.image[0]} alt={c.image[1]} caption={c.image[2]} />
                        </a>
                      </Link>
                    )
                    : <Photo src={c.image[0]} alt={c.image[1]} caption={c.image[2]} />
                }
              </div>
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
                                  {handleMarkdown(c)}
                                </div>
                              )
                              : handleMarkdown(c)
                        )
        }
      </div>
    ))
  )
}

ArticleDisplay.propTypes = {
  article: PropTypes.object,
  source: PropTypes.string,
}
