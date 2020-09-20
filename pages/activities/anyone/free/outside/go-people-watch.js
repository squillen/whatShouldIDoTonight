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
    <p>You can do this almost anywhere and get some free entertainment and even some fashion ideas out if it.</p>
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
        article. I mean, if a doctor wrote an article about it it can&apos;t be weird, right??
      </span>
    </p>
    <p>Either way, have fun, ya sick perv.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'people watch/fun/get outside/observe/think',
    pageDescription: 'Get outside and take note of the people around you and people watch'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go people watch"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
