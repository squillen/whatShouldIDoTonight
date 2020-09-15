import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/GThjxIqLM4h0Y/giphy.gif"
      alt="sun setting"
    />
    <p>
      <span>
        Find
        {' '}
        <LinkTo
          href="https://www.google.com/search?source=hp&ei=Sv9TX6OGKcLysQXUzJOACg&q=where+to+watch+sunsets+near+me&oq=where+to+watch+sunsets&gs_lcp=CgZwc3ktYWIQAxgAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoOCC4QsQMQxwEQowIQkwI6CAgAELEDEIMBOg4ILhCxAxCDARDHARCjAjoLCC4QsQMQxwEQowI6BQgAELEDOggILhDHARCjAjoICC4QsQMQgwE6AgguOgcIABCxAxAKOgUILhCTAlDHBlizHWC8KGgAcAB4AYABxQKIAZsgkgEIMi4xMC45LjGYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab"
          label="some place"
        />
        {' '}
        near you to watch a sunset and enjoy. Bring some cheese, crackers, wine (&quot;if allowed&quot; - our lawyers), and whatever else you want and make a real night of it!
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  return (
    <Post
      title="Watch a sunset and have a picnic"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
