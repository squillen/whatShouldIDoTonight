import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      You don&apos;t have to be with someone to learn how to dance. In fact, it might be even better to be alone...cause you, uh, you know, might not be very good at it...yet!
    </p>
    <p>So many resources out there are pretty damn bad, but here are some that are hopefully not:</p>
    <p>
      <ul>
        <li>
          <span>
            First, for some inspiration, check out self-taught dancer
            {' '}
            <LinkTo
              href="https://www.youtube.com/watch?v=daC2EPUh22w"
              label="number one"
            />
            {' '}
            and self-taught dancer
            {' '}
            <LinkTo
              href="https://www.youtube.com/watch?v=5ueJ4-lTa1s"
              label="number two"
            />
          </span>
        </li>
        <li>
          <span>
            Then, check out some of dancer number two&apos;s
            {' '}
            <LinkTo
              href="https://www.youtube.com/watch?v=YId5C_RtV0o"
              label="tutorials"
            />
            {'. '}
            (They&apos;re not in English, but dance is its own language, right??) And some from
            {' '}
            <LinkTo
              href="https://www.youtube.com/watch?v=UWawJcxYY6I"
              label="this guy"
            />
            {'. '}
            (This is also pretty hard to understand but you get it.)
          </span>
        </li>
      </ul>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn to dance"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
