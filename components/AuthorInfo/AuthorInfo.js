import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './AuthorInfo.module.css'
import { getAuthorInfo } from '../../lib/helpers/db/requests'
import { makeDatePretty } from '../../lib/helpers/dataHelpers'
export default function AuthorInfo ({ article }) {
  const authorID = article.authorID || ''
  const [author, setAuthor] = useState({})

  useEffect(() => {
    if (author && !author.name) getAuthor()
  }, [authorID])
  let authorSex; let authorName = 'Sean Q.'; let authorImage
  async function getAuthor () {
    try {
      const result = await getAuthorInfo({ id: authorID, name: authorName })
      setAuthor(result)
    } catch (e) {
      console.error(e)
    }
  }
  if (author && author.name) {
    authorSex = author.sex || 0
    authorName = (author.name)
    const imageStub = 'https://what-should-i-do-tonight.s3.us-east-2.amazonaws.com/images/icons/'
    authorImage = (author.image) ||
      authorName === 'Sean Q.'
      ? `${imageStub}authors/sean_q.jpeg`
      : authorSex === 1
        ? `${imageStub}placeholder_woman_icon.png`
        : `${imageStub}placeholder_man_icon.png`
  }


  const publishDate = (article._id && makeDatePretty(parseInt(article._id.substring(0, 8), 16) * 1000)) || makeDatePretty(new Date())
  const updateDate = article.updateDate && makeDatePretty(article.updateDate)
  return (
    author && author.name
      ? (
        <div className={styles.authorInfoContainer}>
          <Link href={`/authors?author=${authorName.split(' ').join('_')}`}>
            <a>
              <img className={styles.authorImage} src={authorImage} alt={`${authorName}`}/>
            </a>
          </Link>
          <div className={styles.authorName}>{authorName}</div>
          <div className={styles.publishDate}>{publishDate}</div>
          {updateDate && <sub className={styles.publishDate}>updated on: {updateDate}</sub>}
        </div>
      )
      : null
  )
}

AuthorInfo.propTypes = {
  article: PropTypes.object,
}
