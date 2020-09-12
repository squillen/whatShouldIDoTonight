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
    <p>Stressed? Bored? Angry? Keep calm and Carrey on. The Truman Show, Dumb and Dumber, Ace Ventura, Eternal Sunshine of the Spotless Mind, The Cable Guy?? I mean come on! The list is basically endless.</p>
    <p>
      <span>
        Rent some from
        {' '}
        <LinkTo
          href="https://amzn.to/324hNg"
          label="Amazon"
        />
        {' '}
        and don&apos;t be a loo-hoo-zuh-her, throw another shrimp on the barbie, and go and totally redeem yourself!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Jim Carrey night"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
