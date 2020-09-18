import { connect } from 'react-redux'
import LinkTo from '../../../../../components/linkTo/linkTo'
import Photo from '../../../../../components/photo/photo'
import Post from '../../../../../components/post/post'
import styles from '../../../../../styles/activity.module.css'

const getContent = () => (
  <div className={styles.activityContainer}>
    <p>Alcohol makes everything better. Until it doesn&apos;t.</p>
    <Photo
      src="https://media.giphy.com/media/j0BKyov6oX9j0AH9Tm/giphy.gif"
      alt="Man about to puke"
    />
    <p>
      <span>
        See if there are any
        {' '}
        <LinkTo
          href="https://www.google.com/search?newwindow=1&safe=off&sxsrf=ALeKk01SryWI8myEvWFtGJycdn5Uc_WUvg%3A1600115133178&source=hp&ei=vdFfX6GCCMWgtQWU1IDQBA&q=beer+garden+near+me&oq=beer+garden+&gs_lcp=CgZwc3ktYWIQARgBMgIIADICCAAyBQgAEJIDMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADoHCCMQ6gIQJzoECCMQJzoFCAAQkQI6BQgAELEDOggIABCxAxCDAVDEDljmImDvMGgBcAB4AYABywKIAd8PkgEHNC4zLjQuMZgBAKABAaoBB2d3cy13aXqwAQo&sclient=psy-ab"
          label="places near you"
        />
        and go have a reasonably responsible amount of fun.
      </span>
    </p>
    <p>If not, go get your own beers and make your own beer garden.</p>
  </div>
)

const Content = () => {
  const userContent = getContent()
  const pageInfo = {
    tags: 'beer/beer garden/beers/fun/drink/drinking/near you',
    pageDescription: 'find beer gardens near you with these helpful hints'
  }
  return (
    <Post
      pageInfo={pageInfo}
      title="Go to a beer garden"
      content={userContent}
      timeToComplete="1+ hour"
      noOfPeople="2+"
    />
  )
}

export default connect()(Content)
