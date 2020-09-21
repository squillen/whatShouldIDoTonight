import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Even if you&apos;re not in the market for a new car, you can just go look at some!</p>
    <Photo
      src="https://media.giphy.com/media/Ip0EFxfS5TPBC/giphy.gif"
      alt="man demonstrating how minivan door is supposed to stop from closing if something is in the way, which is his head in this case. It does not close. Cut to him in a neck brace."
    />
    <p>
      And a lot of the times there aren&apos;t any salesmen on site later in the night,
      so you can just peruse at your own pace (and probably find some unlocked ones 🤫).
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'cars/car lot/new car',
    pageDescription: 'Go look at new cars'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go to a car lot"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
