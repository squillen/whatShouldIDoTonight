import { connect } from 'react-redux'
import LinkTo from '../../../../components/linkTo/linkTo'
import Post from '../../../../components/post/post'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>Boom, easy.</p>
    <p>
      <span>
        Don&apos;t have friends?
        {' '}
        <LinkTo
          href="https://www.whatshouldidotonight.com/posts/alone/free/find-someone-to-hang-with"
          label="Find some"
        />
      </span>
      .
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Invite some friends over"
      content={userContent}
      timeToComplete="10+ minutes"
    />
  )
}

export default connect()(Content)
