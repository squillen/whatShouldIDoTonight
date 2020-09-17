import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>That&apos;s right, Edgar Allen. Get in touch with your inner creative.</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="http://www.classicshorts.com/"
          label="this site"
        />
        {' '}
        for some inspiration.
      </span>
    </p>
    <p>Write at least 550 words.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'short story/write/creative/share/express/edgar allen poe/classicshorts.com',
    pageDescription: 'Get in touch with a side of yourself you never knew, or that you forgot about. Write a short story.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Write a short story"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
