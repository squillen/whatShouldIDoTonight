import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Before you can start drawing those naked French ladies, you have to start with the basics.</p>
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
        And, if you find yourself really enjoying it or you just want something more serious, check out
        {' '}
        <LinkTo
          href="https://www.udemy.com/course/the-ultimate-drawing-course-beginner-to-advanced/"
          label="this Udemy"
        />
        {' '}
        course for a really great intro, but wait for it to go on sale because those videos always go on sale.
      </span>
    </p>
    {/* <Info
      label="Wait for it to go on sale. Those videos always go on sale."
    /> */}
    <p>And now here&apos;s something to get you started:</p>
    <Photo
      src="https://media.giphy.com/media/efgSHVycEBc0Et79xt/giphy.gif"
      alt="how to draw baby shark"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'udemy/draw/doodle/learn to draw/learn',
    pageDescription: 'Learn to draw with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Doodle"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
