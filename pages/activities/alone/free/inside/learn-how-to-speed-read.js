import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>The more you can read the more knowledge you can consume and the richer life becomes for you. Maybe literally.</p>
    <p>Here&apos;s a little bit of a technical breakdown from Tim Ferris and, just to save you some time from
      trying to figure out what&apos;s going on with his head, it&apos;s an unfortunately-colored beanie, not a bald Tim Ferris wearing a sweatband:</p>
    <div className={styles.iframeContainer}>
      <iframe title="How to Speed Read | Tim Ferriss" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/ZwEquW_Yij0?start=26" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>Or, if you want a less technical approach, check out this guy:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} title="Learn How To Speed Read - Best Speed Reading Techniques" src="https://www.youtube.com/embed/xiTK523Ot5U?start=35" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>
      <span>
        Also check out
        {' '}
        <LinkTo
          href="https://www.speedreadingtechniques.org/how-to-speed-read"
          label="this speed reading website"
        />
        {' '}
        for even more techniques and resources.
      </span>
    </p>
    <p>Keep at it, practice is crucial here, and soon you can rival this guy:</p>
    <Photo
      src="https://media.giphy.com/media/8dYmJ6Buo3lYY/giphy.gif"
      alt="Baby acting like he can read"
    />
    <p>Legend.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'speed read/learn/educate/read faster',
    pageDescription: 'Learn to read faster with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn how to speed read"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
