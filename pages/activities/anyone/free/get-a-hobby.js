import { connect } from 'react-redux'
import LinkTo from '../../../../components/linkTo/linkTo'
import Post from '../../../../components/post/post'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Get a hobby"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
