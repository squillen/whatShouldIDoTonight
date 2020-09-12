import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      True crime? Humor? Horror? There is an almost unlimited amount out there.
    </p>
    <p>
      Some popular choices are Joe Rogan, Bill Burr, Explained, and Crime Junkies.
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Find a new podcast"
      content={userContent}
      timeToComplete="15 minutes"
    />
  )
}

export default connect()(Content)
