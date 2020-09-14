import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>You live where you live for a reason, right?</p>
    <p>Go explore it.</p>
    <p>
      <span>
        <LinkTo
          href="https://www.google.com/search?source=hp&ei=VctLX5TODOSF9PwPiJe6gAI&q=touristy+things+to+do+near+me&oq=touristy+things+to+do+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeUKgHWKgHYNoJaABwAHgAgAGTAogBkwKSAQMyLTGYAQCgAQKgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjUzPO6pMPrAhXkAp0JHYiLDiAQ4dUDCAk&uact=5"
          label="Click this"
        />
        {' '}
        and have at it.
      </span>
    </p>
    <p>SFW, I promise...&#128521;</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Be a tourist"
      content={userContent}
      timeToComplete="15 minutes"
    />
  )
}

export default connect()(Content)
