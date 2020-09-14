import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Everyone can always improve their social skills. Even in a world of screens, people who can communicate effectively rule the world.
    </p>
    <p>There are several resources out there to help you out, including:</p>
    <p>Free options:</p>
    <ul>
      <li>
        <LinkTo
          href="https://www.improveyoursocialskills.com/"
          label="improveyoursocialskills.com"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.lifehack.org/articles/communication/12-ways-improve-social-skills-and-make-you-sociable-anytime.html"
          label="this lifehack article"
        />
      </li>
    </ul>
    <p>And some paid options:</p>
    <ul>
      <li>
        <LinkTo
          href="https://amzn.to/2Rm6BG3"
          label="the book by the guy from improveyoursocialskills.com"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3mjKdv9"
          label="a book on how to talk to anyone"
        />
      </li>
    </ul>
    <p>
      <span>
        And, if you get particularly confident, check out
        {' '}
        <LinkTo
          href="https://www.toastmasters.org/"
          label="toastmasters"
        />
        .
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Improve your social skills"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
