import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/l4FGm4EoWOc5MZ16g/giphy.gif"
      alt="Three Stooges clip"
    />
    <p>Ok, maybe not &#128070; that &#128070; kind of silly, more like &#128071; this &#128071; kind of silly:</p>
    <Photo
      src="https://media.giphy.com/media/yxcv6D5Ltfomk/giphy.gif"
      alt="This is Spinal Tap - go to 11"
    />
    <p>and &#128071; this &#128071;:</p>
    <Photo
      src="https://media.giphy.com/media/Ij8moL0QXBKnK/giphy.gif"
      alt="The Naked Gun - Nice Beaver, - Thanks, I just had it stuffed [actual beaver]"
    />
    <p className={styles.italic}>p.s. Those are This is Spinal Tap and The Naked Gun (respectively), just in case you didn&apos;t know</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'silly movies/fun movies/funny/comedy/this is Spinal Tap/The Naked Gun',
    pageDescription: 'Find Fun, Silly movies to help with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Watch silly movies"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
