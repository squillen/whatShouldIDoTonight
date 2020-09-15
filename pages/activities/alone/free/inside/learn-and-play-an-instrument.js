import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import Photo from '../../../../../components/photo/photo'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>If you already have/know an instrument, play it. Learn one new song you like.</p>
    <p>
      <span>
        Don&apos;t know (or have) an instrument yet? Check out
        {' '}
        <LinkTo
          href="https://www.guitarcenter.com/"
          label="GuitarCenter"
        />
        {' '}
        or go local and find one that you want to learn how to play and before you know it, you could be all like:
      </span>
    </p>
    <Photo
      src="https://media.giphy.com/media/NU8tcjnPaODTy/giphy.gif"
      alt="mouse 'playing' several woodwind instruments"
    />
    <p>
      <span>
        And if you really don&apos;t want to spend any money, check out sites
        {' '}
        <LinkTo
          href="https://www.virtualmusicalinstruments.com/"
          label="like this one"
        />
        {' '}
        and see if that&apos;s interesting at all.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Learn/play an instrument"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
