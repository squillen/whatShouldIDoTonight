import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Make some new friends!</p>
    <Photo
      src="https://media.giphy.com/media/xUOxfk90Reg7lEmyY0/giphy.gif"
    />
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
  const pageInfo = {
    tags: 'friends/find/lonely/bumble/meetup/meet/alone',
    pageDescription: 'Find new friends now and start a new life!'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Find someone to hang out with"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
