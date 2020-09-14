import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME
    <p>
      The great thing about the age of computers is that anyone can make music. Oh wait, maybe that&apos;s the bad thing about it?
    </p>
    <p>Well, either way, you, too, can make digital music right now...for free!</p>
    <p>You can do this via:</p>
    <ul>
      <li>
        <span>
          <LinkTo
            href="https://www.apple.com/mac/garageband/"
            label="garageband"
          />
          {' '}
          if you have a mac, or even if
          {' '}
          <LinkTo
            href="https://garagebandonpc.com/"
            label="you don&apos;t"
          />
        </span>
      </li>
      <li>
        <LinkTo
          href="https://www.audiotool.com/"
          label="audiotool"
        />
      </li>
      <li>
        <LinkTo
          href="https://looplabs.com/beta"
          label="looplabs"
        />
      </li>
    </ul>
    
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Make digital music"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
