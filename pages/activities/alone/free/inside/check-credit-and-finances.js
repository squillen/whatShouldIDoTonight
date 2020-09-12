import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>TODO CHANGE</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Check your credit and finances"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
