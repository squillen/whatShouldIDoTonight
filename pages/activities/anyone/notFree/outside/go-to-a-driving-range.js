import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/bC54CmvT2XC9i/giphy.gif"
      alt="Happy Gilmore hitting golf ball"
    />
    <p>
      <span>
        Find some
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk02NdighUkhq8stJgBKF4JEvj84Wug%3A1600111509629&source=hp&ei=lcNfX-2jIsb8tAW-pKGoCg&q=driving+ranges+near+me&oq=driving+ranges+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBQgAEJIDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCABQogNYogNgngZoAHAAeACAAX2IAX2SAQMwLjGYAQCgAQKgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwitwoPxr-nrAhVGPq0KHT5SCKUQ4dUDCAk&uact=5"
          label="driving ranges near you"
        />
        {' '}
        and get some anger out by smacking the shit out of some helpless balls.
      </span>
    </p>
    <p>That&apos;s what she said. If she was crazy.</p>
    <Photo
      src="https://media.giphy.com/media/f8pT7bphqES4M/giphy.gif"
      alt="Michael Scott stifling a laugh"
    />
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'driving range/golf/fun/hit golf balls/golf balls',
    pageDescription: 'Find a driving range to go to with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go to a driving range"
      content={userContent}
      timeToComplete="1+ hour"
    />
  )
}

export default connect()(Content)
