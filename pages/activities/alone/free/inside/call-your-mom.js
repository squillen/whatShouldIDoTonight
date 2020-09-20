import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Do it. She&apos;ll love it.</p>
    <Photo
      src="https://media.giphy.com/media/q6QHDGE3X4EWA/giphy.gif"
      alt="Lucille Bluth from Arrested Development screaming in glee after Gene Parmesan surprised her"
    />
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
