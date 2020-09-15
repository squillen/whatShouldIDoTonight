import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Walk to the store. Walk around the block. Just make sure you all walk for at least 30 minutes straight.</p>
    <Photo
      src="https://media.giphy.com/media/sGQOTQ6AvCi4/giphy.gif"
      alt="power walkers"
    />
    <p>
      Talk to each other. If you want some prompts, ask each other:
      <ol>
        <li>What is your favorite city in the world? Why?</li>
        <li>What is your perfect day?</li>
        <li>Are you a good person?</li>
        <li>Describe your perfect meal in your perfect setting.</li>
        <li>Would you rather be rich or famous?</li>
        <li>What song would you play at your funeral?</li>
      </ol>
    </p>
    <p>That&apos;s right. Not 3 questions. Not 5. 6 questions. Now talk about the complete monsters we are.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Walk for 30 minutes"
      content={userContent}
      timeToComplete="30 minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
