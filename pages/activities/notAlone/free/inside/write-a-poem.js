import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Make it serious. Make it funny. Just make sure it&apos;s on the money.</p>
    <p>
      <span>
        Not sure where to start? Check out
        {' '}
        <LinkTo
          href="https://penandthepad.com/write-poetry-beginners-2112739.html"
          label="this site"
        />
        {' '}
        for some inspiration.
      </span>
    </p>
    <p>You have 30 minutes (after you read that site if you need to).</p>
    <p>Now read them to each other out loud. Rinse and repeat until desired outcome.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Write a poem about the person you're with"
      content={userContent}
      timeToComplete="30 minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
