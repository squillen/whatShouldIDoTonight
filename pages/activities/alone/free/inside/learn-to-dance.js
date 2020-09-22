import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/l2JhL1AzTxORUTDlC/giphy.gif"
      alt="Monica from Friends dancing awkwardly"
    />
    <p>
      You don&apos;t have to be with someone to learn how to dance. In fact, it might be even better to be alone...cause you, uh, you know, might not be very good at it...yet!
    </p>
    <p>So many resources out there are pretty damn bad, but here are some that are hopefully not:</p>
    <p>First, for some inspiration:</p>
    <div className={styles.iframeContainer}>
      <iframe title="Girl learns to dance in a year" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/daC2EPUh22w" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        Then, check out
        {' '}
        <LinkTo
          href="https://www.youtube.com/watch?v=5ueJ4-lTa1s"
          label="this guy"
        />
        , a self-taught dancer, mind you. If you&apos;re impressed, check out his
        {' '}
        <LinkTo
          href="https://www.youtube.com/watch?v=YId5C_RtV0o"
          label="tutorials"
        />
        . They&apos;re not in English, but dance is its own language, right??
      </span>
    </p>
    <p>
      <span>
        Also check out
        {' '}
        <LinkTo
          href="https://www.youtube.com/watch?v=UWawJcxYY6I"
          label="this guy"
        />
        , even though he&apos;s also pretty hard to understand, but you get it.
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/FWcoE5AkG3BRe/giphy.gif"
      alt="Leonardo DiCaprio in The Great Gatsby dancing"
    />
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
