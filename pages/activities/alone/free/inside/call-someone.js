import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>They&apos;ll love it. I mean, I guess. I (probably) don&apos;t know you. Or (probably) them either, actually.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Call your mom / dad / sibling / grandma / cousin / friend"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
