import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Is a sunset ever anything less than &quot;good&quot;??</p>
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
        near you to watch and enjoy.
      </span>
    </p>
    <p>Bring:</p>
    <ul>
      <li>some cheeses</li>
      <li>crackers</li>
      <li>wine/alcohol (&quot;if allowed&quot; - our lawyers)</li>
      <li>a blanket to sit on</li>
      <li>napkins/cutlery/plates/cups</li>
      <li>a camera</li>
      <li>whatever else you can think of</li>
    </ul>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'sunset/watch/nature/outside/picnic/plan',
    pageDescription: 'Go watch a sunset near you with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Watch a sunset and have a picnic"
      content={userContent}
      timeToComplete="30+ minutes"
    />
  )
}

export default connect()(Content)
