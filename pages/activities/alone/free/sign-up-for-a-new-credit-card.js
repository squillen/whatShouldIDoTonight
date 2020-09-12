import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>
      Don&apos;t just sign up for one willy-nilly, only do it if you&apos;re in a position to and it actually benefits you.
    </p>
    <p>
      That said, there are a lot of credit cards out there who want you to sign up, and that means that they&apos;re willing to give you some pretty great benefits, like cash back or miles/travel benefits.
    </p>

  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Sign up for a new credit card"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
