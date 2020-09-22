import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/WEp8jaMzAF8Gs/giphy.gif"
      alt="Jack Dawson drawing Rose in the Titanic"
    />
    <p>Before you can start drawing those naked French ladies, you have to start with the basics.</p>
    <p>Check out this video for a really good overview on the basics of drawing:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} title="Learn To Draw #01 - Sketching Basics + Materials" src="https://www.youtube.com/embed/ewMksAbgdBI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
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
