import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Do you have some board games or cards lying around? Play them!</p>
    <p>Put on some music, make some popcorn, and make things awkward by getting overly competitive.</p>
    <Photo
      src="https://media.giphy.com/media/jJMjabAOv7seQ/giphy.gif"
      alt="person flipping Monopoly game out of frustration"
    />
    <p>
      <span>
        If you have cards but don&apos;t know many games,
        {' '}
        <LinkTo
          href="https://playingcarddecks.com/blogs/all-in/40-great-card-games-for-all-occasions"
          label="check this out"
        />
        .
      </span>
    </p>
    <p>
      <span>
        If you don&apos;t have any cards or board games but that sounds fun to you, go buy some locally, used or new, or
        {' '}
        <LinkTo
          href="/activities/notAlone/notFree/outside/go-to-a-games-cafe"
          label="hope over here"
        />
        {' '}
        and also consider
        {' '}
        <LinkTo
          href="https://amzn.to/33qUGwp"
          label="getting some games"
        />
        {' '}
        to have at your place for next time!
        {' '}
      </span>
    </p>
    <p>I&apos;d personally recommend</p>
    <ul>
      <li>
        <LinkTo
          href="https://amzn.to/2GX3FOd"
          label="Catan"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3mnKUnx"
          label="Uno"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/35zmmSi"
          label="Jenga"
        />
      </li>
      <li>
        <LinkTo
          href="https://amzn.to/3kf4O23"
          label="Sequence"
        />
      </li>
    </ul>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Play board games"
      content={userContent}
      timeToComplete="30+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)