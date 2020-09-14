import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>...and make donation piles.</p>
    <p>Go through your closet and figure out which clothes you no longer want/need.</p>
    <p>
      <span>
        Once you&apos;ve got them together, check out
        {' '}
        <LinkTo
          href="https://thredup.com"
          label="thredup"
        />
        {' '}
        or just donate them locally!
      </span>
    </p>
    <p>Either way, you have to get rid of those piles you just created.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Get your shit together...together"
      content={userContent}
      timeToComplete="45+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
