import React, { useState, useRef } from 'react'
import styles from './ArticleDisplay.module.css'
import Link from 'next/link'
import PropTypes from 'prop-types'
import IFrame from '../IFrame/IFrame'
import HelpfulCounter from '../HelpfulCounter/HelpfulCounter'
import RelatedContent from '../RelatedContent/RelatedContent'
import AuthorInfo from '../AuthorInfo/AuthorInfo'
import ArticleHead from '../ArticleHead'
import SVGGrabber from '../SVGGrabber'
import BackButton from '../BackButton/BackButton'
import handleMarkdown from '../../lib/helpers/handleMarkdown'
import Photo from '../photo/photo'
import { convertIdToDate, makeDatePretty } from '../../lib/helpers/dataHelpers'

export default function ArticleDisplay ({ article, source }) {
  window.HTMLElement.prototype.scrollIntoView = function () {}
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

  const makeID = (name) => {
    const array = name.split(' ')
    return array.slice(1, array.length).join('-').replace(')', '-').replace(/[/]/g, '-').toLowerCase()
  }

  return (
    article &&
    <>
      <ArticleHead activity={article}/>
      <div className={styles.articleContainer}>
        <div style={style} className={styles.header}>
          <div className={styles.overlay} />
          <div className={styles.headerTextContainer} id="home">
            <h1 className={styles.headerText}>{article.name || article.tagline}</h1>
            {
              !article.dateModified && <h4 className={styles.dateModified}>Published {makeDatePretty(convertIdToDate(article._id))}</h4>
            }
            {article.dateModified && <h4 className={styles.dateModified}>Updated {makeDatePretty(article.dateModified)}</h4>}
          </div>
          <h1 className={styles.hidden}>what should i we do tonight</h1>
          <h1 className={styles.hidden}>i we are bored</h1>
          <h1 className={styles.hidden}>bored</h1>
          <h1 className={styles.hidden}>things to do tonight</h1>
          <h1 className={styles.hidden}>what should i we watch tonight</h1>
          <h1 className={styles.hidden}>what to do when you&apos;re bored</h1>
        </div>
        <BackButton />
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
                        <a href="#home">
                          <div className={styles.homeIcon}>
                            <i className="fas fa-chevron-up"></i>
                          </div>
                        </a>
                      </div>
                    )
                  }
                  <div className={styles.itemContents}>
                    {mapContents(item.contents, source)}
                  </div>
                  {
                    idx === 0 && articleHeaders.length
                      ? (
                        <div className={styles.tocContainer}>
                          <h4 className={styles.tocHeader}>Table Of Contents:</h4>
                          <div className={styles.toc}>
                            {
                              articleHeaders.map(header => {
                                return (
                                  <a href={`#${makeID(header)}`} key={header} className={styles.tocItem}>{header.split('## ')[1]}</a>
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
                        {handleMarkdown(c.name[0] === '#' ? c.name : `### ${c.name}`)}
                        <div className={styles.border} />
                      </div>
                      {mapContents(c.contents, source)}
                    </div>
                  )
                  : handleMarkdown(c)
        }
      </div>
    ))
  )
}

ArticleDisplay.propTypes = {
  article: PropTypes.object,
  source: PropTypes.string,
}
