import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

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
      The man, the myth, the (I Am) legend.
        {' '}
        <LinkTo
          href="https://amzn.to/335k7Ud"
          label="Watch him"
        />
        {' '}
        protect us from aliens, search for happyness, and so, so much more.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Will Smith night"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
