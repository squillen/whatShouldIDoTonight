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
      Don&apos;t let this cat mean-mug you into submission. If s/he can make music so can you!
      In fact, that&apos;s the great thing about the age of computers--anyone can make music.
      Oh wait, maybe that&apos;s the bad thing about it?
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
    <p>And if you want a little more of a rundown of what you need to start making electronic music at home:</p>
    <div className={styles.iframeContainer}>
      <iframe title="5 things to start making electronic music at home" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/UxUDIUIfkio" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    <p>And just in case you were like, &quot;who the f is that and why should I listen to her?&quot;, check out her music!</p>
    <div className={styles.iframeContainer}>
      <iframe title="Bad Snacks Spotify sample" src="https://open.spotify.com/embed/track/5zOKeWtBRUZxlpfG8P0LnX" className={styles.iframe} frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
    <p>
      <span>
        If you find yourself ready for some more serious software,
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
  const pageInfo = {
    tags: 'digital music/edm/music software/free/learn',
    pageDescription: 'Make digital music now for free with these helpful tips'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Make digital music...fo' free!"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
