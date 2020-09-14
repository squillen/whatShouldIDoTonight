import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go play tennis"
      content={userContent}
      timeToComplete="45+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
