import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Learn something without &quot;reading&quot;? Done.</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.audiobooks.com/"
          label="audiobooks.com"
        />
        {' '}
        and learn about the history of America or the Aztecs or WWII or how to cook or almost literally anything else. The world is your oyster. And by that I mean you can even listen to a freaking
        {' '}
        <LinkTo
          href="https://www.audiobooks.com/audiobook/geography-of-oysters-the-connoisseurs-guide-to-oyster-eating-in-north-america/315124"
          label="book on oysters"
        />
        !!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Listen to an audio book"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
