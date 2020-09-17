import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/BZijRkTr9it6Z74VpA/giphy.gif"
      alt="Man suddenly getting out of chair stating, 'I gotta call my mom'"
    />
    <p>Do it. She&apos;ll love it.</p>
    <p>And tell her I say hi. </p>
    <p><span>But, I mean, not like <span className={styles.italic}>that</span>.</span></p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'call your mom/mom/improve relationship/family',
    pageDescription: "Call your mom. She'll love it"
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Call your mom"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
