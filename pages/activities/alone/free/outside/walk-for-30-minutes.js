import { connect } from 'react-redux'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p> Walk to the store. Walk around the block. Just make sure you walk for at least 30 minutes straight.</p>
    <Photo
      src="https://media.giphy.com/media/sGQOTQ6AvCi4/giphy.gif"
      alt="power walkers"
    />
    <p>Think about what you&apos;re going to do tomorrow. Or your finances. Or about a trip you want to go on.</p>
    <p>
      <span>
        Or check out
        {' '}
        <LinkTo
          href="https://www.wnycstudios.org/podcasts/radiolab"
          label="thought"
        />
        {'-'}
        <LinkTo
          href="https://www.intelligencesquared.com/podcasts/"
          label="provoking"
        />
        {' '}
        <LinkTo
          href="https://www.npr.org/podcasts/510307/invisibilia"
          label="podcasts"
        />
        {'. '}
         Or some
        {' '}
        <LinkTo
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          label="energizing music"
        />
        .
      </span>
    </p>
    <p>Or just disconnect for a little and listen to the noises around you and pay attention to all the sights.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Walk for 30 minutes"
      content={userContent}
      timeToComplete="30 minutes"
    />
  )
}

export default connect()(Content)
