import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>That&apos;s right, you filthy animals.</p>
    <Photo
      src="https://media.giphy.com/media/30O6emI7tFRew/giphy.gif"
      alt="hoarder with filthy kitchen"
    />
    <p>Clean for at least 30 minutes.</p>
    <p>
      <span>
        Read
        {' '}
        <LinkTo
          href="https://www.popularmechanics.com/home/interior-projects/how-to/g1238/15-secrets-to-cleaning-your-home-in-half-the-time/"
          label="this article"
        />
        {' '}
        before you start for some tips on how to clean more efficiently.
      </span>
    </p>
    <p>
      <span>
        And check out
        {' '}
        <LinkTo
          href="https://amzn.to/2EqPNe6"
          label="Marie Kondo&apos;s book"
        />
        {' '}
        if you want to take it to the next level.
      </span>
    </p>
    <p>
      <span>And 30 minutes staaaarrrrrts...<span className={styles.bold}>NOW!</span></span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Clean your place...together"
      content={userContent}
      timeToComplete="30+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
