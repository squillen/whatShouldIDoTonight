import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Those things you always listen to? You can create one! Do you all have a unique angle on the world and want the world to hear it?
    </p>
    <div className={styles.iframeContainer}>
      <iframe title="Hal in Malcolm in the Middle driving around doing illegal radio show" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/ilWQ6syB5pE" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        You&apos;re damn right you do!
        {' '}
        <LinkTo
          href="https://www.podbean.com/"
          label="Podbean"
        />
        {' '}
        can help you start that revolution, internet people! And remember that we always believed in you when you all inevitably take over the world!
      </span>
    </p>
    <p>If you want some guidance, check out this video from Pat Flynn, who breaks it all down for you:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} title="How to Start a Podcast (Complete Tutorial) 🎤 Equipment & Software" src="https://www.youtube-nocookie.com/embed/PIJpOcFf5h4?start=149" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        If you&apos;re interested, check out
        {' '}
        <LinkTo
          href="https://amzn.to/33Lb4Ig"
          label="this microphone bundle"
        />
        {' '}
        that has everything Pat recommends in the video. And
        {' '}
        <LinkTo
          href="/activities/alone/free/inside/make-digital-music"
          label="check this out"
        />
        {' '}
        if you need some info on recording software.
      </span>
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
