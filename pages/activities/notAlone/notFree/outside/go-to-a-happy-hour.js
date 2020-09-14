import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
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
      title="Go to a happy hour?"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
