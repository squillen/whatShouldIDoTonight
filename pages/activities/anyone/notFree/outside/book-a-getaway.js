import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/aPjiWa9dUtBC/giphy.gif"
      alt="small cabin in the middle of nowhere"
    />
    <p>
    Get in touch with your inner Papa/Mama Muir and get back to nature this weekend.
    </p>
    <p>
      <span>
        See if you can find any spots
        {' '}
        <LinkTo
          href="https://getaway.house"
          label="near you"
        />
        {' '}
        and then start packing!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Book a getaway"
      content={userContent}
      timeToComplete="40+ minutes"
    />
  )
}

export default connect()(Content)