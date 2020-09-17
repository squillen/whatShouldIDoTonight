import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Ok, this might not be everybody&apos;s idea of fun, but chances are you&apos;ll be happy you did it in the end.</p>
    <Photo
      src="https://media.giphy.com/media/Pk20jMIe44bHa/giphy.gif"
      alt="silly looking dog in workout gear running on track"
    />
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.healthline.com/health/fitness-exercises/10-best-exercises-everyday#start-here"
          label="these classic exercises"
        />
        {' '}
        to get you started.
      </span>
    </p>
    <p>
      <span>
        But if you have some money to spend (and maybe some commitment issues), try out
        {' '}
        <LinkTo
          href="https://classpass.com"
          label="classpass"
        />
        , where you have access to a variety of classes, probably even one you can find for tonight!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'classpass/exercise/new/try/fun/healthy',
    pageDescription: 'Get healthy with these helpful tips'
  }
  return (
    <Post
      title="Try some new exercises"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
