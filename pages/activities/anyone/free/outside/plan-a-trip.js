import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Planning the trip is half the fun, right?</p>
    <p>
      <span>
        Get out a globe or just check out
        {' '}
        <LinkTo
          href="https://www.google.com/maps"
          label="Google Maps"
        />
        {' '}
        and find the place(s) you want to visit next!
      </span>
    </p>
    <p>
      <span>
        If you want some inspiration, check out these articles by
        {' '}
        <LinkTo
          href="https://www.nomadicmatt.com/travel-blogs/planning-a-trip/"
          label="Nomadic Matt"
        />
        {' and '}
        <LinkTo
          href="https://practicalwanderlust.com/how-to-plan-a-trip-travel-planning-tips/"
          label="Practical Wanderlust"
        />
      </span>
    </p>
    <p>
      <span>
        Or, if you don&apos;t want to think about it as much, you can just check out
        {' '}
        <LinkTo
          href="https://www.inspirock.com"
          label="inspirock"
        />
        {' or '}
        <LinkTo
          href="http://www.tripzard.com/"
          label="Tripzard"
        />
        {', '}
        which will basically plan it for you &#128558;
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Plan your next travel destination"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
