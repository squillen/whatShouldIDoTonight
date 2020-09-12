import { connect } from 'react-redux'
import LinkTo from '../../../../components/linkTo/linkTo'
import Post from '../../../../components/post/post'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>You probably already have everything you need for this. </p>
    <p>
      <span>
        Get
        {' '}
        <LinkTo
          href="https://www.allrecipes.com/recipes/362/desserts/cookies/"
          label="some recipes"
        />
        {', '}
        make those bad boys, and then get the milk out because this night just turned into a slam-fucking-dunk.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn yoga...with Adriene!"
      content={userContent}
      timeToComplete="10+ minutes"
    />
  )
}

export default connect()(Content)
