import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Beer tastes great. Homemade beer tastes even better. Maybe it&apos;s all the blood and sweat.
      Well worth all the band-aids and sauna sessions. Oh well, looks like my secret recipe is out of the bag now 🤷‍♂️
    </p>
    <div className={styles.iframeContainer}>
      <iframe title="How to brew your first homemade beer" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/AVV3UJCFnA4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
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
  const pageInfo = {
    tags: 'beer/make/at home/kits/northern brewer',
    pageDescription: 'Learn to make beer at home with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get into beer making"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
