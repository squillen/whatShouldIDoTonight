import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/qK2KaYr3Uhnq0/giphy.gif"
      alt="trippy dog hovering and meditating"
    />
    <p>Quit your grumbling. I mean, don&apos;t do whatever the fuck ☝ that ☝ is, but give it a chance otherwise.</p>
    <p>
    Meditation doesn&apos;t have to be boring. In fact, it can actually be *gasp* enjoyable?!
    </p>
    <p>
      <span>
        Try out
        {' '}
        <LinkTo
          href="https://www.calm.com/"
          label="calm"
        />
        {' '}
        for some nice guided exercises.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'meditate/peace/zen/learn/practice/calm',
    pageDescription: 'Meditate and become a more zen, peaceful person by starting a routine now'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Meditate for 10 minutes"
      content={userContent}
      timeToComplete="10 minutes"
    />
  )
}

export default connect()(Content)
