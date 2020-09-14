import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Ok, here me out on this one.</p>
    <p>Nah, I&apos;m just kidding, move on to the next one.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Join a cult"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
