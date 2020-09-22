import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Let this year be the year that you&apos;re not scrambling to get last minute gifts for everyone.</p>
    <Photo
      src="https://media.giphy.com/media/11iAbnnYIgFMmQ/giphy.gif"
      alt="Shoppers on Black Friday piling into store"
    />
    <p>Get them done. Right now.</p>
    <p>
      You obviously don&apos;t have to order everything right now, just write everything down
      that you want to get them. Or go get your cards and write it
      out now and put it away for the actual day.
    </p>
    {/* give suggestions (men/women/mother/father/sister/grandma/etc) */}
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'get gifts/friends/family/prepare',
    pageDescription: "Get gifts for people now before it's too late"
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get your gifts done with"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
