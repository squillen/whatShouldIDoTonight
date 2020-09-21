import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      If your Netflix / Hulu / Prime watchlist was a TV
      show in itself, it would definitely be Hoarders.
    </p>
    <Photo
      src="https://media.giphy.com/media/30O6emI7tFRew/giphy.gif"
      alt="Lady on Hoarders"
    />
    <p>When was the last time you looked beyond the fourth or fifth show in there?</p>
    <p>Go through your list(s) and either watch it or get rid of it. Marie Kondo that shit.</p>
    <p>
      <span>
        If you&apos;re on Netflix, consider also
        {' '}
        <LinkTo
          href="https://www.lifewire.com/delete-continue-watching-netflix-4173006"
          label="cleaning your &apos;continue watching&apos; list"
        />
        {' '}
        (also helpful for that embarrassing show you &apos;accidentally&apos; watched 😉).
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'netflix/hulu/prime/queue/watch list/my list',
    pageDescription: 'Clean up your netflix or hulu watchlist with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Clean up your queue"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
