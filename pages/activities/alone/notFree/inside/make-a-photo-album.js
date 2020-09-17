import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Do you have a bunch of photos on your computer that you never look at? Yes you do, don&apos;t you lie to me, dammit!</p>
    <p>
      Put them into a photo album that you can show to people ad nauseam whenever they come
      over without risk of them seeing the naked photos you forgot to hide on your phone 🙈
    </p>
    <p>
      <span>
        Use
        {' '}
        <LinkTo
          href="https://www.mixbook.com/"
          label="Mixbook"
        />
        {' '}
        to make beautiful albums effortlessly.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'mixbook/photo album/scrapbook/photos',
    pageDescription: 'Create a photo album with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make a photo album"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
