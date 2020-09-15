import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif"
      alt="Guy from Silicon Valley looking out sliding glass door through blinds"
    />
    <p>This is great since you can go almost anywhere for this and get some cheap entertainment or even some fashion ideas.</p>
    <p>Go anywhere there are people:</p>
    <ul>
      <li>the park</li>
      <li>a coffee shop</li>
      <li>a hiking trail</li>
      <li>wherever</li>
    </ul>
    <p>
      <span>
        And, if you feel like being a fucking weirdo about it and taking it to the next level, check out this
        {' '}
        <LinkTo
          href="https://www.psychologytoday.com/us/blog/fulfillment-any-age/201504/the-experts-guide-people-watching"
          label="Psychology Today"
        />
        {' '}
        article.
      </span>
    </p>
    <p>Have fun, perv.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Go people watch"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
