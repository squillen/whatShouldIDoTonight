import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>That&apos;s right, Edgar Allen. Get in touch with your inner creative.</p>
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.masterclass.com/articles/how-to-write-a-great-short-story-writing-tips-and-exercises-for-story-ideas#short-story-idea-generator"
          label="this site"
        />
        {' '}
        for some education on how to write and
        {' '}
        <LinkTo
          href="http://www.classicshorts.com/"
          label="this site"
        />
        {' and '}
        <LinkTo
          href="https://blog.reedsy.com/how-to-write-a-short-story/"
          label="this site"
        />
        {' '}
        for some inspiration on what to write.
      </span>
    </p>
    <p>Write at least 450 words.</p>
    <Photo
      src="https://media.giphy.com/media/JgRMIPzWPgyIw/giphy.gif"
      alt="monkey pressing keys at random"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'short story/write/creative/share/express/edgar allen poe/classicshorts.com',
    pageDescription: 'Get in touch with a side of yourself you never knew, or that you forgot about. Write a short story.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Write a short story"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
