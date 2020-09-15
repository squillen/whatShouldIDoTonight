import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Beer tastes great. Homemade beer tastes even better. Maybe it&apos;s all the blood and sweat.
      Well worth all the band-aids and sauna sessions.
    </p>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AVV3UJCFnA4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>
      <span>
        Check ☝☝ that out and then get
        {' '}
        <LinkTo
          href="https://amzn.to/33sASsr"
          label="this tasty starter kit"
        />
        {' '}
        (got that for my mom one year--she absolutely loved it. You don&apos;t know her, but that&apos;s a good seal of approval).
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Get into beer making"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
