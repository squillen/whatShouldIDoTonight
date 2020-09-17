import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      What ingredients do you have in the kitchen right now? Cook with those. Make it more fun by doing it Chopped-style.
    </p>
    <Photo
      src="https://media.giphy.com/media/3o85xLKELPolFREtTa/giphy.gif"
      alt="cook sloppily pushing all ingredients into a bowl of liquid"
    />
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
  const pageInfo = {
    tags: 'cook/supercook/recipes',
    pageDescription: 'Cook something interesting tonight with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Cook a meal"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
