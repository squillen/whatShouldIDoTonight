import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
   TODO CHANGE ME

    ask for opinions from others on what they like/dislike on you
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Rethink your wardrobe"
      content={userContent}
      timeToComplete="40+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
