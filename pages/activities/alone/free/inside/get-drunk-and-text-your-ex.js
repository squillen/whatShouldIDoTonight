import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>It&apos;s clearly not the worst thing you could do tonight:</p>
    <Photo
      src="https://media.giphy.com/media/llZVEOIi9tCVxFskpY/giphy.gif"
      alt="Drunk party girl spinning a toilet seat around her neck"
    />
    <p>Here&apos;s how you do it:</p>
    <ol>
      <li>Get drunk</li>
      <li>Text your ex</li>
    </ol>
    <p>Don&apos;t say we didn&apos;t come through for you tonight🤜 🤛</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'drunk text/drunk/ex/drunk dial',
    pageDescription: 'Drunk text your ex'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get drunk and text your ex"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
