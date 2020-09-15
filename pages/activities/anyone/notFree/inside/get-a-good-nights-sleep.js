import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Don&apos;t sleep on having a good night&apos;s sleep. Wait, I mean, do, but...don&apos;t? Just get a good night&apos;s sleep, OK??
    </p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.healthline.com/nutrition/17-tips-to-sleep-better#2.-Reduce-blue-light-exposure-in-the-evening"
          label="these"
        />
        {' '}
        <LinkTo
          href="https://www.helpguide.org/articles/sleep/getting-better-sleep.htm"
          label="sites"
        />
        {' '}
        for some helpful tips.
      </span>
    </p>
    <p>
      <span>
        And consider getting some
        {' '}
        <LinkTo
          href="https://amzn.to/2RrbyNK"
          label="blue light blocking glasses"
        />
        {' '}
        that won&apos;t kill your partner&apos;s sex drive for you.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Get a good night's sleep"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
