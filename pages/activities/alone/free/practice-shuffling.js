import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Cards, that is. Or the dance. Whatever, you&apos;re bored, right?
    </p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://youtu.be/Lr1sjF42ssU"
          label="this video"
        />
      </span>
      {' '}
      for some tips.
    </p>
    <p>
      <span>
        <LinkTo
          href="https://www.wikihow.com/Shuffle-(Dance-Move)"
          label="(or this if you actually wanted to learn how to dance the shuffle)"
        />
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn how to shuffle"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
