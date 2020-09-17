import { connect } from 'react-redux'
import Post from '../../../../../components/post/post'
import LinkTo from '../../../../../components/linkTo/linkTo'
import styles from '../../../../../styles/activity.module.css'
import Photo from '../../../../../components/photo/photo'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/SwDKGk3xjXghZ2g9Ty/giphy.gif"
      alt="comedian on stage"
    />
    <p>The title says it all.</p>
    <p>
      <span>
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk03My1jYXoz7I-D-4N9qaobW_HbrHA%3A1600116603233&source=hp&ei=e9dfX4qTC9DStAW4r7fABA&q=comedy+show+near+me&oq=comedy+show&gs_lcp=CgZwc3ktYWIQAxgAMgUIABCRAjIFCAAQkQIyBQgAELEDMgIIADICCAAyAggAMgQIABBDMgIIADICCAAyAggAOgQIIxAnOgoIABCxAxCDARBDOgcIABCxAxBDUJMHWP0gYKcqaAFwAHgAgAGtAogB6RWSAQcwLjMuOC4xmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab"
          label="See what&apos;s going on near you"
        />
        {' '}
       and have fun.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'comedy/on stage/comedians/comedian/comedy shows',
    pageDescription: 'Figure out comedy shows to go to with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go to a comedy show"
      content={userContent}
      timeToComplete="1.5+ hours"
    />
  )
}

export default connect()(Content)
