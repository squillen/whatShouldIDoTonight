import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Computers are pretty much extensions of who we are at this point yet not everyone knows how to properly type. Don&apos;t be oe of those people.</p>
    <p>
      <span>
        You can test yourself and practice
        {' '}
        <LinkTo
          href="https://www.typingtest.com/"
          label="here"
        />
        {'.'}
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn how to type"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
