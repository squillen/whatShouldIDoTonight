import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>The title says it all.</p>
    <p>
      <span>
        {' '}
        <LinkTo
          href="https://www.fandango.com/movies-in-theaters"
          label="See what&apos;s playing"
        />
        {' '}
        now and have fun.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/UDjF1zMreMld6/giphy.gif"
      alt="Old timey clip at drive-in with the caption, 'And now...it's show time'"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go to the movies"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
