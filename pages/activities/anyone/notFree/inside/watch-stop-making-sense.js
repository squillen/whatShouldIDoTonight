import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/L4HAlELytPiEKVaxBu/giphy.gif"
      alt="Stop Making Sense"
    />
    <p>Do you like the Talking Heads? Whatever you just said, it doesn&apos;t matter.</p>
    <p>
      <span>
        I know it may be nearly 40 years old at this point, but
        {' '}
        <LinkTo
          href="https://amzn.to/3matDhu"
          label="Stop Making Sense"
        />
        {' '}
        aged very well, in part due to director
        {' '}
        <LinkTo
          href="https://en.wikipedia.org/wiki/Jonathan_Demme"
          label="Jonathan Demme&apos;s"
        />
        {' '}
        simple, expert cinematography. It&apos;s beautifully shot in a way that really makes you feel like
        {' '}
        you&apos;re a part of the band, like you&apos;re actually up on stage with them.
        {' '}
        And what you feel is the love and joy the band members have for each other and the music they make. It&apos;s great.
      </span>
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
  const pageInfo = {
    tags: "stop making sense/talking heads/80's/jonathan demme/documentary/documentaries/concert/movie",
    pageDescription: 'Watch Stop Making Sense tonight with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Watch Stop Making Sense"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
