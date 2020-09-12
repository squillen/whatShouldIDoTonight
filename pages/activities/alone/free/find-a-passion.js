import { connect } from 'react-redux'
import Post from '../../../../components/post/post'
import LinkTo from '../../../../components/linkTo/linkTo'
import styles from '../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Did you find it yet? Sweet. Next.</p>
    <p>Alright, fine, maybe it&apos;s not that easy.</p>
    <p>Spend at least an hour tonight thinking about things to do in life.</p>
    <p>Not like, &quot;I need to change the world&quot; kind of thoughts, just &quot;life can be pretty awesome and I want to take advantage of that&quot; kind of thoughts.</p>
    <p>
      <span>
        Here are a
        {' '}
        <LinkTo
          href="https://youtu.be/6pgaJb2Wwhs"
          label="couple"
        />
        {' '}
        of
        {' '}
        <LinkTo
          href="https://medium.com/the-mission/how-to-find-your-true-passion-and-live-a-life-you-wont-regret-on-your-deathbed-c58ce450beaf"
          label="places"
        />
        {' '}
        to start with.
      </span>
    </p>
    <p>
      Have fun with it, though. Don&apos;t put too much pressure on yourself. Have a glass of wine or a cup of tea and just enjoy the process!
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Find a passion"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
