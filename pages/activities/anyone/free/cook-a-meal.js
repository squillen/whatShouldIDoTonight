import { connect } from 'react-redux'
import LinkTo from '../../../../components/linkTo/linkTo'
import Post from '../../../../components/post/post'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      What ingredients do you have in the kitchen right now? Cook with those. Make it more fun by doing it Chopped-style.
    </p>
    <p>
      <span>
        <LinkTo
          href="https://www.supercook.com/#/recipes"
          label="Supercook"
        />
        {' '}
        helps you figure out which recipes to use with the foods you have.
      </span>
    </p>
    <p>Now use those skills your mama taught you and shake it. The salt and pepper, I mean.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Cook a meal"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
