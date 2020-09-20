import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>We&apos;re honestly disappointed that we had to tell you to do this.</p>
    <Photo
      src="https://media.giphy.com/media/GB91uLrgyuul2/giphy.gif"
      alt="variety of ice creams on display"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'ice cream/parlor/go get ice cream/find ice cream',
    pageDescription: 'Find where to get ice cream near you with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go get ice cream!"
      content={userContent}
      timeToComplete="20+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
