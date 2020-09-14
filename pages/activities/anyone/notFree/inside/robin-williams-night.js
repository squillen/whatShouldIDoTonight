import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <div className={styles.centered}>
      <img
        src="https://i.ibb.co/Q6KJJvH/Stereotype-Star-Gothika-Halle-Berry.jpg"
        alt="Halle Berry in Gothika"
        className={styles.photo}
      />
    </div>
    <p>
      <span>
      One of the greatest. Check him out
        {' '}
        <LinkTo
          href="https://amzn.to/2GqOpsC"
          label="here"
        />
        {' '}
      and get ready for a night of laughs, tears, and thoughts.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Robin Williams night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
