import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/xT1XGXoaqfJXP3KCfC/giphy.gif"
      alt="Will Smith punching an alien in the face in Independence Day"
    />
    <p>If Will Smith can save the world from aliens, you&apos;re damn right he can save you&apos;re night from boredom.</p>
    <p>
      <span>
      He&apos;s man, the myth, the (I Am) legend.
        {' '}
        <LinkTo
          href="https://amzn.to/2E6SDVG"
          label="Watch him"
        />
        {' '}
        protect us from aliens, search for happyness, and so, so much more.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a Will Smith night"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
