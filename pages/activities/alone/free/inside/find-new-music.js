import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      There&apos;s a good chance you&apos;re music pool has gotten stagnant lately.
      Right now, find at least three new bands that you enjoy.
    </p>
    <p>
      Here are a couple of ways that you can go about it:
    </p>
    <ul>
      <li>Go down the Spotify or YouTube rabbit holes for 30 minutes and look at all the recommendations</li>
      <li>
          Get sophisticated about it and check out
        {' '}
        <LinkTo
          href="https://www.gnoosic.com/"
          label="gnoosic"
        />
        {', '}
          which helps you find new music based on what you already like
      </li>
      <li>Call/text a friend and ask them for some of their favorites</li>
    </ul>
    <p>Now get out your flippers because your pool is ready for swimming again 😎</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Find new music"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
