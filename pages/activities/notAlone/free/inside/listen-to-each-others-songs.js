import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Do you have an all-time favorite song? Album?</p>
    <p>Well, get those queued up cause you all are about to take turns listening to each others&apos; choices.</p>
    <p>Break out the wine/beer/weed (or just a nice cup of tea!) and enjoy.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Each pick a song/album you love"
      content={userContent}
      timeToComplete="45+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
