import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Pick a movie and cook something related to the area that it&apos;s filmed in/related to the film.</p>
    <p>
      <span>
        So, for example, if you pick
        {' '}
        <LinkTo
          href="https://amzn.to/3hjAa5A"
          label="The Godfather"
        />
        {', '}
        make (or buy) some veal marsala (tuxedo optional, but not really).
      </span>
    </p>
    <p>If you pick Oldboy, make some bibimbop.</p>
    <p>Or, say you really want sushi, maybe watch Spirited Away or Battle Royale.</p>
    <p>Bonus if you also add the drink of choice from the region you choose!</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Dinner and a movie"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
