import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/3o6nUYpHIdVntjCtgc/giphy.gif"
      alt="Portlandia - Nerdy tourists looking at map try to figure out where they are"
    />
    <p>You live where you do for a reason, right?</p>
    <p>So put on some knee-high socks and a painfully confused face and go explore!</p>
    <p>
      <span>
        <LinkTo
          href="https://www.google.com/search?source=hp&ei=VctLX5TODOSF9PwPiJe6gAI&q=touristy+things+to+do+near+me&oq=touristy+things+to+do+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeUKgHWKgHYNoJaABwAHgAgAGTAogBkwKSAQMyLTGYAQCgAQKgAQGqAQdnd3Mtd2l6&sclient=psy-ab&ved=0ahUKEwjUzPO6pMPrAhXkAp0JHYiLDiAQ4dUDCAk&uact=5"
          label="Ask google"
        />
        {' '}
        for touristy things to do near you.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'tourist/things to do near me/fun',
    pageDescription: 'Be a tourist in your own city'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Be a tourist"
      content={userContent}
      timeToComplete="45+ minutes"
    />
  )
}

export default connect()(Content)
