import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/Qw4X3Fsf0N1VqFFUiBi/giphy.gif"
      alt="caption saying 'Inbox loading' and chipmunk quickly running away after '3502 unread emails' is displayed"
    />
    <p>
      If you saw &quot;3502 unread emails&quot; and thought, &quot;I wish&quot;,
      this suggestion is for you. And it&apos;s no longer a suggestion.
    </p>
    <Photo
      src="https://media.giphy.com/media/l0HlFyu24XghJwpqw/giphy.gif"
      alt="Soccer coach commanding player to do what he's telling him to"
    />
    <p>Yea, sure, it&apos;s not the most exciting, but get it down by 300 and then come back and find something else to do.</p>
    <p>
      Also, if you have Gmail (and prob other mail services...), you can just cheat and mark all as read 😉
      I imagine seeing that number go from 3,000+ to nothing is the closest feeling
      I&apos;ll get to heroine 🤤
    </p>
    <p>Now go clear at least 300 emails.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'clear your inbox/gmail/aol/hotmail'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Clean up your inbox"
      content={userContent}
      timeToComplete="5+ minutes"
    />
  )
}

export default connect()(Content)
