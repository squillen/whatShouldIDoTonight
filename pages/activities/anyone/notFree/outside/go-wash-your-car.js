import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/fx2uQQZG8AuZ0MikCE/giphy.gif"
      alt="woman trying to be sexy and wash car but slips and falls on her face"
    />
    <p>The title says it all.</p>
    <p>Your car does so much for you, can&apos;t you do this little bit for her? Or him. Or they.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Wash your car"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
