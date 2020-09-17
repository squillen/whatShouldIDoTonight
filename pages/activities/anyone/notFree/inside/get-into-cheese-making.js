import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <div className={styles.quotation}>
      <div>Why were mozzarella and feta holding hands?</div>
      <div className={styles.italic}>They looked gouda together.</div>
    </div>
    <p>
      <span>
        Don&apos;t worry, I hate me, too. I guess that&apos;s why I&apos;ll probably
        {' '}
        die <span className={styles.italicAndBold}>provolone</span>. Yea, that&apos;s right, fuck you, I changed my mind and doubled down.
      </span>
    </p>
    <iframe className={styles.iframe} src="https://www.youtube-nocookie.com/embed/j1dWN5wlYuU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>
      <span>
        Check ☝☝ that out for a simple recipe that you might be able to do right now. If not, check out
        {' '}
        <LinkTo
          href="https://amzn.to/35v2Fey"
          label="this mozzarella & ricotta kit"
        />
        {' '}
        for an even easier entry into the world of cheese making.
      </span>
    </p>
    <p>Now go out there and have a gouda night. Yea, same pun. Deal with it.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'cheese/make cheese/at home/fun/hobby',
    pageDescription: 'Learn how to make cheese at home with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get into cheese making"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
