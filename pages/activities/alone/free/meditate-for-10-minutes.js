import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Quit your grumbling.</p>
    <p>
    Meditation doesn&apos;t have to be boring. In fact, it can actually be *gasp* enjoyable?!
    </p>
    <p>
      <span>
        Try out
        {' '}
        <LinkTo
          href="https://www.calm.com/"
          label="calm"
        />
        {' '}
        for some nice guided exercises.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Meditate for 10 minutes"
      content={userContent}
      timeToComplete="10 minutes"
    />
  )
}

export default connect()(Content)
