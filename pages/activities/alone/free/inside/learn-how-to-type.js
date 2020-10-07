import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"
      alt="cat typing maniacally"
    />
    <p>Computers are pretty much extensions of who we are at this point yet not everyone knows how to properly type. Don&apos;t be one of those people.</p>
    <p>First, check this out:</p>
    <div className={styles.iframeContainer}>
      <iframe className={styles.iframe} src="https://www.youtube-nocookie.com/embed/1ArVtCQqQRE?start=178" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>Then, test yourself and practice at sites like:</p>
    <ul>
      <li>
        <LinkTo
          href="https://www.typingtest.com/"
          label="typingtest.com"
        />
      </li>
      <li>
        <LinkTo
          href="https://10fastfingers.com/typing-test/english"
          label="10fastfingers.com"
        />
      </li>
    </ul>
    <p>And remember: practice, practicr, [ractice. Dammit.</p>
    <p>Practice, prcatice, practcie. Dammit.</p>
    <p>Practice, practice, practice. Aha!</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'learn/type/how to/type faster/improve',
    pageDescription: 'Improve your typing speed and accuracy'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Learn how to type"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
