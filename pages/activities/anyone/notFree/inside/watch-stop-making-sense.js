import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    TODO CHANGE ME

    <Photo
      src="https://media.giphy.com/media/L4HAlELytPiEKVaxBu/giphy.gif"
      alt="Stop Making Sense"
    />
    <p>Do you like the Talking Heads? Whatever you just said, it doesn&apos;t matter.</p>
    <p>
      <LinkTo
        href="https://amzn.to/3matDhu"
        label="Stop Making Sense"
      />
      {' '}
      is beautifully shot in a way that really makes you feel like you&apos;re a part of the band, up on stage with them.
      {' '}
      You can really feel the love and joy the band members have for each other and the music they make. It&apos;s great.
    </p>
    <p>
      It&apos;s the perfect amount of weird and the perfect amount of 80&apos;s.
      {' '}
      And if that doesn&apos;t sell you, how about the fact that it&apos;s got near-perfect ratings on
      {' '}
      <LinkTo
        href="https://www.rottentomatoes.com/m/stop_making_sense"
        label="Rotten Tomatoes"
      />
      .
    </p>
    <p>
      <span>Oh, and, if you have Prime, <span className={styles.bold}>it&apos;s free!</span></span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Watch Stop Making Sense"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
