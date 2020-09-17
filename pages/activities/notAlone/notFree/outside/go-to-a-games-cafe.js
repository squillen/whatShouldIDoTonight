import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <Photo
      src="https://media.giphy.com/media/xKQJBdOPCnFJK/giphy.gif"
      alt="medieval characters playing Monopoly"
    />
    <p>Take part in the world&apos;s oldest past times.</p>
    <p>
      <span>
        See where you can play
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk027NLH3yWq7SwcsNH66D9DaokmVQg%3A1600117386261&ei=itpfX7y_D83wsAWZjpe4Ag&q=board+game+cafes+near+me&oq=board+game+cafes+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjIGCAAQFhAeOgQIABBHOgQIIxAnOgQIABBDOgUIABCxAzoHCAAQsQMQQzoFCAAQkQI6BwgAEBQQhwI6BAgAEA1QmtsLWKj-C2COgAxoAnAHeACAAWKIAbUOkgECMjaYAQCgAQGqAQdnd3Mtd2l6yAEIwAEB&sclient=psy-ab&ved=0ahUKEwi8rKDjxenrAhVNOKwKHRnHBScQ4dUDCA0&uact=5"
          label="near you"
        />
        and then cause a scene by screaming and getting overly competitive about some board games.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'board games/board game cafe/fun/activities',
    pageDescription: 'Find board games cafes near you with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go to a board game cafe"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
