import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>The title says it all: go beat down some little kids on the green.</p>
    <p>Is that not what you got from the title?</p>
    <p>
      <span>
        Oh, well, just check
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk01F7Db2mh8W1Ij8NQn5NLjQbsoPhw%3A1600116410902&ei=utZfX4rXNs-QtQXLhLtY&q=putt+putt+golf+near+me&oq=putt+putt+golf+near+me&gs_lcp=CgZwc3ktYWIQAzICCAAyBQgAEJIDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BAgAEEM6BwgAELEDEEM6BQgAELEDOggIABCxAxCDAToHCAAQFBCHAjoECAAQClDmqDNYq9IzYJXUM2gCcAN4AIABqwOIAe0ZkgEKMTQuMi43LjAuMZgBAKABAaoBB2d3cy13aXrIAQjAAQE&sclient=psy-ab&ved=0ahUKEwiKnJWSwunrAhVPSK0KHUvCDgsQ4dUDCA0&uact=5"
          label="this out"
        />
        {' '}
        and then get your well-adjusted ass out of here.
      </span>
    </p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'putt putt/mini golf/activities/fun/wholesome/',
    pageDescription: 'Figure out where to play mini golf near you with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go play putt putt"
      content={userContent}
      timeToComplete="45+ minutes"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
