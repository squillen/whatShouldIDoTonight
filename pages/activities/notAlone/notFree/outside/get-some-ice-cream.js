import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>We&apos;re honestly disappointed that we had to tell you to do this.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go get ice cream!"
      content={userContent}
      timeToComplete="20+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
