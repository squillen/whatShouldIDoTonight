import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Sometimes you need to be reminded to treat yourself. This is that reminder.</p>
    <p>
      Do you have a facial mask? How about white strips? That kinda gross foot stone thing? Nasal strips? Tea? A good movie?
    </p>
    <Photo
      src="https://media.giphy.com/media/2hgAt92zs4qbp9Ld4W/giphy.gif"
      alt="dog at spa"
    />
    <p>Ok, now do any/all of those things tonight.</p>
    <p>
      <span>
        Don&apos;t have any of those?
        {' '}
        <LinkTo
          href="https://amzn.to/3b8ayXU"
          label="We"
        />
        {'...'}
        <LinkTo
          href="https://amzn.to/3gEXWZy"
          label="got"
        />
        {'...'}
        <LinkTo
          href="https://amzn.to/2YMolOX"
          label="you"
        />
        {'.'}
      </span>
    </p>
    <p>
      Now turn on a good movie, get a cup of tea (or a glass of wine/whatever) and get ready for a nice, relaxing night &#128522;
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'pamper/indulge/relax/spa day/spa night/masks/white strips',
    pageDescription: 'Indulge yourself tonight and relax with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="A happy camper is a camper who pampers"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
