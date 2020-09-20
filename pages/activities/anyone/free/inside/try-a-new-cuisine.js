import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>How about you try something different for a change and be worldly tonight, ya bumpkin.</p>
    <p>
      There are so many delicious cuisines out there, don&apos;t let yourself get stuck eating 
      the usual Mexican / Italian / American / Asian foods.
    </p>
    <p>I&apos;m talking Moroccan, Middle Eastern, Polish, South American, Antarctic.</p>
    <p>
      <span>
        Check
        {' '} 
        <LinkTo
          href="https://www.bbcgoodfood.com/howto/guide/10-new-cuisines-you-need-try"
          label="this"
        />
        {' '}
        out to get you started.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/2UqY3qzXIR6DwM31Aq/giphy.gif"
      alt="A cartoon of a spinning globe with the caption 'The world is yours'"
    />
    <p>
      <span className={styles.italic}>No, Antarctic isn&apos;t real.</span>
    </p>

  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'worldly/cuisines/different/change/american/chinese/south american/south indian/indian/mexican/polish',
    pageDescription: 'Try cuisine from a different part of the world with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make worldly cuisine"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
