import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/FWcoE5AkG3BRe/giphy.gif"
      alt="Leonardo DiCaprio in The Great Gatsby dancing"
    />
    <p>
      You don&apos;t have to be with someone to learn how to dance. In fact, it might be even better to be alone...cause you, uh, you know, might not be very good at it...yet!
    </p>
    <p>First, for some inspiration:</p>
    <div className={styles.iframeContainer}>
      <iframe title="Girl learns to dance in a year" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/daC2EPUh22w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>Pretty awesome, right? Now check out this guy, another self-taught dancer, mind you:</p>
    <div className={styles.iframeContainer}>
      <iframe title="Sven Otten (JustSomeMotion) - Parov Stelar - All Night" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/5ueJ4-lTa1s" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        If you&apos;re impressed, check out his
        {' '}
        <LinkTo
          href="https://www.youtube.com/watch?v=YId5C_RtV0o"
          label="tutorials"
        />
        . They&apos;re not in English, but dance is its own language, right??
      </span>
    </p>
    <p>And, just in case you aren&apos;t sold yet:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} src="https://www.youtube-nocookie.com/embed/UWawJcxYY6I" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'learn to dance/rhythm/improve/get better/dance/confidence',
    pageDescription: 'Dance better. Now.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn to dance"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
