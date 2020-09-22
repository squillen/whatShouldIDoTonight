import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Or whoever, but she&apos;s pretty cool!</p>
    <div className={styles.iframeContainer}>
      <iframe title="Yoga with Adriene" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/YbAYMQC_ZaE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        Check out her
        {' '}
        <LinkTo
          href="https://www.youtube.com/user/yogawithadriene"
          label="YouTube channel"
        />
        {' '}
        for more.
      </span>
    </p>
    <p>This prepares you for a future thing to do tonight or another night: twister.</p>
    <p>Namaste, mother fuckers.</p>
    <Photo
      src="https://media.giphy.com/media/9Xiv14oD5OKGY/giphy.gif"
      alt="Dog licking owner while she's doing yoga"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'yoga/yoga with adriene/flexible/flexibility/stretch/exercise',
    pageDescription: 'Learn how to practice yoga tonight with help from these hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn Yoga...with Adriene!"
      content={userContent}
      timeToComplete="30 minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
