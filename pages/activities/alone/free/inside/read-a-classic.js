import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>

    <p>That&apos;s right, Shakespeare. Get in touch with your inner scholar.</p>
    <Photo
      src="https://media.giphy.com/media/oveqQA2LxpwYg/giphy.gif"
      alt="Winking Shakespeare"
    />
    <p>
      <span>
        Check out
        {' '}
        <LinkTo
          href="https://www.gutenberg.org/"
          label="Project Gutenberg"
        />
        {' '}
        for tons of free options.
      </span>
    </p>
    <p>We personally recommend:</p>
    <ul>
      <li>
        <LinkTo
          href="https://www.gutenberg.org/ebooks/1661"
          label="The Adventures of Sherlock Holmes"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.gutenberg.org/ebooks/5200"
          label="Metamorphosis"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.gutenberg.org/ebooks/2500"
          label="Siddhartha"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.gutenberg.org/ebooks/140"
          label="The Jungle"
        />
      </li>
      <li>
        <LinkTo
          href="https://www.gutenberg.org/ebooks/100"
          label="The Complete Works of Shakespeare"
        />
      </li>
    </ul>
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
