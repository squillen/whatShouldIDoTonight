import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>That&apos;s right, you filthy animal.</p>
    <p>Clean for at least 20 minutes.</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.popularmechanics.com/home/interior-projects/how-to/g1238/15-secrets-to-cleaning-your-home-in-half-the-time/"
          label="this article"
        />
        {' '}
        for some tips on how to clean more efficiently.
      </span>
    </p>
    <p>
      <span>
        And check out
        {' '}
        <LinkTo
          href="https://amzn.to/2EqPNe6"
          label="Marie Kondo's book"
        />
        {' '}
        for some inspiration while you&apos;re at it.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Clean your place"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
