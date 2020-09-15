import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Take part in one of the oldest, most sacred, and revered traditions out there. And then get purple-teeth-shitfaced.</p>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/4Z-8l1caH0I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>
      <span>
        Check ☝☝ that out for a thorough walk through of the process and then check out their
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
  return (
    <Post
      title="Get into wine making"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
