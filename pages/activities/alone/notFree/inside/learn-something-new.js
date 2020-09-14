import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Learn about a different culture, how to appreciate wine, how to code, or whatever else your heart desires!</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.thegreatcoursesplus.com/"
          label="The Great Courses Plus"
        />
        {' or '}
        <LinkTo
          href="https://app.pluralsight.com/"
          label="Pluralsight"
        />
        {' '}
        for some really great quality options.
      </span>
    </p>
    <p>
      <span>
        And here&apos;s something to get you started: the wood frog
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
      title="Learn something new"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
