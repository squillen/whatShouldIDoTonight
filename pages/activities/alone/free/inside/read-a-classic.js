import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>

    <p>That&apos;s right, Shakespeare. Get in touch with your inner laureate.</p>
    <Photo
      src="https://media.giphy.com/media/oveqQA2LxpwYg/giphy.gif"
      alt="Winking Shakespeare"
    />
    <p>
      <span>
        Here are some
        {' '}
        <LinkTo
          href="https://americanliterature.com/books"
          label="free classics"
        />
        {'.'}
      </span>
    </p>
    <p>Read at least 20 pages.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'read/improve/classics/books/shakespeare/edgar allen poe/learn',
    pageDescription: 'Read some classic books tonight for free and become smarter for it.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Read a classic"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
