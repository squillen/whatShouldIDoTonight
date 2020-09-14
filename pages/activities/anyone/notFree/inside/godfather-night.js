import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>
      <span>
        That&apos;s gonna be like 9 hours so strap in and get some caffeine, preferably in the form of an
        {' '}
        <LinkTo
          href="https://www.tasteatlas.com/affogato/recipe"
          label="affogato"
        />
      </span>
      .
    </p>
    <p>
      Here&apos;s your plan for the night:
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Godfather movie marathon"
      content={userContent}
      timeToComplete="9+ hours"
    />
  )
}

export default connect()(Content)
