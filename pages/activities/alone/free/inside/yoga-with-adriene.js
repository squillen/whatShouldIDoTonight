import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Or whoever, but she&apos;s pretty cool!</p>
    <p>
      <span>
        Check out her
        {' '}
        <LinkTo
          href="https://www.youtube.com/user/yogawithadriene"
          label="YouTube channel"
        />
        {' '}
        for more.
      </span>
    </p>
    <p>Namaste, mother fucker.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn yoga...with Adriene!"
      content={userContent}
      timeToComplete="10+ minutes"
    />
  )
}

export default connect()(Content)
