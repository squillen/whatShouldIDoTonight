import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Go all out. Go to the store and try something new. Or go with a classic, whatever, it&apos;s your night!</p>
    <p>Or, if you want a challenge, do it chopped-style and only use three or so ingredients.</p>
    <p>
      <span>
        Now use those skills your mama taught you...or not and just get some
        {' '}
        <LinkTo
          href="https://hellofresh.com"
          label="HelloFresh"
        />
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Cook a meal"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
