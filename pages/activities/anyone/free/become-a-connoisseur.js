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
      title="Become a connoisseur of something, like coffee, tea, wine, beer, brandy, croissants, bread"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
