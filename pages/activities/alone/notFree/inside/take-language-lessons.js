import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>
      <span>
        When
        {' '}
        <LinkTo
          href="/activities/alone/inside/brush-up-on-a-language"
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
      </span>
      {' '}
      (where you can get a tutor for
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
  return (
    <Post
      title="Take some language lessons"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
