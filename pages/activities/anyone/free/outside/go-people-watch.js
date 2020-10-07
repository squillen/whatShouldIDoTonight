import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>You can do this almost anywhere and get some free entertainment (and maybe even some fashion ideas).</p>
    <p>It&apos;s pretty simple, you just go anywhere there are people and then watch them. But, like, subtly.</p>
    <Photo
      src="https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif"
      alt="Guy from Silicon Valley looking out sliding glass door through blinds"
    />
    <p>Consider a:</p>
    <ul>
      <li>park</li>
      <li>coffee shop</li>
      <li>hiking trail</li>
      <li>wherever</li>
    </ul>
    <p>
      <span>
        And, if you feel like being a weirdo about it and taking it to the next level, check out this
        {' '}
        <LinkTo
          href="https://www.psychologytoday.com/us/blog/fulfillment-any-age/201504/the-experts-guide-people-watching"
          label="Psychology Today"
        />
        {' '}
        article. I mean, it can&apos;t be too bad if a <span className={styles.italicAndBold}>*doctor*</span> wrote an article about it, right??
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
