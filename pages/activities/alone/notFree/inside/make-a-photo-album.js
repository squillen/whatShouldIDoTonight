import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Do you have a bunch of photos on your computer that you never look at?
      Yes you do, don&apos;t you lie to yourself like that! Or, even worse, to me!
    </p>
    <p>
      Put them into a physical photo album that you can sick on people whenever they come
      over without any risk of them seeing the naked photos you forgot to hide on your phone 🙈
    </p>
    <Photo
      src="https://media.giphy.com/media/9oICkwNJTWogxaGYx1/giphy.gif"
      alt="Schitt's Creek girl rushing towards her phone with the caption 'Oh my god, gimme that!'"
    />
    <p>
      <span>
        Use
        {' '}
        <LinkTo
          href="https://www.mixbook.com/"
          label="Mixbook"
        />
        {' '}
        to make really beautiful albums pretty damn effortlessly.
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
