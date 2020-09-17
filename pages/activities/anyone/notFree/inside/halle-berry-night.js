import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/WttDfBDPj21gs/giphy.gif"
      alt="Halle Berry winking"
    />
    <p>There&apos;s not much this woman can&apos;t do. Maybe not anything.</p>
    <p>So let&apos; all just take a moment and say Hallelujah for Halle Berry:</p>
    <Photo
      src="https://media.giphy.com/media/iiS84hOJXh1Pq/giphy.gif"
      alt="Garth and Wayne bowing and saying 'We&apos;re not worthy!'"
    />
    <p>
      <span>
        Find her
        {' '}
        <LinkTo
          href="https://amzn.to/2RsSHSP"
          label="here"
        />
        {' '}
        and prepare to spend your night in awe of her beauty and talent.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Halle Berry night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
