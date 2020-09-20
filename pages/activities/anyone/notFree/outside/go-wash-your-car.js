import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Our cars take so much abuse from us.</p>
    <Photo
      src="https://media.giphy.com/media/fx2uQQZG8AuZ0MikCE/giphy.gif"
      alt="woman trying to be sexy and wash car but slips and falls on her face"
    />
    <p>Can&apos;t you do this little bit for her? Or him. Or they.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'car wash/wash your car/car care',
    pageDescription: 'Go wash your car!'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Wash your car"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
