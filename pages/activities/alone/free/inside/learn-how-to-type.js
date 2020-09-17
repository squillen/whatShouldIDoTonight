import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"
      alt="cat typing maniacally"
    />
    <p>Computers are pretty much extensions of who we are at this point yet not everyone knows how to properly type. Don&apos;t be one of those people.</p>
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
  const pageInfo = {
    tags: 'learn/type/how to/type faster/improve',
    pageDescription: 'Improve your typing speed and accuracy'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn how to type"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
