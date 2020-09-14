import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>Why were mozzarella and feta holding hands?</p>
    <p className={styles.italic}>They looked gouda together.</p>
    <p>Don&apos;t worry, I hate me, too. I guess that&apos;s why I&apos;ll probably die provolone. Yea, fuck you, I doubled down.</p>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/j1dWN5wlYuU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Get into cheese making"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
