import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>That&apos;s right, Shakespeare. Get in touch with your inner laureate.</p>
    <p>
      <span>
        Here are some
        {' '}
        <LinkTo
          href="https://americanliterature.com/books"
          label="free classics"
        />
        {'.'}
      </span>
    </p>
    <p>Read at least 20 pages</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Read a classic"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
