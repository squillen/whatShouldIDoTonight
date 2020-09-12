import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <div className={styles.centered}>
      <img
        src="https://i.ibb.co/Q6KJJvH/Stereotype-Star-Gothika-Halle-Berry.jpg"
        alt="Halle Berry in Gothika"
        className={styles.photo}
      />
    </div>
    <p>There&apos;s not much this woman can&apos;t do. Maybe not anything.</p>
    <p>
      <span>
        Find her
        {' '}
        <LinkTo
          href="https://amzn.to/3btWmJb"
          label="here"
        />
        {' '}
        and prepare to spend your night in awe of her amazingness.
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
