import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>...and pick some up!</p>
    <Photo
      src="https://media.giphy.com/media/JyGUoHu2my7Ze/giphy.gif"
      alt="garbage truck arm trying to dump trash from trash can into truck and failing miserably"
    />
    <p>It&apos;s a messy world out there, help clean it up.</p>
    <p>
      Maybe you know of a couple places that are in need of some help,
      like a local park, the shores of a lake/river/etc., the sides of a street, and the like.
    </p>
    <p>
      <span>
        Get out a trash bag, some garden gloves, and a
        {' '}
        <LinkTo
          href="https://amzn.to/3iO6U8P"
          label="trash picker"
        />
        {' '}
        if you (oddly) happen to have one and go to town.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'trash/pick up/clean/clean up/garbage',
    pageDescription: 'Go pick up trash with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get a little trashy"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
