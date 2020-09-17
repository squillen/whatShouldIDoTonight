import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Those things you always listen to? You can create one! Do you all have a unique angle on the world and want the world to hear it?
    </p>
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
        that revolution, internet people! And remember that we always believed in you when you all inevitably take over the world!
      </span>
      <p>Here&apos;s what you&apos;re gonna do:</p>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'podcast/start/share/inform/podbean',
    pageDescription: 'Start a podcast with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Start a podcast"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
