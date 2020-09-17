import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/1hMk62K9QRYvyXbzFw/giphy.gif"
      alt="Jimmy Fallon as beatnik"
    />
    <p>Make it about your mom / dad / sibling / grandma / friend / neighbor / whoever.</p>
    <p>
      <span>
        Don&apos;t know the first thing about poetry? Check
        {' '}
        <LinkTo
          href="https://www.masterclass.com/articles/how-to-write-poetry#11-rules-for-writing-good-poetry"
          label="this"
        />
        {' '}
        out first and then give it a go.
      </span>
    </p>
    <p>
      If you like how it turns out, share it with them! Unless it was something like:
    </p>
    <div className={styles.quotation}>
      <div>Roses are red, violets are blue.</div>
      <div>Josh is shitty and he looks like a shoe.</div>
    </div>
    <p>Josh, you ugly.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'poem/write/fun/creative/masterclass/.com',
    pageDescription: 'Write a poem about someone you love. Or hate.'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Write a poem about someone"
      content={userContent}
      timeToComplete="20+ minutes"
    />
  )
}

export default connect()(Content)
