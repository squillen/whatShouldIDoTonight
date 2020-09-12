import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      <span>
        Got commitment issues? Try
        {' '}
        <LinkTo
          href="https://classpass.com"
          label="classpass"
        />
        .
      </span>
    </p>
    <p>You might even be able to find a class for tonight!</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Rethink your wardrobe"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
