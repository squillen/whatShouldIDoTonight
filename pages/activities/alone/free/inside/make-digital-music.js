import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/8gwgQZR82xB2o/giphy.gif"
      alt="cat mean mugging and dj'ing"
    />
    <p>
      Don&apos;t let this mean-mugging cat show you up cause the great thing about the age of computers is that anyone can make music. Oh wait, maybe that&apos;s the bad thing about it?
    </p>
    <p>Well, either way, you, too, can make some (questionably good) digital music right now (for free!) with:</p>
    <ul>
      <li>
        <span>
          <LinkTo
            href="https://www.apple.com/mac/garageband/"
            label="garageband"
          />
          {' '}
          if you have a mac, or even if
          {' '}
          <LinkTo
            href="https://garagebandonpc.com/"
            label="you don&apos;t"
          />
        </span>
      </li>
      <li>
        <LinkTo
          href="https://www.audiotool.com/"
          label="audiotool"
        />
      </li>
      <li>
        <LinkTo
          href="https://looplabs.com/beta"
          label="looplabs"
        />
      </li>
    </ul>
    <p>
      <span>
        And if you&apos;re ready for some more serious software,
        {' '}
        <LinkTo
          href="/activities/alone/notFree/inside/make-digital-music"
          label="hop over here"
        />
        {' '}
        and get down to business.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Make digital music...fo' free!"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
