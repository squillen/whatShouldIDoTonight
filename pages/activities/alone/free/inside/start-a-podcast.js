import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Got something to say and want the world to listen?</p>
    <iframe title="Hal in Malcolm in the Middle driving around doing illegal radio show" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/ilWQ6syB5pE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>
      <span>
        You&apos;re damn right you do!
        {' '}
        <LinkTo
          href="https://www.podbean.com/"
          label="Start"
        />
        {' '}
        that revolution, internet person! And remember that we always believed in you when you inevitably take over the world!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'podcast/start/ideas/podbean/share',
    pageDescription: 'Share your thoughts and start a podcast'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Start a podcast"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
