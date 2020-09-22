import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
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
    <p>Namaste, mother fucker.</p>
    <Photo
      src="https://media.giphy.com/media/9Xiv14oD5OKGY/giphy.gif"
      alt="Dog licking owner while she's doing yoga"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'yoga/yoga with adriene/learn/practice/peace/flexibility',
    pageDescription: 'Practice yoga with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn yoga...with Adriene!"
      content={userContent}
      timeToComplete="10+ minutes"
    />
  )
}

export default connect()(Content)
