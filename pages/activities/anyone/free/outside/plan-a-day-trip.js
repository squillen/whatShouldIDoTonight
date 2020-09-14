import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Plan a day trip"
      content={userContent}
      timeToComplete="25+ minutes"
    />
  )
}

export default connect()(Content)
