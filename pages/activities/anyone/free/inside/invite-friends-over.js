import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    {/* TODO GIVE IDEA OF WHAT THEY CAN DO */}
    <p>Boom, easy.</p>
    <p>
      <span>
        Don&apos;t have friends?
        {' '}
        <LinkTo
          href="/activities/alone/free/inside/find-someone-to-hang-with"
          label="Find some"
        />
      </span>
      .
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'invite friends/fun/party/do stuff',
    pageDescription: 'Invite friends over or find some'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Invite some friends over"
      content={userContent}
      timeToComplete="10+ minutes"
    />
  )
}

export default connect()(Content)
