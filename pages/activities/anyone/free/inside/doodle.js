import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Info from '../../../../../components/info/info'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Before you can start drawing those naked French ladies, you have to start with the basics</p>
    <p>
      <span>
        Watch
        {' '}
        <LinkTo
          href="https://www.youtube.com/watch?v=TOZxfVp_fSc"
          label="some"
        />
        {' '}
        <LinkTo
          href="https://www.youtube.com/watch?v=ewMksAbgdBI"
          label="videos"
        />
        {' '}
        and have fun with it.
      </span>
    </p>
    <p>
      <span>
        And if you find yourself really enjoying it, or you just want something more serious, check out
        {' '}
        <LinkTo
          href="https://www.udemy.com/course/the-ultimate-drawing-course-beginner-to-advanced/"
          label="this Udemy"
        />
        {' '}
        course for a really great intro.
      </span>
    </p>
    <Info
      label="Wait for it to go on sale. Those videos always go on sale."
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Doodle"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
