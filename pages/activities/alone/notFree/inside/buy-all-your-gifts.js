import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>Let this year be the year that you&apos;re not scrambling to get last minute gifts for everyone.</p>
    <p>Get them done. Right now.</p>
    <p>You obviously don&apos;t have to order everything right now, just know what it is that you want to get them.</p>
    {/* give suggestions (men/women/mother/father/sister/grandma/etc) */}
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Get your gifts done with"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
