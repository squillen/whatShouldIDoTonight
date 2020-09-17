import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>That&apos;s right, you filthy animal.</p>
    <Photo
      src="https://media.giphy.com/media/30O6emI7tFRew/giphy.gif"
      alt="hoarder with filthy kitchen"
    />
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
  const pageInfo = {
    tags: 'clean/your place/dirty/marie kondo',
    pageDescription: "Call your mom. She'll love it. So will you. Probably"
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Clean your place"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
