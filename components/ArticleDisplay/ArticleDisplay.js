import React, { useState, useRef } from 'react'
import styles from './ArticleDisplay.module.css'
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

export default function ArticleDisplay ({ article, source }) {
  const style = { background: `url(${article.image}) center no-repeat`, backgroundSize: 'cover' }
  let refs
  const articleHeaders = []
  const toc = article.body[0].toc || []
  if (toc) {
    refs = {}
    article.body.map(obj => {
      const name = obj.name || ''
      articleHeaders.push(name)
      refs[name] = useRef(name)
    })
  }
  const handleRef = name => {
    return refs ? refs[name] : null
  }

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
        {/* {
          articleHeaders.length && refs && articleHeaders.map(item => (
            <div key={item} className="tocItem" onClick={() => refs[item].current.scrollIntoView({ behavior: 'smooth' })}>{item.split('## ')[1]}</div>
          ))
        } */}
        <div className={styles.articleBody}>
          {
            article.body.map((item, idx) => (
              <div key={item.name || idx} className={styles.bodyContainer} ref={() => handleRef(item.name)}>
                {
                  item.name && (
                    <div className={styles.suggestionHeader}>
                      <div className={styles.blob}>
                        {<SVGGrabber type="circle" />}
                      </div>
                      {handleMarkdown(item.name[0] === '#' ? item.name : `## ${item.name}`)}
                    </div>
                  )
                }
                <div className={styles.itemContents}>
                  {mapContents(item.contents, source)}
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

function mapContents (array, source) {
  return (
    array.map((c, idx) => (
      <div key={`${c}-${idx}`} className={styles.content}>
        {
          c.iframe
            ? <div className={styles.iframe}><IFrame src={c.iframe} /></div>
            : c.image
              ? <div className={styles.imageContainer}><Photo src={c.image[0]} alt={c.image[1]} /></div>
              : c.related
                ? <RelatedContent id={c.related[0]} articleSource={c.related[1]} source={source} />
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
