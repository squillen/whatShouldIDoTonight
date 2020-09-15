import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/zqYA9S9EBR3xe/giphy.gif"
      alt="Meg Ryan orgasm scene in When Harry Met Sally"
    />
    <p>Feel as good as Meg Ryan and watch some rom-coms tonight. They can get a bad name, but some are genuinely good, like:</p>
    <ol>
      <li>
        <LinkTo
          href="https://amzn.to/2Fw1UXQ"
          label="As Good As It Gets (on Prime, IMDBtv)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/35z72Fj"
          label="When Harry Met Sally"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3bWolkV"
          label="10 Things I Hate About You (on Disney+)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/33ynzaa"
          label="Clueless"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2E2Fpt2"
          label="Mean Girls (on Showtime)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3kjkRfs"
          label="The Big Sick (on Prime)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/2DYlz1W"
          label="The Princess Bride (on Disney+)"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/35z7zah"
          label="There&apos;s Something About Mary"
        />
      </li>
    </ol>

  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Have a rom-com movie marathon"
      content={userContent}
      timeToComplete="3+ hours"
    />
  )
}

export default connect()(Content)
