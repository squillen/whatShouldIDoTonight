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
        <LinkTo
          href="https://en.wikipedia.org/wiki/Tommy_Wiseau"
          label="He"
        />
      </span>
      {' '}
      is unfortunately prolific. Or maybe fortunately, you decide.
    </p>
    <p>
      <span>
        <LinkTo
          href="hhttps://amzn.to/2FNRpyW"
          label="Check out"
        />
      </span>
      {' '}
      isome of his movies and prepare to be gobsmacked, Mark.
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Tommy Wiseau night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
