import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Don&apos;t let this be you:</p>
    <Photo
      src="https://media.giphy.com/media/SYOUNgT5BXGnK/giphy.gif"
      alt="Ron Burgundy telling his dog 'You know I don't speak Spanish'"
    />
    <p>
      <span>
        When
        {' '}
        <LinkTo
          href="/activities/alone/free/inside/brush-up-on-a-language"
          label="self-learning programs"
        />
        {' '}
        just aren&apos;t enough, you can always take lessons with an actual human!
      </span>
    </p>
    <p>
      <span>
        You can do this in-person or virtually with
        {' '}
        {/* TODO ADD AFFILIATE */}
        <LinkTo
          href="https://www.wyzant.com/"
          label="wyzant"
        />
        {' or '}
        <LinkTo
          href="https://www.takelessons.com"
          label="takelessons"
        />
      </span>
      {' '}
      (where you can actually get a tutor for
      {' '}
      <LinkTo
        href="/activities/alone/notFree/inside/take-music-lessons"
        label="more than just languages"
      />
      ).
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'languages/learn/practice/tutor/takelessons/wyzant/virtual/lessons/language/spanish/english/chinese',
    pageDescription: 'Get a language tutor and learn a new language with more accountability'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Take some language lessons with a person"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
