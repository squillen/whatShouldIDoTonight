import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>How about you try something different for a change and be worldly tonight, ya dirty bumpkin.</p>
    <Photo
      src="https://media.giphy.com/media/IgGXF1GXc45q1Endtk/giphy.gif"
      alt="Joe Dirt with lit cigarette staring and pointing into camera"
    />
    <p>I&apos;m sorry, I&apos;m just projecting.</p>
    <p>
      There are so many delicious cuisines out there, so don&apos;t let yourself get stuck eating
      the usual Mexican / Italian / American / Asian foods.
    </p>
    <p>I&apos;m talking Moroccan, Middle Eastern, Polish, South American, Antarctican.</p>
    <p>
      <span>
        Ok, that last one doesn&apos;t actually exist, but check
        {' '}
        <LinkTo
          href="https://www.bbcgoodfood.com/howto/guide/10-new-cuisines-you-need-try"
          label="this"
        />
        {' '}
        out for the others mentioned there.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/PhrRiKyedpHuNBFHwK/giphy.gif"
      alt="Parent penguin regurgitating food into child's mouth"
    />
    <p>☝☝ the Antarctic diet, the next big fad.</p>

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
