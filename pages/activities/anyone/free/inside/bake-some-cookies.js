import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

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
        , make those bad boys, and then get the milk out because your night just turned into a slam-fucking-dunk.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/oxqgyeOYXVks/giphy.gif"
      alt="dunking an oreo cookie at an alarming speed"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'bake/cookies/recipes/allrecipes',
    pageDescription: 'Bake some cookies and make your night tasty and delicious.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Bake some cookies!"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
