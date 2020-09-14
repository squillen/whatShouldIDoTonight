import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Make some new friends!</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://meetup.com"
          label="meetup"
        />
        {' '}
        and join a couple of groups, maybe even find an event to go to tonight!
      </span>
      <span>
        {' '}
        <LinkTo
          href="https://bumble.com/"
          label="Bumble"
        />
        {' '}
        also has an option to make friends, too!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Find someone to hang out with"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
