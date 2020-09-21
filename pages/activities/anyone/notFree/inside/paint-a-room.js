import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/3o6vXKsQq3pLaBfRyo/giphy.gif"
      alt="Man painting with his body"
    />
    <p>
      Order some pizza or Chinese food, play some music, watch some TV, invite a
      friend over under the guise of &quot;missing them&quot; and get your place lookin&apos; good!
    </p>
    <p>
      <span>
        Check out the
        {' '}
        <LinkTo
          href="https://www.diynetwork.com/how-to/skills-and-know-how/painting/how-to-paint-a-room"
          label="how to"
        />
        {' '}
        before you start.
      </span>
    </p>
    <p>Happy painting!</p>
    <Photo
      src="https://media.giphy.com/media/3Fi5jZkZdJA4M/giphy.gif"
      alt="Bob Ross saying 'Believe that you can do it'"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'paint/room/house/repair',
    pageDescription: 'Cook something tonight with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Paint a room"
      content={userContent}
      timeToComplete="the whole night"
    />
  )
}

export default connect()(Content)
