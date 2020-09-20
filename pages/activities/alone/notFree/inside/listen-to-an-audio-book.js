import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Learn something without &quot;reading&quot;? Yes, please.</p>
    <Photo
      src="https://media.giphy.com/media/TbPh7p3cfUAPC/giphy.gif"
      alt="Ron Swanson enjoying music with headphones on"
    />
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://amzn.to/2ZGBhq3"
          label="audible.com"
        />
        {' or '}
        <LinkTo
          href="https://www.audiobooks.com/"
          label="audiobooks.com"
        />
        {' '}
        and learn about anything and everything, like the history of America or the Aztecs or WWII or how to cook or almost literally anything else.
      </span>
    </p>
    <p>
      <span>
        The world is your oyster! And by that I mean you can even listen to a freaking
        {' '}
        <LinkTo
          href="https://amzn.to/3kxckW3"
          label="book on oysters"
        />
        !!
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/Ki9ZNTNS7aC9q/giphy.gif"
      alt="Baby laughing and then suddenly very shocked"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'audible/audible.com/audiobooks.com/audio books/learn/read/interesting',
    pageDescription: 'Listen to audio books and learn something new'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Listen to an audio book"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
