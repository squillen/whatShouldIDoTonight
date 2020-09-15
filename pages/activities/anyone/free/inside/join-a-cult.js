import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Ok, here me out on this one, there are a lot of benefits.</p>
    <Photo
      src="https://media.giphy.com/media/10gRGExfHAlrO0/giphy.gif"
      alt="people in white clothing, insinuating that they&apos;re in a cult"
    />
    <p>Nah, I&apos;m just kidding, move on to the next one.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Join a cult"
      content={userContent}
      timeToComplete="eternity"
    />
  )
}

export default connect()(Content)
