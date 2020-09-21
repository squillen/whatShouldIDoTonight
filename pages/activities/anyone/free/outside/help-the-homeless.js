import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>
      Drive around and pass out some (or all!) of the following:
    </p>
    <ul>
      <li>water</li>
      <li>coffee (especially if it&apos;s cold outside)</li>
      <li>hand warmers (again, especially if cold)</li>
      <li>PB&J / ham & cheese / any kind of sandwiches</li>
      <li>(unwanted) clothes, especially socks</li>
    </ul>
    <p>
      <span>
        Check out a full list
        {' '}
        <LinkTo
          href="https://invisiblepeople.tv/what-to-give-to-homeless-people/"
          label="here"
        />
        {' '}
        for even more ideas.
      </span>
    </p>
    <p>Or drop everything off to a shelter directly.</p>
    <p>Any help would obviously be definitely appreciated! 😊</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'feed/clothe/the homeless/help',
    pageDescription: 'Help the homeless with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Help the homeless"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
