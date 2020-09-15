import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Or whoever, but she&apos;s pretty cool!</p>
    <p>
      <span>
        Check out her
        {' '}
        <LinkTo
          href="https://www.youtube.com/user/yogawithadriene"
          label="YouTube channel"
        />
        {' '}
        for more.
      </span>
    </p>
    <p>Namaste, mother fucker.</p>
    <Photo
      src="https://media.giphy.com/media/9Xiv14oD5OKGY/giphy.gif"
      alt="Dog licking owner while she's doing yoga"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn yoga...with Adriene!"
      content={userContent}
      timeToComplete="10+ minutes"
    />
  )
}

export default connect()(Content)
