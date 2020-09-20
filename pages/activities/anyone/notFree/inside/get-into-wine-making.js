import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/btZEAKlDWnBcY/giphy.gif"
      alt="John C. Reilly sloppily drinking a red glass of wine with the caption 'wine o'clock'"
    />
    <p>Take part in one of the oldest, most sacred, and revered traditions out there. And then get purple-teeth-shitfaced.</p>
    <p>Check 👇👇 this out for a thorough walk through of the process:</p>
    <iframe title="Wine making at home: starting a wine kit" className={styles.iframe} src="https://www.youtube-nocookie.com/embed/4Z-8l1caH0I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>
      <span>
         Now check out their
        {' '}
        <LinkTo
          href="https://amzn.to/35N2X0D"
          label="equipment kit"
        />
        {' and their '}
        <LinkTo
          href="https://amzn.to/35E4nKz"
          label="recipe kits"
        />
        {' '}
        to get everything you need to get started and to now always have a gift ready to give someone.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'wine/make/at home/vintner/homemade wine/northern brewer',
    pageDescription: 'Learn how to make wine with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Get into wine making"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
