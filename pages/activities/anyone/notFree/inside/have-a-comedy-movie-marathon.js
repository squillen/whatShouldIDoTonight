import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Get some good, wholesome laughs in tonight, like:</p>
    <Photo
      src="https://media.giphy.com/media/l4FAXX1Hb7cIZo73q/giphy.gif"
      alt="Airplane movie pilot asking kid if he's ever seen a grown man naked"
    />
    <p>There&apos;s plenty more where that came from:</p>
    <p className={styles.header}>Silly:</p>
    <ol>
      <li>
        <LinkTo
          href="https://amzn.to/32tqjGj"
          label="Airplane"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3ivT1Mr"
          label="Borat"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2GPMspR"
          label="This is Spinal Tap"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2DY2VHt"
          label="Best in Show"
        />
      </li>
    </ol>

    <p className={styles.header}>Dark:</p>
    <ol>
      <li>
        <LinkTo
          href="https://amzn.to/2FAYaUV"
          label="What We Do in the Shadows"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/32u4OW0"
          label="Harold and Maude (free on Prime)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/33paRKM"
          label="Little Miss Sunshine (free on Starz)"
        />
      </li>
    </ol>

    <p className={styles.header}>Classic:</p>
    <ol>
      <li>
        <LinkTo
          href="https://amzn.to/2FyoizB"
          label="Monty Python and the Holy Grail"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3mhfEq6"
          label="Big"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/33naXT0"
          label="Raising Arizona (free on HBO)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2ZAyGxY"
          label="Young Frankenstein (free on Starz)"
        />
      </li>
    </ol>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'comedy/comedies/movies/movie marathon/raising arizona/big/monty python/the holy grail/harold and maude/airplane/borat/this is spinal tap/best in show',
    pageDescription: 'Watch the best comedic movies with these helpful suggestions'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Have a comedy movie marathon"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
