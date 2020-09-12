import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>The more you can read the more knowledge you can consume and the richer life becomes for you (maybe literally).</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.speedreadingtechniques.org/how-to-speed-read"
          label="the speed reading website"
        />
        {' '}
        for some techniques and more resources.
      </span>
    </p>
    <p>Keep at it, practice is crucial here.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn how to speed read"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
