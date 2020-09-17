import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>The more you can read the more knowledge you can consume and the richer life becomes for you (maybe literally).</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.speedreadingtechniques.org/how-to-speed-read"
          label="the speed reading website"
        />
        {' '}
        for some techniques and more resources.
      </span>
    </p>
    <p>Keep at it, practice is crucial here, and soon you can rival this guy:</p>
    <Photo
      src="https://media.giphy.com/media/8dYmJ6Buo3lYY/giphy.gif"
      alt="Baby acting like he can read"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'speed read/learn/educate/read faster',
    pageDescription: 'Learn to read faster with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn how to speed read"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
