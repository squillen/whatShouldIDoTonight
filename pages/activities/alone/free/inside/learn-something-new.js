import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/ZoAa7lsmym6UE/giphy.gif"
      alt="Kevin Hart saying 'You gone learn today"
    />
    <p>Learn how to budget, code, make movies, take photos, whatever!</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.khanacademy.org/"
          label="Khan Academy"
        />
        {' or '}
        <LinkTo
          href="https://www.edx.org/"
          label="edX"
        />
        {' '}
        for some free options.
      </span>
    </p>
    <p>
      <span>
        And here&apos;s something to get you started: the wood frog
        {' '}
        <LinkTo
          href="https://melmagazine.com/en-us/story/the-frog-that-can-hold-its-pee-for-eight-months"
          label="holds its pee for up to eight months"
        />
        {'. '}
        Now you know.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn something new...fo' free!"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
