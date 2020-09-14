import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>
      Those things you always listen to? You can create one! Do you all have a unique angle on the world and want the world to hear it?
    </p>
    <p>
      <span>
        You&apos;re damn right you do!
        {' '}
        <LinkTo
          href="https://www.podbean.com/"
          label="Start"
        />
        {' '}
        that revolution, internet people! And remember that we always believed in you when you all inevitably take over the world!
      </span>
      <p>Here&apos;s what you&apos;re gonna do:</p>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Start a podcast"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
