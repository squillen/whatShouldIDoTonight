import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Do it. She'll love it.</p>
    <p>And tell her I say hi. </p>
    <p><span>But, I mean, not like <span className={styles.italic}>that</span>.</span></p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Call your mom"
      content={userContent}
      timeToComplete="20 minutes"
    />
  )
}

export default connect()(Content)
